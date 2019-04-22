<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: '1' } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
        <BaseIcon name="users">{{ event.attendees.length }}</BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  data() {
    return {
      event: {
        id: 1,
        title: 'Park Cleanup',
        time: '6:00',
        date: 'Tue May 15 2018',
        attendees: [
          { id: 'abc123', name: 'Laso' },
          { id: 'def456', name: 'Russell' }
        ]
      }
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>

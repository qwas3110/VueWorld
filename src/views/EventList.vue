<template>
  <div>
    <h1>Events Listing</h1>

    <EventCard v-for="event of events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
      .then(res => {
        this.events = res.data
      })
      .catch(() => {
        console.log('Laso is good man!')
      })
  }
}
</script>

<style></style>

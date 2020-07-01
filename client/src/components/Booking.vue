<template>
  <div class="booking">
      <h2>{{ booking.name }}</h2>
      <p>{{ booking.email }}</p>
      <p>{{ booking.selected }}</p>
  
      <button v-on:click="deleteBooking">Delete Booking</button>
  </div>
</template>

<script>
import BookingService from "../services/BookingService.js"
import { eventBus } from "../main.js"

export default {
    name: 'booking',
    props: ['booking'],
    methods: {
        deleteBooking() {
            BookingService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        }
    }
}
</script>

<style>

</style>
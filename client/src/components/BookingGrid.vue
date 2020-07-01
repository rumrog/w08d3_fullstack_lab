<template>
  <div id="bookingGrid">
      <booking v-for="booking in bookings" :booking="booking" />
  </div>
</template>

<script>
import Booking from './Booking.vue';

export default {
  name: 'booking-grid',
  components: {
    'booking': Booking
  },
  props: ['bookings']
};
</script>

<style>

</style>
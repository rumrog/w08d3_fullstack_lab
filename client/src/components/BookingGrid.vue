<template>
  <div id="bookingGrid">
      <booking v-for="booking in bookings" :key="booking" :booking="booking" />
  </div>
</template>

<script>
import Booking from './Booking.vue';

export default {
  name: 'bookings-grid',
  components: {
    'booking': Booking
  },
  props: ['bookings']
};
</script>

<style>

</style>
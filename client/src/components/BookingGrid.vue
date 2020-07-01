<template>
  <div class="grid-container">
    <!-- <div id="bookingGrid"> -->
      <booking v-for="booking in bookings" :booking="booking" />
    <!-- </div> -->
  </div>
</template>

<script>
import Booking from "./Booking.vue";

export default {
  name: "booking-grid",
  components: {
    booking: Booking
  },
  props: ["bookings"]
};
</script>

<style>
.grid-container {
  display: grid;
  grid-gap: 10px;
  grid-template: auto / auto auto auto;
  margin: 50px;
  text-align: center;
  align-items: start;
  justify-content: center;
}

.booking {
  align-self: center;
}
/* 
#bookingsGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
} */

h2 {
  padding: 0;
  margin: 0;
}
</style>
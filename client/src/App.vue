<template>
  <div id="app">
    <booking-form />
    <booking-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingForm from './components/BookingForm.vue';
import BookingGrid from './components/BookingGrid.vue';
import BookingService from './services/BookingService.js';
import {eventBus} from './main.js';

export default {
  name: 'App',
  components: {
    'booking-form': BookingForm,
    'booking-grid': BookingGrid
    },

  data() {
    return{
      bookings: []
    };
  },

  mounted(){
    this.fetchBookings();
    eventBus.$on('booking-added', booking => {
      this.bookings.push(booking);
    })

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })

    eventBus.$on('booking-updated', (updatedBooking) => {
      let index = this.bookings.findIndex(booking => booking._id === updatedBooking._id)
      this.bookings.splice(index, 1, updatedBooking)
    })


  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('./assets/hotel.png') no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  background-attachment: fixed;
  margin: 0;
}



</style>

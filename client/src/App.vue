<template>
  <div id="app">
    <booking-form />
    <booking-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingForm from './components/BookingForm.vue';
import BookingsGrid from './components/BookingGrid.vue';
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

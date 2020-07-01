<template>
  <div id="app">
  </div>
</template>

<script>
import BookingForm from './components/BookingForm';
import {eventBus} from './main.js';

export default {
  name: 'App',
  components: {
    'booking-form': BookingForm
    },
    
    mounted(){
    fetch("http://localhost:3000/api/bookings")
      .then(response => response.json())
      .then(data => console.log(data));
  },
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

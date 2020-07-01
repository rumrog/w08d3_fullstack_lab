<template>
    <form id="bookings-form" v-on:submit="addBooking">
      <h2>Add a Booking</h2>
      <div class="formWrap">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required/>
      </div>
      <div class="formWrap">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required/>
      </div>
      <div class="formWrap">
        <select v-model="selected">
          <option disabled value="">Please select one</option>
           <option>Checked in</option>
           <option>Checked out</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
    </form>
</template>

<script>
import BookingService from '@/services/BookingService.js'
import { eventBus } from '@/main.js'

export default {
  name: 'booking-form',
  data() {
    return {
      name: "",
      email: "",
      selected: ""
    }
  },
  methods: {
    addBooking(e) {
      e.preventDefault()
      const booking = {
        name: this.name,
        email: this.email,
        selected: this.selected
      }
      BookingService.postBooking(booking)
      .then(booking => eventBus.$emit('booking-added', booking))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



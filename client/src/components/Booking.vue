<template>
  <div class="booking">
      <h2>{{ booking.name }}</h2>
      <p>{{ booking.email }}</p>
        <select v-model="selected">
           <option>Checked in</option>
           <option>Checked out</option>
        </select>
      <p>{{ booking.selected }}</p>

      <button v-on:click="updateBooking">Update Booking</button>
      <button v-on:click="deleteBooking">Delete Booking</button>

  </div>
</template>

<script>
import BookingForm from "../components/BookingForm.vue";
import BookingService from "../services/BookingService.js";
import { eventBus } from "../main.js";

export default {
    name: 'booking',
    props: ['booking'],
    data() {
      return {
        selected: ""
      }
    },
    methods: {
        deleteBooking() {
            BookingService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        },
        updateBooking() { 
          this.booking.selected = this.selected;
          BookingService.updateBooking(this.booking._id, this.booking)
          .then(() => eventBus.$emit('booking-updated', this.booking))
        }
    },
    // mounted() {
    //    this.updateBooking()
    // }
}
</script>

<style>
.booking {
  
    position: relative;
    /* display: flex;
    flex-direction: column; */
    padding: 20px;
    /* align-items: center; */
    width: 250px;
    min-height: auto;
    border-radius: 20px;
    border: 2px solid rgba(0, 0, 0, 0.664);
    background-color: rgba(246, 247, 252, 0.575);
    margin: 5px;
    
}

button {
	color: #fff;
	border: none;
  border-radius: 10px;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: rgba(0, 0, 0, 0.664);
}

</style>
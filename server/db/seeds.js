use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Robert Bruce",
    email: "robert@bruce.com",
    checked_in: true
  }
]);

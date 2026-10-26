// q5.js
"use strict";

const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const seatsRegex = /^(10|[1-9])$/; // only 1 to 10

function setError(id, message) {
  document.getElementById(id + "Error").textContent = message;
  return message === "";
}

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const seats = document.getElementById("seats").value.trim();

  const okName = setError("name", nameRegex.test(name) ? "" : "Name must contain alphabets only");
  const okEmail = setError("email", emailRegex.test(email) ? "" : "Enter a valid email");
  const okSeats = setError("seats", seatsRegex.test(seats) ? "" : "Seats must be between 1 and 10");

  const ticketBox = document.getElementById("ticket");
  if (okName && okEmail && okSeats) {
    // Store booking info in an object
    const booking = { name, email, seats: Number(seats) };
    console.log("Booking:", booking);

    ticketBox.style.display = "block";
    ticketBox.innerHTML = `
      <h3>Ticket Confirmed</h3>
      <p><b>Name:</b> ${booking.name}</p>
      <p><b>Email:</b> ${booking.email}</p>
      <p><b>Seats:</b> ${booking.seats}</p>`;
  } else {
    ticketBox.style.display = "none";
  }
});
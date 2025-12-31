export default function Booking() {
function handleSubmit(e) {
e.preventDefault();
alert('Booking submitted!');
}


return (
<section id="booking" className="section">
<h2>Book Appointment</h2>
<form onSubmit={handleSubmit} className="form">
<input placeholder="Name" required />
<input type="email" placeholder="Email" required />
<input placeholder="Phone" required />
<select required>
<option value="">Select Service</option>
<option>Hair</option>
<option>Nails</option>
</select>
<input type="date" required />
<button className="btn primary">Submit</button>
</form>
</section>
);
}
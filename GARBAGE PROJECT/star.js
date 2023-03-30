const form = document.getElementById('personal-details-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const dob = document.getElementById('dob').value;
	const address = document.getElementById('address').value;

	console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDOB: ${dob}\nAddress: ${address}`);
});
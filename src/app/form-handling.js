export const submitForm = () => {
	// document.getElementById('modalForm').style.display = 'none';
	// document.getElementById('successMsg').style.display = 'block';

	// setTimeout(() => {
	// 	closeModal();
	// 	document.getElementById('modalForm').style.display = 'block';
	// 	document.getElementById('successMsg').style.display = 'none';
	// 	// reset
	// 	[
	// 		'firstName',
	// 		'lastName',
	// 		'emailInput',
	// 		'orgInput',
	// 		'serviceSelect',
	// 		'projectDesc',
	// 	].forEach((id) => (document.getElementById(id).value = ''));
	// }, 4000);

	const form = document.getElementById('modalForm');

	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		const first = document.getElementById('firstName').value.trim();
		const email = document.getElementById('emailInput').value.trim();
		const service = document.getElementById('serviceSelect').value;

		if (!first || !email || !service) {
			alert(
				'Please fill in your name, email, and select a service to continue.',
			);
			return;
		}

		const formData = new FormData(event.target);
		const jsonData = {};

		for (const [key, value] of formData.entries()) {
			jsonData[key] = value;
		}

		const backendLink = '/.netlify/functions/send-form-data';

		try {
			const res = await fetch(backendLink, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(jsonData),
			});

			if (!res.ok) {
				console.log(
					'Response is not OK. See response Object:',
					await res.json(),
				);
			} else {
				form.style.display = 'none';
				document.getElementById('successMsg').style.display = 'block';

				const data = await res.json();
				console.log(data);
			}
		} catch (error) {
			console.error(error);
		}

		console.log(jsonData);
	});
};

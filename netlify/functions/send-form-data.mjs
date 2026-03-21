const FormData = require('form-data');
const Mailgun = require('mailgun.js');

const apiKey = Netlify.env.get('MAILGUN_SECRET');
const domain = Netlify.env.get('DOMAIN');
const baseUrl = Netlify.env.get('BASE_URL');
const email = Netlify.env.get('EMAIL');

export default async (req, context) => {
	const data = await req.json();

	const {
		first_name,
		last_name,
		email_address,
		business_name,
		service_interest,
		project_description,
	} = data;

	const mg = new Mailgun(FormData).client({
		username: 'api',
		key: apiKey,
	});

	try {
		const response = await mg.messages.create(domain, {
			from: `Sulcus Analytics <no-reply@sulcusanalytics.com>`,
			to: ['sulcusanalytics@gmail.com'],
			replyTo: email,
			subject: 'Customer Service Inquiry Submission',
			text: '',
			html: `
				<h3>Hello Sulcus</h3>,

				<br>
				
				<p style="text-decoration: underline;">1 client/visitor inquiry, details below</p>

				<br>

				Customer name: ${(first_name, last_name)}, <br>
				Email Address: ${email_address}, <br>
				Business name: ${business_name}, <br>
				Service interest: ${service_interest}, <br>
				Project description: ${project_description}
			`,
		});

		if (response.status !== 200) {
			console.log(response);
		} else console.log('Message sent!');

		return new Response(
			JSON.stringify({ message: 'success', response: response }),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
	} catch (error) {
		console.log('Internal Server Error Message:', error);

		return new Response(JSON.stringify({ Error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};

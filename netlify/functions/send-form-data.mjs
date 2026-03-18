const FormData = require('form-data');
const Mailgun = require('mailgun.js');

const apiKey = Netlify.env.get('MAILGUN_SECRET');
const domain = Netlify.env.get('DOMAIN');
const baseUrl = Netlify.env.get('BASE_URL');
const email = Netlify.env.get('EMAIL');

export default async (req, context) => {
	const data = await req.json();

	// console.log(data);
	// console.log('Context:', context);
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
		console.log('hello world from inside Try...Catch');

		console.log('Domain:', domain);
		console.log('Domain:', domain);

		const response = await mg.messages.create(domain, {
			from: `Sulcus Analytics <info@${domain}>`,
			to: [email],
			subject: 'testing the email',
			text: '',
			html: `
				hello world!

				${first_name} ${last_name},
				${service_interest}

				Privacy consent: ${business_name}
			`,
		});

		if (response.ok) {
			console.log(response);
		} else console.log('Something went wrong');

		return new Response(JSON.stringify({ message: 'success' }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.log('Internal Server Error Message:', error);

		return new Response(JSON.stringify({ Error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};

export default async (request, context) => {
	const url = new URL(request.url);

	if (url.pathname === '/visual-lab') {
		/* return new Response(
			`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Redirecting...</title>
          <script>
            // alert("Visual Lab is not available now. We'll be up and running soon! Try again later");

            // Redirect after alert
            //window.location.href = "/";
          </script>
        </head>
        <body style=""></body>
      </html>
      `,
			{
				headers: {
					'Content-Type': 'text/html',
				},
			},
		);  */

		const redirectUrl = new URL(request.url);
		redirectUrl.pathname = '/';

		redirectUrl.searchParams.set('coming-soon', 'visual-lab');

		return Response.redirect(redirectUrl.toString(), 302);
	}

	return context.next();
};

export const config = {
	path: '/visual-lab',
	excludedPath: ['/*.js', '/*.css', '/*.png', '/favicon.ico'],
};

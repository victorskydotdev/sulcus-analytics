export default async (request, context) => {
	const url = new URL(request.url);

	if (url.pathname === '/virtual-lab') {
		/* return new Response(
			`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Redirecting...</title>
          <script>
            // alert("virtual Lab is not available now. We'll be up and running soon! Try again later");

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

		redirectUrl.searchParams.set('coming-soon', 'virtual-lab');

		return Response.redirect(redirectUrl.toString(), 302);
	}

	return context.next();
};

export const config = {
	path: '/virtual-lab',
	excludedPath: ['/*.js', '/*.css', '/*.png', '/favicon.ico'],
};

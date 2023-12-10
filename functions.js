addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    // Dynamically generate GitHub URL based on the request path
    const path = request.url.pathname.slice(1);  // Remove leading "/"
    const githubUrl = `https://raw.githubusercontent.com/stazzze/essence/main/${path}`;

    // Fetch the content from GitHub
    const response = await fetch(githubUrl);

    // Modify the response headers if needed
    const contentType = getContentType(path);
    const modifiedHeaders = new Headers(response.headers);
    modifiedHeaders.set('Content-Type', contentType);

    return new Response(await response.text(), {
      status: response.status,
      statusText: response.statusText,
      headers: modifiedHeaders,
    });
  } catch (error) {
    return new Response('Error fetching content', { status: 500 });
  }
}

function getContentType(path) {
  // Simple function to determine Content-Type based on file extension
  if (path.endsWith('.html')) {
    return 'text/html';
  } else if (path.endsWith('.css')) {
    return 'text/css';
  } else if (path.endsWith('.js')) {
    return 'application/javascript';
  } else {
    return 'text/plain';
  }
}

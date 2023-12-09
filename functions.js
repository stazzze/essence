addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Replace 'stazzze/essence' with your GitHub username and repository name
  const githubUrl = `https://raw.githubusercontent.com/stazzze/essence/main/index.html`;

  // Fetch the content of index.html from GitHub
  const response = await fetch(githubUrl);

  // Modify the response headers if needed
  const modifiedHeaders = new Headers(response.headers);
  modifiedHeaders.set('Content-Type', 'text/html');

  return new Response(await response.text(), {
    status: response.status,
    statusText: response.statusText,
    headers: modifiedHeaders,
  });
}

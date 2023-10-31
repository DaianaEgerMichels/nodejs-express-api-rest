import http from 'http';

// Port standard
const PORT = 3000;

const routes = {
  "/": "Node.js course - hello world :)",
  "/books": "Welcome to the book store",
  "/authors": "Authors",
}

// Create a local server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(routes[req.url]);
});

server.listen(PORT, () => {
  console.log('Server running in port 3000');
});

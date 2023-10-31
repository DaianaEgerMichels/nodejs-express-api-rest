import http from 'http';

// Port standard
const PORT = 3000;

// create a local server

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node.js course , hello world :)');
});

server.listen(PORT, () => {
  console.log('Server running in port 3000');
});

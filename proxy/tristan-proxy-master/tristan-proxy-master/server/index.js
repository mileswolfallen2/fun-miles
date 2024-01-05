const express = require('express');
const path = require('path');
const { createProxyMiddleware }= require('http-proxy-middleware');
const app = express();
const PORT = 3030;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use('/hostels/:hostel_id', express.static(path.join(__dirname, '../public')));

// API reroutes

// Image carousel service
app.use('/api/hostels/:hostel_id/images', createProxyMiddleware({ target: 'http://localhost:3007', changeOrigin: true }));
// availability service
app.use('/api/hostel/:hostelId/rooms', createProxyMiddleware({ target: 'http://localhost:3009', changeOrigin: true }));
// description map rules service
app.use('/house/:id/hostel', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/house/:id/description', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/house/:id/rules', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/house/:id/address', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
// reviews service
app.use('/api/reviews', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));


app.listen(PORT, () => console.log('Proxy Server listening on port ', PORT));
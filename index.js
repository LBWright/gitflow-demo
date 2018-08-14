const express = require('express');

const server = express();

console.log('some stuff');

server.listen(8000, () => {
  console.log('listening');
});

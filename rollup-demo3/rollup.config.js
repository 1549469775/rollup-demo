const isPord = process.env.NODE_ENV == 'production';

const input = 'main.js';
const format = 'cjs';
const dest = './dist/dist.js';


module.exports = {
  input,
  format,
  dest
}
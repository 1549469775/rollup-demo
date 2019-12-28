module.exports = {
  input: 'main.js',
  output: [{
      file: './dist/dist.js',
      format: 'cjs'
    },
    {
      file: './dist/dist2.js',
      format: 'iife',
      name: 'MyBundle'
    }
  ]
}
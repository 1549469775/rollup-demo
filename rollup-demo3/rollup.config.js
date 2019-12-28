// // 单个文件
// module.exports = {
//   // 表示打包的入口文件
//   input: 'main.js',
//   // 表示输出文件
//   output: {
//     file: './dist/dist.js',
//     format: 'cjs'
//   }
// }

// // 多个文件
// module.exports = [{
//   input: 'main.js',
//   output: {
//     file: './dist/dist.js',
//     format: 'cjs'
//   }
// }, {
//   input: 'main2.js',
//   output: {
//     file: './dist/dist2.js',
//     format: 'iife',
//     name: 'MyBundle'
//   }
// }]


// 多个文件
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
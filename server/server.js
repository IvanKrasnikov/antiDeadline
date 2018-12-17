const path = require("path");
const express = require("express");

const app = express();
const sourceDir = path.resolve(__dirname, "../src");

app.use(express.static(sourceDir, { maxage: 86400000 }));

console.log("sourceDir", sourceDir);


// const { createCanvas, loadImage } = require('canvas')
// const canvas = createCanvas(200, 200)
// const ctx = canvas.getContext('2d')

// // Write "Awesome!"
// ctx.font = '30px Impact'
// ctx.rotate(0.1)
// ctx.fillText('Awesome!', 50, 100)

// // Draw line under text
// var text = ctx.measureText('Awesome!')
// ctx.strokeStyle = 'rgba(0,0,0,0.5)'
// ctx.beginPath()
// ctx.lineTo(50, 102)
// ctx.lineTo(50 + text.width, 102)
// ctx.stroke()

// // Draw cat with lime helmet
// loadImage('examples/images/lime-cat.jpg').then((image) => {
//   ctx.drawImage(image, 50, 0, 70, 70)

//   console.log('<img src="' + canvas.toDataURL() + '" />')
// })

// app.get('/', (req, res) => {
//     res.send('Hello Express')
// });





app.listen(process.env.PORT || 2018)

const yargs = require('yargs')
const child = require('child_process')
// comandos por linea
/*

const user = 'Naxo'
const pass = 123
const argv = yargs
    .command(

        'adulto',
        'Comando para acceder al Área 51', {
            
            edad: {
                describe: 'edad user',
                demand: true,
                alias: 'e',
            }
        },
        (args) => {
        
            args.edad > number(18)  ? console.log("Mayor") : console.log("Menor")
        }
    )
    .help().argv
*/
const Jimp = require('jimp')
const http = require('http')
const fs = require('fs')
// foto
/*
http
    .createServer((req, res) => {
    
        Jimp.read('https://miviaje.com/wp-content/uploads/2016/05/shutterstock_337174700.jpg', (err, imagen) => {
            
            imagen
                .resize(2500, Jimp.AUTO)
                .grayscale()
                .quality(60)
                .writeAsync('img.png')
                .then(() => {
                
                    fs.readFile('img.png', (err, Imagen) => {
                
                        res.writeHead(200, {
                            'Content-Type': 'image/jpeg'
                        })
                        res.end(Imagen)
                })
            })
        })
    })
    .listen(3000, () => console.log('Server on'))
*/

// dsaber pdi
//http.createServer((req, res) => {})
  //  .listen(3000,
    //    () => console.log('Servidor corriendo bajo el PID', process.pid))


/*
http
.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
            })
            res.end(`
    <p> Desafio <b>LATAM</b> </p>
    `)
})
.listen(3000, () => console.log('Servidor encendido'))

*/

http
    .createServer((req, res) => {
        
        if (req.url == '/') {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            fs.readFile('index.html', 'utf8', (err, html) => {
                res.end(html)
            })
        }
        if (req.url == '/estilos') {
            res.writeHead(200, {
                'Content-Type': 'text/css'
            })
            fs.readFile('estilos.css', (err, css) => {
                res.end(css)
            })
        }
    })
    .listen(3000, () => console.log('Servidor encendido'))

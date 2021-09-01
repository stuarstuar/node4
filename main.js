const yargs = require('yargs')
const http = require('http')
const fs = require('fs')


const pass = 123

const argv = yargs
    .command(

        'levantar',
        'Comando para levantar servidor', {
            
            key: {
                describe: 'clave',
                demand: true,
                alias: 'e',
            }
        },
        (args) => {
        
            args.key == pass  ? 
            http
                .createServer((req, res) => {

                        if (req.url == '/home') {
                            res.writeHead(200, {
                                'Content-Type': 'text/html'
                            })
                            fs.readFile('main.html', 'utf8', (err, html) => {
                                res.end(html)
                            })
                        }
                        if (req.url == '/estilos') {
                            res.writeHead(200, {
                                'Content-Type': 'text/css'
                            })
                            fs.readFile('style.css', (err, css) => {
                                res.end(css)
                            })
        }
    })
    .listen(3000, () => console.log('Servidor encendido'))
            : console.log("Nope")
        }
    )
    .help().argv

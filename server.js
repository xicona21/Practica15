// Se importa el módulo express
const express = require('express');
// Se crea una instancia de la aplicación express
let app = express();
// Se define el puerto de escucha del servidor
let PORT = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

// Se indica que se utilizará la codificación "urlencoded" para procesar las solicitudes del cliente
app.use(express.urlencoded({ extended: false }));

// Se configura el motor de plantillas "ejs"
app.set('view engine', 'ejs');

// Se define la respuesta que se enviará al cliente cuando visite la página principal
app.get('/', (req, res) => {
    res.send('<html><head><title>Home</title></head><body><h1>Bienvenido al sistema de alumnos</h1><p>Por favor, visita la siguiente página para agregar un estudiante:</p><a href="/student">Agregar alumno</a></body></html>');
});

// Se define la respuesta que se enviará al cliente cuando visite la página de agregar alumno
app.get('/student', (req, res) => {
    let t=req.params.id;
    res.render('student');
});

// Se define la respuesta que se enviará al cliente 
app.post('/addStudent', (req, res) => {
    res.render('displayData', { 
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre,
    });
});

// Se inicia el servidor web
app.listen(PORT);
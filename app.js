const express = require('express');
const app = express(); 
const mysql = require('sql')
const conexiondata = require('./config/conexiondata')
const bodyParser = require('body-parser')

// Middleware para analizar los datos del formulario html 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(4000, ()=>{
    console.log("server on")
})

app.set('view engine', 'ejs');
// creamos una ruta a la carpeta vistas ejs
app.set('views', 'views');
// creamos una ruta paaraa los estilos
app.use(express.static('public'));
app.use('/statics', express.static('statics'));

app.get('/' , (req, res)=>{
    const mensaje = "";
    res.render("index", {mensaje})
})


// conexion a la base de datos
conexiondata.connect(err=>{
    if(err){
        console.log("error en la base de datos ", err)
    }else{
        console.log("basedata on")
    }
})

// guardar datos
app.post('/reserva', (req, res) => {
    const user = req.body.nombre;
    const date = req.body.fecha;
    const number = req.body.numero;

    if(!user, !date, !number){
        const mensaje = "ingrese todos los datos";
        console.log(mensaje)
        res.render('index', {mensaje})
    }else{
        var sql = "INSERT INTO reserva (usuario, fecha, numero) VALUES (?, ?, ?)";
        var values = [user, date, number];
        conexiondata.query(sql, values, (err, result) => {
            if (err) {
                console.log("se produjo un error al ingresar los datos",err);
                res.render('index');
            } else {
                const mensaje = "los datos fueron ingresados correctamente";
                console.log(mensaje);
                res.render('index', {mensaje});
            }
        });
    }
});

const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

const { mongoose } = require ('./database')

//Sección de configs
app.set('port', process.env.PORT || 3000);

//Middlewares, donde ejecutamos funciones antes que lleguen a las rutas.
app.use(morgan('dev'));
app.use(express.json());

//Rutas

app.use('/api/tasks', require('./routes/task.routes'));

// Archivos estaticos (html,css,js)

app.use(express.static(path.join(__dirname, 'public')))
//Empezando el servidor

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

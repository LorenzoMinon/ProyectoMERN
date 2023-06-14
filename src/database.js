const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:admin@clusterpruebalug.yfwxcs3.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('Conexión exitosa a la base de datos'))
    .catch(errr => console.error(err));

module.exports = mongoose;
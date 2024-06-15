const express = require('./fullstakc-API/node_modules/express');
// if using mongodb instead of mockdata use have to enable this : const mongoose = require('./fullstakc-API/node_modules/mongoose');
const bodyParser = require('./fullstakc-API/node_modules/body-parser');
const swaggerJsDoc = require('./fullstakc-API/node_modules/swagger-jsdoc');
const swaggerUi = require('./fullstakc-API/node_modules/swagger-ui-express');
const fs = require('fs');
const path = require('path')

const app = express();
const port = 3030;

// middleware
app.use(bodyParser.json());

// MongoDB connection
// enable for mongoDB mongoose.connect('mongodb://localhost:27017/fullstakcDB', { useNewUrlParser: true, useUnifiedTopology: true });


// swagger setup 

const swaggerOption = {
    swaggerDefinition: {
        info: {
            title: 'Fullstack API',
            description: 'API for file explorer ,coding space, profile stats , accounts and more ',
            contact: {
                name:'Zeldoux'
            },
            Servers:['http://localhost:3030']
        }
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOption);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// read mock data
const mockDataPath = path.join(__dirname,'./mockdata.json');
let mockData = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));


// Routes
app.get('/files', (req, res) => {
    res.json(mockData.files);
  });
  
  app.get('/profile', (req, res) => {
    res.json(mockData.profiles);
  });

// routes for mongoDB //
/*const filesRoute = require('./routes/files');
const codingRoute = require('./routes/coding');
const profileRoute = require('./routes/profile');
console.log('Files Route:', filesRoute);

app.use('/files', filesRoute);
app.use('/coding', codingRoute);
app.use('/profile', profileRoute);*/

// start API server
app.listen(port,() => {
    console.log(`server running at http://localhost:${port}`);

});

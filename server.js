// 
const express = require('express');

// mongodb 
const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');

const routes = require('./routes/ToDoRoutes');



const app = express();


app.use(express.json());
app.use(cors());

// using the router
app.use(routes);

// connecting to database
mongoose
.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(() => console.log('Mongodb Connected...'))
.catch((err) => console.error(err));

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('frontend/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 4033;

app.listen(PORT, () => {
    console.log('app listening on port 5000')
})
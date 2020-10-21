const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({extended: false}));


app.get('/', (req, res) => res.send('Api running'));

// app.use('/movies', require('./routes/movies'));
// app.use('/movie', require('./routes/movie'));
app.use('/register', require('./routes/register'));
app.use('/cart', require('./routes/cart'));
app.use('/login', require('./routes/login'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

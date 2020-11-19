const express = require('express');
const connectDB = require('./config/db');
const path = require('path')



const app = express();

connectDB();



app.use(express.json({extended: false}));




// app.use('/movies', require('./routes/movies'));
// app.use('/movie', require('./routes/movie'));
app.use('/register', require('./routes/register'));
app.use('/cart', require('./routes/cart'));
app.use('/login', require('./routes/login'));
app.use('/profile', require('./routes/profile'));
app.use('/wishlist', require('./routes/wishlist'))

// serve static assetes in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

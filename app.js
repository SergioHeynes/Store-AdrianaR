const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
    console.log('Server started on Port 3000');
});


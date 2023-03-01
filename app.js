// require packages used in the project
const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');

// handlebars setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// setting static files
app.use(express.static('public'));

// routes setting
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio');
})

app.get('/contact', (req, res) => {
  res.render('contact');
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is now running at http://localhost:${port}`)
})

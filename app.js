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
  const home_path = (req.path === "/") || false;
  res.render('index', { home: home_path })
})

app.get('/about', (req, res) => {
  const about_path = (req.path === "/about") || false;
  res.render('about', { about: about_path });
})

app.get('/portfolio', (req, res) => {
  const portfolio_path = (req.path === "/portfolio") || false;
  res.render('portfolio', { portfolio: portfolio_path });
})

app.get('/contact', (req, res) => {
  const contact_path = (req.path === "/contact") || false;
  res.render('contact', { contact: contact_path });
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is now running at http://localhost:${port}`)
})

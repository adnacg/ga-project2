// MODULES
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const sha256 = require('js-sha256');

const db = require("./db");
// load the router module in the app
const user = require('./routes/user')(db);
const post = require('./routes/post')(db);
const request = require('./routes/request')(db);

// MIDDLEWARE
// configurations and set up
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true }
}));
app.use(cookieParser());
app.use(function(req, res, next) {
  if (req.cookies.user_id) {
    res.locals.user_id = req.cookies.user_id;
  }
  next();
});

app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = req.flash();
  next();
});

// set react to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');


// ROUTES
// use the user router
app.use('/user', user);
// use the post router
app.use('/post', post);
// use the request router
app.use('/request', request);

// ROOT HANDLER
app.get('/', (request, response) => {
  response.render('home');
});

// heroku, ASK

// if time, passport
// if time, add return to previous page buttons
// if time, set instruments and genre logic
// if time, set repost expired posts logic
// if time, display myrequest desc, add delete btn for accepted requests
// if time, NO request for own post



app.listen(3000, () => console.log('~~~ Time To Jam Away ~~~'));
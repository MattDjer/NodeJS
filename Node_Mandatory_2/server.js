const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {port, mongoURI} = require('./config') 
const transactionsRoutes = require('./routes/transactions')
const purchaseSchema = require('./routes/purchase')
const authRoutes = require('./routes/auth')
const path = require('path')
const User = require('./models/User')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
//mail imports
require('dotenv').config();
const { log } = console;

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

mongoose.connect(mongoURI, {
    useNewUrLParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    }).then(() => console.log('MongoDb database is connected'))
      .catch((err) => console.log(err))


app.use(session({
  secret: 'shhhhhhhhhhhhhhht',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: mongoURI, // TODO CREATE MONGODB server
  })
}))

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/transactions', transactionsRoutes)
app.use('/api/purchase', purchaseSchema)
app.use('/api/auth', authRoutes)

                               //mail settings//
// Data parsing
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());


/*
// email, subject, text
app.post('/email', (req, res) => {
  const { subject, email, text } = req.body;
  log('Data: ', req.body);

  sendMail(email, subject, text, function(err, data) {
      if (err) {
          log('ERROR: ', err);
          return res.status(500).json({ message: err.message || 'Internal Error' });
      }
      log('Email sent!!!');
      return res.json({ message: 'Email sent!!!!!' });
  });
});
*/

                               // DONE // 

app.listen(port, () => console.log("Express is running at port " + port))
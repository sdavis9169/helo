const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const controller = require('./server/controller')


require('dotenv').config();

const { PORT, CONNECTION_STRING } = process.env

const app = express();

massive(CONNECTION_STRING)
.then((dbInstance) => {
    app.set('db', dbInstance)
    console.log(`Database is connected`)
})

app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(cors());

app.post('/api/login', controller.loginUser)
app.post('/api/register', controller.registerUser)
app.get('/api/posts', controller.getPosts)
app.get('/api/post/:id', controller.getSinglePost)
app.post('/api/newpost', controller.newPost)
app.post('/api/auth/logout', (req, res, next)=> req.session.destroy)
app.get('/api/auth/me', controller.userInfo)



const port = PORT || 7777

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})
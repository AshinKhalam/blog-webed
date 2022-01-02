const { ALPN_ENABLED } = require('constants');
const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = 3000;

const app = express();

//server setup

app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://aravindpk:test123@cluster0.6cobp.mongodb.net/cms?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {

        app.listen(port);
        console.log('server running at  ', port);

    })
    .catch(err => {
        console.log(err);
    })




// morgan
app.use(morgan('dev'));
//static
app.use(express.static('public'));


//home page  // all blogs  ....................................


app.get('/', (req, res) => {


    let blogarray = [

        { heading: 'headingone', body: 'body one', author: 'me' },
        { heading: 'headingtttne', body: 'body one', author: 'me' },
        { heading: 'headintttgone', body: 'body one', author: 'me' },
        { heading: 'headtttingone', body: 'body one', author: 'me' },
        { heading: 'headtttingone', body: 'body one', author: 'me' },


    ];



    res.render('index', { title: 'Home', blogs: blogarray });

});


// single blog ................................................

app.get('/blog', (req, res) => {

    res.render('blog', { title: 'Blog' });
});




// editor page.................................................


app.get('/editor', (req, res) => {



    let blogarray = [

        { heading: 'headingone', body: 'body one', author: 'me' },
        { heading: 'headingtttne', body: 'body one', author: 'me' },
        { heading: 'headintttgone', body: 'body one', author: 'me' },
        { heading: 'headtttingone', body: 'body one', author: 'me' },
        { heading: 'headtttingone', body: 'body one', author: 'me' },
    ]



    res.render('editor', { title: 'Editor', blogs: blogarray });
});


//create blog


app.get('/create', (req, res) => {

    res.render('create', { title: 'Create' });
});





// test blog ................................................


app.get('/test', (req, res) => {

    const blog = {
        heading: 'heding1',
        body: 'something neww',
        author: 'name',
    }

    res.render('test', { title: 'test', blog: blog });


});






//middleware

app.use((req, res) => {
    res.send('404 not found , oops!')
});








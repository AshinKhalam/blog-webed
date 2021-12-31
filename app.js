const { ALPN_ENABLED } = require('constants');
const { response } = require('express');
const express = require('express');

const morgan = require('morgan');

const port = 3000;

const app = express();

//server setup

app.set('view engine' , 'ejs');


app.listen(port);
console.log('server running at  ', port);
app.use(morgan('dev'));



//home page  // all blogs  ....................................
app.get('/', (req, res) => {
    res.render('index' , { title:'Home' });

});


// single blog ................................................

app.get('/blog', (req, res) => {

    res.render('blog' , { title:'Blog' });
});




// editor page.................................................


app.get('/editor', (req, res) => {

    res.render('editor' , { title:'Editor' });
});




// test blog ................................................


app.get('/test', (req, res) => {

    const blog ={
        heading:'heding1',
        body:'something neww',
        author: 'name',
    }

    res.render('test' , { title:'test' , blog:blog });


});






//middleware

app.use((req,res) =>{
    res.send('404 not found , oops!')
});








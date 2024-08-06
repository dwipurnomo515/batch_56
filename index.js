const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", "views");


app.use("/assets", express.static("assets"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const blogs = [];


app.get('/', (req, res) => {
    res.render('index');
});
app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/blog', (req, res) => {
    res.render('blog', {
        data: blogs
    });
});
app.post('/blog', (req, res) => {

    const newBlog = {
        id: blogs.length + 1,
        title: req.body.title,
        content: req.body.content,
        start: req.body.start,
        end: req.body.end,
        author: 'Dwi Purnomo'
    };

    blogs.push(newBlog);

    res.redirect('/blog')

})
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/testimonials', (req, res) => {
    res.render('testimonials');
});
app.get('/blog-detail/:id', (req, res) => {
    const id = req.params.id;
    const blog = blogs.find(blog => blog.id == id)
    res.render('blog-detail', {
        data: blog
    });
});
app.get('/edit-blog/:id', (req, res) => {
    const id = req.params.id;
    const blog = blogs.find(blog => blog.id == id)
    res.render('edit-blog', {
        data: blog
    });
});

app.post('/edit-blog/:id', (req, res) => {
    const id = req.params.id;
    const newBlog = {
        id: blogs.length + 1,
        title: req.body.title,
        content: req.body.content,
        start: req.body.start,
        end: req.body.end,
        author: 'Dwi Purnomo'
    };
    const index = blogs.findIndex((blog) => blog.id == id);

    blogs[index] = newBlog;

    res.redirect("/blog");
});

app.get('/deleteblog/:id', (req, res) => {
    const id = req.params.blog_id;

    const index = blogs.findIndex((blog) => blog.id == id);

    blogs.splice(index, 1);

    res.redirect("/blog");
});


app.listen(port, () => {
    console.log('Exaample app listening at http://localhost:${port}');
});
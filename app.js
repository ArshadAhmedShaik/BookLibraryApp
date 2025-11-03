const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const data = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    console.log("Request received at root!");
    res.redirect("/books");
});

app.get("/books", (req, res) => {
    console.log("request recieved at books route");
    console.log(data);
    let data1 = data;
    const { genre } = req.query;

    if (genre) {
        data1 = data.filter((b) => {
            return b.genre.toLowerCase() === genre.toLowerCase();
        });
    }

    res.render("books", { data1 });
   
});

app.get("/books/:id", (req, res) => {
    const { id } = req.params;
    const book = data.find(b => b.id === parseInt(id)); 

    if (book) {
        res.render("bookdetails", { book }); 
    } else {
        res.status(404).send("Book not found!");
    }
});

app.use((req, res) => {
    res.status(404).send("Page not found!");
});

app.listen(port, () => {
    console.log(`The app is listening ${port}`);
})



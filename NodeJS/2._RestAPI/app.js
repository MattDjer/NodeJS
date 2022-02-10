// import Express
const express = require("express")
const app = express()

// alternative way of doing it
// const app = require("express")();

app.use(express.json())


let db = {
    "movies":[
      {"id":"1", "movie":"Batman"},
      {"id":"2", "movie":"Spiderman"},
      {"id":"3", "movie":"Superman"},
    ]
    }


app.get("/", (req, res) => {
    const welcome = "Welcome to the Application <br> Use GET /movies to get all movies <br> Use GET /movie/id to get a movie by ID <br> Use POST /movie <Movie> to add a new movie <br> Use DELETE /movie/id to remove movie <br> Use PUT /movie/id <Movie> to modify movie"
    res.send(welcome)
})

app.get("/movies", (req, res) => {
    res.send(db)
})

app.get("movie/:uid", (req, res) => {
    db.movies.forEach((movie) => {if (movie.id === req.params.uid) {
        res.send(movie)
    }})
})

app.post("/movie", (req, res) => {
    let lastID

    db.movies.forEach((movie) => {lastID = movie.id })
    const newID = parseInt(lastID) + 1
    db.movies.id = newID
    db.movies.push({"id": newID.toString(), "movie": req.body})

    res.send(db)
});

app.put("/movie/:uid", (req, res) => {
    
    const movieToUpdate = req.body
    db.movies.forEach((movie) => {if (movie.id === req.params.uid) {
        movie.movie = movieToUpdate
    }})

    db.movies.forEach((movie) => { console.log(movie) })

    res.send(db)
})

app.delete("/movie/:uid", (req, res) => {
    
    db = db.movies.filter(movie => movie.id !== req.params.uid);
    
    res.send(db);
})



app.listen(8080);

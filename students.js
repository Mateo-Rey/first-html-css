import express from "express"
import cors from "cors"

const app = express()
const port = 4000


app.use(cors())
app.use(express.json())


let students =["bob","sam","lily","grace","jim"]


app.get("/movies/:movieTitle", (req, res) => {
    let output = "<html><body>"
    const movieTitle = req.params.movieTitle

    for (let i = 0; i < students.length; i++) {
    output +='<li><input type="checkbox">' + students[i] + '</li>'
    }
    output = output +"</body></html>"

    
    res.send(output)
})

app.listen(port, ()=> {
    console.log('working')
})


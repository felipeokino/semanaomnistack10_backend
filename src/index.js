const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3333
const routes = require("./routes");
const cors = require('cors')
mongoose.connect('mongodb+srv://felipeokino:felipeokino@cluster0-zxjw5.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(port, () => console.log(`App running on port 3000`))
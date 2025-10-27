const express = require("express")
const app = express()
const path = require("path")
const hbs = require('hbs');
const env = require("dotenv").config()
const connectDb = require("./config/db")
const userRouter = require("./routes/userRouter")
connectDb()


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.set("view engine","hbs")
app.set('views', path.join(__dirname, 'views'));


hbs.registerPartials(path.join(__dirname, 'views/partials/user'));


app.use(express.static(path.join(__dirname,"public")))

app.use("/",userRouter)


app.listen(process.env.PORT , ()=> {console.log(`server running on `);
})
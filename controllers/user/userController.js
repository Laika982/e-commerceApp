


const loadHomepage = (req,res)=>{

    try {
        res.render("user/home")
    } catch (error) {
        console.log("home page not fount");
        res.status(500).send("server error")
    }
}

const pageNotFount = (req,res)=>{
    try {
        res.render("user/pageNotFound")
    } catch (error) {
        res.redirect("/pageNotFound")
    }
}

module.exports = {
    loadHomepage,
    pageNotFount
}
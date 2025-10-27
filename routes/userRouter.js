const express = require("express")
const router = express.Router()
const userContoller =require("../controllers/user/userController") 


router.get("/",userContoller.loadHomepage)
router.get("/pageNotFound",userContoller.pageNotFount)


module.exports = router
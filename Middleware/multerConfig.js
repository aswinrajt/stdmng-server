const multer=require('multer')


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')

    },
    filename:(req,file,cb)=>{
        cb(null,`Image-${Date.now()}-${file.originalname}`)
    }
})


const fileFilter=(req,file,cb)=>{
    if(file.mimetype=='image/jpg'||file.mimetype=='image/png'||file.mimetype=='image/jpeg'){
        cb(null,true)
    }
    else{
        cb(null,false)
        cb(new Error("Invalid file format ....File should be in jpg,png,jpeg format!!"))
    }
}


module.exports=multer({
    storage,fileFilter
})
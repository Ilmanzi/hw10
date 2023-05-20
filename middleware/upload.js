const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const diskStorage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,path.join(__dirname, '/upload'));
    },
    filename: function (req,file,cb) {
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    },
});

app.post(
    "/upload",
    multer({ storage:diskStorage }).single("photo"),
    (req,res) => {
        const file = req.file.path;
        console.log(file);
        if (!file) {
            res.status(400).send({
                status : false,
                data: "No file is selected"
            });
        }
        // contacts[req.query.index].photo = req.file.path;
        res.send(file);
    }
)

app.listen(3000, () => {
    console.log('Server is running on PORT : 3000')
});
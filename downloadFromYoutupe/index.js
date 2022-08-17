
const express = require('express');
const app = express();
const ytdl = require('ytdl-core');
const fs = require('fs')
var router = express.Router();
router.get('/', function (req, res, next) {
    console.log('rputer calld')
    let url = "https://www.youtube.com/watch?v=kEpOv49P6Yg";
    ytdl(url).pipe(fs.createWriteStream('./videos/video.webm'));
    res.end();
})
app.use(router);
app.listen(3000, () => {
    console.log('app listingin on 2222')
})
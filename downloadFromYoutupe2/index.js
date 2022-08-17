const ytdl = require('ytdl-core');
const fs = require('fs')


let url = "https://youtu.be/Q_HoGYhk4x8";
let name ="video.webm"
ytdl(url).pipe(fs.createWriteStream(`./videos/${name}`));

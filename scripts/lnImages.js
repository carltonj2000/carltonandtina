#!/usr/bin/env node
const { exec } = require("child_process");

const images = [
  "HDR9680.png",
  "HDR9704.png",
  "IMG_5376.JPG",
  "IMG_5391.JPG",
  "IMG_5518.JPG",
  "IMG_5524.JPG",
  "IMG_5605.JPG",
  "IMG_5748.JPG",
  "IMG_8558.JPG",
  "IMG_8998.JPG",
  "IMG_9027.JPG",
  "IMG_9057.JPG",
  "IMG_9219.JPG",
  "IMG_9468.JPG",
  "IMG_9483.JPG",
  "IMG_9557.JPG",
  "IMG_9563.JPG"
];

const srcSelect = 1;
const src = [
  "/home/carltonj2000/cj/cj_pics/pics2017/tina/tina10invites/resized/size_1920x1280px/",
  "/home/carltonj2000/cj/cj_pics/pics2017/tina/tina10invites/resized/size_405x270px/"
][srcSelect];

const dstSelect = 1;
const dst = ["./static/", "./static/small/"][dstSelect];

for (var i = 0; i < images.length; i++) {
  cmd = `ln -s ${src}${images[i]} ${dst}`;
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    stdout && console.log(`stdout: ${stdout}`);
    stderr && console.log(`stderr: ${stderr}`);
  });
}

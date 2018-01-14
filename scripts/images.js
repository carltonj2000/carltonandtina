#!/usr/bin/env node
exports.images = [
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
  // "IMG_9468-crop.JPG", // optimize to 800x400 not 400x300
  "IMG_9483.JPG",
  "IMG_9557.JPG",
  "IMG_9563.JPG"
];
exports.images2 = ["IMG_0976.JPG", "IMG_0980.JPG"];

exports.srcs = [
  "/home/carltonj2000/cj/cj_pics/pics2017/tina/tina10invites/",
  "/home/carltonj2000/cj/cj_pics/pics2017/tina/tina10invites/resized/size_1920x1280px/",
  "/home/carltonj2000/cj/cj_pics/pics2017/tina/tina10invites/resized/size_405x270px/",
  "/home/carltonj2000/cj/mounts/local/cj1Tera3/carltonData/cj_pics/pics2018/wedding/wedprebathroom/"
];

exports.dsts = [
  "./static/",
  "./static/small/",
  "./static/optimized/",
  "/home/carltonj2000/cj/cj_pics/pics2017/tina/tina10invites/optimized/",
  "/home/carltonj2000/cj/mounts/local/cj1Tera3/carltonData/cj_pics/pics2018/wedding/wedprebathroom/optimized/",
  "./static/footer/optimized/"
];

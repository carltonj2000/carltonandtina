#!/usr/bin/env node

// image optimizations from
// https://developers.google.com/speed/docs/insights/OptimizeImages

const { exec } = require("child_process");
const { images2, srcs, dsts } = require("./images");
const images = images2;

const srcNoOpt = srcs[3];
const optDst = dsts[4];
const lnDst = dsts[5];

const size = ["400x300", "100x75"][1];

images.forEach(file => {
  console.log(file);
  const fin = srcNoOpt + file;
  const fopt = optDst + file;
  const fln = lnDst + file;
  let cmd1 = file.toLowerCase().includes("png")
    ? `convert ${fin} -strip -resize ${size} -alpha Remove ${fopt}`
    : `convert ${fin} -sampling-factor 4:2:0 -strip -resize ${size} -quality 85 -interlace JPEG -colorspace sRGB ${fopt}`;
  const cmd2 = `ln -s ${fopt} ${fln}`;
  [cmd1].forEach(cmd => {
    console.log(cmd);
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      stdout && console.log(`stdout: ${stdout}`);
      stderr && console.log(`stderr: ${stderr}`);
    });
  });
});

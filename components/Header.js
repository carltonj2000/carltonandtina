import Link from "next/link";

import Navigation from "./Navigation";
import Message from "./Message";
import { config } from "../utils/config.js";

const { basedir } = config;

export default ({ active }) => (
  <div>
    <Navigation active={active} />
    <Message />
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: url("${basedir}static/optimized/IMG_9468-crop.JPG");
        height: 400px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        width: 100%;
      }
      @media screen and (max-width: 600px) {
        div {
          height: 300px;
        }
      }
      @media screen and (max-width: 450px) {
        div {
          height: 200px;
        }
      }
    `}</style>
  </div>
);

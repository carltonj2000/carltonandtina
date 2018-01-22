import { config } from "../utils/config.js";

const { basedir } = config;
export default () => (
  <div>
    <img src={`${basedir}static/footer/optimized/IMG_0976.JPG`} alt="rings 1" />
    <p>Copyright &copy; Carlton &amp; Tina Joseph</p>
    <img src={`${basedir}static/footer/optimized/IMG_0980.JPG`} alt="rings 2" />
    <style jsx>{`
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: aqua;
        color: black;
        opacity: 0.5;
        margin-top: 15px;
      }
    `}</style>
  </div>
);

import Layout from "../components/Layout.js";

export default () => (
  <Layout active="about">
    <div>
      <h3>
        <a href="https://tinaandcarlton.com/flamingo/">Flamingo Photo Ideas</a>
      </h3>
      <br />
      <h3>
        <a href="https://tinaandcarlton.com/hairandmakeup/">
          Tina's Hair And Makeup Options
        </a>
      </h3>
      <br />
      <h3>
        <a href="https://tinaandcarlton.com/photographer/">
          Lake Las Vegas Photo Suggestions
        </a>
      </h3>
      <br />
      <h3>
        <a href="https://tinaandcarlton.com/photolist/">
          Lake Las Vegas Photo Suggestions
        </a>
      </h3>
    </div>
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        background: aqua;
        justify-content: center;
      }
    `}</style>
  </Layout>
);

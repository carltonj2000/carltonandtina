import Layout from "../components/Layout.js";

export default () => (
  <Layout active="about">
    <div>
      <h3>This website contains wedding detail for Tina and Carlton.</h3>
    </div>
    <style jsx>{`
      div {
        display: flex;
        background: aqua;
        justify-content: center;
      }
    `}</style>
  </Layout>
);

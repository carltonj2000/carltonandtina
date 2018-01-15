import Layout from "../components/Layout.js";

export default () => (
  <Layout active="about">
    <div>
      <h3>
        <a href="https://goo.gl/maps/LFnjK4V283R2">
          8572 Foundry Branch Lane, Las Vegas NV, 89113
        </a>
      </h3>
      <p>( Gate code #7017 )</p>
    </div>
    <style jsx>{`
      div {
        display: flex;
        background: aqua;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </Layout>
);

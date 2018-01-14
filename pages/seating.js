import Layout from "../components/Layout.js";
import SeatingChart from "../components/SeatingChart.js";

export default () => (
  <Layout active="seating">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "lightyellow"
      }}
    >
      <SeatingChart />
    </div>
  </Layout>
);

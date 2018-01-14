import Link from "next/link";
import Layout from "../components/Layout.js";

export default props => (
  <Layout active="support">
    <div className="contianer">
      <div className="date">
        <h3>With a little help from our friends</h3>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Person</th>
            <th>Support</th>
          </tr>
          <tr>
            <td>Jeffrey</td>
            <td>Rings - Best Man</td>
          </tr>
          <tr>
            <td>Sabrina</td>
            <td>Flower Gril</td>
          </tr>
          <tr>
            <td>Debbie &amp; Alex</td>
            <td>
              Cake Pickup -{" "}
              <a href="https://goo.gl/maps/enVUd5gcNM82">Freed's Bakery</a>
            </td>
          </tr>
          <tr>
            <td>Deanna</td>
            <td>Table Decorations</td>
          </tr>
          <tr>
            <td>Cheryl &amp; Wendy</td>
            <td>Table Flowers, Name Tags &amp; Gift Box</td>
          </tr>
          <tr>
            <td>Kevin</td>
            <td>Video</td>
          </tr>
          <tr>
            <td>Alex</td>
            <td>Facebook Live</td>
          </tr>
          <tr>
            <td>Bubbles</td>
            <td>
              Sabrina, Eli, Nguyen - manual<br />Paulyne, Cyril - machine
            </td>
          </tr>
          <tr>
            <td>Ceremony Entry Order</td>
            <td>Cyril &amp; Joyce, Deanna, Sabrina, Anh &amp; Tina</td>
          </tr>
          <tr>
            <td>Ceremony Exit Order</td>
            <td>
              Tina &amp; Carlton, Jeff & Deanna, Anh &amp; Paulyne, Cyril &amp;
              Joyce
            </td>
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          background: white;
        }
        .date {
          display: flex;
          background: aqua;
          justify-content center;
        }
        table {
          border-collapse: collapse;
          width: 100%;
        }
        table,
        th,
        td {
          border-bottom: 1px solid gray;
        }
        th {
          text-align: left;
        }
        td {
          padding-top: 5px;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        tr:hover {
          background-color: aqua;
        }
      `}</style>
    </div>
  </Layout>
);

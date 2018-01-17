import Link from "next/link";
import Layout from "../components/Layout.js";

export default props => (
  <Layout active="schedule">
    <div className="contianer">
      <div className="date">
        <h3>Photograph List</h3>
      </div>
      <table>
        <tr>
          <th>Title</th>
          <th>People</th>
        </tr>
        <tr>
          <td>Group 1</td>
          <td>Every One</td>
        </tr>
        <tr>
          <td>Carlton's Family 1</td>
          <td>
            Carlton, Tina, Joyce, Cyril, Jeffrey, Wendy, Sabrina, Cheryl, Jason,
            Eli
          </td>
        </tr>
        <tr>
          <td>Carlton's Family 2</td>
          <td>
            Carlton, Tina, Joyce, Cyril, Jeffrey, Wendy, Sabrina, Cheryl, Jason,
            Eli, Frank, Eileen
          </td>
        </tr>
        <tr>
          <td>Tina's Family 1</td>
          <td>Carlton, Tina, Deanna, Corey, Anh, Paulyne</td>
        </tr>
        <tr>
          <td>Tina's Family 2</td>
          <td>
            Carlton, Tina, Deanna, Corey, Anh, Paulyne, Kevin, Nguyen, An, Tam,
            Brian
          </td>
        </tr>
        <tr>
          <td>Cyril &amp; Grandkids</td>
          <td>Cyril, Joyce, Eli, Sabrina, Deanna, Corey</td>
        </tr>
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

import Link from "next/link";
import Layout from "../components/Layout.js";

export default props => (
  <Layout active="cars">
    <div className="contianer">
      <div className="date">
        <h3>Start Your Engins</h3>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Driver</th>
            <th>Car</th>
            <th>Passangers</th>
            <th>Cnt</th>
          </tr>
          <tr>
            <td>Corey</td>
            <td>Sliver Pilot</td>
            <td>Anh, Paulyne Tam, An, Kevin, Nguyen</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Cheryl</td>
            <td>Black Tacoma</td>
            <td>Jason, Frank, Eileen</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Brian</td>
            <td>White Civic</td>
            <td>Cermony Only</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Bobby</td>
            <td>White Civic</td>
            <td>Deanna, Todd</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Debbie</td>
            <td>Rental</td>
            <td>Alex, Leona, Teresa</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Cyril</td>
            <td>Rental</td>
            <td>Joyce, Tina, Carlton</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Jeff</td>
            <td>Rental</td>
            <td>Wendy, Sabrina, Eli</td>
            <td>4</td>
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

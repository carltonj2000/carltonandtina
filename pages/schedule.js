import Link from "next/link";
import Layout from "../components/Layout.js";

export default props => (
  <Layout active="schedule">
    <div className="contianer">
      <div className="date">
        <h1>
          January 18<sup>th</sup>, 2018
        </h1>
      </div>
      <table>
        <tr>
          <th>Time</th>
          <th>Event</th>
        </tr>
        <tr>
          <td>11:15 AM</td>
          <td>
            <Link href="/directions">Flamingo Hotel - Arrive &amp; Park</Link>
          </td>
        </tr>
        <tr>
          <td>11:30 AM</td>
          <td>Flamingo Garden - Self Tour &amp; Photos</td>
        </tr>
        <tr>
          <td>12:00 PM</td>
          <td>Chapel - Cermony Starts</td>
        </tr>
        <tr>
          <td>12:30 PM</td>
          <td>Chapel - Cermony Ends - Photos Starts</td>
        </tr>
        <tr>
          <td>12:45 PM</td>
          <td>Chapel - Depart Grounds</td>
        </tr>
        <tr>
          <td>1:00 PM</td>
          <td>
            <Link href="/directions">Drive - To Lake LV</Link>
          </td>
        </tr>
        <tr>
          <td>2:00 PM</td>
          <td>Lake - Family Photos</td>
        </tr>
        <tr>
          <td>2:30 PM</td>
          <td>Lake - Tina &amp; Carlton's Photos</td>
        </tr>
        <tr>
          <td>3:30 PM</td>
          <td>Mimi's - Group Photos</td>
        </tr>
        <tr>
          <td>4:00 PM</td>
          <td>Mimi's - Dinner Start</td>
        </tr>
        <tr>
          <td>6:00 PM</td>
          <td>Mimi's - Dinner End</td>
        </tr>
        <tr>
          <td>7:00 PM</td>
          <td>Drinks - Tina &amp; Carlton's Home</td>
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
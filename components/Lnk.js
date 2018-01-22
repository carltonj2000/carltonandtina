import Link from "next/link";
import { config } from "../utils/config.js";

const { basedir } = config;

export default ({ link, active }) => {
  return (
    <div>
      <Link href={link === "home" ? `${basedir}` : `${basedir}${link}`}>
        <a className={link === active && "active"}>
          {link.slice(0, 1).toUpperCase() + link.slice(1)}
        </a>
      </Link>
      <style jsx>{`
        a {
          font-family: Arial;
          font-weight: bold;
          color: darkgoldenrod;
          margin: 5px;
          text-decoration: none;
        }
        .active {
          text-decoration: underline overline;
          color: green;
        }
      `}</style>
    </div>
  );
};

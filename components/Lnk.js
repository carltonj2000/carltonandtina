import Link from "next/link";

export default ({ link, active }) => (
  <div>
    <Link href={link === "home" ? "/" : `/${link}`}>
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

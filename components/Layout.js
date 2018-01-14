import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children, active }) => (
  <div>
    <Meta />
    <Header active={active} />
    {children}
    <Footer />
    <style jsx>{`
      .div {
        display: flex;
        margin: 5px;
      }
    `}</style>
  </div>
);

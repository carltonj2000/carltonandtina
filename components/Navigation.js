import Lnk from "./Lnk";

export default props => (
  <div>
    <div className="tags">
      <Lnk link="home" active={props.active} />
      <Lnk link="directions" active={props.active} />
      <Lnk link="schedule" active={props.active} />
      <Lnk link="seating" active={props.active} />
      <Lnk link="cars" active={props.active} />
      <Lnk link="support" active={props.active} />
    </div>
    <style jsx>{`
      .tags {
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: center;
        grid-gap: 10px;
        opacity: 0.5;
        background: lightyellow;
        padding: 10px;
      }
    `}</style>
  </div>
);

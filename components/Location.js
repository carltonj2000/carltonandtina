export default () => (
  <div>
    <div className="container">
      <div className="col1">
        <div>Where &amp; When?</div>
      </div>
      <div className="col2">
        <div>Las Vegas</div>
        <div>January 18th, 2018</div>
      </div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
        background: aqua;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .col1 {
        font-weight: bold;
        margin-right: 20px;
        text-transform: uppercase;
      }
      .col2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 20px;
      }
    `}</style>
  </div>
);

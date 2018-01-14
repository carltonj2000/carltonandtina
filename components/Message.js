export default () => (
  <div>
    <div className="container">
      <div className="names">Tina &amp; Carlton</div>
      <div className="message">Love &amp; Joy Forever</div>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
        background: lightyellow;
        width: 100%;
        padding: 15px;
        margin-bottom: 20px;
      }
      .names {
        font-size: 40px;
        font-weight: bold;
        color: darkgoldenrod;
      }
      .message {
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        color: green;
      }
    `}</style>
  </div>
);

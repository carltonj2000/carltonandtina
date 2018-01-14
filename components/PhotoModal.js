export default props => {
  if (!props.show) return null;
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="close">
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="next">
          <span>{props.img.description}</span>
          <button onClick={() => props.nextImg(-1)}>&larr;</button>
          <button onClick={() => props.nextImg(1)}>&rarr;</button>
        </div>
      </div>
      <style jsx>{`
        .backdrop {
          z-index: 9998;
          position: absolute;
          width: calc(100vw - 5px);
          height: calc(100vh - 5px);
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.3);
        }
        .modal {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          z-index: 9999;
          position: absolute;
          top: 5vh;
          left: 5vw;
          width: 85vw;
          height: 85vh;
          background: url("/static/optimized/${props.img.name}");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          border: 5px solid darkgoldenrod;
        }
        button {
          padding: 10px;
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
};

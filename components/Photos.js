const imageDir = "/static/optimized/";
export default ({ photoModalOpen, images }) => (
  <div className="container">
    {images.map(img => (
      <div key={`${img.name}`}>
        <img
          className="img"
          src={`${imageDir}${img.name}`}
          title={img.description}
          onClick={() => photoModalOpen(img.name)}
        />
      </div>
    ))}
    <style jsx>{`
      .container {
        background: white;
        display: grid;
        grid-gap: 3px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
      .img {
        width: 100%;
      }
    `}</style>
  </div>
);

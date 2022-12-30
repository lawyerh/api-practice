import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const mapImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{mapImages}</div>;
}

export default ImageList;

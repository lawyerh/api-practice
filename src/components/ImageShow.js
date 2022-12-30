function ImageShow({ image }) {
  return (
    <div className="image-show">
      <img src={image.urls.small} alt={image.alt_description} />
      <p className="image-show__text">{image.alt_description}</p>
    </div>
  );
}

export default ImageShow;

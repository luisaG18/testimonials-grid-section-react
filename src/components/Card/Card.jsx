/* eslint-disable react/prop-types */
import "./Card.scss";

// eslint-disable-next-line react/prop-types
function Card({
  image,
  name,
  verification,
  title,
  text,
  background,
  backgroundImage,
  colorText,
  colorTextOpacity,
}) {
  return (
    <>
      <div
        className="container-card"
        style={{
          backgroundColor: background,
          backgroundImage: `url(${backgroundImage})`,
          color: colorText,
        }}
      >
        <div className="card-header">
          <div>
            <img src={image} />
          </div>
          <div className="card-header__name">
            <span>{name}</span>
            <span style={{ color: colorTextOpacity }}>{verification}</span>
          </div>
        </div>
        <div className="card-title">
          <span>{title}</span>
        </div>
        <div className="card-text" style={{ color: colorTextOpacity }}>
          {text}
        </div>
      </div>
    </>
  );
}

export default Card;

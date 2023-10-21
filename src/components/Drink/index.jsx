import './style.css';
import { Layer } from '../Layer';

export const Drink = ({ name, ordered, image, layers, id }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer, index) => {
            return (
              <Layer key={index} color={layer.color} label={layer.label} />
            );
          })}
        </div>
      </div>
      <div className="drink__controls">
        <button
          id={id}
          className={`order-btn ${
            ordered ? 'order-btn order-btn--ordered' : ''
          }`}
        >
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </div>
    </div>
  );
};

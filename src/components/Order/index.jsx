import './style.css';
import { OrderItem } from '../OrderItem';
export const Order = ({ items }) => {
  return (
    <main className="order">
      <div className="order__content container">
        <h1>Vaše objednávka</h1>
        {items.length === 0 ? (
          <p
            className={`empty-order ${
              items.length === 0 ? '' : 'empty-order--hide'
            }`}
          >
            Zatím nemáte nic objednáno
          </p>
        ) : (
          <div className="order__items">
            {items.map((item) => {
              let url = 'http://localhost:4000' + item.image;
              return <OrderItem key={item.id} name={item.name} image={url} />;
            })}
          </div>
        )}
      </div>
    </main>
  );
};

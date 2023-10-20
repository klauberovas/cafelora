import './style.css';
import { Drink } from '../Drink';
export const Menu = ({ drinks }) => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinks.map((item) => {
            let url = 'http://localhost:4000' + item.image;
            return (
              <Drink
                id={item.id}
                key={item.id}
                name={item.name}
                ordered={item.ordered}
                image={url}
                layers={item.layers}
              />
            );
          })}
        </div>

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};

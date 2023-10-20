import './style.css';
import { Drink } from '../Drink';
export const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          <Drink
            name="Romano"
            ordered={false}
            image="https://cafelora.kodim.app/assets/cups/espresso.png"
            layers={[
              {
                color: '#fbdf5b',
                label: 'citrón',
              },
              {
                color: '#613916',
                label: 'espresso',
              },
            ]}
          />
        </div>

        <div className="order-detail">
          <a href="/objednavka">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};

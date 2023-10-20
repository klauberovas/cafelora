import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />

    <main className="order">
      <div className="order__content container">
        <h1>Vaše objedávnka</h1>
        <p className="empty-order empty-order--hide">
          Zatím nemáte nic objednáno
        </p>
        <div className="order__items">
          <div className="order-item">
            <img
              src="https://cafelora.kodim.app/assets/cups/vienna-coffee.png"
              className="order-item__image"
            />
            <div className="order-item__name">Vídeňská káva</div>
          </div>

          <div className="order-item">
            <img
              src="https://cafelora.kodim.app/assets/cups/chocolate-milk.png"
              className="order-item__image"
            />
            <div className="order-item__name">Čokoláda s mlékem</div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>,
);

import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Order } from '../components/Order';
import { Footer } from '../components/Footer';

const response = await fetch(
  'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
);

const data = await response.json();
const orderDrinks = data.result;
console.log(orderDrinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <Order items={orderDrinks} />
    <Footer />
  </div>,
);

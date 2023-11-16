import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
// Metoda GET
const response = await fetch('/api/drinks.json');
// const data = await response.json();
console.log(response);
const drinks = response.result;
console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={false} />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);
// HAMBURGER MENU (skrývání a odkrývání)
const navBtnElm = document.querySelector('.nav-btn');
const rolloutElm = document.querySelector('.rollout-nav');
const linksHeaderElm = document.querySelectorAll('.rollout-nav a');
//přepínač na rollout
const toggleNav = () => rolloutElm.classList.toggle('nav-closed');
//posluchač na roletku
navBtnElm.addEventListener('click', toggleNav);
//posluchač na odkazy v roletce
linksHeaderElm.forEach((link) => {
  link.addEventListener('click', toggleNav);
});
//---------------------------
//změna ORDERED NA TRUE po kliknutí a odeslání změny na API
const orderBtnElm = document.querySelectorAll('.order-btn');
orderBtnElm.forEach((button) => {
  button.addEventListener('click', async (e) => {
    await fetch(`http://localhost:4000/api/drinks/${e.target.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/ordered',
          value: !drinks[e.target.id].ordered,
        },
      ]),
    });
    location.reload();
  });
});

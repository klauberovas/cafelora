import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
const response = await fetch('http://localhost:4000/api/drinks');
const data = await response.json();
const drinks = data.result;
console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

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

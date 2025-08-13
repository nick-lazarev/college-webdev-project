'use strict'
const $ = (selector) => document.querySelector(selector);

const mainEl = $('main');
const createSection = ({
  header,
  cards
}) => {
  const sectionEl = document.createElement('section');

  if (header) {
    sectionEl.innerHTML = `
      <h2 class="section-header">
        ${header}
      </h2>
    `;
  }

  if (cards && Array.isArray(cards)) {
    cards.forEach(el => {
      const ulEl = document.createElement('ul');
      ulEl.classList.add('categories');

      const cardEl = document.createElement('div');
      cardEl.classList.add('category-card');
      cardEl.classList.add('inactive');

      if ('img' in el) {
        const imgEl = document.createElement('img');
        imgEl.classList.add('category-card__icon');
        imgEl.setAttribute('src', el.img);
        cardEl.appendChild(imgEl);
      }

      if ('description' in el) {
      const contentEl = document.createElement('div');
      contentEl.classList.add('category-card__content');
        contentEl.innerHTML = `
          <h3>${el.description}</h3>
        `;
        cardEl.appendChild(contentEl);
      }

      ulEl.appendChild(cardEl);
      sectionEl.appendChild(ulEl);
      mainEl.appendChild(sectionEl);
    })
  }
}

const onContentLoaded = () => {
  createSection({
    header: 'Convinient Location',
    cards: [
      {
        img: '../images/building.png',
      },
      {
        img: '../images/clinicHall.png',
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident
        `
      }
    ]
  })
  createSection({
    header: 'Caring staff',
    cards: [
      {
        img: '../images/staffDog.png',
      },
      {
        img: '../images/staffInjection.png',
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident
        `
      },
    ]
  })
}

document.addEventListener('DOMContentLoaded', onContentLoaded)
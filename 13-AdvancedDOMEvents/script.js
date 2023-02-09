'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

console.log(btnsOpenModal);
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// 1) Selecting,reating, and Deleting Elements:

//* selecting

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); //Returns a node list.
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button'); //Returns an Html collection(live collection),
console.log(allButtons); //i.e. if dom changes it gets updated automatically

console.log(document.getElementsByClassName('btn')); //Also return Html Collection

//* Creating

//.inserAdjacentHtml

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies for improved functionality and antalytics.
<button class = "btn btn--close-cookie">Got it</button>`;
// header.prepend(message); //fisrt child element inside header;
header.append(message); // last child element inside header;

// header.append(message.cloneNode(true)); //*cloning the messsage element at both places;

// header.before(message);
// header.after(message);

//* Deleting
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); //Deletes the element;
    // message.parentElement.removeChild(message) //*older way of deleting;
  });

//2) Styles, Attributes and classes:

//* styles: these styles are added as inline styles
message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
message.style.margin = '10px';

//to get all the style: even though we did not apply it
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'red');
// document.documentElement.style.setProperty(
//   '--gradient-primary',
//   'linear-gradient(to top left, #ffb003, #ffcb03)'
// );

//*Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = 'Beautiful minimal logo';

//non-standard
console.log(logo.designer); //will return undefined
console.log(logo.getAttribute('designer'));

//opposite of get Attribute:
logo.setAttribute('developer', 'bazinga');

console.log(logo.src); //returns absolute URL
console.log(logo.getAttribute('src')); //returns relative URL

const twitterLink = document.querySelector('.twitter-link');
//both of them are absolute anyway so returns absolute
console.log(twitterLink.href);
console.log(twitterLink.getAttribute('href'));

//Data attributes:
console.log(logo.dataset.versionNumber);

// Classes:

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

//*Implementing the Smooth Scrolling:
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // console.log(
  //   'height/Width of viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //*Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //making the scolling on click smooth

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //More MordernWay:
  section1.scrollIntoView({ behavior: 'smooth' });
});

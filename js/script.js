$('.owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  dots:true,
  items:1,
  autoplay:true,
  autoplayTimeout:4000
});

/* NAVBAR SCROLL */
window.addEventListener("scroll", function(){
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

/* AOS INIT */
AOS.init({
  duration:1000,
  once:true
});
const counters = document.querySelectorAll('.counter');

const startCount = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;

  const speed = target / 100; // control speed

  const updateCount = () => {
    count += speed;

    if(count < target){
      counter.innerText = Math.floor(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
};

/* TRIGGER ON SCROLL USING AOS */
document.addEventListener('aos:in', (e) => {
  if(e.detail.classList.contains('counter')){
    startCount(e.detail);
  }
});

/* FALLBACK (for safety) */
window.addEventListener('load', () => {
  counters.forEach(counter => startCount(counter));
});


const testimonials = [
  {
    title: "Professional & Personable",
    text: "From the moment we met our agent, we knew we were in good hands.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    name: "James Emily",
    role: "First Time Buyer",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    title: "Amazing Experience",
    text: "The entire home buying process was smooth and stress-free.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    name: "Sophia Lee",
    role: "Home Owner",
    userImg: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    title: "Highly Recommended",
    text: "Excellent service and support throughout the journey.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    name: "David John",
    role: "Investor",
    userImg: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

let index = 0;

function showSlide(i) {
  const t = testimonials[i];

  document.getElementById("testimonialTitle").innerText = t.title;
  document.getElementById("testimonialText").innerText = t.text;
  document.getElementById("testimonialImage").src = t.image;
  document.getElementById("userName").innerText = t.name;
  document.getElementById("userRole").innerText = t.role;
  document.getElementById("userImage").src = t.userImg;

  updateDots();
}

function nextSlide() {
  index = (index + 1) % testimonials.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showSlide(index);
}

function createDots() {
  const dotsContainer = document.getElementById("dots");

  testimonials.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.onclick = () => {
      index = i;
      showSlide(index);
    };
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll(".dots span");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

/* AUTO SLIDE */
setInterval(nextSlide, 4000);

/* INIT */
createDots();
showSlide(index);
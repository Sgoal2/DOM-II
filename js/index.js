const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const a = document.createElement('a');
const p = document.querySelector('nav').appendChild(a);
p.text = "Hi there"

const b = document.createElement('a');
const p2 = document.querySelector('nav').prepend(b);

let nav = document.querySelectorAll("nav a");
nav[0].innerHTML = "Love";
nav[1].innerHTML = "Services";
nav[2].innerHTML = "Product";
nav[3].innerHTML = "Vision";
nav[4].innerHTML = "Features";
nav[5].innerHTML = "About";
nav[6].innerHTML = "Contact";
nav[7].innerHTML = "Hi There";
nav[0].style.color = "blue";
nav[1].style.color = "blue";
nav[2].style.color = "blue";
nav[3].style.color = "blue";
nav[4].style.color = "blue";
nav[5].style.color = "blue";
nav[6].style.color = "blue";
nav[7].style.color = "blue";
nav[0].addEventListener("mouseover", ()=>{
  nav[0].innerHTML = "Listen";
})
nav[0].addEventListener("mouseout", ()=>{
  nav[0].innerHTML = "No More";
})
nav[3].addEventListener("click", ()=>{
  nav[3].innerHTML = "Clicking";
})
nav[3].addEventListener("mouseleave", ()=>{
  nav[3].innerHTML = "Vision";
})
nav[4].addEventListener("dblclick", ()=>{
  nav[4].innerHTML = "Double";
})


let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = "Dom<br> Is<br> Awesome"
ctaH1.addEventListener("mouseover", ()=>{
  ctaH1.style.color = "yellow";
})

let button = document.querySelector("button");
button.innerHTML = "Get Started"

let imgs = document.getElementById("cta-img");
imgs.setAttribute('src', siteContent["cta"]["img-src"]);

let imgmid = document.getElementById("middle-img");
imgmid.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let featuresH4 = document.querySelectorAll(".main-content .top-content h4");
featuresH4[0].innerHTML = "Features";
featuresH4[1].innerHTML = "About";


let toptext = document.querySelectorAll(".main-content .top-content p");
toptext[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
toptext[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let bottomH4 = document.querySelectorAll(".main-content .bottom-content h4");
bottomH4[0].innerHTML = "Services";
bottomH4[1].innerHTML = "Product";
bottomH4[2].innerHTML = "Vision";

let bottomtext = document.querySelectorAll(".main-content .bottom-content p");
bottomtext[0].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomtext[1].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomtext[2].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contacth4 = document.querySelector(".contact h4");
contacth4.innerHTML = "Contact"
let contactp = document.querySelectorAll(".contact p");
contactp[0].innerHTML = "123 Way 456 Street<br> Somewhere, USA"
contactp[1].innerHTML = "1 (888) 888-8888"
contactp[2].innerHTML = "sales@greatidea.io"


let footer = document.querySelector("footer p");
footer.innerHTML = "Copyright Great Idea! 2018"
footer.addEventListener("mousemove", ()=>{
footer.style.color = "red";
})
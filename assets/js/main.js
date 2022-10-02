/* ====================== SHOW MENU ====================== */
const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose  = document.querySelector('#nav-close');

/* ============= MENU SHOW ============= */
/* validate if constants exists */
if(navToggle)
{
    navToggle.addEventListener('click', () =>
    {
        navMenu.classList.toggle('show-menu')
    })
}

/* ============= MENU HIDDEN ============= */
/* validate if constants exists */
if(navClose)
{
    navClose.addEventListener('click',() =>
    {
        navMenu.classList.remove('show-menu')
    })
}

/* ====================== Show Cart ====================== */
const   cart = document.querySelector('#cart'),
        cartShop = document.querySelector('#cart-shop'),
        cartClose= document.querySelector('#cart-close')

/* ============= Cart Show ============= */
/* validate if constants exists */
if(cartShop)
{
    cartShop.addEventListener('click', () => 
    {
        cart.classList.toggle('show-cart')
    })
}


/* ============= Cart Hidden ============= */
/* validate if constants exists */
if(cartClose)
{
    cartClose.addEventListener('click', () => 
    {
        cart.classList.remove('show-cart')
    })
}

/* ====================== Show LOGIN ====================== */
const   login = document.querySelector('#login'),
        loginButton = document.querySelector('#login-button'),
        loginClose= document.querySelector('#login-close')

/* ============= LOGIN Show ============= */
/* validate if constants exists */
if(loginButton)
{
    loginButton.addEventListener('click', () => 
    {
        login.classList.toggle('show-login')
    })
}


/* ============= LOGIN Hidden ============= */
/* validate if constants exists */
if(loginClose)
{
    loginClose.addEventListener('click', () => 
    {
        login.classList.toggle('show-login')
    })
}


/* ====================== Show SCROLL UP ====================== */
function scrollup()
{
    const scrollUp = document.querySelector('#scroll-up');
    // when the scroll the higher than 350vh, then add "show-scroll" class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollup)



/* ====================== HOME SWIPER ====================== */
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween:30,
    loop: "true",
    effect:  'slide'  ,
    pagination: {
      el: ".swiper-pagination",
    //   dynamicBullets: true,
      clickable: true,
    },
  });

/* ====================== Change Background Header ====================== */
function scrollHeader() {
    const Header = document.querySelector('#header')
    //when the scroll is greater than 50 vh (viewport height), add the scroll-header class to the header element  
    if(this.scrollY >= 50) Header.classList.add('scroll-header'); else Header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader)

/* ====================== NEW SWIPER ====================== */
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween:16,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    loop: "true",
    effect:  'slide'  ,
  });

/* ====================== QUESTIONS ACCORDION ====================== */
const accordionItem = document.querySelectorAll('.questions__item');
accordionItem.forEach((item) =>
{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => 
    {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)

        if(openItem && openItem !== item)
        {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')
    if (item.classList.contains('accordion-open'))
    {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
    else
    {
        accordionContent.style.height = accordionContent.scrollHeight + "px"
        item.classList.add('accordion-open')
    }
}

/* ====================== STYLE SWITCHER ====================== */
const styleSwitcherToggler = document.querySelector('.style__switcher-toggler'),
    styleSwitcher = document.querySelector('.style__switcher'),
    dayNight = document.querySelector('.day__night')

styleSwitcherToggler.addEventListener('click', () =>{ 
    styleSwitcher.classList.toggle('open')
})

// close if click outside styleSwitcher
document.addEventListener("click", (event) => {
  const isClickInside = styleSwitcher.contains(event.target);

  if (!isClickInside && styleSwitcher.classList.contains('open')) {
    styleSwitcher.classList.toggle('open')
  }
});

// THEME COLORS
function themeColors(){
    const colorStyle = document.querySelector('.js-color-style'),
          themeColorsContainer = document.querySelector('.js-theme-colors');

    themeColorsContainer.addEventListener('click', ({target}) =>{
        if(target.classList.contains('js-theme-colors-item')){
            let color = target.getAttribute('data-js-theme-color')
            localStorage.setItem('color-style',color)
            themeColorsContainer.querySelector('.active').classList.remove('active')
            target.classList.add('active')
            colorStyle.href = "assets/css/colors/" + color +".css"
        }
    })
    if(localStorage.getItem('color-style')){
        colorStyle.href = "assets/css/colors/" + localStorage.getItem('color-style') +".css"
    }
}
themeColors()


// Toggle DARK Theme
dayNight.addEventListener('click', () =>{
    dayNight.classList.toggle('bxs-moon')
    dayNight.classList.toggle('bxs-sun')
    document.body.classList.toggle('dark')
    if(localStorage.getItem('dark') == "dark"){
        localStorage.removeItem('dark')
        localStorage.setItem('dark','day')
    }else{
        localStorage.removeItem('dark')
        localStorage.setItem('dark', "dark")
    }
})
if(localStorage.getItem('dark')==='dark' && !document.body.classList.contains('dark')){
    document.body.classList.add('dark')
}
//how to close tab in js?
close();


window.close();


function close_window() {
  if (confirm("Close Window?")) {
    close();
  }
}







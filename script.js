// <========== show menu ==========>

const navMenu=document.getElementById("nav-menu"),
    navToggle=document.getElementById("nav-toggle"),
    navClose=document.getElementById("nav-close")


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{

        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// <======== Change Background header ======>

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100){ 
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

// Swipper js 
var swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {
      rotate: 0,
      
    },
   
});

// <====== Video Part =======>
const videoFile=document.getElementById('video-file'),
      videoButton=document.getElementById('video-button'),
      videoIcon=document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused){
        videoFile.play()
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else{
        videoFile.pause()
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}


videoButton.addEventListener('click',playPause)

function finalVideo(){
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}

videoFile.addEventListener('ended',finalVideo)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Dark Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
// const changeName='Light Mode'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const themeName = getCurrentTheme() === 'dark' ? 'Light Mode' : 'Dark Mode';
themeButton.textContent = themeName;
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    const newThemeName = getCurrentTheme() === 'dark' ? 'Light Mode' : 'Dark Mode';
  themeButton.textContent = newThemeName;
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// scrool Animation 

const sr=ScrollReveal({
    distance:'60px',
    duration:2800,
    reset:true,
})

sr.reveal(`.home_data,.home_social-link,.home_info, .discover_container ,.experience_overlay ,.experience_data,.place_card,.sponser_content,.footer_rights,.footer_data ,.destinationInput`,{
    origin:'top',
    interval:150,
})
sr.reveal(`.about_data,.video_description,.subscribe_description,.section_title`,{
    origin:'left'
})
sr.reveal(`.about_img-overlay,.video_content,.subscribe_form`,{
    origin:'right',
    interval:100,
})
sr.reveal(`.priceInput`,{
    origin:'bottom',
    interval:150,
})

// <========= Registration Part ===========>

function showLogin() {
    const userContainer = document.getElementById('userContainer');
    userContainer.classList.remove('login-section--display');
}

function showRegistration() {
    const userContainer = document.getElementById('userContainer');
    userContainer.classList.add('login-section--display');
}
// <================= Search portion ================>
const priceRange = document.getElementById("priceRange");
const priceAmount = document.getElementById("priceAmount");

priceRange.addEventListener("input", updatePrice);

function updatePrice() {
  const selectedPrice = priceRange.value;
  priceAmount.textContent = `$${selectedPrice}`;
}
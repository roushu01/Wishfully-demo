
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');
const popBtn = document.querySelector('.popup-button');
const closeBtn = document.querySelector('.close'); 

signupLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

popBtn.addEventListener('click',() => {
     wrapper.classList.add('active-popup');  
});
closeBtn.addEventListener('click',() => {
     wrapper.classList.remove('active-popup');  
});
///slider
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
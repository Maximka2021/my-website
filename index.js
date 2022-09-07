const navbarSection = document.querySelector('.navbar-section');
const link = document.getElementsByClassName('link');
const navbarBrend = document.querySelector('.navbar-brend');

window.addEventListener('scroll', () =>{
    let scrolled = Math.floor(window.scrollY);
    if(scrolled != 0){
        navbarSection.classList.add('background');
        navbarBrend.classList.add('color-header');
        for(let i = 0; i < link.length; i++){
            link[i].classList.add('color-link');
        }
    }else{
        navbarSection.classList.remove('background');
        navbarBrend.classList.remove('color-header');
        for(let i = 0; i < link.length; i++){
            link[i].classList.remove('color-link');
        }
    }
})


function func(sentence){
    let arr = [];
    for(let i of sentence){
        arr.push(i.split(' ').length);
    }
    return Math.max(...arr);
}

console.log(func(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))


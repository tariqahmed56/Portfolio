let nav = document.querySelector('.nav');
let hum = document.querySelector('.hum');
let list = document.querySelector('.list');
let lines = document.querySelectorAll('.line')
hum.addEventListener('click', ()=>{
    lines.forEach((line)=>{
        line.classList.toggle('anime')
    })
    nav.classList.toggle('active');
list.classList.toggle('ul')
})

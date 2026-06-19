// ЛИФТ
const elevator = document.querySelector('.elevator')
elevator.onclick = ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

const connect = document.querySelector('.connect')
const form = document.querySelector('.connect_form')
const close = document.querySelector('.close')
const body = document.body
connect.onclick = () => {
    form.id = 'form_active'
    body.classList.add('bg_shadow');
    body.classList.add('bg_position')
};
close.onclick = () =>{
    form.id = ''
    body.classList.remove('bg_shadow');
    body.classList.remove('bg_position')
}

// ПЕРЕМЕЩЕНИЕ ПО САЙТУ ЧЕРЕЗ ВЕРХНЮЮ МЕНЮШКУ
const menu = document.querySelectorAll('a')

menu[0].addEventListener("click", (e)=>{
    e.preventDefault(); //без этой штуки перемещает наверх к тому, что мы нажали, а не на тот объект, который нам нужен :P
    document.querySelector('.inform_wc').scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    })
})

menu[1].addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector('.goods').scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    })
})

menu[2].addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector('.subscription').scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    })
})

menu[3].addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector('.work').scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
    })
})

menu[4].addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector('.delivery').scrollIntoView({
        behavior: 'smooth', 
        block: 'center'
    })
})
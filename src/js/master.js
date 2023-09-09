let span = document.querySelectorAll('.box')
let input = document.querySelectorAll('.num>input')
let c = document.getElementById('bank-c')
let btn = document.getElementsByClassName('btn')
let inp = document.getElementsByClassName('input')
let main = document.getElementsByTagName('main')

input.forEach((i, index) => {
    i.addEventListener('input', (e) => {
        let val = e.target.value
        if (val.length < 5) {
            span[index].innerHTML = val
        } if (val.length == 4) {
            i.nextElementSibling.focus()
        } else {
            e.target.value = val.substring(0, 4)
        }

    })

})

let cvv = document.querySelector('.info>input:first-of-type')
let date = document.querySelector('.info>input:last-of-type')

cvv.addEventListener('input', (e) => {
    let val = e.target.value
    if (val.length > 4) {
        e.target.value = val.substring(0, 4)
        cvv.nextElementSibling.nextElementSibling.focus()

    } else {
        document.getElementById('cvv2').innerHTML = 'cvv2 :' + val
    }
    


})
date.addEventListener('input', (e) => {
    let val = e.target.value
    if (val.length > 5) {
        e.target.value = val.substring(0, 5)
    } else {
        document.getElementById('date').innerHTML = 'date :' + val
    }


})

c.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let w = e.target.clientWidth
    let h = e.target.clientHeight
    c.style.transform = 'perspective(500px) rotateY(' + ((x - w / 2) / 25 )+ 'deg) rotateX(' + ((y - h / 2) / 10) + 'deg)'
})

c.addEventListener('mouseleave', (e) => {
    c.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg)'
})

btn[1].addEventListener('click', (e) => {
    inp[0].style.width = 0
    inp[0].style.opacity = 0
    document.getElementsByClassName('cart')[0].style.width = '100%'
    c.style.width = '60%'
    btn[0].style.height = 'auto'
    btn[0].style.padding = '30px'
    btn[0].style.opacity = '1'
})

btn[0].addEventListener('click', (e) => {
    inp[0].style.width = '50%'
    inp[0].style.opacity = 1
    document.getElementsByClassName('cart')[0].style.width = '50%'
    c.style.width = '80%'
    btn[0].style.height = '0'
    btn[0].style.padding = '0'
    btn[0].style.opacity = '0'
})

document.getElementById('night').addEventListener('click', () => {
    document.querySelector('.dn>div>span').style.right = '75%'
    main[0].classList.remove('day')
    main[0].classList.add('night')

})
document.getElementById('day').addEventListener('click', () => {
    document.querySelector('.dn>div>span').style.right = '0'
    main[0].classList.remove('night')
    main[0].classList.add('day')

})
let d = document
let mainBg = d.querySelector('.main')
let circle = d.querySelector('.circle')
let icons = d.querySelectorAll('i')
let allLi = d.querySelectorAll('li')


for (let i = 0; i < 5; i++) {
  icons[i].addEventListener('click', change)
}

function change() {
  let li = this.parentNode
  let dataNo = this.getAttribute('data-no')
  let bgcl = this.getAttribute('bgcl')
  
  for (let i = 0; i < 5; i++) {
    allLi[i].classList.remove('active')
  }
  
  li.classList.add('active')
  circle.style.top = dataNo * 100 + 'px'
  circle.style.background = bgcl
  mainBg.style.background = bgcl
}



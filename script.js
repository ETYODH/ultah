const startBtn = document.getElementById("startBtn")
const gift = document.getElementById("gift")
const giftText = document.getElementById("giftText")

const nameText = document.getElementById("name")
const ageText = document.getElementById("ageText")

const msgs = document.querySelectorAll(".msg")

const cake = document.getElementById("cake")
const blowText = document.getElementById("blowText")

const gallery = document.getElementById("gallery")

const music = document.getElementById("music")

const inputName = document.getElementById("inputName")
const inputBirth = document.getElementById("inputBirth")

let userName=""
let userAge=""

startBtn.onclick = () => {

let name=inputName.value
let birth=inputBirth.value

if(name=="" || birth==""){
alert("Isi dulu nama dan tahun lahir 😁")
return
}

let year=new Date().getFullYear()
let age=year-birth

userName=name
userAge=age

document.getElementById("formBox").style.display="none"

gift.style.display="block"
giftText.style.display="block"

}

gift.onclick=()=>{

gift.style.display="none"
giftText.style.display="none"

nameText.innerText=userName
ageText.innerText="Sekarang umur kamu "+userAge+" tahun 🎂"

document.getElementById("banner").style.display="flex"
document.getElementById("title").style.display="block"

music.play()

let i=0

function showMsg(){

if(i<msgs.length){

msgs[i].classList.add("show")
i++

setTimeout(showMsg,900)

}else{

cake.style.display="block"
blowText.style.display="block"

}

}

showMsg()

createBalloons()
createConfetti()

}

cake.onclick=()=>{

showPhotos()
createFireworks()

}

function showPhotos(){

gallery.classList.remove("hidden")

let photos=document.querySelectorAll(".photo")

photos.forEach((p,i)=>{

let x=Math.random()*80
let y=Math.random()*80

p.style.left=x+"%"
p.style.top=y+"%"

p.style.setProperty("--r",(Math.random()*40-20)+"deg")

setTimeout(()=>{

p.classList.add("show")

},i*300)

})

}

function createBalloons(){

let container=document.getElementById("balloons")

for(let i=0;i<80;i++){

let b=document.createElement("div")

b.innerHTML="🎈"
b.style.left=Math.random()*100+"%"
b.style.animationDuration=(4+Math.random()*4)+"s"

container.appendChild(b)

}

}

function createConfetti(){

let container=document.getElementById("confetti")

for(let i=0;i<200;i++){

let c=document.createElement("span")

c.style.left=Math.random()*100+"%"
c.style.background=`hsl(${Math.random()*360},100%,50%)`
c.style.animationDuration=(2+Math.random()*3)+"s"

container.appendChild(c)

}

}

function createFireworks(){

let container=document.getElementById("fireworks")

for(let i=0;i<150;i++){

let f=document.createElement("span")

let x=(Math.random()-0.5)*600+"px"
let y=(Math.random()-0.5)*600+"px"

f.style.left="50%"
f.style.top="40%"

f.style.setProperty("--x",x)
f.style.setProperty("--y",y)

f.style.background=`hsl(${Math.random()*360},100%,50%)`

container.appendChild(f)

setTimeout(()=>f.remove(),1200)

}

}
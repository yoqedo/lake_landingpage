const btnup = document.querySelector('.button3');
const btndwn = document.querySelector('.button4');
const sliderbtn = document.querySelector('.play-btn');
const togglebtn = document.querySelector('.closetoggle');
const toggledwn = document.querySelector('.toggledown');
const tlbtnup = gsap.timeline({paused:true, reversed: true});
const tlbtndwn = gsap.timeline({paused:true, reversed: true});
const tlsl = gsap.timeline({paused:true});
const tlbtn = gsap.timeline({paused:true});
const tldwn = gsap.timeline({paused:true});

//Timeline Button Up
tlbtnup.to('.nav-closed', 1.0, {
    delay: 0.2,
    height:'100%',
    ease: Expo.easeOut
})
tlbtnup.to('.box1', 1.0, {
    bottom:'70%',
    ease: Expo.easeOut
},'-=0.81');
tlbtnup.to('.box2', 1.0, {
    bottom:'60%',
    ease: Expo.easeOut
},'-=0.95');
tlbtnup.to('.box3', 1.0, {
    opacity: 1,
    bottom:'50%',
    ease: Expo.easeOut
},'-=0.95');
tlbtnup.to('.video', 1.0, {
    opacity: 1,
    bottom:'30%',
    ease: Expo.easeOut
},'-=0.75');
tlbtnup.to('.box4', 1.0, {
    opacity: 1,
    bottom:'19%',
    ease: Expo.easeOut
},'-=0.75');
tlbtnup.to('.btn1', 1.0, {
    opacity: 0,
    ease: Expo.easeOut
},'-=2');
tlbtnup.to('.btn2', 1.0, {
    opacity: 1,
    ease: Expo.easeOut
},'-=2');
tlbtnup.to('.toggledown', 1.0, {
    opacity: 1,
  
    ease: Expo.easeOut
},'-=2');

//Timeline Button down
tlbtndwn.to('.box4', 1.0, {
    delay: 0.2,
    opacity: 0,
    bottom:'19%',
    ease: Expo.easeOut
},'-=3.0');
tlbtndwn.to('.video', 1.0, {
    opacity: 0,
    bottom:'30%',
    ease: Expo.easeOut
},'-=3.0');
tlbtndwn.to('.box3', 1.0, {
    opacity: 0,
    bottom:'50%',
    ease: Expo.easeOut
},'-=');
tlbtndwn.to('.box2', 1.0, {
    bottom:'30%',
    ease: Expo.easeOut
},'-=1');
tlbtndwn.to('.box1', 1.0, {
    bottom:'60%',
    ease: Expo.easeOut
},'-=1');
tlbtndwn.to('.nav-closed', 1.0, {
    delay: 0.2,
    height:'40%',
    ease: Expo.easeOut
},'-=1');
tlbtndwn.to('.btn2', 1.0, {
    delay: 0.2,
    opacity: 0,
    ease: Expo.easeOut
},'-=2');
tlbtndwn.to('.btn1', 1.0, {
    delay: 0.2,
    opacity: 1,
    ease: Expo.easeOut
},'-=2');


//Timeline for Sliding
tlsl.to('.box1', 1.0, {
    delay: 1.0,
    opacity: 0,
    bottom:'70%',
    ease: Expo.easeOut
},'-=0.81');
tlsl.to('.box2', 1.0, {
    opacity: 0,
    bottom:'60%',
    ease: Expo.easeOut
},'-=0.95');
tlsl.to('.box3', 1.0, {
    opacity: 0,
    bottom:'50%',
    ease: Expo.easeOut
},'-=0.95');
tlsl.to('.video', 1.0, {
    opacity: 0,
    bottom:'30%',
    ease: Expo.easeOut
},'-=0.95');
tlsl.to('.box4', 1.0, {
    opacity: 0,
    bottom:'19%',
    ease: Expo.easeOut
},'-=0.95');
tlsl.to('.action', 1.0, {
    opacity: 0,
    ease: Expo.easeOut
},'-=0.95');
tlsl.to('.nav-closed', 1.0, {
    width:'100%',
    ease: Power1.easeOut
},'-=0.5');
tlsl.to('.videoslider', 1.0, {
    opacity: 1,
    width:'960px',
    ease: Power1.easeOut
},'-=0.5');
tlsl.to('.closetoggle ion-icon', 1.0, {
    opacity: 1,
    ease: Power1.easeOut
},'-=0.5');
tlsl.to('.textslider', 1.0, {
    opacity: 1,
    bottom: '150px',
    ease: Power1.easeOut
},'-=0.5');
tlsl.to('.btn2', 1.0, {
    opacity: 0,
    ease: Power1.easeOut
},'-=0.5');

//Timeline
tlbtn.to('.closetoggle ion-icon', 1.0, {
    opacity: 0,
    ease: Power1.easeOut
},'-=0.5');
tlbtn.to('.textslider', 1.0, {
    opacity: 0,
    bottom: '100px',
    ease: Power1.easeOut
},'-=0.5');
tlbtn.to('.videoslider', 1.0, {
    opacity: 0,
    width:'1px',
    ease: Power1.easeOut
},'-=0.5');
tlbtn.to('.nav-closed', 1.0, {
    width:'20%',
    ease: Power1.easeOut
},'-=0.5');
tlbtn.to('.box1', 1.0, {
    delay: 1.0,
    opacity: 1,
    bottom:'70%',
    ease: Expo.easeOut
},'-=0.81');
tlbtn.to('.box2', 1.0, {
    opacity: 1,
    bottom:'60%',
    ease: Expo.easeOut
},'-=0.95');
tlbtn.to('.box3', 1.0, {
    opacity: 1,
    bottom:'50%',
    ease: Expo.easeOut
},'-=0.95');
tlbtn.to('.video', 1.0, {
    opacity: 1,
    bottom:'30%',
    ease: Expo.easeOut
},'-=0.95');
tlbtn.to('.box4', 1.0, {
    opacity: 1,
    bottom:'19%',
    ease: Expo.easeOut
},'-=0.95');
tlbtn.to('.btn2', 1.0, {
    opacity: 1,
    ease: Expo.easeOut
},'-=0.95');

tldwn.to('.nav-closed', 1.0, {
    delay: 0.2,
    height:'40%',
    ease: Expo.easeOut
})
tldwn.to('.box1', 1.0, {
    bottom:'60%',
    ease: Expo.easeOut
},'-=0.81');
tldwn.to('.box2', 1.0, {
    bottom:'30%',
    ease: Expo.easeOut
},'-=0.95');


//Funktions
btnup.addEventListener('click', function(){
    tlbtnup.play();
});

btndwn.addEventListener('click', function(){
    tlbtndwn.play();
});

sliderbtn.addEventListener('click', function(){
    tlsl.play();
});

togglebtn.addEventListener('click', function(){
    tlbtn.play();
});

toggledwn.addEventListener('click', function(){
    tldwn.play();
});



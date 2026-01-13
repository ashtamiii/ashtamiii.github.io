/* SCROLL ANIMATION */
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>e.isIntersecting && e.target.classList.add("show"))
},{threshold:.15});
document.querySelectorAll(".hidden").forEach(el=>obs.observe(el));

/* HAMBURGER */
document.getElementById("menu-toggle").onclick=()=>{
  document.getElementById("nav-links").classList.toggle("active");
};

/* EMAILJS */
document.getElementById("contact-form").addEventListener("submit",function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
  .then(()=>{alert("Message sent ✨");this.reset();})
  .catch(()=>alert("Failed ❌"));
});

/* STARS */
const c=document.getElementById("stars"),x=c.getContext("2d");
c.width=innerWidth;c.height=innerHeight;
let s=[...Array(120)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.3}));
(function a(){
  x.clearRect(0,0,c.width,c.height);
  x.fillStyle="white";
  s.forEach(o=>{x.beginPath();x.arc(o.x,o.y,o.r,0,6.28);x.fill();o.y+=.15;if(o.y>c.height)o.y=0});
  requestAnimationFrame(a);
})();

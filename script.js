// MENU
function openMenu(){
  document.getElementById("menu").classList.add("active");
}
function closeMenu(){
  document.getElementById("menu").classList.remove("active");
}

// LOADER
window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.getElementById("loader").classList.add("hide");
  },800);
});

// CLICK LOADER
document.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click",function(e){
    const href=this.getAttribute("href");
    if(!href || href.startsWith("#")) return;

    e.preventDefault();
    document.getElementById("loader").classList.remove("hide");

    setTimeout(()=>{
      window.location.href=href;
    },600);
  });
});

// SCROLL ANIMATION
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("active");
    }
  });
});
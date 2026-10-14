// Placeholders: swap these before going live (one place for the whole site)
var LINKS={register:"#",login:"#",chat:"#"};
document.querySelectorAll("[data-link]").forEach(function(a){
  var u=LINKS[a.dataset.link];
  if(u&&u!=="#"){a.href=u;a.target="_blank";a.rel="noopener sponsored"}
});
var mb=document.getElementById("menu-btn"),mp=document.getElementById("mpanel");
if(mb&&mp){mb.addEventListener("click",function(){mp.hidden=!mp.hidden});
  document.addEventListener("click",function(e){if(!mp.hidden&&!mp.contains(e.target)&&e.target!==mb)mp.hidden=true})}

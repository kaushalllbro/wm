
(function(){
  const path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.addEventListener('click',function(e){
    const t=e.target.closest('[data-menu-toggle]');
    if(t){const links=document.querySelector('.nav-links'); if(links) links.classList.toggle('open');}
  });
  document.querySelectorAll('.nav-links a[data-nav]').forEach(a=>{if(a.getAttribute('data-nav')===path)a.classList.add('active')});
  document.querySelectorAll('[data-wa]').forEach(a=>{a.href='https://wa.me/919448249141'});
  const yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();
})();

/* User-provided historical screenshots; static files only, no API calls. */
(()=>{'use strict';
 const cards=[...document.querySelectorAll('[data-gallery-src]')];
 const dialog=document.getElementById('galleryLightbox');
 if(!cards.length||!dialog||typeof dialog.showModal!=='function')return;
 const img=dialog.querySelector('#galleryLightboxImage'),title=dialog.querySelector('#galleryLightboxTitle');
 const count=dialog.querySelector('#galleryLightboxCount');
 const close=dialog.querySelector('[data-gallery-close]'),prev=dialog.querySelector('[data-gallery-prev]'),next=dialog.querySelector('[data-gallery-next]');
 let active=0;
 function show(index){
   active=(index+cards.length)%cards.length;
   const card=cards[active];
   img.src=card.dataset.gallerySrc;
   img.alt=card.dataset.galleryTitle||'Скриншот приложения';
   title.textContent=card.dataset.galleryTitle||'Personal Finance';
   count.textContent=(active+1)+' / '+cards.length;
 }
 cards.forEach((el,index)=>el.addEventListener('click',()=>{show(index);if(!dialog.open)dialog.showModal();}));
 prev.addEventListener('click',()=>show(active-1));
 next.addEventListener('click',()=>show(active+1));
 close.addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
 dialog.addEventListener('keydown',event=>{
   if(event.key==='ArrowLeft'){event.preventDefault();show(active-1);}
   if(event.key==='ArrowRight'){event.preventDefault();show(active+1);}
 });
 dialog.addEventListener('close',()=>{img.removeAttribute('src');});
})();

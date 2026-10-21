/* Offline synthetic showcase only; no network access or connection to personal finance systems. */
(()=>{'use strict';
const fmt=n=>new Intl.NumberFormat('ru-RU',{maximumFractionDigits:0}).format(n)+' ₽';
const pace=document.getElementById('v12Pace'),label=document.getElementById('v12PaceValue'),sum=document.getElementById('v12PaceResult');
function update(){const rate=Number(pace.value);label.textContent=rate+'%';sum.textContent=fmt(140000-14*10000*rate/100)}
pace.addEventListener('input',update);update();
let year=2026,month=9;
const names=['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
const title=document.getElementById('v12MonthLabel'),holder=document.getElementById('v12Calendar'),detail=document.getElementById('v12CalendarDetail');
function render(){
 title.textContent=names[month][0].toUpperCase()+names[month].slice(1)+' '+year;
 holder.replaceChildren();const max=new Date(Date.UTC(year,month+1,0)).getUTCDate();
 for(let i=1;i<=max;i++){const b=document.createElement('button');b.type='button';b.textContent=String(i).padStart(2,'0');b.className='v12-day'+(i%4===0?' closed':'')+(i%6===0?' planned':'');
 b.setAttribute('aria-label',i+' '+names[month]+' '+year);b.addEventListener('click',()=>{detail.textContent=i+' '+names[month]+': '+(i%4===0?'демонстрационное закрытие':'закрытие не отмечено')+(i%6===0?' · есть плановая покупка':'')});holder.appendChild(b)}
 detail.textContent='Нажми на дату, чтобы посмотреть демонстрационное событие.'
}
function shift(d){month+=d;if(month<0){month=11;year--}if(month>11){month=0;year++}render()}
document.getElementById('v12Prev').addEventListener('click',()=>shift(-1));
document.getElementById('v12Next').addEventListener('click',()=>shift(1));
render();
})();
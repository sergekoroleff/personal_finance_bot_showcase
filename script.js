/* Public showcase. Completely fictional numbers. No network calls or financial API access. */
(() => {
'use strict';
const demo=document.getElementById('demoBody');
const tabs=[...document.querySelectorAll('[data-view]')];
const money=v=>new Intl.NumberFormat('ru-RU',{maximumFractionDigits:0}).format(v)+' ₽';
const state={balance:528000,scenario:0,bank:'Т-Банк'};
const overview=()=>'<div class="demo-title">PERSONAL FINANCE · OVERVIEW</div><div class="demo-hero"><small>МОЙ ДНЕВНОЙ ЛИМИТ</small><strong>8 420 ₽</strong><span>Прогноз на текущий день · демонстрация</span></div><div class="demo-pair"><div class="demo-stat"><small>НА ЗАВТРА</small><b>8 803 ₽</b></div><div class="demo-stat"><small>ДНЕЙ ДО ОТЧЁТА</small><b>23 дня</b></div></div><div class="demo-note">◈ Финансовый календарь · Goal Simulator · Daily Insights</div>';
const balances=()=>'<div class="demo-title">SMART WHAT-IF · DEMO</div><div class="demo-card"><span class="bankmark tmark">Т</span><div><strong>Т-Банк</strong><small>Доступный баланс · вымышленные данные</small></div><em id="demoBalance">'+money(state.balance)+'</em></div><div class="demo-chiprow">'+[1000,3000,5000,10000].map(n=>'<button type="button" class="demo-chip'+(state.scenario===n?' active':'')+'" data-demo-spend="'+n+'">−'+new Intl.NumberFormat('ru-RU').format(n)+' ₽</button>').join('')+'</div><div class="demo-pair"><div class="demo-stat"><small>ЛИМИТ НА СЕГОДНЯ</small><b id="demoToday">'+money(8420-Math.round(state.scenario/23))+'</b></div><div class="demo-stat"><small>НА ЗАВТРА</small><b id="demoTomorrow">'+money(8803-Math.round(state.scenario/22))+'</b></div></div><div class="demo-note">Нажми на сценарий: цифры пересчитаются. Это полностью локальная демонстрация, ничего не сохраняется.</div>';
const cards=()=>'<div class="demo-title">CARDS+ · READ-ONLY CONCEPT</div><div class="demo-card"><span class="bankmark tmark">Т</span><div><strong>Т-Банк</strong><small>Кредитная карта</small></div><em>528 000 ₽</em></div><div class="demo-card"><span class="bankmark omark">О</span><div><strong>ОТП Банк</strong><small>Кредитная карта</small></div><em>96 000 ₽</em></div><div class="demo-card"><span class="bankmark" style="background:#397862;color:#fff">F</span><div><strong>Другие средства</strong><small>Иллюстративный мультивалютный пример</small></div><em>1 200 $</em></div><div class="demo-note">Разные валюты не суммируются. Эта демонстрация не показывает реальное содержимое Google Sheets.</div>';
const history=()=>'<div class="demo-title">HISTORY 2.0 · DEMO CHART</div><svg class="demo-chart" viewBox="0 0 460 138" role="img" aria-label="Декоративный график синтетических данных"><defs><linearGradient id="chartFade" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#5deac0" stop-opacity=".29"/><stop offset="1" stop-color="#5deac0" stop-opacity="0"/></linearGradient></defs><path d="M20 111 L86 85 L152 103 L218 58 L284 75 L350 35 L438 22 L438 125 L20 125Z" fill="url(#chartFade)"/><path d="M20 111 L86 85 L152 103 L218 58 L284 75 L350 35 L438 22" fill="none" stroke="#68e7bc" stroke-width="3" stroke-linecap="round"/><g fill="#b5ffe3"><circle cx="20" cy="111" r="4"/><circle cx="86" cy="85" r="4"/><circle cx="152" cy="103" r="4"/><circle cx="218" cy="58" r="4"/><circle cx="284" cy="75" r="4"/><circle cx="350" cy="35" r="4"/><circle cx="438" cy="22" r="4"/></g></svg><div class="demo-pair"><div class="demo-stat"><small>ЛУЧШИЙ ДНЕВНОЙ ЛИМИТ</small><b>9 100 ₽</b></div><div class="demo-stat"><small>МИНИМАЛЬНЫЙ ДОЛГ</small><b>72 000 ₽</b></div></div><div class="demo-note">Синтетическая история для иллюстрации возможностей. Реальное приложение строит графики только по закрытым дням.</div>';
function render(view){
 tabs.forEach(b=>{const on=b.dataset.view===view;b.classList.toggle('selected',on);b.setAttribute('aria-selected',String(on));});
 const views={overview,balances,cards,history};
 demo.innerHTML=(views[view]||overview)();
 for(const b of demo.querySelectorAll('[data-demo-spend]'))b.addEventListener('click',()=>{
 const n=Number(b.dataset.demoSpend);state.scenario=state.scenario===n?0:n;render('balances');
 });
}
tabs.forEach(b=>b.addEventListener('click',()=>render(b.dataset.view)));
const menu=document.getElementById('menuToggle');
const nav=document.getElementById('navigation');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));}
render('overview');
})();
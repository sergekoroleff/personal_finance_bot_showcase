/* Standalone synthetic showcase; no external fetch or private data. */
(()=>{'use strict';
const levels=[0,1,2,0,3,1,0,2,1,0,2,3,1,0,1,2,3,0,1,2,0,1,3,2,0,1,0,2,3,0,1,2,0,1,3];
const heat=document.getElementById('v11Heatmap');
if(heat)levels.forEach((level,i)=>{const cell=document.createElement('span');cell.className='v11-cell'+(level?' level'+level:'');cell.title='Демонстрационный день '+(i+1)+(level?' · условная динамика':' · данных нет');heat.append(cell)});
const data={save:[100,96,91,88,85,83,82],base:[100,95,89,83,76,70,65],active:[100,92,84,74,61,49,38]};
function draw(key){const values=data[key],points=values.map((v,i)=>[9+i*50,112-(v-30)*1.2]);document.getElementById('v11Line').setAttribute('points',points.map(x=>x.join(',')).join(' '));document.getElementById('v11Area').setAttribute('d','M'+points.map(x=>x.join(' ')).join(' L')+' L309 120 L9 120Z');document.getElementById('v11Figure').textContent=values.at(-1)+'%';document.querySelectorAll('[data-v11-scenario]').forEach(b=>{b.classList.toggle('active',b.dataset.v11Scenario===key)})}
document.querySelectorAll('[data-v11-scenario]').forEach(b=>b.addEventListener('click',()=>draw(b.dataset.v11Scenario)));
draw('base');
})();
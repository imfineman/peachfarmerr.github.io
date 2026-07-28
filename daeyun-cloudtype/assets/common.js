const API=(window.DAEYUN_API_URL||'').replace(/\/$/,'');
const won=n=>Number(n||0).toLocaleString('ko-KR')+'원';
const phone=v=>{const d=v.replace(/\D/g,'').slice(0,11);return d.length<4?d:d.length<8?`${d.slice(0,3)}-${d.slice(3)}`:`${d.slice(0,3)}-${d.slice(3,7)}-${d.slice(7)}`};
function toggleMenu(){document.querySelector('.nav')?.classList.toggle('open')}
async function api(path,options={}){if(!API||API.includes('YOUR-SERVICE'))throw new Error('config.js에 Cloudtype API 주소를 먼저 입력해주세요.');const r=await fetch(API+path,{...options,headers:{'Content-Type':'application/json',...(options.headers||{})}});const data=await r.json().catch(()=>({}));if(!r.ok)throw new Error(data.message||'서버 요청에 실패했습니다.');return data}

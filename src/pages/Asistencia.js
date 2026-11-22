import {useState} from 'react';import {MapPin} from 'lucide-react';import {useApp} from '../context/AppContext';import {Head,Table,Field,useForm} from '../components/UI';import {distanciaMetros,byId} from '../utils';import s from '../styles/ui.module.css';
export default function Asistencia(){
 const {user,rol,db,add,setConfig}=useApp();const [obs,setObs]=useState('');const [msg,setMsg]=useState(null);const [busy,setBusy]=useState(false);
 const {f,ch}=useForm({...db.config});const admin=rol==='Administrador';
 const rows=db.asistencias.filter(a=>admin||a.userId===user.id);const tipo=db.asistencias.find(a=>a.userId===user.id)?.tipo==='Entrada'?'Salida':'Entrada';
 const registrar=(lat,lng)=>{const d=Math.round(distanciaMetros(lat,lng,db.config.latitud,db.config.longitud));
  if(d>db.config.radio)return setMsg({bad:1,t:`Fuera del perímetro: estás a ${d} m (máximo ${db.config.radio} m). Marcación bloqueada.`});
  add('asistencias',{userId:user.id,tipo,hora:new Date().toLocaleString('es-BO'),dist:d,obs});setObs('');setMsg({t:`${tipo} registrada a ${d} m del centro.`});};
 const marcar=()=>{if(!navigator.geolocation)return setMsg({bad:1,t:'Geolocalización no disponible en este navegador.'});setBusy(true);
  navigator.geolocation.getCurrentPosition(p=>{setBusy(false);registrar(p.coords.latitude,p.coords.longitude);},()=>{setBusy(false);setMsg({bad:1,t:'No se pudo obtener tu ubicación. Revisa el permiso del navegador.'});},{enableHighAccuracy:true,timeout:10000});};
 return <><Head title="Asistencia" sub={`Marcación por GPS · Rol: ${rol}`}/>
 {!admin&&<div className={s.card} style={{textAlign:'center'}}><h3>Marcar {tipo}</h3><button className={`${s.btn} ${s.big}`} style={{justifyContent:'center'}} disabled={busy} onClick={marcar}><MapPin size={20}/>{busy?'Ubicando…':`Marcar ${tipo}`}</button>
  {msg&&<div className={`${s.alert} ${msg.bad?s.bad:s.good}`}>{msg.t}</div>}
  <div style={{maxWidth:420,margin:'0 auto',textAlign:'left'}}><Field label="Observaciones (atrasos o permisos, opcional)"><textarea rows={2} value={obs} onChange={e=>setObs(e.target.value)}/></Field></div>
  <button className={`${s.btn} ${s.ghost} ${s.sm}`} onClick={()=>registrar(db.config.latitud+0.0003,db.config.longitud)}>Demo: ubicación dentro</button>{' '}<button className={`${s.btn} ${s.warnBtn} ${s.sm}`} onClick={()=>registrar(db.config.latitud+0.01,db.config.longitud)}>Demo: ubicación fuera</button></div>}
 {admin&&<div className={s.card}><h3>Perímetro de geolocalización</h3><div className={s.grid3}><Field label="Latitud prevista"><input type="number" step="any" value={f.latitud} onChange={ch('latitud')}/></Field><Field label="Longitud prevista"><input type="number" step="any" value={f.longitud} onChange={ch('longitud')}/></Field><Field label="Radio permitido (m)"><input type="number" min="10" value={f.radio} onChange={ch('radio')}/></Field></div>
  <button className={s.btn} onClick={()=>setConfig({latitud:+f.latitud,longitud:+f.longitud,radio:+f.radio})}>Guardar perímetro</button></div>}
 <div className={s.card}><h3>Registros ({rows.length})</h3><Table rows={rows} cols={[{h:'Persona',r:r=>byId(db.usuarios,r.userId)?.nombre},{h:'Tipo',k:'tipo'},{h:'Fecha y hora',k:'hora'},{h:'Distancia',r:r=>`${r.dist} m`},{h:'Observaciones',r:r=>r.obs||'—'}]}/></div></>;
}

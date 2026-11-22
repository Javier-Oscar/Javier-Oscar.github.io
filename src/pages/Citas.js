import {useState} from 'react';import {Plus,CalendarClock} from 'lucide-react';import {useApp} from '../context/AppContext';import {Head,Table,Badge,Field,Modal,useForm} from '../components/UI';import {byId,haySolapeCita} from '../utils';import s from '../styles/ui.module.css';
const fmt=v=>v?new Date(v).toLocaleString('es-BO',{dateStyle:'medium',timeStyle:'short'}):'—';
function Nueva({onClose}){
 const {user,db,add}=useApp();const ps=db.usuarios.filter(u=>u.rol==='Psicólogo');
 const {f,ch,er,setEr}=useForm({pacienteId:db.pacientes[0].id,psicologoId:ps[0].id,fechaHora:'',motivo:''});
 const guardar=e=>{e.preventDefault();const x={};if(!f.fechaHora)x.f='Selecciona fecha y hora';else if(new Date(f.fechaHora)<new Date())x.f='La cita debe ser a futuro';else if(haySolapeCita(db.citas,+f.psicologoId,f.fechaHora))x.f='⚠ El psicólogo ya tiene una cita en ese horario (±60 min)';if(!f.motivo.trim())x.m='Requerido';setEr(x);if(Object.keys(x).length)return;
  add('citas',{pacienteId:+f.pacienteId,psicologoId:+f.psicologoId,fechaHora:f.fechaHora,motivo:f.motivo,estado:'Programada',agendadaPor:user.id,fechaAnterior:'',motivoReagenda:''});onClose();};
 return <Modal title="Agendar cita" onClose={onClose}><form onSubmit={guardar}><div className={s.g2}>
  <Field label="Paciente"><select value={f.pacienteId} onChange={ch('pacienteId')}>{db.pacientes.map(p=><option key={p.id} value={p.id}>{p.nombres} {p.apellidos}</option>)}</select></Field>
  <Field label="Psicólogo que atenderá"><select value={f.psicologoId} onChange={ch('psicologoId')}>{ps.map(p=><option key={p.id} value={p.id}>{p.nombre} · {p.area}</option>)}</select></Field></div>
  <Field label="Fecha y hora *" error={er.f}><input type="datetime-local" value={f.fechaHora} onChange={ch('fechaHora')}/></Field>
  <Field label="Motivo de la cita *" error={er.m}><input value={f.motivo} onChange={ch('motivo')}/></Field><button className={s.btn}>Agendar</button></form></Modal>;
}
function Reagendar({cita,onClose}){
 const {db,update}=useApp();const {f,ch,er,setEr}=useForm({fechaHora:'',motivo:''});
 const guardar=e=>{e.preventDefault();const x={};if(!f.fechaHora)x.f='Selecciona la nueva fecha y hora';else if(new Date(f.fechaHora)<new Date())x.f='La cita debe ser a futuro';else if(f.fechaHora===cita.fechaHora)x.f='Elige un horario distinto al actual';else if(haySolapeCita(db.citas,cita.psicologoId,f.fechaHora,cita.id))x.f='⚠ Ya tienes otra cita en ese horario (±60 min)';if(!f.motivo.trim())x.m='Indica el motivo del reagendamiento';setEr(x);if(Object.keys(x).length)return;
  update('citas',cita.id,{fechaHora:f.fechaHora,fechaAnterior:cita.fechaHora,motivoReagenda:f.motivo,estado:'Reagendada'});onClose();};
 return <Modal title="Reagendar cita" onClose={onClose}><p className={s.sub}>Paciente: {(p=>`${p.nombres} ${p.apellidos}`)(byId(db.pacientes,cita.pacienteId))}<br/>Horario actual: {fmt(cita.fechaHora)}</p><form onSubmit={guardar}>
  <Field label="Nueva fecha y hora *" error={er.f}><input type="datetime-local" value={f.fechaHora} onChange={ch('fechaHora')}/></Field>
  <Field label="Motivo del reagendamiento *" error={er.m}><textarea rows={2} value={f.motivo} onChange={ch('motivo')}/></Field><button className={s.btn}>Confirmar reagendamiento</button></form></Modal>;
}
export default function Citas(){
 const {user,rol,db}=useApp();const rec=rol==='Recepción',psi=rol==='Psicólogo';const [nueva,setNueva]=useState(false);const [re,setRe]=useState(null);
 const rows=(psi?db.citas.filter(c=>c.psicologoId===user.id):db.citas).slice().sort((a,b)=>a.fechaHora.localeCompare(b.fechaHora));
 const nom=id=>byId(db.usuarios,id)?.nombre;const pac=id=>{const p=byId(db.pacientes,id);return `${p.nombres} ${p.apellidos}`;};
 return <><Head title="Citas" sub={`Agenda de atención · Rol: ${rol}`} action={rec&&<button className={s.btn} onClick={()=>setNueva(true)}><Plus size={15}/> Agendar cita</button>}/>
 {psi&&<div className={`${s.alert} ${s.lock}`}><CalendarClock size={13}/> Tienes {rows.length} cita(s) agendada(s) por Recepción.</div>}
 <div className={s.card}><h3>{psi?'Mis citas':'Citas agendadas'} ({rows.length})</h3><Table rows={rows} cols={[{h:'Fecha y hora',r:r=>fmt(r.fechaHora)},{h:'Paciente',r:r=>pac(r.pacienteId)},...(psi?[]:[{h:'Psicólogo',r:r=>nom(r.psicologoId)}]),{h:'Motivo',k:'motivo'},{h:'Agendada por',r:r=>nom(r.agendadaPor)},{h:'Estado',r:r=><Badge t={r.estado}/>},{h:'Detalle',r:r=>r.fechaAnterior?`Antes: ${fmt(r.fechaAnterior)} · ${r.motivoReagenda}`:'—'},...(psi?[{h:'',r:r=><button className={`${s.btn} ${s.ghost} ${s.sm}`} onClick={()=>setRe(r)}>Reagendar</button>}]:[])]}/></div>
 {nueva&&<Nueva onClose={()=>setNueva(false)}/>}{re&&<Reagendar cita={re} onClose={()=>setRe(null)}/>}</>;
}

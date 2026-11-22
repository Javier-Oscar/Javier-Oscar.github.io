import {Link} from 'react-router-dom';import {Heart,Users,ShieldCheck,Boxes} from 'lucide-react';import {useApp} from '../context/AppContext';import {Head,Badge,Table} from '../components/UI';import {hoy} from '../utils';import s from '../styles/ui.module.css';
export default function Dashboard(){
 const {db,rol,user}=useApp();const prox=db.citas.filter(c=>c.psicologoId===user.id).length;const mora=db.inventario.filter(i=>i.tipo==='Préstamo'&&i.limite<hoy()).length;
 const st=[['Atenciones del mes',db.sesiones.length+126,Heart,'↑ 12% vs. mes anterior'],['Asistencia del equipo','94%',Users,'% de registros'],['Supervisiones realizadas',db.bitacoras.filter(b=>b.estado!=='Pendiente').length+14,ShieldCheck,'Este mes'],['Artículos disponibles',47,Boxes,`${mora} préstamos en mora`]];
 const act=[{id:1,a:'Registro de asistencia actualizado',m:'Asistencia',f:'Hoy, 09:15',e:'Aprobado'},{id:2,a:'Supervisión grupal registrada',m:'Supervisión',f:'Ayer, 15:40',e:'Aprobado'},{id:3,a:'Material revisado',m:'Inventarios',f:'Ayer, 11:20',e:'Pendiente'}];
 return <><Head title="Panel general" sub={`Resumen de actividad · Noviembre 2026 · Rol: ${rol}`}/>
 {rol==='Psicólogo'&&prox>0&&<div className={`${s.alert} ${s.lock}`}>Tienes {prox} cita(s) agendada(s) por Recepción. <Link to="/citas">Ver citas</Link></div>}
 <div className={s.grid4}>{st.map(([t,v,I,n])=><div key={t} className={`${s.card} ${s.stat}`}><small>{t} <I size={16} style={{float:'right',color:'var(--blue)'}}/></small><b>{v}</b><i>{n}</i></div>)}</div>
 <div className={s.grid3} style={{marginBottom:16}}><div className={s.card}><h3>Atenciones por mes</h3><div className={s.bars}>{[60,75,65,100,115,118].map((h,i)=><div key={i} style={{height:h}}>{['Jun','Jul','Ago','Sep','Oct','Nov'][i]}</div>)}</div></div>
 <div className={s.card}><h3>Asistencia semanal</h3><svg viewBox="0 0 200 90" width="100%"><polyline fill="none" stroke="#0069D1" strokeWidth="3" points="5,70 40,50 75,55 110,30 145,38 195,12"/></svg></div>
 <div className={s.card}><h3>Estado del inventario</h3><div className={s.donut}><span>60%</span></div><p className={s.note}>Disponible 60% · En uso 22% · Revisar 18%</p></div></div>
 <div className={s.card}><h3>Últimas actividades</h3><Table cols={[{h:'Actividad',k:'a'},{h:'Módulo',k:'m'},{h:'Fecha',k:'f'},{h:'Estado',r:r=><Badge t={r.e}/>}]} rows={act}/></div></>;
}

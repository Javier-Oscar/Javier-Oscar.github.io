import {NavLink,Outlet,useNavigate} from 'react-router-dom';
import {LayoutGrid,Heart,Users,ClipboardCheck,ShieldCheck,Boxes,BarChart3,FileText,NotebookPen,Stethoscope,CalendarClock,Lock,ArrowLeft} from 'lucide-react';
import {useApp} from '../context/AppContext';import {ROLES} from '../data/mockData';import s from '../styles/ui.module.css';
const NAV={panel:['Panel general',LayoutGrid],pacientes:['Pacientes y atención psicológica',Heart],citas:['Citas',CalendarClock],sesiones:['Sesiones psicológicas',Stethoscope],personal:['Personal y pasantes',Users],asistencia:['Asistencia',ClipboardCheck],legajo:['Legajo documental',FileText],bitacora:['Bitácora diaria',NotebookPen],supervision:['Supervisión',ShieldCheck],inventarios:['Inventarios',Boxes],reportes:['Reportes',BarChart3]};
export default function MainLayout(){
 const {rol,entrar,salir,menu}=useApp();const nav=useNavigate();
 return <div className={s.shell}><aside className={s.side}>
  <div className={s.brand}><div className={s.logo}><Heart size={16}/></div><div><div className={s.bs}>SISTEMA INSTITUCIONAL</div><div className={s.bn}>SIGCI-EYS</div></div></div>
  <div className={s.menuT}>MENÚ PRINCIPAL</div>
  {menu.map(id=>{const [l,I]=NAV[id];return <NavLink key={id} to={`/${id}`} className={({isActive})=>`${s.nav} ${isActive?s.on:''}`}><I size={17}/>{l}</NavLink>;})}
  <div className={s.foot}><span><Lock size={11}/> Vista de permisos ilustrativa</span><button className={s.out} onClick={()=>{salir();nav('/login');}}><ArrowLeft size={14}/> Salir de la demo</button></div>
 </aside><div className={s.col}>
  <header className={s.top}><b>SIGCI-EYS</b><span>Sistema Integral de Gestión y Control Institucional</span><span className={s.sp}/><span className={s.chip}>DATOS FICTICIOS</span>
   <select value={rol} style={{padding:'8px 10px',borderRadius:10,border:'1px solid var(--border)',font:'700 12px Nunito'}} onChange={e=>{entrar(e.target.value);nav('/panel');}}>{ROLES.map(r=><option key={r}>{r}</option>)}</select></header>
  <main className={s.main}><Outlet/></main></div></div>;
}

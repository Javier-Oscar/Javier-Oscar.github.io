import {createContext,useContext,useState} from 'react';
import * as M from '../data/mockData';
const Ctx=createContext();
// Permisos RBAC: módulos visibles por rol
export const MENU={
 Administrador:['panel','pacientes','sesiones','personal','asistencia','legajo','inventarios'],
 Supervisor:['panel','pacientes','sesiones','asistencia','supervision','reportes'],
 'Psicólogo':['panel','pacientes','citas','sesiones','asistencia'],
 Pasante:['panel','sesiones','asistencia','legajo','bitacora','reportes'],
 'Recepción':['panel','pacientes','citas','sesiones','asistencia','legajo']};
export function AppProvider({children}){
 const [user,setUser]=useState(null);
 const [db,setDb]=useState({usuarios:M.usuarios,pacientes:M.pacientes,sesiones:M.sesiones,bitacoras:M.bitacoras,documentos:M.documentos,reportes:M.reportes,inventario:M.inventario,citas:M.citas,asistencias:M.asistencias,config:M.config0});
 const entrar=rol=>setUser(db.usuarios.find(u=>u.rol===rol));
 const add=(k,i)=>setDb(d=>({...d,[k]:[{...i,id:Date.now()},...d[k]]}));
 const update=(k,id,p)=>setDb(d=>({...d,[k]:d[k].map(x=>x.id===id?{...x,...p}:x)}));
 const setConfig=config=>setDb(d=>({...d,config}));
 return <Ctx.Provider value={{user,rol:user?.rol,entrar,salir:()=>setUser(null),db,add,update,setConfig,menu:user?MENU[user.rol]:[]}}>{children}</Ctx.Provider>;
}
export const useApp=()=>useContext(Ctx);

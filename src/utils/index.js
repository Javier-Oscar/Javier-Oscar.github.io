export const hoy=()=>new Date().toISOString().slice(0,10);
export const byId=(l,id)=>l.find(x=>x.id===id);
export const calcularEdad=(f)=>{if(!f)return null;const h=new Date(),n=new Date(f);let e=h.getFullYear()-n.getFullYear();const m=h.getMonth()-n.getMonth();if(m<0||(m===0&&h.getDate()<n.getDate()))e--;return e;};
// Fórmula de Haversine (metros)
export const distanciaMetros=(lat1,lon1,lat2,lon2)=>{const R=6371000,r=x=>x*Math.PI/180;const a=Math.sin(r(lat2-lat1)/2)**2+Math.cos(r(lat1))*Math.cos(r(lat2))*Math.sin(r(lon2-lon1)/2)**2;return 2*R*Math.asin(Math.sqrt(a));};
// Choque horario: mismo pasante, misma fecha, rangos que se cruzan
export const haySolape=(lista,pasanteId,fecha,ini,fin)=>lista.some(b=>b.pasanteId===pasanteId&&b.fecha===fecha&&ini<b.fin&&fin>b.ini);
// Conflicto de agenda: mismo psicólogo con otra cita a menos de 60 min
export const haySolapeCita=(citas,psicologoId,fechaHora,excluirId)=>citas.some(c=>c.id!==excluirId&&c.psicologoId===psicologoId&&Math.abs(new Date(c.fechaHora)-new Date(fechaHora))<3600000);

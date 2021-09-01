const 
empleados={
    informatica:{
    nombre:'Mario Alexander Carpio',
    puesto:'Analista de Sistemas'
    },
    recursosHumanos:{
    nombre:'Carla Patricia Alonzo Días',
    puesto:'Reclutador'
    },
    ventas:{
    nombre:'Marcos',
    puesto:'Marketing'
    },
   }

   export const buscarEmpleado= (nom)=> {
    const empleado=empleados[nom];
    return new Promise((resolve,reject)=>{

        if (empleado){
            resolve(empleado);
            }else{
            reject(`No existe el emplado con el nombre ${nom}`);
            }
          
    });
   }

   export const buscarEmpleadoAsync= async(nom)=> {

    const empleado=empleados[nom];
    
        if (empleado){
            return(empleado);
            }else{
                throw Error(`No existe el emplado con el nombre ${nom}`);
            }         
   }


   const tiempoLento=new Promise((resolve, reject)=>{
    setTimeout(() => resolve('Promesa de tiempo lento'),2000);
   })

   const tiempoMedio=new Promise((resolve, reject)=>{
    setTimeout(() => resolve('Promesa de tiempo medio'),1500);
   })

   const tiempoRapido=new Promise((resolve, reject)=>{
    setTimeout(() => resolve('Promesa de tiempo rápido'),1000);
   })

   export{
    tiempoLento,
    tiempoMedio,
    tiempoRapido
   }
   
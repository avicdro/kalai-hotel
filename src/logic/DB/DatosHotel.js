
export let habitaciones = []
for (let index = 1; index <= 40; index++) {
  if( index <= 25 ){
    let habitacion = {
      numero: index,
      tipo: "simple",
      img: "/habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG",
      disponible: true, 
      descBreve: "Wifi gratuito, aire acondicionado, escritorio, baño con ducha ...",
      precioUnaNoche: 19,
    };
    habitaciones.push(habitacion);  
  }else if (index <= 35){
    let habitacion = {
      numero: index,
      tipo: "matrimonial",
      img: "/habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG",
      disponible: true,
      descBreve: "Wifi gratuito, aire acondicionado, escritorio, baño con ducha ...",
      precioUnaNoche: 29,
    };
    habitaciones.push(habitacion);
  }else if(index <= 40) {
      let habitacion = {
        numero: index,
        tipo: "suit",
        img: "/habitaciones/habitaciones-simples-individuales/hsi2-cama.JPG",
        disponible: true, 
        descBreve: "Wifi gratuito, aire acondicionado, escritorio, baño con ducha ...",
        precioUnaNoche: 39,
      };
      habitaciones.push(habitacion);
  }

}


export let hotelData = {
  habitaciones,
  dataHabitaciones: {
    cantidad: 40,
    libres: 0,
    usadas: 0,
    simples: {
      cantidad: 10,
      libres: 0,
      usadas: 0,
    },
    matrimonial: {
      cantidad: 10,
      libres: 0,
      usadas: 0,
    },
    suit: {
      cantidad: 5,
      libres: 0,
      usadas: 0,
    },
  },
  servicios: {
    spa: {
      precio: "12$",
      disponible: true,
      horario: "8h - 22h"
    },
    Gimnasio: {
      precio: "5$",
      disponible: true,
      horario: "8h - 21h"
    },
    Estacionamiento: {
      precio: "Gratis",
      disponible: true,
      horario: "8h - 22h"
    },
  }
}

export const descGeneralTipoHabitacion = {
  individual: {
    title: "Habitación individual",
    descLarga: ` Muy acogedoras, dan una sensación de confort intemporal; diseñadas
    para momentos especiales y estancias tranquilas. Las habitaciones
    individuales, con 18 m2, tienen cama individual, baño en mármol
    con bañera y un espacioso comedor bien equipado, adaptado a tus necesidades. Además, le reciben con
    una bebida de bienvenida.`,
    caracteristicas: ["Concina bien equipada","Comedor","Wifi gratuito", "Aire acondicionado con termostato individual", "Televisión LCD-100 canales","Teléfono","Minibar","Espejo","Secador de pelo","Zapatillas","Albornoz","Escritorio","Internet ADSL", "Caja fuerte individual digital"],
    precioUnaNoche: 19,
  },
  doble: {
    title: "Habitación Doble",
    descLarga: `  Muy acogedoras, dan una sensación de confort intemporal; diseñadas
    para momentos especiales y estancias tranquilas. Las habitaciones
    individuales, con 90 m2, tienen doble camas, baño en mármol con
    bañera y un espacioso comedor bien equipado, adaptado a tus
    necesidades. Además, le reciben con una bebida de bienvenida.`,
    caracteristicas: ["Concina bien equipada","Comedor","Wifi gratuito", "Aire acondicionado con termostato individual", "Televisión LCD-100 canales","Teléfono","Minibar","Espejo","Secador de pelo","Zapatillas","Albornoz","Escritorio","Internet ADSL", "Caja fuerte individual digital"],
    precioUnaNoche: 29,
  },
  triple: {
    title: "Habitación Triple",
    descLarga: ` Muy acogedoras, dan una sensación de confort intemporal; diseñadas
    para momentos especiales y estancias tranquilas. Las habitaciones
    individuales, con 95m2, dispone dos camas y una supletoria, baño en mármol
    con bañera y un espacioso comedor bien equipado, adaptado a tus necesidades. Además, le reciben con
    una bebida de bienvenida.`,
    caracteristicas: ["Concina bien equipada","Comedor","Wifi gratuito", "Aire acondicionado con termostato individual", "Televisión LCD-100 canales","Teléfono","Minibar","Espejo","Secador de pelo","Zapatillas","Albornoz","Escritorio","Internet ADSL", "Caja fuerte individual digital"],
    precioUnaNoche: 39,
  }
}


// class Hotel {

//   constructor(
//     contidadHabitaciones,
//     habitaciones
//   ) {


//   }
// }


// /**
//  * @class Habitacion
//  * @constructor (
//  *      @param number numeroDeHabitacionId
//  *      @param number cantidadCamas,
//  *      @param number cantidadBaños,
//  *      @param string tipoDeHabitacion,
//  *      @param bool conHuesped,
//  *      @param Huespedes ObjHuespedes
//  * )
//  */
// class Habitacion {

//   constructor(
//     numeroDeHabitacionId,
//     cantidadCamas,
//     cantidadBaños,
//     tipoDeHabitacion,

//     conHuesped,
//     ObjHuespedes,
//   ) {
//     this.numeroDeHabitacionId = numeroDeHabitacionId;
//     this.cantidadCamas = cantidadCamas;
//     this.cantidadBaños = cantidadBaños;
//     this.tipoDeHabitacion = tipoDeHabitacion;
//     this.conHuesped = conHuesped;
//     this.ObjHuespedes = ObjHuespedes;
//   }
// }


// class Huespedes {
//   constructor(
//     numeroDeHabitacionId,
//     cantidadAdultos,
//     cantidadNiños,
//     servicios,
//   ) {

//     this.numeroDeHabitacionId = numeroDeHabitacionId;
//     this.cantidadAdultos = cantidadAdultos;
//     this.cantidadNiños = cantidadNiños;
//     this.servicios = servicios;
//   }
// }






// 
// 
//      Habitacion             1->n      Huespedes
//  // numeroDeHabitacionId,    -> numeroDeHabitacionId,
    // cantidadCamas,           // cantidadAdultos
    // cantidadBaños,           // cantidadNiños
    // tipoDeHabitacion,        //
    // conHuesped,              //
    // ObjHuespedes,            //
// // // 
// // // 
// 
// 
// 
// 
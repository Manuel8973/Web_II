function sumarPropiedad(arr, propiedad) {
    return arr.reduce((suma, obj) => suma + (obj[propiedad] || 0), 0);
}


let objetos = [
    { valor: 10 }, 
    { valor: 20 }, 
    { valor: 30 }
];


console.log(sumarPropiedad(objetos, "valor")); 

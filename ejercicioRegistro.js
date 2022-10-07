"use strict";
exports.__esModule = true;
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, patente, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.año = año;
    }
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre, direccion, listaAutos) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaAutos = listaAutos;
    }
    RegistroAutomotor.prototype.getlistaDeAutos = function () {
        return this.listaAutos;
    };
    RegistroAutomotor.prototype.mostrarRegistro = function () {
        console.log(this.nombre);
        console.log(this.direccion);
        console.log(this.listaAutos);
    };
    return RegistroAutomotor;
}());
function borrarAuto(arregloAuto, posicion) {
    delete arregloAuto[posicion];
}
name();
{
}
agregarAuto(autos, (Array));
void {
    let: let,
    marca: string = ReadlineSync.question("Ingrese la marca de su auto: "),
    let: let,
    modelo: string = ReadlineSync.question("Ingrese el modelo de su auto: "),
    let: let,
    año: number = ReadlineSync.questionInt("Ingrese el año de su auto: "),
    let: let,
    patente: string = ReadlineSync.question("Ingrese la patente: "),
    let: let,
    nuevoAuto: Auto = new Auto(marca, modelo, año, patente),
    autos: autos,
    : .push(nuevoAuto)
};
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arreglo = archivoTxt.split(';');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arreglo);
    };
    GestorDeArchivos.prototype.getArreglo = function () {
        return this.arreglo;
    };
    return GestorDeArchivos;
}());
//funcion crear auto desde gestor de archivos
function crearAuto(auto, arregloAutos) {
    var propiedades = auto.split(',');
    var marca = propiedades[0];
    var modelo = propiedades[1];
    var patente = propiedades[2];
    var año = Number(propiedades[3]);
    var nuevoAuto = new Auto(marca, modelo, patente, año);
    arregloAutos.push(nuevoAuto);
}
var datos = new GestorDeArchivos("autos.txt");
datos.mostrarArreglo();
var listaAutos = [];
for (var i = 0; i < datos.getArreglo().length; i++) {
    crearAuto(datos.getArreglo()[i], listaAutos);
}
console.log(listaAutos);
//prueba borrar auto 
borrarAuto(listaAutos, 3);
console.log(listaAutos);

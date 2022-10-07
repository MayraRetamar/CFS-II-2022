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
//funcion crear auto por el usuario
var agregarAuto;
(function (autos) {
    var marca = ReadlineSync.question("Ingrese la marca de su auto: ");
    var modelo = ReadlineSync.question("Ingrese el modelo de su auto: ");
    var año = ReadlineSync.questionInt("Ingrese el año de su auto: ");
    var patente = ReadlineSync.question("Ingrese la patente: ");
    var nuevoAuto = new Auto(marca, modelo, año, patente);
    autos.push(nuevoAuto);
});
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

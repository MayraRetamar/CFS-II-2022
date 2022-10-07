import * as fs from 'fs'
import * as ReadlineSync from 'readline-sync';

class Auto { 
    private marca : string;
    private modelo : string;
    private año : number;
    private patente : string;

    public constructor(marca: string, modelo: string, patente: string, año: number){ 
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.año = año;

    }
}

class RegistroAutomotor { 
    private nombre : string;
    private direccion : string;
    private listaAutos : Array<Auto>;

    public constructor(nombre: string, direccion: string, listaAutos: Array<Auto>){
        this.nombre= nombre;
        this.direccion= direccion;
        this.listaAutos= listaAutos;

    }

    public getlistaDeAutos() : Array<Auto> { 
        return this.listaAutos;
    }

    public mostrarRegistro() : void { 
        console.log(this.nombre);
        console.log(this.direccion);
        console.log(this.listaAutos);
    }
   
   }
   function borrarAuto(arregloAuto : Array<Auto>, posicion : number) : void { 
    delete arregloAuto[posicion];
   }

   //funcion crear auto por el usuario

   
   let agregarAuto(autos : Array<Auto>) : void => {
    let marca : string = ReadlineSync.question("Ingrese la marca de su auto: ");
    let modelo : string = ReadlineSync.question("Ingrese el modelo de su auto: ");
    let año : number = ReadlineSync.questionInt("Ingrese el año de su auto: ");
    let patente : string = ReadlineSync.question("Ingrese la patente: ");
    let nuevoAuto : Auto = new Auto(marca, modelo, año, patente);

    autos.push(nuevoAuto);

   }

class GestorDeArchivos { 
    private arreglo : string[];

    constructor(txtFileLocation : string){ 
        let archivoTxt : string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arreglo = archivoTxt.split(';');
    }

    public mostrarArreglo(): void { 
        console.log(this.arreglo);
    }

    public getArreglo() : string[] { 
        return this.arreglo;
    }

}
//funcion crear auto desde gestor de archivos
function crearAuto(auto : string, arregloAutos : Array<Auto>): void { 
    let propiedades : string[] = auto.split(',');
    let marca : string = propiedades[0];
    let modelo : string = propiedades[1];
    let patente : string = propiedades[2];
    let año : number = Number(propiedades[3]);

    let nuevoAuto : Auto = new Auto(marca, modelo, patente, año);

    arregloAutos.push(nuevoAuto);
}

let datos: GestorDeArchivos = new GestorDeArchivos("autos.txt");

datos.mostrarArreglo();

let listaAutos : Array<Auto> = []

for (let i : number = 0; i < datos.getArreglo().length; i ++) { 
    crearAuto(datos.getArreglo()[i], listaAutos );
} 

console.log(listaAutos);

//prueba borrar auto 

borrarAuto(listaAutos, 3);
console.log(listaAutos)
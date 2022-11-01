export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, apellido: string, description: string, img: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = description;
        this.img = img;
    }
}
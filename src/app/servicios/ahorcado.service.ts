import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AhorcadoService {

  constructor() { }

  palabras: string[] = ['ELEFANTE', 'LEON', 'TIGRE', 'BALLENA', 'DELFIN', 'AGUILA', 'CANGURO', 'PINGUINO', 'RINOCERONTE', 'GATO', 'PERRO', 'LOBO', 'ZORRO', 'TORTUGA', 'SERPIENTE', 'LAGARTO', 'ARDILLA', 'CABALLO', 'BURRO', 'VACA', 'OVEJA', 'PAVO', 'GALLO', 'PATO', 'CISNE', 'OSO', 'CONEJO', 'MURCIELAGO', 'BUFALO', 'ABEJA', 'HORMIGA', 'MARIPOSA', 'MOSQUITO', 'GRILLO', 'LANGOSTA', 'CARACOL', 'TIBURON', 'MEDUSA', 'ARENA', 'MONTAÑA', 'RIO', 'OCEANO', 'LAGO', 'BOSQUE', 'DESIERTO', 'ISLA', 'VOLCAN', 'CUEVA', 'GLACIAR', 'PIEDRA', 'ROCA', 'TIERRA', 'VIENTO', 'FUEGO', 'AGUA', 'NIEVE', 'HIELO', 'GRANIZO', 'HURACAN', 'TORNADO', 'ARROZ', 'PASTA', 'PIZZA', 'HAMBURGUESA', 'PAN', 'QUESO', 'LECHE', 'HUEVO', 'CARNE', 'PESCADO', 'MANZANA', 'PLATANO', 'NARANJA', 'UVA', 'FRESA', 'MANGO', 'SANDIA', 'PIÑA', 'LIMON', 'MELON', 'TOMATE', 'LECHUGA', 'ZANAHORIA', 'PAPA', 'CEBOLLA', 'AJO', 'PIMIENTO', 'CALABAZA', 'ESPINACA', 'BROCOLI', 'COLIFLOR', 'CHOCOLATE', 'GALLETA', 'PASTEL', 'HELADO', 'DULCE', 'MIEL', 'SOFA', 'SILLA', 'MESA', 'LAMPARA', 'TELEVISOR', 'VENTANA', 'PUERTA', 'ALFOMBRA', 'CAMA', 'ARMARIO', 'ESPEJO', 'CORTINA', 'LIBRERO', 'ESCRITORIO', 'ESTUFA', 'REFRIGERADOR', 'HORNO', 'MICROONDAS', 'TOSTADORA', 'BATIDORA', 'CUCHARA', 'TENEDOR', 'CUCHILLO', 'PLATO', 'VASO', 'TAZA', 'SARTEN', 'OLLA', 'COLADOR', 'TABLA', 'LAVADORA', 'SECADORA', 'PLANCHA', 'PERCHERO', 'ALMOHADA', 'SABANAS', 'MANTA', 'TOALLA', 'FREGADERO', 'DUCHA', 'BAÑERA', 'INODORO', 'PAPELERA', 'ESCOBA', 'ASPIRADORA', 'VENTILADOR', 'CALEFACTOR', 'LAVAVAJILLAS', 'RADIADOR', 'AIRE ACONDICIONADO', 'PARRILLA', 'CARPINTERO', 'ELECTRICISTA', 'FONTANERO', 'MECANICO', 'DOCTOR', 'ENFERMERO', 'DENTISTA', 'BOMBERO', 'POLICIA', 'PROFESOR', 'INGENIERO', 'ARQUITECTO', 'ABOGADO', 'JUEZ', 'ESCRITOR', 'PERIODISTA', 'FOTOGRAFO', 'PILOTO', 'AZAFATA', 'COCINERO', 'PANADERO', 'MESERO', 'BARTENDER', 'CAJERO', 'VENDEDOR', 'BIBLIOTECARIO', 'PROGRAMADOR', 'DISEÑADOR', 'ARTISTA', 'MUSICO', 'CANTANTE', 'ACTOR', 'DIRECTOR', 'PRODUCTOR', 'EDITOR', 'QUIMICO', 'BIOLOGO', 'FISICO', 'MATEMATICO', 'GEOLOGO', 'ASTRONOMO', 'PSICOLOGO', 'PSIQUIATRA', 'FARMACEUTICO', 'VETERINARIO', 'JARDINERO', 'AGRICULTOR', 'GANADERO', 'PINTOR', 'ESCULTOR', 'TAXISTA', 'CHOFER'];

  letras: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  
  obtenerPalabra(): string {
    const indice = Math.floor(Math.random() * this.palabras.length) //creo un indice random en base a la cantidad de palabras que hay.
    const palabra = this.palabras[indice];  //saco una palabra ubicada en el indice random que calcule arriba
    this.palabras.splice(indice, 1); //saco la palabra del array asi no se repite
    return palabra;
  }
}

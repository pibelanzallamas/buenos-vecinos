import banana from "../assets/images/banana.jpg";
import cuadrada from "../assets/images/cuadrada.jpeg";
import huevos from "../assets/images/huevos.png";
import dulce from "../assets/images/dulce.jpg";
import paty from "../assets/images/paty.jpg";
import asado from "../assets/images/asado.jpg";
import leche from "../assets/images/leche.png";
import arroz from "../assets/images/arroz.png";
import jamon from "../assets/images/jamon.jpg";

export const products = [
  {
    name: "Bananas Ecuador 1kl $2000",
    categoria: "FyV",
    image: banana,
    comercio: "El Local de Ceci",
    duracion: "21 - 28 Ene",
    precio: 2000,
  },
  {
    name: "Huevos Maple x $4000",
    categoria: "C",
    image: huevos,
    comercio: "El Local de Tito",
    duracion: "21 - 28 Ene",
    precio: 4000,
  },
  {
    name: "Leche Entera 1l $1500",
    categoria: "L",
    image: leche,
    comercio: "El Local de Ceci",
    duracion: "21 - 28 Ene",
    precio: 1500,
  },
  {
    name: "Dulce de Leche 400g $2300",
    categoria: "AyD",
    image: dulce,
    comercio: "Alma Almacén",
    duracion: "21 - 28 Ene",
    precio: 2300,
  },
  {
    name: "Arroz Molino 1kl $2200",
    categoria: "SyL",
    image: arroz,
    comercio: "Alma Almacén",
    duracion: "21 - 28 Ene",
    precio: 2200,
  },
  {
    name: "Cuadrada 1Kilo $7000",
    categoria: "C",
    image: cuadrada,
    comercio: "Carnicería Juancho",
    duracion: "21 - 28 Ene",
    precio: 7000,
  },
  {
    name: "Carne Asado 1Kl $6500",
    categoria: "C",
    image: asado,
    comercio: "Carnicería Pepe",
    duracion: "21 - 28 Ene",
    precio: 6500,
  },
  {
    name: "Jamón Cocido 100g $600",
    categoria: "C",
    image: jamon,
    comercio: "Alma Almacén",
    duracion: "21 - 28 Ene",
    precio: 600,
  },
  {
    name: "Paty Express x4 $5500",
    categoria: "C",
    image: paty,
    comercio: "Supermercado Sun",
    duracion: "21 - 28 Ene",
    precio: 5500,
  },
  // {
  //   name: "Manos Cola 2.4l $1900",
  //   categoria: "B",
  //   image: manaos,
  //   comercio: "Comercio lo de Nano",
  //   duracion: "21 - 28 Ene",
  //   precio: 1900,
  // },
  // {
  //   name: "Manteca LaSere 400g $3200",
  //   categoria: "L",
  //   image: "https://imga",
  //   comercio: "El Local de Ceci",
  //   duracion: "21 - 28 Ene",
  //   precio: 3200,
  // },
  // {
  //   name: "Jugo Tang $300",
  //   categoria: "AyD",
  //   image: "https://imga",
  //   comercio: "Alma Almacén",
  //   duracion: "21 - 28 Ene",
  //   precio: 300,
  // },
];

// carnes, lacteos, semillas y legumbres, pastas, frutas y verduras, grasas y aceites(manteca, aceites), azucares y dulces, bebidas
// una tienda x puede vender semillas, azucales y bebidas, los alimentos se clasifican en estas 8 categorías
// también podemos categorizar por precio, con 2000 pesos podes comprarte todo esto...

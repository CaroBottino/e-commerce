import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import { IItem } from "./interfaces/IItem";
import "@/assets/css/App.css";

import { items as data } from "./assets/js/items";
// const data = [
//   {
//     id: "1",
//     name: "Muñeca Barbie Fashionistas Closet De Lujo Gbk12 Mattel",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_819420-MLA51075183518_082022-F.webp",
//     desc: "Barbie Fashionistas Ultimate Closet - Juguete de moda portátil con muñeca, ropa, accesorios y perchas Plástico El juego de muñecas y accesorios Barbie Ultimate Closet tiene estilo dentro y fuera con ropa y accesorios incluidos. El armario rosa está decorado con puertas dobles transparentes para un vistazo al armario de la muñeca Barbie. El espacio de estante almacena y muestra accesorios, y un estante plegable sostiene la moda para divertirse. Barbie La muñeca lleva un mameluco floral y tiene dos vestidos adicionales para cambiar su atuendo. Tres pares de zapatos, dos collares y dos bolsos crean diferentes looks en un instante. Un asa de transporte hace que sea fácil de guardar o llevar sobre la marcha. Mezcla y combina para jugar a la moda y la diversión de contar historias ",
//     price: 49676,
//     tags: ["kids", "play", "toys"],
//   },
//   {
//     id: "2",
//     name: "Tablet Philco Tp10a332 10.1'' Ips 32gb 2gb Android 11 Con Funda",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_886369-MLA52088853536_102022-F.webp",
//     desc: "- Microprocesador: RK3566, Quad-core ARM Cortex™-A55 - S.O: Android 11 - Memoria RAM: 2 GB - Memoria Interna: 32 GB - Slot de memoria: MicroSD Expansible hasta 512GB - Pantalla: 10.1” - Resolución: 1280x800 IPS - Conectividad: Wi-Fi - Bluetooth: 4.2 - Cámara frontal: 2 Mp - Cámara Posterior: 5Mp - Batería: 6000 mAH - Alimentación: 5V 2A (Incluye cable de alimentación USB C / No Incluye Cargador de pared) - Incluye Funda - Dimensiones (En Cms): 24.5 x 0.98 x 16.3 - Peso (Kgs): 0.505",
//     price: 45999,
//     tags: ["electronics", "tablet", "computing"],
//   },
//   {
//     id: "3",
//     name: "Cafetera Piccolo Xs Manual Roja Nescafé Dolce Gusto",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_772836-MLA46885301641_072021-F.webp",
//     desc: "NESCAFÉ® Dolce Gusto® Piccolo XS es extrapequeña, con su tamaño compacto y moderna estilo, está diseñado por expertos para adaptarse a cualquier cocina. Piccolo XS mide solo 14 cm (ancho) x 28 cm (alto) x 27cm (profundidad).",
//     price: 47952,
//     tags: ["coffee", "cafe", "rico"],
//   },
//   {
//     id: "4",
//     name: "Taladro Atornillador Percutor + 2 Baterias Gp By Lusqtoff",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_656678-MLA69951087361_062023-F.webp",
//     desc: "CONTENIDO DE LA PUBLICACIÓN • 1 Taladro/ Atornillador Percutor Garde Plus by Lusqtoff • 2 Baterías • 1 Cargador • 1 Maletín",
//     price: 31795.69,
//     tags: ["taladro", "reparaciones"],
//   },
//   {
//     id: "5",
//     name: "Barbie Fashionista 197 Con Brackets Y Estuche Mattel",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_676395-MLA70799338049_072023-F.webp",
//     desc: "Barbie Fashionistas celebra la diversidad y ofrece infinitas posibilidades para contar historias y explorar la moda. ¡Con esta gama inclusiva de muñecas, los niños pueden ver lo divertido que es expresar la personalidad a través del estilo! Son un regalo ideal para los niños amantes de la moda en todas partes. Diseñada para reflejar el mundo que ven los niños hoy en día, esta diversa línea de Barbie Fashionistas muestra estilos brillantes y modernos que crean infinitas posibilidades para contar historias.¡Conoce a la primera muñeca Barbie Fashionistas con frenillos!Con una hermosa sonrisa, anteojos de sol con margaritas rosadas y tacones de plataforma amarillos, su look presenta muchos detalles que resaltan su personalidad. Ella tiene cabello rubio y un tipo de cuerpo original, ¡y hace una declaración colorida en un vestido arcoíris con mangas decorativas con volantes! Medida Barbie 30 cm de alto. Medida Estuche: 32 x 5 x 10 cm. Infancenter..mas que juguetes!!",
//     price: 21899,
//     tags: ["barbie", "toy", "doll"],
//   },
//   {
//     id: "6",
//     name: "Colchón Sommier Simmons Backcare Hotel Bilt 2 Plazas 200x160",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_619900-MLU69363144246_052023-F.webp",
//     desc: "Una línea especialmente diseñada para el cuidado de la espalda, brindando el soporte y confort que tu cuerpo necesita.",
//     price: 190188.54,
//     tags: ["cama", "colchon"],
//   },
//   {
//     id: "7",
//     name: "Muñeca Barbie Cutie Reveal Modelo Surtido Hhg18 Mattel",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_995511-MLA70883404468_082023-F.webp",
//     desc: "La tienda no incluyó una descripción del producto",
//     price: 41990,
//     tags: ["barbie", "kids", "play"],
//   },
//   {
//     id: "8",
//     name: "Parlante JBL Go Essential portátil con bluetooth waterproof negro",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_912142-MLA51457763140_092022-F.webp",
//     desc: "JBL Go Essential ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.",
//     price: 18899,
//     tags: ["parlante", "music", "loud"],
//   },
//   {
//     id: "9",
//     name: "Tablet con funda T-Go TABI Argos EUTB-758 Kids 7'' 32GB verde y 2GB de memoria RAM",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_631286-MLA48243843548_112021-F.webp",
//     desc: "Esta tablet es la combinación perfecta de rendimiento y versatilidad, ideal para acompañar cada una de tus actividades.",
//     price: 18899,
//     tags: ["tablet", "electronics"],
//   },
//   {
//     id: "10",
//     name: "Lápiz Optico Capacitivo Jazak Punta Fina Pen Stylus Dibujo",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_697838-MLA45268489704_032021-F.webp",
//     desc: "Stylus Pen expande el poder de las tabletas y los teléfonos inteligentes, lo que facilita tomar notas, dibujar, resaltar o anotar documentos en las aplicaciones que usa todos los días. No necesita conexión bluetooth. Simplemente presione el botón en la parte superior para encenderlo y estará listo para funcionar.",
//     price: 9214.56,
//     tags: ["pencil", "tablet"],
//   },
//   {
//     id: "11",
//     name: "Sandwichera Tostadora Electrica Paninis Doble Winco W-018",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_968315-MLA31352390204_072019-F.webp",
//     desc: "SANDWICHERA ELECTRICA PANINIS - Superficie antiadherente - Traba de seguridad. - Paredes frias. - Indicadores luminosos. - Facil de usar y limpiar. - Muy practica. - 750W. - Medidas 24x10x24,3cm",
//     price: 8499,
//     tags: ["sandwitch", "eat", "salty"],
//   },
//   {
//     id: "12",
//     name: "Parka Mujer Campera Corderito Importada Chelsea Capucha Piel",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_940975-MLA69719007539_052023-F.webp",
//     desc: "Cambios y devoluciones: si necesitás cambiar o devolver un artículo simplemente escribinos por mensajería interna de Mercadolibre o por email así te explicamos los pasos a seguir.",
//     price: 25499,
//     tags: ["ropa", "mujer", "rosa"],
//   },
//   {
//     id: "13",
//     name: "Campera Corta Lacoste Acolchada E Hidrófuga Para Hombre",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_947823-MLA69984604825_062023-F.webp",
//     desc: "Combine calidez y comodidad con esta Campera acolchada. Un diseño emblemático, hidrófugo y respetuoso con el medioambiente. Claramente imprescindible.",
//     price: 149000,
//     tags: ["ropa", "campera", "hombre"],
//   },
//   {
//     id: "14",
//     name: "Campera Puffer Edna Pink",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_942555-MLA54943632047_042023-F.webp",
//     desc: "La tabla de medidas que figura en la publicación y la que figura en la última foto corresponden a la prenda medida en plano (se toma en el frente y no en el contorno completo). NO CORRESPONDE A MEDIDAS DEL CUERPO.",
//     price: 39599,
//     tags: ["puffer", "ropa", "pink"],
//   },
//   {
//     id: "15",
//     name: "Sandalias Kandil Bloomy Plataforma Cuero Calidad Moda",
//     img: "https://http2.mlstatic.com/D_NQ_NP_2X_742435-MLA52892828830_122022-F.webp",
//     desc: "Si estás buscando un calzado elegante y sofisticado, la sandalia Kandil Bloomy en color rosa brillante liso es la elección perfecta. Confeccionada en cuero vacuno, esta sandalia es única y sofisticada.",
//     price: 7840,
//     tags: ["sandalia", "pink", "mujer"],
//   },
// ];

function App() {
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    setItems(data as IItem[]);
  }, []);

  return (
    <>
      <NavBar />
      <ItemListContainer items={items} />
      <Footer />
    </>
  );
}

export default App;

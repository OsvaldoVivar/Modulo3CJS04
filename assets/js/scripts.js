const propiedadesAlquileres = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "./assets/img/arriendo01.avif",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "./assets/img/arriendo02.avif",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: "2.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "./assets/img/arriendo03.avif",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: "2.200",
    smoke: false,
    pets: false,
  },
];

const propiedadesVentas = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "./assets/img/venta01.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: "5.000",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "./assets/img/venta02.webp",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    costo: "1.200",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "./assets/img/venta03.avif",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: "4.200",
    smoke: false,
    pets: true,
  },
];

// console.log(propiedadesAlquileres);
// console.log(propiedadesVentas);

function presentaInmueble(inmueble) {
  let htmlPropiedades = `
    <!-- PRIMER DIV -->
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${inmueble.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">${inmueble.nombre}</h5>
          <p class="card-text">
            ${inmueble.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${inmueble.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${inmueble.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${inmueble.banos} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${inmueble.costo}</p>
    `;

  if (inmueble.smoke) {
    htmlPropiedades += `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
  } else {
    htmlPropiedades += `<p class="text-danger"><i class="fas fa-smoking"></i> No se permite fumar</p>`;
  }

  if (inmueble.pets) {
    htmlPropiedades += `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
  } else {
    htmlPropiedades += `<p class="text-danger"><i class="fas fa-paw"></i> No se permiten mascotas</p>`;
  }

  htmlPropiedades += `
        </div>
      </div>
    </div>
    <!-- FIN PRIMER DIV -->
    `;

  return htmlPropiedades;
}

const divVentas = document.querySelector("#divVentas");
let htmlPropiedades = "";

for (let propiedadesVenta of propiedadesVentas) {
  const htmlInmueble = presentaInmueble(propiedadesVenta);

  htmlPropiedades += `${htmlInmueble} `;
}

divVentas.innerHTML = htmlPropiedades;

const divArriendo = document.querySelector("#divArriendo");
let htmlPropiedades2 = "";

for (let propiedadesAlquiler of propiedadesAlquileres) {
  const htmlInmueble2 = presentaInmueble(propiedadesAlquiler);

  htmlPropiedades2 += `${htmlInmueble2} `;
}

divArriendo.innerHTML = htmlPropiedades2;

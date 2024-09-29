
// Arreglo para propiedades en venta
const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'assets/img/depto_lujo.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'assets/img/camper.png',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'assets/img/penthouse.png',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento acogedor cercano al metro',
        src: 'assets/img/depto_acogedor.jpg',
        descripcion: 'Departamento funcional muy bien ubicado y cercano al metro',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 2,
        baños: 1,
        costo: 1500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa en el bosque',
        src: 'assets/img/casa_bosque.jpg',
        descripcion: 'Cálida casa ubicada en pleno bosque',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 2,
        baños: 1,
        costo: 1500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Tiny house en la playa',
        src: 'assets/img/tiny_house.jpg',
        descripcion: 'Hermosa casa funcional emplazada en una tranquila playa',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 2,
        baños: 1,
        costo: 1500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento en barrio residencial',
        src: 'assets/img/depto_residencial.jpg',
        descripcion: 'Lindo departamento ubicado en tranquilo barrio residencial',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: false
    }
];

// Arreglo para propiedades en arriendo
const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'assets/img/depto_centro.png',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'assets/img/depto_mar.png',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'assets/img/residencial.png',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento con amplias terrazas',
        src: 'assets/img/depto_terrazas.jpg',
        descripcion: 'Amplio departamento con hermosas terrazas para disfrutar',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 2,
        costo: 3000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa mediterránea cerca del mar',
        src: 'assets/img/mediterranea.png',
        descripcion: 'Hermosa y gran casa de estilo mediterráneo cercana al mar',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 4,
        baños: 5,
        costo: 4500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Tiny house en el campo',
        src: 'assets/img/tiny_house_campo.jpg',
        descripcion: 'Hermosa tiny house ubicada en el campo. Amplios espacios.',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 1,
        baños: 1,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento Estudio',
        src: 'assets/img/depto_estudio.jpg',
        descripcion: 'Departamento estudio cercano al metro',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 1,
        baños: 1,
        costo: 1500,
        smoke: false,
        pets: false
    }
];


// Función para renderizar los contenedores de las propiedades
function renderizarPropiedades(propiedades, contenedor, max = 3) {
    let html = '';

    for (let property of propiedades.slice(0, max)) {

        let smokeClass, smokeIcon, smokeText;
        if (property.smoke) {
            smokeClass = 'text-success';
            smokeIcon = 'smoking';
            smokeText = 'Permitido fumar';
        } 
        else {
            smokeClass = 'text-danger';
            smokeIcon = 'smoking-ban';
            smokeText = 'No se permite fumar';
        }

        let petsClass, petsIcon, petsText;
        if (property.pets) {
            petsClass = 'text-success';
            petsIcon = 'paw';
            petsText = 'Mascotas permitidas';
        }
        else {
            petsClass = 'text-danger';
            petsIcon = 'ban';
            petsText = 'No se permiten mascotas';
        }
    
        html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${property.src}" class="card-img-top" alt="Imagen del departamento">
                    <div class="card-body">
                        <h5 class="card-title">${property.nombre}</h5>
                        <p class="card-text">${property.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${property.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${property.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${property.baños} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${property.costo}</p>
                        <p class="${smokeClass}"><i class="fas fa-${smokeIcon}"></i> ${smokeText}</p>
                        <p class="${petsClass}"><i class="fas fa-${petsIcon}"></i> ${petsText}</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    const elemento = document.querySelector(contenedor);
    elemento.innerHTML = html;
}


// Renderizar en index.html
renderizarPropiedades(propiedades_venta, '#propiedades-venta');
renderizarPropiedades(propiedades_alquiler, '#propiedades-alquiler');



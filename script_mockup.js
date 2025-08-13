// Copyright: mario de jesus guzman cabral cedula 402-3032959-7 hizo esto.
// script_mockup.js: Contiene toda la lógica de la aplicación, manejo de usuarios, eventos y manipulación del DOM.
document.addEventListener('DOMContentLoaded', () => {
  // --- APP DATA & STATE ---
  // appData holds all user information and the current session state.
  // This is the object that will be persisted to localStorage.
  let appData = {
    users: {},
    currentUser: null,
    sessionPersists: false, // New flag to control session persistence
    comments: {}, // New: for storing comments
    searchAnalytics: {}, // New: for tracking searches
  };

  // PARKING_SPOTS_START
  const allParkingSpots = [
{
    id: "agora-mall",
    name: "Agora Mall",
    price: "$85/hr",
    lat: 18.478,
    lon: -69.9387,
    publicParking: "none",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "10am-9pm",
        Tue: "10am-9pm",
        Wed: "10am-9pm",
        Thu: "10am-9pm",
        Fri: "10am-9pm",
        Sat: "10am-9pm",
        Sun: "11am-8pm"
    }
},
{
    id: "sambil",
    name: "Sambil Santo Domingo",
    price: "$80/hr",
    lat: 18.483,
    lon: -69.913,
    publicParking: "none",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "10am-9pm",
        Tue: "10am-9pm",
        Wed: "10am-9pm",
        Thu: "10am-9pm",
        Fri: "10am-9pm",
        Sat: "10am-9pm",
        Sun: "11am-8pm"
    }
},
{
    id: "blue-mall",
    name: "Blue Mall",
    price: "$90/hr",
    lat: 18.4708,
    lon: -69.9388,
    publicParking: "none",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "10am-9pm",
        Tue: "10am-9pm",
        Wed: "10am-9pm",
        Thu: "10am-9pm",
        Fri: "10am-9pm",
        Sat: "10am-9pm",
        Sun: "11am-8pm"
    }
},
{
    id: "downtown-center",
    name: "Downtown Center",
    price: "$80/hr",
    lat: 18.4673,
    lon: -69.9383,
    publicParking: "none",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "10am-10pm",
        Tue: "10am-10pm",
        Wed: "10am-10pm",
        Thu: "10am-10pm",
        Fri: "10am-10pm",
        Sat: "10am-10pm",
        Sun: "11am-9pm"
    }
},
{
    id: "galeria-360",
    name: "Galería 360",
    price: "$75/hr",
    lat: 18.484,
    lon: -69.938,
    publicParking: "none",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "10am-9pm",
        Tue: "10am-9pm",
        Wed: "10am-9pm",
        Thu: "10am-9pm",
        Fri: "10am-9pm",
        Sat: "10am-9pm",
        Sun: "11am-8pm"
    }
},
{
    id: "acropolis-center",
    name: "Acrópolis Center",
    price: "$85/hr",
    lat: 18.471,
    lon: -69.936,
    publicParking: "none",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "10am-9pm",
        Tue: "10am-9pm",
        Wed: "10am-9pm",
        Thu: "10am-9pm",
        Fri: "10am-9pm",
        Sat: "10am-9pm",
        Sun: "11am-8pm"
    }
},
{
    id: "bella-vista-mall",
    name: "Bella Vista Mall",
    price: "$70/hr",
    lat: 18.458,
    lon: -69.937,
    publicParking: "none",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "10am-9pm",
        Tue: "10am-9pm",
        Wed: "10am-9pm",
        Thu: "10am-9pm",
        Fri: "10am-9pm",
        Sat: "10am-9pm",
        Sun: "11am-8pm"
    }
},
{
    id: "plaza-central",
    name: "Plaza Central",
    price: "$60/hr",
    lat: 18.476,
    lon: -69.928,
    publicParking: "none",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "9am-9pm",
        Tue: "9am-9pm",
        Wed: "9am-9pm",
        Thu: "9am-9pm",
        Fri: "9am-9pm",
        Sat: "9am-9pm",
        Sun: "10am-7pm"
    }
},
{
    id: "plaza-lama-27",
    name: "Plaza Lama, 27 de Febrero",
    price: "Gratis (clientes)",
    lat: 18.471,
    lon: -69.924,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-10pm",
        Tue: "8am-10pm",
        Wed: "8am-10pm",
        Thu: "8am-10pm",
        Fri: "8am-10pm",
        Sat: "8am-10pm",
        Sun: "9am-8pm"
    }
},
{
    id: "megacentro",
    name: "Megacentro",
    price: "Gratis",
    lat: 18.508,
    lon: -69.829,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "10am-9pm",
        Tue: "10am-9pm",
        Wed: "10am-9pm",
        Thu: "10am-9pm",
        Fri: "10am-9pm",
        Sat: "10am-9pm",
        Sun: "11am-8pm"
    }
},
{
    id: "coral-mall",
    name: "Coral Mall",
    price: "Gratis",
    lat: 18.513,
    lon: -69.846,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "10am-9pm",
        Tue: "10am-9pm",
        Wed: "10am-9pm",
        Thu: "10am-9pm",
        Fri: "10am-9pm",
        Sat: "10am-9pm",
        Sun: "11am-8pm"
    }
},
{
    id: "bravo-churchill",
    name: "Supermercado Bravo, Churchill",
    price: "Gratis (clientes)",
    lat: 18.465,
    lon: -69.937,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "7am-11pm",
        Tue: "7am-11pm",
        Wed: "7am-11pm",
        Thu: "7am-11pm",
        Fri: "7am-11pm",
        Sat: "7am-11pm",
        Sun: "8am-10pm"
    }
},
{
    id: "nacional-vega",
    name: "Supermercado Nacional, Lope de Vega",
    price: "Gratis (clientes)",
    lat: 18.474,
    lon: -69.932,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "7am-12am",
        Tue: "7am-12am",
        Wed: "7am-12am",
        Thu: "7am-12am",
        Fri: "7am-12am",
        Sat: "7am-12am",
        Sun: "8am-10pm"
    }
},
{
    id: "jumbo-luperon",
    name: "Jumbo, Luperón",
    price: "Gratis (clientes)",
    lat: 18.489,
    lon: -69.949,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-10pm",
        Tue: "8am-10pm",
        Wed: "8am-10pm",
        Thu: "8am-10pm",
        Fri: "8am-10pm",
        Sat: "8am-10pm",
        Sun: "9am-8pm"
    }
},
{
    id: "jumbo-kennedy",
    name: "Jumbo, John F. Kennedy",
    price: "Gratis (clientes)",
    lat: 18.484,
    lon: -69.939,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-10pm",
        Tue: "8am-10pm",
        Wed: "8am-10pm",
        Thu: "8am-10pm",
        Fri: "8am-10pm",
        Sat: "8am-10pm",
        Sun: "9am-8pm"
    }
},
{
    id: "sirena-churchill",
    name: "La Sirena, Churchill",
    price: "Gratis (clientes)",
    lat: 18.472,
    lon: -69.938,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-10pm",
        Tue: "8am-10pm",
        Wed: "8am-10pm",
        Thu: "8am-10pm",
        Fri: "8am-10pm",
        Sat: "8am-10pm",
        Sun: "9am-8pm"
    }
},
{
    id: "sirena-venezuela",
    name: "La Sirena, Av. Venezuela",
    price: "Gratis (clientes)",
    lat: 18.495,
    lon: -69.865,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-10pm",
        Tue: "8am-10pm",
        Wed: "8am-10pm",
        Thu: "8am-10pm",
        Fri: "8am-10pm",
        Sat: "8am-10pm",
        Sun: "9am-8pm"
    }
},
{
    id: "ole-independencia",
    name: "Supermercado Olé, Independencia",
    price: "Gratis (clientes)",
    lat: 18.455,
    lon: -69.923,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "7am-10pm",
        Tue: "7am-10pm",
        Wed: "7am-10pm",
        Thu: "7am-10pm",
        Fri: "7am-10pm",
        Sat: "7am-10pm",
        Sun: "8am-9pm"
    }
},
{
    id: "ikea",
    name: "IKEA Santo Domingo",
    price: "Gratis (clientes)",
    lat: 18.469,
    lon: -69.945,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "10am-9pm",
        Tue: "10am-9pm",
        Wed: "10am-9pm",
        Thu: "10am-9pm",
        Fri: "10am-9pm",
        Sat: "10am-9pm",
        Sun: "10am-8pm"
    }
},
{
    id: "americana",
    name: "Ferretería Americana",
    price: "Gratis (clientes)",
    lat: 18.481,
    lon: -69.925,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-7pm",
        Tue: "8am-7pm",
        Wed: "8am-7pm",
        Thu: "8am-7pm",
        Fri: "8am-7pm",
        Sat: "8am-7pm",
        Sun: "9am-1pm"
    }
},
{
    id: "banco-popular-jfk",
    name: "Torre Popular (Banco Popular)",
    price: "Gratis (clientes)",
    lat: 18.477,
    lon: -69.923,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-4pm",
        Tue: "8am-4pm",
        Wed: "8am-4pm",
        Thu: "8am-4pm",
        Fri: "8am-4pm",
        Sat: "9am-1pm",
        Sun: "Cerrado"
    }
},
{
    id: "banco-popular-vega",
    name: "Banco Popular, Lope de Vega",
    price: "Gratis (clientes)",
    lat: 18.475,
    lon: -69.932,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-4pm",
        Tue: "8am-4pm",
        Wed: "8am-4pm",
        Thu: "8am-4pm",
        Fri: "8am-4pm",
        Sat: "9am-1pm",
        Sun: "Cerrado"
    }
},
{
    id: "banco-bhd-27",
    name: "Banco BHD (27 de Febrero)",
    price: "Gratis (clientes)",
    lat: 18.469,
    lon: -69.938,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-4pm",
        Tue: "8am-4pm",
        Wed: "8am-4pm",
        Thu: "8am-4pm",
        Fri: "8am-4pm",
        Sat: "9am-1pm",
        Sun: "Cerrado"
    }
},
{
    id: "banreservas-churchill",
    name: "Banreservas (Churchill)",
    price: "Gratis (clientes)",
    lat: 18.468,
    lon: -69.937,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-4pm",
        Tue: "8am-4pm",
        Wed: "8am-4pm",
        Thu: "8am-4pm",
        Fri: "8am-4pm",
        Sat: "9am-1pm",
        Sun: "Cerrado"
    }
},
{
    id: "scotiabank-churchill",
    name: "Scotiabank (Churchill)",
    price: "Gratis (clientes)",
    lat: 18.473,
    lon: -69.937,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-4pm",
        Tue: "8am-4pm",
        Wed: "8am-4pm",
        Thu: "8am-4pm",
        Fri: "8am-4pm",
        Sat: "9am-1pm",
        Sun: "Cerrado"
    }
},
{
    id: "smartfit-naco",
    name: "Smart Fit Naco",
    price: "Gratis (miembros)",
    lat: 18.475,
    lon: -69.929,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "5am-11pm",
        Tue: "5am-11pm",
        Wed: "5am-11pm",
        Thu: "5am-11pm",
        Fri: "5am-11pm",
        Sat: "8am-6pm",
        Sun: "9am-3pm"
    }
},
{
    id: "smartfit-churchill",
    name: "Smart Fit Churchill",
    price: "Gratis (miembros)",
    lat: 18.469,
    lon: -69.939,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "5am-11pm",
        Tue: "5am-11pm",
        Wed: "5am-11pm",
        Thu: "5am-11pm",
        Fri: "5am-11pm",
        Sat: "8am-6pm",
        Sun: "9am-3pm"
    }
},
{
    id: "smartfit-sarasota",
    name: "Smart Fit Sarasota",
    price: "Gratis (miembros)",
    lat: 18.456,
    lon: -69.941,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "5am-11pm",
        Tue: "5am-11pm",
        Wed: "5am-11pm",
        Thu: "5am-11pm",
        Fri: "5am-11pm",
        Sat: "8am-6pm",
        Sun: "9am-3pm"
    }
},
{
    id: "smartfit-bv",
    name: "Smart Fit Bella Vista",
    price: "Gratis (miembros)",
    lat: 18.458,
    lon: -69.938,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "5am-11pm",
        Tue: "5am-11pm",
        Wed: "5am-11pm",
        Thu: "5am-11pm",
        Fri: "5am-11pm",
        Sat: "8am-6pm",
        Sun: "9am-3pm"
    }
},
{
    id: "smartfit-mirabal",
    name: "Smart Fit Hermanas Mirabal",
    price: "Gratis (miembros)",
    lat: 18.519,
    lon: -69.915,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "5am-11pm",
        Tue: "5am-11pm",
        Wed: "5am-11pm",
        Thu: "5am-11pm",
        Fri: "5am-11pm",
        Sat: "8am-6pm",
        Sun: "9am-3pm"
    }
},
{
    id: "smartfit-san-isidro",
    name: "Smart Fit San Isidro",
    price: "Gratis (miembros)",
    lat: 18.497,
    lon: -69.801,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "5am-11pm",
        Tue: "5am-11pm",
        Wed: "5am-11pm",
        Thu: "5am-11pm",
        Fri: "5am-11pm",
        Sat: "8am-6pm",
        Sun: "9am-3pm"
    }
},
{
    id: "smartfit-charles",
    name: "Smart Fit Charles de Gaulle",
    price: "Gratis (miembros)",
    lat: 18.525,
    lon: -69.855,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "5am-11pm",
        Tue: "5am-11pm",
        Wed: "5am-11pm",
        Thu: "5am-11pm",
        Fri: "5am-11pm",
        Sat: "8am-6pm",
        Sun: "9am-3pm"
    }
},
{
    id: "body-shop-naco",
    name: "Body Shop Naco",
    price: "Gratis (miembros)",
    lat: 18.477,
    lon: -69.931,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "5am-10pm",
        Tue: "5am-10pm",
        Wed: "5am-10pm",
        Thu: "5am-10pm",
        Fri: "5am-10pm",
        Sat: "7am-7pm",
        Sun: "9am-2pm"
    }
},
{
    id: "gold-gym-morales",
    name: "Gold's Gym Evaristo Morales",
    price: "Gratis (miembros)",
    lat: 18.466,
    lon: -69.932,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "5am-10pm",
        Tue: "5am-10pm",
        Wed: "5am-10pm",
        Thu: "5am-10pm",
        Fri: "5am-10pm",
        Sat: "8am-6pm",
        Sun: "9am-2pm"
    }
},
{
    id: "parqueo-uasd",
    name: "Parqueo UASD",
    price: "$40/hr",
    lat: 18.4686,
    lon: -69.9119,
    publicParking: "paid",
    publicParkingPrice: "$20/hr",
    category: "cercanas",
    hours: {
        Mon: "7am-10pm",
        Tue: "7am-10pm",
        Wed: "7am-10pm",
        Thu: "7am-10pm",
        Fri: "7am-8pm",
        Sat: "8am-4pm",
        Sun: "Cerrado"
    }
},
{
    id: "parqueo-intec",
    name: "Parqueo INTEC",
    price: "$55/hr",
    lat: 18.4854,
    lon: -69.9406,
    publicParking: "paid",
    publicParkingPrice: "$25/hr",
    category: "cercanas",
    hours: {
        Mon: "7am-10pm",
        Tue: "7am-10pm",
        Wed: "7am-10pm",
        Thu: "7am-10pm",
        Fri: "7am-8pm",
        Sat: "Cerrado",
        Sun: "Cerrado"
    }
},
{
    id: "unphu",
    name: "Universidad Nacional Pedro Henríquez Ureña (UNPHU)",
    price: "Pagado",
    lat: 18.478,
    lon: -69.948,
    publicParking: "paid",
    publicParkingPrice: "$50/hr",
    category: "cercanas",
    hours: {
        Mon: "7am-10pm",
        Tue: "7am-10pm",
        Wed: "7am-10pm",
        Thu: "7am-10pm",
        Fri: "7am-8pm",
        Sat: "8am-4pm",
        Sun: "Cerrado"
    }
},
{
    id: "caribbean-downtown",
    name: "Caribbean Cinemas Downtown Center",
    price: "Pagado",
    lat: 18.467,
    lon: -69.938,
    publicParking: "paid",
    publicParkingPrice: "$80/hr",
    category: "cercanas",
    hours: {
        Mon: "3pm-11pm",
        Tue: "3pm-11pm",
        Wed: "3pm-11pm",
        Thu: "3pm-11pm",
        Fri: "2pm-12am",
        Sat: "2pm-12am",
        Sun: "2pm-11pm"
    }
},
{
    id: "palacio-cine-agora",
    name: "Palacio del Cine Agora Mall",
    price: "Pagado",
    lat: 18.478,
    lon: -69.939,
    publicParking: "paid",
    publicParkingPrice: "$85/hr",
    category: "cercanas",
    hours: {
        Mon: "3pm-11pm",
        Tue: "3pm-11pm",
        Wed: "3pm-11pm",
        Thu: "3pm-11pm",
        Fri: "2pm-12am",
        Sat: "2pm-12am",
        Sun: "2pm-11pm"
    }
},
{
    id: "cedimat",
    name: "CEDIMAT",
    price: "Pagado",
    lat: 18.481,
    lon: -69.92,
    publicParking: "paid",
    publicParkingPrice: "$75/hr",
    category: "cercanas",
    hours: {
        Mon: "Abierto",
        Tue: "Abierto",
        Wed: "Abierto",
        Thu: "Abierto",
        Fri: "Abierto",
        Sat: "Abierto",
        Sun: "Abierto"
    }
},
{
    id: "plaza-salud",
    name: "Hospital General de la Plaza de la Salud",
    price: "Pagado",
    lat: 18.479,
    lon: -69.923,
    publicParking: "paid",
    publicParkingPrice: "$70/hr",
    category: "cercanas",
    hours: {
        Mon: "Abierto",
        Tue: "Abierto",
        Wed: "Abierto",
        Thu: "Abierto",
        Fri: "Abierto",
        Sat: "Abierto",
        Sun: "Abierto"
    }
},
{
    id: "clinica-abreu",
    name: "Clínica Abreu",
    price: "Pagado",
    lat: 18.479,
    lon: -69.904,
    publicParking: "paid",
    publicParkingPrice: "$80/hr",
    category: "cercanas",
    hours: {
        Mon: "Abierto",
        Tue: "Abierto",
        Wed: "Abierto",
        Thu: "Abierto",
        Fri: "Abierto",
        Sat: "Abierto",
        Sun: "Abierto"
    }
},
{
    id: "centro-medico-uce",
    name: "Centro Médico UCE",
    price: "Pagado",
    lat: 18.476,
    lon: -69.907,
    publicParking: "paid",
    publicParkingPrice: "$70/hr",
    category: "cercanas",
    hours: {
        Mon: "Abierto",
        Tue: "Abierto",
        Wed: "Abierto",
        Thu: "Abierto",
        Fri: "Abierto",
        Sat: "Abierto",
        Sun: "Abierto"
    }
},
{
    id: "clinica-gomez-patino",
    name: "Clínica Gómez Patiño",
    price: "Pagado",
    lat: 18.473,
    lon: -69.902,
    publicParking: "paid",
    publicParkingPrice: "$75/hr",
    category: "cercanas",
    hours: {
        Mon: "Abierto",
        Tue: "Abierto",
        Wed: "Abierto",
        Thu: "Abierto",
        Fri: "Abierto",
        Sat: "Abierto",
        Sun: "Abierto"
    }
},
{
    id: "jardin-botanico",
    name: "Jardín Botánico Nacional",
    price: "Gratis",
    lat: 18.491,
    lon: -69.942,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "Cerrado",
        Tue: "9am-5pm",
        Wed: "9am-5pm",
        Thu: "9am-5pm",
        Fri: "9am-5pm",
        Sat: "9am-5pm",
        Sun: "9am-5pm"
    }
},
{
    id: "parque-mirador",
    name: "Parque Mirador Sur",
    price: "Gratis",
    lat: 18.448,
    lon: -69.94,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "Abierto",
        Tue: "Abierto",
        Wed: "Abierto",
        Thu: "Abierto",
        Fri: "Abierto",
        Sat: "Abierto",
        Sun: "Abierto"
    }
},
{
    id: "palacio-nacional",
    name: "Palacio Nacional",
    price: "Restringido",
    lat: 18.474,
    lon: -69.898,
    publicParking: "none",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-5pm",
        Tue: "8am-5pm",
        Wed: "8am-5pm",
        Thu: "8am-5pm",
        Fri: "8am-5pm",
        Sat: "Cerrado",
        Sun: "Cerrado"
    }
},
{
    id: "dgii",
    name: "DGII Sede Central",
    price: "Gratis (clientes)",
    lat: 18.478,
    lon: -69.912,
    publicParking: "free",
    publicParkingPrice: "",
    category: "cercanas",
    hours: {
        Mon: "8am-5pm",
        Tue: "8am-5pm",
        Wed: "8am-5pm",
        Thu: "8am-5pm",
        Fri: "8am-5pm",
        Sat: "Cerrado",
        Sun: "Cerrado"
    }
},
{
    id: "pasaportes",
    name: "Dirección General de Pasaportes",
    price: "Pagado",
    lat: 18.452,
    lon: -69.939,
    publicParking: "paid",
    publicParkingPrice: "$100",
    category: "cercanas",
    hours: {
        Mon: "8am-3pm",
        Tue: "8am-3pm",
        Wed: "8am-3pm",
        Thu: "8am-3pm",
        Fri: "8am-3pm",
        Sat: "Cerrado",
        Sun: "Cerrado"
    }
},
{
    id: "zona-colonial",
    name: "Zona Colonial",
    price: "$100/hr",
    lat: 18.476,
    lon: -69.883,
    publicParking: "free",
    publicParkingPrice: "",
    category: "populares",
    hours: {
        Mon: "24 Horas",
        Tue: "24 Horas",
        Wed: "24 Horas",
        Thu: "24 Horas",
        Fri: "24 Horas",
        Sat: "24 Horas",
        Sun: "24 Horas"
    }
},
{
    id: "malecon",
    name: "Malecón de Santo Domingo",
    price: "Gratis",
    lat: 18.466,
    lon: -69.9,
    publicParking: "free",
    publicParkingPrice: "",
    category: "populares",
    hours: {
        Mon: "Abierto",
        Tue: "Abierto",
        Wed: "Abierto",
        Thu: "Abierto",
        Fri: "Abierto",
        Sat: "Abierto",
        Sun: "Abierto"
    }
},
{
    id: "tres-ojos",
    name: "Parque Nacional Los Tres Ojos",
    price: "Gratis",
    lat: 18.475,
    lon: -69.847,
    publicParking: "free",
    publicParkingPrice: "",
    category: "populares",
    hours: {
        Mon: "9am-5pm",
        Tue: "9am-5pm",
        Wed: "9am-5pm",
        Thu: "9am-5pm",
        Fri: "9am-5pm",
        Sat: "9am-5pm",
        Sun: "9am-5pm"
    }
},
{
    id: "adrian-tropical",
    name: "Adrian Tropical Malecón",
    price: "Gratis (clientes)",
    lat: 18.464,
    lon: -69.918,
    publicParking: "free",
    publicParkingPrice: "",
    category: "populares",
    hours: {
        Mon: "Abierto",
        Tue: "Abierto",
        Wed: "Abierto",
        Thu: "Abierto",
        Fri: "Abierto",
        Sat: "Abierto",
        Sun: "Abierto"
    }
},
{
    id: "meson-cava",
    name: "Restaurante El Mesón de la Cava",
    price: "Gratis (clientes)",
    lat: 18.451,
    lon: -69.938,
    publicParking: "free",
    publicParkingPrice: "",
    category: "populares",
    hours: {
        Mon: "12pm-12am",
        Tue: "12pm-12am",
        Wed: "12pm-12am",
        Thu: "12pm-12am",
        Fri: "12pm-12am",
        Sat: "12pm-12am",
        Sun: "12pm-11pm"
    }
},
{
    id: "playa-boca-chica",
    name: "Playa Boca Chica",
    price: "Gratis",
    lat: 18.451,
    lon: -69.609,
    publicParking: "free",
    publicParkingPrice: "",
    category: "populares",
    hours: {
        Mon: "Abierto",
        Tue: "Abierto",
        Wed: "Abierto",
        Thu: "Abierto",
        Fri: "Abierto",
        Sat: "Abierto",
        Sun: "Abierto"
    }
},
{
    id: "playa-guayacanes",
    name: "Playa Guayacanes",
    price: "Gratis",
    lat: 18.423,
    lon: -69.462,
    publicParking: "free",
    publicParkingPrice: "",
    category: "populares",
    hours: {
        Mon: "Abierto",
        Tue: "Abierto",
        Wed: "Abierto",
        Thu: "Abierto",
        Fri: "Abierto",
        Sat: "Abierto",
        Sun: "Abierto"
    }
}
];
  // PARKING_SPOTS_END

  // state holds the data for the *currently logged-in user*.
  const state = {
    savedPlaces: new Set(),
    favorites: new Set(),
    userLocation: null, // New: for user's coordinates
    locationIntervalId: null, // New: to manage the location update timer
    parkingSpots: [], // Will be populated from allParkingSpots
    topFavorites: []  // Will be populated from allParkingSpots
  };

  // --- DOM ELEMENTS ---
  const elements = {
    appFrame: document.querySelector('.app-frame'),
    screens: document.querySelectorAll('.screen'),
    navButtons: document.querySelectorAll('.nav button'),
    clickSound: document.getElementById('clickSound'),
    navBar: document.querySelector('.nav'),
    searchInput: document.getElementById('searchInput'),
    mapFrame: document.getElementById('mapFrame'),
    parkingList: document.getElementById('parkingList'),
    searchResultCard: document.getElementById('searchResultCard'),
    savedList: document.getElementById('savedList'),
    favoriteList: document.getElementById('favoriteList'),
    profileDetails: document.getElementById('profileDetails'),
    loginForm: document.getElementById('loginForm'),
    registerForm: document.getElementById('registerForm'),
    detailsModal: document.getElementById('detailsModal'),
    detailsModalTitle: document.getElementById('detailsModalTitle'),
    detailsModalBody: document.getElementById('detailsModalBody'),
    closeDetailsModalBtn: document.getElementById('closeDetailsModalBtn'),
    commentsList: document.getElementById('commentsList'),
    commentInput: document.getElementById('commentInput'),
    commentRating: document.getElementById('commentRating'),
    submitCommentBtn: document.getElementById('submitCommentBtn'),
    topFavoritesList: document.getElementById('topFavoritesList'),
    searchFilters: document.getElementById('searchFilters'),
    searchContentPanels: document.querySelectorAll('.filter-content'),
    mostSearchedList: document.getElementById('mostSearchedList'),
    toastContainer: document.getElementById('toast-container'),
    // User profile edit elements
    userDisplay: document.getElementById('userDisplay'),
    userEdit: document.getElementById('userEdit'),
    usernameText: document.getElementById('usernameText'),
    emailText: document.getElementById('emailText'),
    usernameDisplayInput: document.getElementById('usernameDisplayInput'),
    emailInput: document.getElementById('emailInput'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    // Vehicle elements
    vehicleDisplay: document.getElementById('vehicleDisplay'),
    vehicleEdit: document.getElementById('vehicleEdit'),
    vehicleModelText: document.getElementById('vehicleModelText'),
    vehiclePlateText: document.getElementById('vehiclePlateText'),
    vehicleModelInput: document.getElementById('vehicleModelInput'),
    vehiclePlateInput: document.getElementById('vehiclePlateInput'),
    navPreference: document.getElementById('navPreference'),
    wazeNote: document.getElementById('wazeNote'),
    deletePreference: document.getElementById('deletePreference'),
  };

  // --- UI COMPONENTS ---
  const showToast = (message, type = 'success', duration = 3000) => {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    elements.toastContainer.appendChild(toast);

    // Animate out and remove
    setTimeout(() => {
        toast.style.animation = 'toast-out 0.5s forwards';
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, duration);
  };

  // --- Dark Mode ---
  const setDarkMode = (isDark) => {
    if (isDark) {
        document.body.classList.add('dark');
        elements.darkModeToggle.textContent = '☀️';
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark');
        elements.darkModeToggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'false');
    }
  };

  // --- DATA PERSISTENCE (LOCAL STORAGE) ---
  const saveData = () => {
    // We need to convert the Set to an Array for JSON serialization.
    if (appData.currentUser) {
      appData.users[appData.currentUser].savedPlaces = Array.from(state.savedPlaces);
      appData.users[appData.currentUser].favorites = Array.from(state.favorites);
    }
    localStorage.setItem('parqueaDOData', JSON.stringify(appData));
  };

  const loadData = () => {
    const savedData = localStorage.getItem('parqueaDOData');
    if (savedData) {
      appData = JSON.parse(savedData);
      // Only reset currentUser if the session was not meant to persist
      if (!appData.sessionPersists) {
        appData.currentUser = null;
      }
      // Ensure comments object exists for backward compatibility
      if (!appData.comments) {
        appData.comments = {};
      }
      if (!appData.searchAnalytics) {
        appData.searchAnalytics = {};
      }
    }

    // Create default admin user if it doesn't exist
    if (!appData.users.admin) {
      appData.users.admin = {
        password: 'admin',
        email: 'admin@parqueado.com',
        savedPlaces: [],
        favorites: [],
        vehiculo: 'N/A',
        placa: 'N/A',
        navigationApp: 'google', // Default navigation app
        locationPermission: 'prompt', // 'prompt', 'granted', or 'denied'
        deleteSavedOnGo: true // New: 'true' or 'false'
      };
    }
    saveData(); // Save back to create admin if it was new
  };

  // --- USER AUTHENTICATION ---
  const logout = () => {
    playClick();
    stopLocationUpdates(); // New: Stop tracking location on logout
    appData.currentUser = null;
    appData.sessionPersists = false; // Ensure session is not kept after logout
    state.savedPlaces.clear();
    state.favorites.clear();
    saveData();

    // Reset search UI to ensure no data leaks between sessions
    elements.searchInput.value = '';
    elements.searchResultCard.classList.add('hidden');
    elements.searchResultCard.innerHTML = '';
    navigate('login');
  };

  // --- SOUND ---
  const playClick = () => {
    elements.clickSound.currentTime = 0; // Rewind to start
    elements.clickSound.play().catch(error => console.log("Error playing sound:", error));
  };

  // --- NAVIGATION ---
  const navigate = (screenId) => {
    const targetScreen = document.getElementById(screenId);

    // If the target screen is already active, scroll to top instead of re-navigating.
    if (targetScreen && targetScreen.classList.contains('active')) {
        playClick();
        targetScreen.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return; // Stop further execution
    }

    // Prevent navigation to protected screens if not logged in
    const protectedScreens = !['splash', 'login', 'register'].includes(screenId);
    if (!appData.currentUser && protectedScreens) {
        console.log("Redirecting to login. Current user:", appData.currentUser);
        navigate('login');
        return;
    }
    if (screenId !== 'splash') playClick();
    
    // Show/Hide Nav Bar
    const isAuthScreen = ['splash', 'login', 'register'].includes(screenId);
    elements.navBar.classList.toggle('hidden', isAuthScreen);
    elements.darkModeToggle.classList.toggle('hidden', isAuthScreen);

    // Hide all screens
    elements.screens.forEach(screen => screen.classList.remove('active'));
    // Show the target screen
    if (targetScreen) {
      targetScreen.classList.add('active');
    }

    // Update nav button active state
    elements.navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === screenId && appData.currentUser);
    });

    // Re-render lists when navigating to their screens
    if (screenId === 'search') {
        renderMap();
        renderParkingSpots();
        renderTopFavorites();
        handleFilterChange('cercanas'); // Set default view
    }
    if (screenId === 'saved') renderSavedPlaces();
    if (screenId === 'favorites') renderFavorites();
    if (screenId === 'profile') renderProfile();
  };

  // --- RENDERING ---
  const renderMap = () => {
    // The map embed will always be Google Maps for a better interactive experience.
    // User's Waze/Google preference is handled by the "Ir" button.
    const url = `https://www.google.com/maps?q=Santo+Domingo&output=embed`;
    elements.mapFrame.src = url;
  };

  // A generic function to create a card component to reduce code duplication.
  const createCard = (content) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = content;
    return card;
  };

  const getCurrentDayHours = (spot) => {
    if (!spot.hours) return 'Horario no disponible';
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date().getDay();
    const dayKey = days[today];
    const hours = spot.hours[dayKey];
    if (!hours) return 'Horario no disponible';
    return `Hoy: ${hours}`;
  };

  const getStatusIndicator = (spot) => {
    switch (spot.publicParking) {
      case 'free':
        return `<span class="parking-status status-free">✳️ Público Gratis</span>`;
      case 'paid':
        return `<span class="parking-status status-paid">🅿️ Privado (${spot.price})</span>`;
      case 'none':
        return `<span class="parking-status status-paid">🅿️ Privado (${spot.price})</span>`;
      case 'not_found':
        return `<span class="parking-status status-none">🛑 Sin Parqueo Conocido</span>`;
      default:
        return '';
    }
  };

  // --- Location Services ---
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const updateUserLocation = () => {
    if (!navigator.geolocation) {
        showToast('La geolocalización no es soportada por tu navegador.', 'error');
        return;
    }

    const user = appData.users[appData.currentUser];
    if (!user) return;

    // If permission was already denied for this user, don't ask again.
    if (user.locationPermission === 'denied') {
        console.log("Location permission previously denied. Skipping request.");
        renderParkingSpots(); // Render list without distances
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Permission granted, save the choice if it was 'prompt'
            if (user.locationPermission !== 'granted') {
                user.locationPermission = 'granted';
                saveData();
            }
            state.userLocation = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };
            console.log("Location updated:", state.userLocation);
            // Only re-render if the user is currently on the search screen
            if (document.getElementById('search').classList.contains('active')) {
                renderParkingSpots(); // Re-render with new distances
            }
        },
        (error) => {
            console.error("Error getting location:", error);
            if (error.code === error.PERMISSION_DENIED) {
                showToast('Permiso de ubicación denegado.', 'error');
                // Persist the user's choice to not be asked again
                if (user.locationPermission !== 'denied') {
                    user.locationPermission = 'denied';
                    saveData();
                }
            } else {
                showToast('No se pudo obtener la ubicación.', 'error');
            }
            // If we fail, we should still render the list, just without distances.
            renderParkingSpots();
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const startLocationUpdates = () => {
    if (state.locationIntervalId) {
        // Already running, do nothing
        return;
    }
    console.log("Starting location updates...");
    updateUserLocation(); // Get location immediately
    state.locationIntervalId = setInterval(updateUserLocation, 60000); // Update every 1 minute
  };

  const stopLocationUpdates = () => {
    if (state.locationIntervalId) {
        console.log("Stopping location updates...");
        clearInterval(state.locationIntervalId);
        state.locationIntervalId = null;
        state.userLocation = null;
    }
  };


  const renderParkingSpots = () => {
    elements.parkingList.innerHTML = ''; // Clear existing list

    let spotsToRender = [...state.parkingSpots];

    if (state.userLocation) {
        spotsToRender = spotsToRender.map(spot => {
            const distance = calculateDistance(state.userLocation.lat, state.userLocation.lon, spot.lat, spot.lon);
            return { ...spot, calculatedDist: distance };
        }).sort((a, b) => a.calculatedDist - b.calculatedDist);
    }

    spotsToRender.forEach(spot => {
      const isSaved = state.savedPlaces.has(spot.name);
      const isFavorite = state.favorites.has(spot.name);

      let distanceHtml = '<small>Calculando distancia...</small><br>';
      if (state.userLocation && spot.calculatedDist !== undefined) {
          const distKm = spot.calculatedDist.toFixed(1);
          const walkTime = Math.round(spot.calculatedDist * 12); // Approx. 12 mins per km walking
          distanceHtml = `<small>Aprox. ${distKm} km - ${walkTime} min a pie</small><br>`;
      } else if (!navigator.geolocation) {
          distanceHtml = '<small>Ubicación no disponible</small><br>';
      }

      const cardContent = `
        <button class="details-btn" data-action="details" data-name="${spot.name}">⋮</button>
        <strong>${spot.name}</strong><br>
        ${distanceHtml}
        <small class="text-gray-500">${getCurrentDayHours(spot)}</small><br>
        ${getStatusIndicator(spot)}
        <button class="btn btn-main mt-2" data-action="go" data-name="${spot.name}">Ir</button>
        <button class="btn mt-2 ${isSaved ? 'btn-fav-active' : ''}" data-action="save" data-name="${spot.name}">
          ${isSaved ? '★ Guardado' : '☆ Guardar'}
        </button>
        <button class="btn mt-2 ${isFavorite ? 'btn-heart-active' : ''}" data-action="favorite" data-name="${spot.name}">
          ${isFavorite ? '❤️ Favorito' : '♡ Favorito'}
        </button>
      `;
      elements.parkingList.appendChild(createCard(cardContent));
    });
  };

  const renderTopFavorites = () => {
    elements.topFavoritesList.innerHTML = '';
    state.topFavorites.forEach(spot => {
        const isSaved = state.savedPlaces.has(spot.name);
        const isFavorite = state.favorites.has(spot.name);
        const cardContent = `
            <button class="details-btn" data-action="details" data-name="${spot.name}">⋮</button>
            <strong>${spot.name}</strong><br>
            <small class="text-gray-500">${getCurrentDayHours(spot)}</small><br>
            ${getStatusIndicator(spot)}
            <button class="btn btn-main mt-2" data-action="go" data-name="${spot.name}">Ir de Inmediato</button>
            <button class="btn mt-2 ${isSaved ? 'btn-fav-active' : ''}" data-action="save" data-name="${spot.name}">
              ${isSaved ? '★ Guardado' : '☆ Guardar'}
            </button>
            <button class="btn mt-2 ${isFavorite ? 'btn-heart-active' : ''}" data-action="favorite" data-name="${spot.name}">
              ${isFavorite ? '❤️ Favorito' : '♡ Favorito'}
            </button>
        `;
        elements.topFavoritesList.appendChild(createCard(cardContent));
    });
  };

  const renderSavedPlaces = () => {
    elements.savedList.innerHTML = '';
    if (state.savedPlaces.size === 0) {
        elements.savedList.innerHTML = '<p class="text-gray-500 text-center">No has guardado ningún lugar.</p>';
        return;
    }
    const allSpots = [...allParkingSpots];
    state.savedPlaces.forEach(name => {
      const spot = allSpots.find(s => s.name === name) || { name, publicParking: 'paid', price: '$70/hr', hours: { Mon: 'N/A' } };
      const cardContent = `
        <button class="details-btn" data-action="details" data-name="${name}">⋮</button>
        <strong>${name}</strong><br>
        <small class="text-gray-500">${getCurrentDayHours(spot)}</small><br>
        ${getStatusIndicator(spot)}
        <button class="btn btn-main mt-2" data-action="go" data-name="${name}">Ir</button>
        <button class="btn mt-2" data-action="save" data-name="${name}">Quitar de Guardados</button>
      `;
      elements.savedList.appendChild(createCard(cardContent));
    });
  };

  const renderFavorites = () => {
    elements.favoriteList.innerHTML = '';
    if (state.favorites.size === 0) {
        elements.favoriteList.innerHTML = '<p class="text-gray-500 text-center">No tienes lugares favoritos.</p>';
        return;
    }
    const allSpots = [...allParkingSpots];
    state.favorites.forEach(name => {
      // Find the original spot to get its data
      const spot = allSpots.find(s => s.name === name) || { name, publicParking: 'paid', price: '$70/hr', hours: { Mon: 'N/A' } };

      const cardContent = `
        <button class="details-btn" data-action="details" data-name="${name}">⋮</button>
        <strong>${name}</strong><br>
        <small class="text-gray-500">${getCurrentDayHours(spot)}</small><br>
        ${getStatusIndicator(spot)}
        <button class="btn btn-main mt-2" data-action="go" data-name="${name}">Ir</button>
        <button class="btn mt-2" data-action="favorite" data-name="${name}">Quitar Favorito</button>
      `;
      elements.favoriteList.appendChild(createCard(cardContent));
    });
  };

  const renderMostSearched = () => {
    elements.mostSearchedList.innerHTML = '';
    const analytics = appData.searchAnalytics;
    if (Object.keys(analytics).length === 0) {
        elements.mostSearchedList.innerHTML = '<p class="text-gray-500 text-center">Aún no hay búsquedas populares.</p>';
        return;
    }

    const sortedSearches = Object.entries(analytics)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5); // Get top 5

    sortedSearches.forEach(([query, count]) => {
        // Capitalize first letter for display
        const displayName = query.charAt(0).toUpperCase() + query.slice(1);
        const cardContent = `
            <strong>${displayName}</strong><br>
            <small class="text-gray-500">Buscado ${count} ${count === 1 ? 'vez' : 'veces'}</small>
            <button class="btn btn-main mt-2" data-action="search-term" data-term="${query}">Buscar</button>
        `;
        elements.mostSearchedList.appendChild(createCard(cardContent));
    });
  };


  const renderProfile = () => {
    if (!appData.currentUser) return;
    const user = appData.users[appData.currentUser];

    // Populate display view
    elements.usernameText.textContent = appData.currentUser;
    elements.emailText.textContent = user.email || 'Correo no registrado';

    // Ensure edit form is hidden and display is shown
    elements.userDisplay.classList.remove('hidden');
    elements.userEdit.classList.add('hidden');


    // Render vehicle info
    elements.vehicleModelText.textContent = user.vehiculo || 'No especificado';
    elements.vehiclePlateText.textContent = user.placa || 'No especificada';

    // Ensure edit form is hidden and display is shown
    elements.vehicleDisplay.classList.remove('hidden');
    elements.vehicleEdit.classList.add('hidden');

    // Set navigation preference
    const navAppPreference = user.navigationApp || 'google';
    elements.navPreference.querySelector(`input[value="${navAppPreference}"]`).checked = true;
    elements.wazeNote.classList.toggle('hidden', navAppPreference !== 'waze');

    // New: Set delete preference
    // Defaults to 'yes' (true) if the property is missing or explicitly true.
    const deletePref = user.deleteSavedOnGo === false ? 'no' : 'yes';
    elements.deletePreference.querySelector(`input[value="${deletePref}"]`).checked = true;
  };

  // --- Comments Rendering ---
  const renderComments = (spotName) => {
    elements.commentsList.innerHTML = '';
    const comments = appData.comments[spotName] || [];

    if (comments.length === 0) {
        elements.commentsList.innerHTML = '<p class="text-xs text-gray-500 dark:text-gray-400 text-center">No hay comentarios aún. ¡Sé el primero!</p>';
        return;
    }

    comments.forEach((comment, index) => {
        const commentEl = document.createElement('div');
        commentEl.className = 'comment-item';

        let ratingHtml = '';
        if (comment.rating && comment.rating > 0) {
            ratingHtml += '<div class="rating">';
            for (let i = 1; i <= 5; i++) {
                ratingHtml += i <= comment.rating ? '★' : '<span class="empty-star">☆</span>';
            }
            ratingHtml += '</div>';
        }

        // Add delete button only if the comment belongs to the current user
        const deleteButtonHtml = comment.user === appData.currentUser
            ? `<button class="comment-delete-btn" data-action="delete-comment" data-spot-name="${spotName}" data-index="${index}" title="Eliminar comentario">&times;</button>`
            : '';

        commentEl.innerHTML = `
            ${deleteButtonHtml} ${ratingHtml}
            <p class="text-sm">"${comment.text}"</p>
            <small class="text-xs text-gray-500 dark:text-gray-400">- ${comment.user}</small>
        `;
        elements.commentsList.appendChild(commentEl);
    });
  };

  // --- Details Modal ---
  const showDetailsModal = (spotName) => {
    const spot = allParkingSpots.find(s => s.name === spotName);
    if (!spot) return;

    playClick();

    elements.detailsModalTitle.textContent = spot.name;

    const availabilityHtml = spot.hours ? Object.entries(spot.hours).map(([day, hours]) => {
        const dayNames = { Mon: 'Lunes', Tue: 'Martes', Wed: 'Miércoles', Thu: 'Jueves', Fri: 'Viernes', Sat: 'Sábado', Sun: 'Domingo' };
        return `<li><span class="day">${dayNames[day] || day}</span> <span>${hours}</span></li>`;
    }).join('') : '<li>Horario no disponible</li>';

    const moreParkingInfo = spot.publicParking === 'free' || spot.publicParking === 'paid'
        ? 'Sí, hay otras opciones de parqueo público en la zona.'
        : 'No se conocen otras opciones de parqueo público cercanas.';

    elements.detailsModalBody.innerHTML = `
        <div class="details-section">
            <h4>Más Parqueos Cercanos</h4>
            <p>${moreParkingInfo}</p>
        </div>
        <div class="details-section">
            <h4>Disponibilidad Semanal</h4>
            <ul>${availabilityHtml}</ul>
        </div>
    `;

    // Reset comment form before showing
    elements.commentInput.value = '';
    elements.commentRating.dataset.rating = '0';
    const stars = elements.commentRating.querySelectorAll('span');
    stars.forEach(star => star.classList.remove('selected', 'hover'));

    // Render comments and set data for submission
    renderComments(spotName);
    elements.submitCommentBtn.dataset.spotName = spotName; // Store spot name

    elements.detailsModal.classList.remove('hidden');
  };

  const hideDetailsModal = () => {
      elements.detailsModal.classList.add('hidden');
      // Also clear the form in case it was left half-filled
      elements.commentInput.value = '';
      elements.commentRating.dataset.rating = '0';
      const stars = elements.commentRating.querySelectorAll('span');
      stars.forEach(star => star.classList.remove('selected', 'hover'));
  };

  // --- ACTIONS ---

  // New utility function to normalize strings for searching
  const normalizeString = (str) => {
    if (!str) return '';
    return str
      .toLowerCase()
      // Replace accented characters with their non-accented counterparts
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      // Remove spaces, commas, and periods for better matching
      .replace(/[\s,.]+/g, '');
  };
  
  const goToLocation = (locationName) => {
    playClick();
    const user = appData.users[appData.currentUser];
    const navApp = user.navigationApp || 'google';
    let url;

    if (navApp === 'waze') {
        url = `https://waze.com/ul?q=${encodeURIComponent(locationName)}&navigate=yes`;
    } else { // 'google' or default
        url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locationName)}`;
    }
    window.open(url, '_blank');

    // If the location was in the temporary "saved" list, remove it.
    const currentUser = appData.users[appData.currentUser];
    // Check if the place is saved AND if the user wants to delete it on go.
    // The `!== false` check handles both `true` and `undefined` cases correctly.
    if (state.savedPlaces.has(locationName) && currentUser.deleteSavedOnGo !== false) {
        setTimeout(() => { // Use a timeout to allow the new tab to open first
            state.savedPlaces.delete(locationName);
            saveData();
            showToast(`${locationName} eliminado de guardados.`, 'error');

            // Re-render the current view to update button states
            const activeScreenId = document.querySelector('.screen.active').id;
            if (activeScreenId === 'saved') {
                renderSavedPlaces();
            } else if (activeScreenId === 'search') {
                renderParkingSpots();
                renderTopFavorites();
            }
            
            // Also re-render search card if it's visible and matches the name
            if (!elements.searchResultCard.classList.contains('hidden')) {
                const searchCardTitle = elements.searchResultCard.querySelector('strong');
                if (searchCardTitle && searchCardTitle.textContent === locationName) {
                    handleSearch();
                }
            }
        }, 100); // 100ms delay
    }
  };

  const updateMap = (query) => {
    // The map embed will always be Google Maps.
    const url = `https://www.google.com/maps?q=${encodeURIComponent(query + ", Santo Domingo")}&output=embed`;
    elements.mapFrame.src = url;
  };

  // Performs a real search within the app's database.
  // This new logic is more flexible with user input.
  const searchForSpot = (query) => {
    const normalizedQuery = normalizeString(query);

    if (!normalizedQuery) {
        return { found: false, name: query, price: 'N/A', publicParking: 'not_found', hours: null };
    }

    // Primary search strategy: find the best match based on normalized names
    const foundSpot = allParkingSpots.find(spot => {
        const normalizedSpotName = normalizeString(spot.name);
        // Check if the normalized spot name contains the normalized query
        return normalizedSpotName.includes(normalizedQuery);
    });

    if (foundSpot) {
      // Return a copy of the found spot object and mark it as found.
      return { ...foundSpot, found: true };
    }
    
    // Fallback strategy (from original code): Check if every word from the query exists in the spot name.
    const queryWords = query.toLowerCase().split(' ').filter(Boolean);
    const fallbackSpot = allParkingSpots.find(spot => {
        const spotNameLower = spot.name.toLowerCase();
        return queryWords.every(word => spotNameLower.includes(word));
    });

    if (fallbackSpot) {
        return { ...fallbackSpot, found: true };
    }

    // If still not found, return a "not found" object
    return { found: false, name: query, price: 'N/A', publicParking: 'not_found', hours: null };
  };


  const handleSearch = () => {
    const query = elements.searchInput.value.trim();
    if (query) {
      updateMap(query);

      // Track search
      const normalizedQuery = query.toLowerCase();
      appData.searchAnalytics[normalizedQuery] = (appData.searchAnalytics[normalizedQuery] || 0) + 1;
      saveData(); // Save analytics on each search
      
      const searchResult = searchForSpot(query);
      const statusIndicator = getStatusIndicator(searchResult);
      
      // Check the saved/favorite state for the searched item
      const isSaved = state.savedPlaces.has(searchResult.name);
      const isFavorite = state.favorites.has(searchResult.name);

      // The "Ir" button is always available, even if no parking is found,
      // as the user might want to go to the location anyway.
      let buttonHtml = `
        <button class="btn btn-main mt-2" data-action="go" data-name="${searchResult.found ? searchResult.name : query}">
            Ir al Lugar
        </button>`;

      // Only show save/favorite buttons if a spot was actually found
      if (searchResult.found) {
        buttonHtml += `
        <button class="btn mt-2 ${isSaved ? 'btn-fav-active' : ''}" data-action="save" data-name="${searchResult.name}">
          ${isSaved ? '★ Guardado' : '☆ Guardar'}
        </button>
        <button class="btn mt-2 ${isFavorite ? 'btn-heart-active' : ''}" data-action="favorite" data-name="${searchResult.name}">
          ${isFavorite ? '❤️ Favorito' : '♡ Favorito'}
        </button>
      `;
      }

      const displayName = searchResult.found ? searchResult.name : query;
      const detailsButton = searchResult.found ? `<button class="details-btn" data-action="details" data-name="${displayName}">⋮</button>` : '';
      
      const searchResultContent = `
        <h3 class="section-title">Resultado de la Búsqueda</h3>
        <div class="card">
            ${detailsButton}
            <strong>${displayName}</strong><br>
            <small class="text-gray-500">${getCurrentDayHours(searchResult)}</small><br>
            ${statusIndicator}<br>
            <div class="mt-2">${buttonHtml}</div>
        </div>
      `;
      elements.searchResultCard.innerHTML = searchResultContent;
      elements.searchResultCard.classList.remove('hidden');

    }
  };

  const toggleSavedPlace = (name) => {
    playClick();
    const isAdding = !state.savedPlaces.has(name);
    if (state.savedPlaces.has(name)) {
      state.savedPlaces.delete(name);
      showToast(`${name} eliminado de tus lugares.`, 'error');
    } else {
      state.savedPlaces.add(name);
      showToast(`${name} ha sido guardado!`);
    }
    // Re-render affected lists
    renderParkingSpots();
    renderTopFavorites();
    if (document.getElementById('saved').classList.contains('active')) {
      renderSavedPlaces();
    }
    // Re-render search card if it's visible and matches the name
    if (!elements.searchResultCard.classList.contains('hidden')) {
        const searchCardTitle = elements.searchResultCard.querySelector('strong');
        if (searchCardTitle && searchCardTitle.textContent === name) {
            handleSearch();
        }
    }
    saveData(); // Persist changes
    // Navigate to favorites screen only when adding a new one
    if (isAdding) {
        navigate('saved');
    }
  };

  const toggleFavorite = (name) => {
    playClick();
    const isAdding = !state.favorites.has(name);
    if (state.favorites.has(name)) {
      state.favorites.delete(name);
      showToast(`${name} eliminado de favoritos.`, 'error');
    } else {
      state.favorites.add(name);
      showToast(`${name} añadido a favoritos!`);
    }
    renderParkingSpots();
    renderTopFavorites();
    if (document.getElementById('favorites').classList.contains('active')) {
      renderFavorites();
    }
    // Re-render search card if it's visible and matches the name
    if (!elements.searchResultCard.classList.contains('hidden')) {
        const searchCardTitle = elements.searchResultCard.querySelector('strong');
        if (searchCardTitle && searchCardTitle.textContent === name) {
            handleSearch();
        }
    }
    saveData();
    if (isAdding) {
      navigate('favorites');
    }
  };

  const handleAddComment = () => {
    playClick();
    const spotName = elements.submitCommentBtn.dataset.spotName;
    const commentText = elements.commentInput.value.trim();
    const rating = parseInt(elements.commentRating.dataset.rating || '0');

    if (!spotName || !commentText || rating === 0) {
        if (!commentText) showToast('Por favor escribe un comentario.', 'error');
        if (rating === 0) showToast('Por favor selecciona una calificación.', 'error');
        return;
    }

    if (!appData.comments[spotName]) {
        appData.comments[spotName] = [];
    }

    appData.comments[spotName].push({
        user: appData.currentUser,
        text: commentText,
        rating: rating,
    });

    saveData();
    elements.commentInput.value = ''; // Clear input
    // Reset stars
    elements.commentRating.dataset.rating = '0';
    const stars = elements.commentRating.querySelectorAll('span');
    stars.forEach(star => star.classList.remove('selected'));

    renderComments(spotName); // Re-render comments list
    showToast('Comentario añadido con éxito.');
  };

  const handleDeleteComment = (spotName, index) => {
    playClick();
    if (!appData.comments[spotName] || !appData.comments[spotName][index]) {
        console.error("Comment not found for deletion.");
        return;
    }

    // Security check: ensure the user deleting is the one who created it.
    if (appData.comments[spotName][index].user !== appData.currentUser) {
        showToast('No puedes eliminar comentarios de otros usuarios.', 'error');
        return;
    }

    // Remove the comment from the array
    appData.comments[spotName].splice(index, 1);

    saveData();
    renderComments(spotName); // Re-render the list
    showToast('Comentario eliminado.');
  };

  const handleFilterChange = (filter) => {
    // Update button states
    elements.searchFilters.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    // Update content visibility
    elements.searchContentPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === `content-${filter}`);
    });

    // Render content if it's the "most searched" tab
    if (filter === 'buscados') {
        renderMostSearched();
    }
  };


  const handleEditVehicle = () => {
    playClick();
    const user = appData.users[appData.currentUser];
    // Populate inputs with current data
    elements.vehicleModelInput.value = user.vehiculo || '';
    elements.vehiclePlateInput.value = user.placa || '';
    // Toggle visibility
    elements.vehicleDisplay.classList.add('hidden');
    elements.vehicleEdit.classList.remove('hidden');
  };

  const handleCancelEditVehicle = () => {
    playClick();
    elements.vehicleDisplay.classList.remove('hidden');
    elements.vehicleEdit.classList.add('hidden');
  };

  const handleSaveVehicle = () => {
    playClick();
    const newModel = elements.vehicleModelInput.value.trim();
    const newPlate = elements.vehiclePlateInput.value.trim();

    appData.users[appData.currentUser].vehiculo = newModel;
    appData.users[appData.currentUser].placa = newPlate;
    saveData();
    showToast('Información del vehículo actualizada.');
    renderProfile(); // Re-render to show updated info and switch view
  };

  const handleEditUser = () => {
    playClick();
    const user = appData.users[appData.currentUser];
    // Populate inputs with current data
    elements.usernameDisplayInput.value = appData.currentUser;
    elements.emailInput.value = user.email || '';
    // Toggle visibility
    elements.userDisplay.classList.add('hidden');
    elements.userEdit.classList.remove('hidden');
  };

  const handleCancelEditUser = () => {
    playClick();
    elements.userDisplay.classList.remove('hidden');
    elements.userEdit.classList.add('hidden');
  };

  const handleSaveUser = () => {
    playClick();
    const newEmail = elements.emailInput.value.trim();

    if (!newEmail || !/^\S+@\S+\.\S+$/.test(newEmail)) {
        showToast('Por favor, introduce un correo electrónico válido.', 'error');
        return;
    }

    appData.users[appData.currentUser].email = newEmail;
    saveData();
    showToast('Correo electrónico actualizado.');
    renderProfile(); // Re-render to show updated info and switch view
  };

  // --- EVENT LISTENERS ---
  const setupEventListeners = () => {
    // Use event delegation on a parent container for better performance
    elements.appFrame.addEventListener('click', (e) => {
      const target = e.target.closest('button'); // Find the closest button
      if (!target) return;

      // Navigation
      if (target.closest('.nav') && appData.currentUser) {
        navigate(target.dataset.target);
      }
      
      let action = target.dataset.action;
      if (action === 'navigate') {
        navigate(target.dataset.target);
      }

      // Actions (Reserve, Favorite, Delete)
      if (action) {
        const parkingName = target.dataset.name;
        // Re-assign action to null after use to prevent re-triggering
        switch (action) {
          case 'go':
            goToLocation(parkingName);
            break;
          case 'save':
            toggleSavedPlace(parkingName);
            break;
          case 'favorite':
            toggleFavorite(parkingName);
            break;
          case 'details':
            showDetailsModal(parkingName);
            break;
          case 'delete-comment':
            const spotName = target.dataset.spotName;
            const commentIndex = parseInt(target.dataset.index);
            handleDeleteComment(spotName, commentIndex);
            break;
          case 'search-term':
            const term = target.dataset.term;
            elements.searchInput.value = term;
            handleSearch();
            break;
          case 'edit-user':
            handleEditUser();
            break;
          case 'save-user':
            handleSaveUser();
            break;
          case 'cancel-edit-user':
            handleCancelEditUser();
            break;
          case 'edit-vehicle':
            handleEditVehicle();
            break;
          case 'save-vehicle':
            handleSaveVehicle();
            break;
          case 'cancel-edit-vehicle':
            handleCancelEditVehicle();
            break;
        }
        action = null;
      }
      
      // Logout
      if (target.id === 'logoutButton') {
          logout();
      }

      // Details Modal
      if (target.id === 'closeDetailsModalBtn') {
          hideDetailsModal();
      }

      // Submit Comment
      if (target.id === 'submitCommentBtn') {
          handleAddComment();
      }
    });

    elements.deletePreference.addEventListener('change', (e) => {
        if (e.target.name === 'deletePref') {
            playClick();
            const shouldDelete = e.target.value === 'yes';
            appData.users[appData.currentUser].deleteSavedOnGo = shouldDelete;
            saveData();
            showToast(`Los guardados ${shouldDelete ? 'se eliminarán' : 'no se eliminarán'} al presionar "Ir".`);
        }
    });

    elements.detailsModal.addEventListener('click', (e) => {
        if (e.target === elements.detailsModal) hideDetailsModal();
    });

    elements.navPreference.addEventListener('change', (e) => {
        if (e.target.name === 'navApp') {
            playClick();
            const selectedApp = e.target.value;
            appData.users[appData.currentUser].navigationApp = selectedApp;
            saveData();
            showToast(`Preferencia de navegación: ${selectedApp === 'waze' ? 'Waze' : 'Google Maps'}`);
            elements.wazeNote.classList.toggle('hidden', selectedApp !== 'waze');
        }
    });

    elements.searchFilters.addEventListener('click', e => {
        const target = e.target.closest('.filter-btn');
        if (target) {
            playClick();
            handleFilterChange(target.dataset.filter);
        }
    });

    // --- Star Rating Listeners ---
    const stars = elements.commentRating.querySelectorAll('span');

    elements.commentRating.addEventListener('mouseover', e => {
        if (e.target.tagName !== 'SPAN') return;
        const hoverValue = parseInt(e.target.dataset.value);
        stars.forEach(star => {
            star.classList.toggle('hover', parseInt(star.dataset.value) <= hoverValue);
        });
    });

    elements.commentRating.addEventListener('mouseout', () => {
        stars.forEach(star => star.classList.remove('hover'));
    });

    elements.commentRating.addEventListener('click', e => {
        if (e.target.tagName !== 'SPAN') return;
        const ratingValue = parseInt(e.target.dataset.value);
        elements.commentRating.dataset.rating = ratingValue;
        stars.forEach(star => {
            if (parseInt(star.dataset.value) <= ratingValue) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    });

    elements.darkModeToggle.addEventListener('click', () => {
        const isCurrentlyDark = document.body.classList.contains('dark');
        setDarkMode(!isCurrentlyDark);
    });

    // Login Form
    elements.loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        playClick();
        const username = document.getElementById('usernameInput').value.trim();
        const rememberMe = document.getElementById('rememberMeInput').checked;
        const password = document.getElementById('passwordInput').value;

        if (appData.users[username] && appData.users[username].password === password) {
            // Login successful
            appData.currentUser = username;
            appData.sessionPersists = rememberMe; // Set session persistence

            // Ensure navApp exists for backward compatibility for older users
            if (!appData.users[username].navigationApp) {
                appData.users[username].navigationApp = 'google';
            }

            // Ensure locationPermission exists for backward compatibility
            if (appData.users[username].locationPermission === undefined) {
                appData.users[username].locationPermission = 'prompt';
            }
            // Ensure deleteSavedOnGo exists for backward compatibility
            if (appData.users[username].deleteSavedOnGo === undefined) {
                appData.users[username].deleteSavedOnGo = true;
            }

            // Convert stored array back to a Set
            state.savedPlaces = new Set(appData.users[username].savedPlaces || []);
            state.favorites = new Set(appData.users[username].favorites || []);
            
            elements.loginForm.reset();
            saveData(); // Save the current user session
            startLocationUpdates(); // Start location tracking for the session
            navigate('search');
        } else {
            showToast("Usuario o contraseña incorrectos.", 'error');
            elements.loginForm.reset();
        }
    });

    // New: Register Form
    elements.registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        playClick();
        const formData = new FormData(e.target);
        const username = formData.get('username').trim();
        const email = formData.get('email').trim();
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        const vehiculo = formData.get('vehiculo').trim();
        const placa = formData.get('placa').trim();

        if (password !== confirmPassword) {
            showToast('Las contraseñas no coinciden.', 'error');
            return;
        }
        if (appData.users[username]) {
            showToast('El nombre de usuario ya existe.', 'error');
            return;
        }

        appData.users[username] = { password, email, savedPlaces: [], favorites: [], vehiculo, placa, navigationApp: 'google', locationPermission: 'prompt', deleteSavedOnGo: true };
        saveData();
        showToast('¡Usuario registrado con éxito!');
        elements.registerForm.reset();
        navigate('login');
    });

    // Search
    elements.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    });
  };

  // --- INITIALIZATION ---
  const initializeParkingData = () => {
    state.parkingSpots = allParkingSpots.filter(spot => spot.category === 'cercanas');
    state.topFavorites = allParkingSpots.filter(spot => spot.category === 'populares');
  };

  const init = () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);

    initializeParkingData();
    loadData();
    setupEventListeners();

    // Check if a user is already logged in from a persistent session
    if (appData.currentUser) {
      // If logged in, load their data and get location
      const user = appData.users[appData.currentUser];
      state.savedPlaces = new Set(user.savedPlaces || []);
      state.favorites = new Set(user.favorites || []);
      startLocationUpdates(); // Start location tracking for the session
      navigate('search'); // Go directly to the search screen
    } else {
      navigate('splash'); // Otherwise, show the splash screen
    }
  };

  init();
});
// End of script_mockup.js
// This script is a mockup for a parking spot management application.
// It includes user authentication, parking spot management, and location services.
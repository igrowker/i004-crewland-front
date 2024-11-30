export const dataPost = [
  {
    id: 0,
    user: {
      id: 0,
      imgUser: "/users/08.png",
      name: "Cande Gómez",
    },
    festivalId: 0,
    type: "transporte",
    title: "Busco transporte",
    details:
      "¿Alguien viaja desde Córdoba a Buenos Aires para el recital? Estoy buscando compartir transporte para hacer el viaje más divertido. Es una gran oportunidad para ahorrar entre todos y además disfrutar de buena compañía en el camino.",
    dateCreate: "2hrs ago",
  },
  {
    id: 1,
    user: {
      id: 1,
      imgUser: "/users/01.png",
      name: "Gastón Paz",
    },
    festivalId: 1,
    type: "alojamiento",
    title: "Busco alojamiento",
    details:
      "¿Alguien ofrece alojamiento en Buenos Aires para el recital? Estaré en Palermo, llegando el viernes 24 a las 15:00 y quedándome hasta el domingo 26 a las 10:00. Busco un lugar cómodo y seguro para descansar después del evento. ¡Gracias! ",
    dateCreate: "4hrs ago",
  },
  {
    id: 2,
    user: {
      id: 2,
      imgUser: "/users/06.png",
      name: "Azul Richiardi",
    },
    festivalId: 2,
    type: "crew",
    title: "Busco compañero de festival",
    details:
      "Estoy buscando un compañero o compañera de festival para compartir esta increíble experiencia. La idea es disfrutar juntos de la música, los artistas, y todo el ambiente mágico que un festival ofrece. Si también estás buscando alguien con quien pasarla bien, hacer nuevos amigos y crear recuerdos inolvidables, ¡házmelo saber!",
    dateCreate: "7hrs ago",
  },
  {
    id: 3,
    user: {
      id: 3,
      imgUser: "/users/05.png",
      name: "Rosa Altamirano",
    },
    festivalId: 3,
    type: "crew",
    title: "Busco compañero de festival",
    details:
      "Estoy buscando un compañero o compañera de festival para compartir esta increíble experiencia. La idea es disfrutar juntos de la música, los artistas, y todo el ambiente mágico que un festival ofrece. Si también estás buscando alguien con quien pasarla bien, hacer nuevos amigos y crear recuerdos inolvidables, ¡házmelo saber!",
    dateCreate: "7hrs ago",
  },
];

export const typesWithIcons: { icon: string; type: string }[] = [
  {
    icon: "/departament.png",
    type: "Alojamiento",
  },
  {
    icon: "/car.png",
    type: "Transporte",
  },
  {
    icon: "/groups.png",
    type: "Compañero",
  },
  {
    icon: "",
    type: "Otro",
  },
];

export const crews = [
  {
    id: 1,
    img: "/users/01.png",
    name: "Renata Gimenez"
  },
  {
    id: 2,
    img: "/users/02.png",
    name: "Renata Gimenez"
  },
  {
    id: 3,
    img: "/users/03.png",
    name: "Renata Gimenez"
  },
  {
    id: 4,
    img: "/users/04.png",
    name: "Renata Gimenez"
  } 
]

export const festivals = ["Lolapalloza2025", "+100 bandas"]
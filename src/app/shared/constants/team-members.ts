import { Organizer } from "@shared/interfaces/organizer.interface";

export const TEAM_MEMBERS: Organizer[] = [
  {
    id: 1,
    name: "Estefanía García Gallardo",
    photo: "nya.jpeg",
    bio:
      "Soy desarrolladora full stack y amante del open source <3. Entre los proyectos para la comunidad que he creado están <a href='https://npkill.js.org/'>Npkill</a> y la documentación española de RxJS. A veces escribo artículos técnicos y soy editora de <a href='https://medium.com/puntotech'>PuntoTech</a>.",
    socialMedia: [
      { platform: "twitter", url: "https://twitter.com/nyablk" },
      { platform: "github", url: "https://github.com/nyagarcia" },
    ],
  },
  {
    id: 2,
    name: "Carlos Caballero González",
    photo: "carlos.jpg",
    bio:
      "Carlos Caballero González es Ingeniero en Informática y Doctor en Informática por la Universidad de Málaga. Máster en Ingeniería del Software e Inteligencia Artificial. Es profesor en la Universidad Oberta de Cataluña y la Junta de Andalucía en la familia profesional de Informática y Telecomunicaciones. Ha escrito varios libros docentes y más de una decena de artículos de investigación en las primeras revistas a nivel internacional como son las publicaciones en Solar Physics (A Comparative Study of Clustering Methods for Active Region Detection in Solar EUV Images; Automatic tracking of active regions and detection of solar flares on solar EUV images).",
    socialMedia: [
      { platform: "twitter", url: "https://twitter.com/carlillo" },
      { platform: "github", url: "https://github.com/caballerog" },
      { platform: "link", url: "https://carloscaballero.io" },
    ],
  },
  {
    id: 3,
    name: "Juan Torres Gómez",
    photo: "juan.png",
    bio:
      "Me encanta la programación, la WEB, la pizza y resolver problemas :D Siempre creando. Creador del proyecto <a href='https://npkill.js.org/'>Npkill</a>. <br> <ul><li> Full Stack </li> <li> Sysadmin </li><li> Desarrollador de Videojuegos </li><li> Creador </li> </ul> <br> Ah, ¡También me encanta contribuir al open source!",
    socialMedia: [
      { platform: "twitter", url: "https://twitter.com/juaniman99" },
      { platform: "github", url: "https://github.com/zaldih" },
    ],
  },
  {
    id: 4,
    name: "Luis José Sánchez González",
    photo: "luis.jpeg",
    bio: "",
    socialMedia: [
      { platform: "twitter", url: "https://twitter.com/luisjoseprofe" },
      { platform: "github", url: "https://github.com/luisjosesanchez" },
      { platform: "link", url: "https://luisjose.org/" },
    ],
  },
];

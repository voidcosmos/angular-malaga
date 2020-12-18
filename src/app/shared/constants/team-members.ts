import { Organizer } from "@shared/interfaces/organizer.interface";

export const TEAM_MEMBERS: Organizer[] = [
  {
    id: 1,
    name: "Estefanía García Gallardo",
    photo: "nya.jpeg",
    bio: "",
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
      "Hi! My name is Carlos Caballero and I'm a PhD. in Computer Science from Málaga, Spain. Teaching developers and degree/master computer science how to be experts in web technologies and computer science fundamentals is what I do. I'm teaching in a vocational center and the University Oberta of Cataluya. <br> Also, I teach the companies which ask me specific courses in Angular, TypeScript, NodeJS or any topic about development. I have collaborated with universities in research tasks, as a result of which I have given several talks around of the world and obtained a PhD. in computer science. In addition, I have written many books about computer science for computer students from networks to Web programming.",
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
      "I love open source, the WEB, pizza and resolving problems :D Making stuff, all the time. Creator of the Npkill project. <br> <ul><li> Full Stack </li> <li> Sysadmin </li><li> Videogames DEV </li><li> Maker </li> </ul> <br> Oh, and I also love to contribute to open source!",
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

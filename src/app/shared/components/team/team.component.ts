import { Component } from "@angular/core";
import { Organizer } from "@shared/interfaces/organizer.interface";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent {
  organizers: Partial<Organizer>[] = [
    { name: "Estefanía García Gallardo", photo: "nya.jpeg" },
    { name: "Carlos Caballero González", photo: "carlos.jpg" },
    { name: "Juan Torres Gómez", photo: "juan.png" },
    { name: "Luis José Sánchez González", photo: "luis.jpeg" }
  ];
}

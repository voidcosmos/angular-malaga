import { Component, Input } from "@angular/core";
import { Organizer } from "@shared/interfaces/organizer.interface";

@Component({
  selector: "ngmlg-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.css"],
})
export class TeamListComponent {
  @Input() teamMembers: Organizer[];
}

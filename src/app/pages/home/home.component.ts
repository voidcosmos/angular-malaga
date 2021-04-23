import { Component } from "@angular/core";
import { TEAM_MEMBERS } from "@shared/constants/team-members";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  organizers = TEAM_MEMBERS;
}

import { Component } from "@angular/core";
import { TeamService } from "@shared/services/team.service";

@Component({
  selector: "ngmlg-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent {
  constructor(private TeamService: TeamService) {}

  teamMembers = this.TeamService.getTeam();
}

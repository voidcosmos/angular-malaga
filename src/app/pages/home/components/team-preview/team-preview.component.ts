import { Component } from "@angular/core";
import { TeamService } from "@shared/services/team.service";

@Component({
  selector: "ngmlg-team-preview",
  templateUrl: "./team-preview.component.html",
  styleUrls: ["./team-preview.component.css"],
})
export class TeamPreviewComponent {
  constructor(private TeamService: TeamService) {}

  teamMembers = this.TeamService.getTeam();
}

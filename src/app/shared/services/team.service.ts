import { Injectable } from "@angular/core";
import { TEAM_MEMBERS } from "@shared/constants/team-members";
import { Organizer } from "@shared/interfaces/organizer.interface";

@Injectable({
  providedIn: "root",
})
export class TeamService {
  private team = TEAM_MEMBERS;

  getTeam(): Organizer[] {
    return this.team;
  }

  getTeamMemberById(searchId: number): Organizer {
    return this.team.find(({ id }) => id === searchId);
  }
}

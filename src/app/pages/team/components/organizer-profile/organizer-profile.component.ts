import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Organizer } from "@shared/interfaces/organizer.interface";
import { TeamService } from "@shared/services/team.service";
import { map, switchMap, tap } from "rxjs/operators";

@Component({
  selector: "ngmlg-organizer-profile",
  templateUrl: "./organizer-profile.component.html",
  styleUrls: ["./organizer-profile.component.css"],
})
export class OrganizerProfileComponent {
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  organizer$ = this.route.paramMap.pipe(
    map((params) => params.get("id")),
    map(Number),
    map((id) => this.teamService.getTeamMemberById(id)),
    tap((val) => console.log(val))
  );

  faGithub = faGithub;
  faLink = faLink;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  socialIcons = {
    github: this.faGithub,
    link: this.faLink,
    twitter: this.faTwitter,
    youtube: this.faYoutube,
  };
}

import { Component } from "@angular/core";
import {
  faTwitter,
  faYoutube,
  faMeetup,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SidenavService } from "@shared/services/sidenav.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  showHeader: boolean = false;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faMeetup = faMeetup;
  faMenu = faBars;

  constructor(private sidenavService: SidenavService) {}

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}

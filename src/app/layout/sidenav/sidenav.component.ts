import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import {
  faTwitter,
  faYoutube,
  faMeetup,
} from "@fortawesome/free-brands-svg-icons";
import { SidenavService } from "@shared/services/sidenav.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent {
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faMeetup = faMeetup;

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  ngAfterViewInit(): void {
    console.log(this.sidenav);
    this.sidenavService.set(this.sidenav);
  }
}

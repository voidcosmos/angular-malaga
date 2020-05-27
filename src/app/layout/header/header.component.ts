import { Component, OnInit } from "@angular/core";
import {
  faTwitter,
  faYoutube,
  faMeetup
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faMeetup = faMeetup;
}

import { Component } from "@angular/core";
import {
  faTwitter,
  faYoutube,
  faMeetup,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faMeetup = faMeetup;
}

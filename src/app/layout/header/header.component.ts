import { Component, HostListener } from "@angular/core";
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
  showHeader: boolean = false;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faMeetup = faMeetup;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    scrollOffset > 300 ? (this.showHeader = true) : (this.showHeader = false);
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "ngmlg-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent {
  galleryImages = [
    "crowd.jpeg",
    "blackboard.jpeg",
    "hosts.jpeg",
    "full-crowd.jpeg",
    "eating-brownies.jpeg",
    "speaker-jesus.jpeg",
    "brownies.jpeg",
    "networking.jpeg",
    "photographer.jpeg",
    "whiteboard.jpeg",
  ];
}

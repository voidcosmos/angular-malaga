import { Component } from "@angular/core";

@Component({
  selector: "app-gallery-preview",
  templateUrl: "./gallery-preview.component.html",
  styleUrls: ["./gallery-preview.component.css"],
})
export class GalleryPreviewComponent {
  previewImages = [
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

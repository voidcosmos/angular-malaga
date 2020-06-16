import { Component } from "@angular/core";

@Component({
  selector: "app-gallery-preview",
  templateUrl: "./gallery-preview.component.html",
  styleUrls: ["./gallery-preview.component.css"]
})
export class GalleryPreviewComponent {
  previewImages = [
    { class: "spread", path: "crowd.jpeg" },
    { class: "highlight", path: "hosts.jpeg" },
    { class: "spread", path: "full-crowd.jpeg" },
    { class: "item", path: "eating-brownies.jpeg" },
    { class: "item", path: "brownies.jpeg" },
    { class: "vertical-spread", path: "speaker-jesus.jpeg" },
    { class: "spread", path: "networking.jpeg" },
    { class: "item", path: "photographer.jpeg" },
    { class: "vertical-spread", path: "blackboard.jpeg" },
    { class: "item", path: "whiteboard.jpeg" },
    { class: "spread", path: "workshop.jpeg" }
  ];
  urlStart = "assets/images/gallery/preview/";
}

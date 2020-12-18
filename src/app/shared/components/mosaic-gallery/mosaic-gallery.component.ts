import { Component, Input, OnInit, ɵConsole } from "@angular/core";

@Component({
  selector: "ngmlg-mosaic-gallery",
  templateUrl: "./mosaic-gallery.component.html",
  styleUrls: ["./mosaic-gallery.component.css"],
})
export class GalleryComponent implements OnInit {
  @Input() images: string[];

  urlStart = "assets/images/gallery/preview/";
  show = false;
  slide: number;

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.show = !this.show;
  }

  setSlide(i: number) {
    let slide = i;

    if (i === this.images.length) {
      slide = 0;
    }

    if (i < 0) {
      slide = this.images.length - 1;
    }

    this.slide = slide;
  }
}

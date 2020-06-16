import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { MainImageComponent } from "./components/main-image/main-image.component";
import { SharedModule } from "@shared/shared.module";
import { BannerComponent } from "./components/banner/banner.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GalleryPreviewComponent } from "./components/gallery-preview/gallery-preview.component";

const COMPONENTS = [
  HomeComponent,
  MainImageComponent,
  BannerComponent,
  GalleryPreviewComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule, FlexLayoutModule],
  exports: [...COMPONENTS]
})
export class HomeModule {}

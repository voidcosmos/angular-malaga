import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { MainImageComponent } from "./components/main-image/main-image.component";
import { SharedModule } from "@shared/shared.module";
import { BannerComponent } from "./components/about-us-banner/about-us-banner.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MarkdownModule } from "ngx-markdown";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { GalleryPreviewComponent } from "./components/gallery-preview/gallery-preview.component";
import { TeamPreviewComponent } from "./components/team-preview/team-preview.component";

const COMPONENTS = [
  HomeComponent,
  MainImageComponent,
  BannerComponent,
  GalleryPreviewComponent,
  TeamPreviewComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    MarkdownModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [...COMPONENTS],
})
export class HomeModule {}

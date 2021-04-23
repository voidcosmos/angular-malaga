import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeModule } from "./home/home.module";
import { C4SModule } from "./c4s/c4s.module";
import { FaqModule } from "./faq/faq.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { GalleryComponent } from "./gallery/gallery.component";
import { SharedModule } from "@shared/shared.module";
import { TeamModule } from "./team/team.module";
import { CodeOfConductComponent } from "./code-of-conduct/code-of-conduct.component";
import { MarkdownModule } from "ngx-markdown";

const COMPONENTS = [GalleryComponent, CodeOfConductComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    C4SModule,
    CommonModule,
    FaqModule,
    HomeModule,
    MarkdownModule,
    PagesRoutingModule,
    SharedModule,
    TeamModule,
  ],
  exports: [],
})
export class PagesModule {}

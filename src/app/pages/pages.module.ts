import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { C4SComponent } from "./c4s/c4s.component";
import { MarkdownModule } from "ngx-markdown";
import { HomeModule } from "./home/home.module";

const COMPONENTS = [C4SComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MarkdownModule, HomeModule],
  exports: [...COMPONENTS]
})
export class PagesModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeModule } from "./home/home.module";
import { C4SModule } from "./c4s/c4s.module";

const COMPONENTS = [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, HomeModule, C4SModule],
  exports: [...COMPONENTS]
})
export class PagesModule {}

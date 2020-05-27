import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { MainImageComponent } from "./components/main-image/main-image.component";

const COMPONENTS = [HomeComponent, MainImageComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS]
})
export class HomeModule {}

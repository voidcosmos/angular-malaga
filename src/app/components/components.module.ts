import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";

import { ProjectsComponent } from "./main-image/projects.component";
import { FooterComponent } from "./footer/footer.component";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [HeaderComponent, ProjectsComponent, FooterComponent],
  imports: [CommonModule, MatToolbarModule, MatCardModule, FlexLayoutModule],
  exports: [HeaderComponent, ProjectsComponent, FooterComponent]
})
export class ComponentsModule {}

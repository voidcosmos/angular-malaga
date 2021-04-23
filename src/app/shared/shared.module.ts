import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { GalleryComponent } from "./components/mosaic-gallery/mosaic-gallery.component";
import { TeamListComponent } from "./components/team-list/team-list.component";

const COMPONENTS = [TeamListComponent, GalleryComponent];
@NgModule({
  declarations: [...COMPONENTS, TeamListComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, MatCardModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}

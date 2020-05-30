import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { TeamComponent } from "./components/team/team.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [TeamComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, MatCardModule],
  exports: [TeamComponent]
})
export class SharedModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { TeamComponent } from "./team.component";
import { OrganizerProfileComponent } from "./components/organizer-profile/organizer-profile.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TeamRoutingModule } from "./team-routing.module";

const COMPONENTS = [TeamComponent, OrganizerProfileComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    FlexLayoutModule,
    TeamRoutingModule,
  ],
  exports: [],
})
export class TeamModule {}

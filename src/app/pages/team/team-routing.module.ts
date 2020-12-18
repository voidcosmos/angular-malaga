import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeamComponent } from "@pages/team/team.component";
import { OrganizerProfileComponent } from "./components/organizer-profile/organizer-profile.component";

const routes: Routes = [
  { path: "", component: TeamComponent },
  { path: "organizer/:id", component: OrganizerProfileComponent },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}

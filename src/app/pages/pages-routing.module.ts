import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { C4SComponent } from "@pages/c4s/c4s.component";
import { HomeComponent } from "@pages/home/home.component";
import { FaqComponent } from "@pages/faq/faq.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { CodeOfConductComponent } from "./code-of-conduct/code-of-conduct.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "call-for-speakers", component: C4SComponent },
  { path: "faq", component: FaqComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "code-of-conduct", component: CodeOfConductComponent },
  {
    path: "team",
    loadChildren: () => import("./team/team.module").then((m) => m.TeamModule),
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

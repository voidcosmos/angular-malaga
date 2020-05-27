import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { C4SComponent } from "./pages/c4s/c4s.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "call-for-speakers", component: C4SComponent },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

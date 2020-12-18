import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { SidenavComponent } from "./sidenav/sidenav.component";

const COMPONENTS = [HeaderComponent, FooterComponent, SidenavComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [...COMPONENTS],
})
export class LayoutModule {}

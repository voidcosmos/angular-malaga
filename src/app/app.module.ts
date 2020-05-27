import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PagesModule } from "./pages/pages.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MarkdownModule } from "ngx-markdown";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    LayoutModule,
    FontAwesomeModule,
    MarkdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

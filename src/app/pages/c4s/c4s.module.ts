import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { C4SComponent } from "./c4s.component";
import { SpeakerFormComponent } from "./components/form/speaker-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MarkdownModule } from "ngx-markdown";

const COMPONENTS = [C4SComponent, SpeakerFormComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MarkdownModule
  ],
  exports: [...COMPONENTS]
})
export class C4SModule {}

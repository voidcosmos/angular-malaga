import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-speaker-form",
  templateUrl: "./speaker-form.component.html",
  styleUrls: ["./speaker-form.component.css"]
})
export class SpeakerFormComponent {
  speakerForm = this.fb.group({
    fullName: ["", Validators.required],
    email: ["", Validators.required, Validators.email],
    twitter: [""],
    talkTitle: ["", Validators.required],
    talkAbstract: ["", Validators.required]
  });

  constructor(private fb: FormBuilder) {}
}

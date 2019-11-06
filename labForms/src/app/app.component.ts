import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  form: FormGroup;

  finalObj = {};
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      fullAddress: new FormGroup({
        address: new FormControl('',  Validators.required),
        city: new FormControl('',  Validators.required),
        country: new FormControl('', Validators.required),
        zip: new FormControl('',  Validators.required),
      })
    });
  }

  submit() {
    const formData = this.form.value;
    console.log(this.form.value);
    
    this.form.reset();
  }
}

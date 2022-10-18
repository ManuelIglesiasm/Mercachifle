import { Component, OnInit } from "@angular/core";
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(private api: RestApiService) {}

  register() {
    this.api.register(this.name, this.email, this.password, this.confirmPassword)
  }
}

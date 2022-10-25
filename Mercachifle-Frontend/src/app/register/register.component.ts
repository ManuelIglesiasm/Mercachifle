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

  register(name: string, email: string, password: string, confirmPassword: string){
    this.api.register(name, email, password, confirmPassword).subscribe((data) => {
      console.log("pepe")
    });;
}
}

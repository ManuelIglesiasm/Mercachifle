import { Component, OnInit } from "@angular/core";
import { RestApiService } from "../shared/rest-api.service";
import { Router } from "@angular/router";
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

  constructor(private api: RestApiService, private route:Router) {}

  register(name: string, email: string, password: string, confirmPassword: string){
    this.api.register(name, email, password, confirmPassword).subscribe((data) => {
      this.route.navigate(['/store']);
    });;
}
}

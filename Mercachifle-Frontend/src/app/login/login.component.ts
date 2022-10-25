import { Component, OnInit } from "@angular/core";
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit  {
  email: string ;
  password: string;

  constructor(private api: RestApiService) {}
  ngOnInit() {
    
  }
  login(email: string, password: string) {
    this.api.login(email, password).subscribe((data) => {
      console.log("pepe")
    });;
  }

 
}

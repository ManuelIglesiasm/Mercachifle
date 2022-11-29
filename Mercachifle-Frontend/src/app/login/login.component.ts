import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit  {
  email: string ;
  password: string;

  constructor(private api: RestApiService, private route:Router) {}
  ngOnInit() {
    
  }
  login(email: string, password: string) {
    this.api.login(email, password).subscribe(
      (data) => {
      this.route.navigate(['/store']);
      sessionStorage.setItem('user', email);
    },(error)=> alert("hay error"));;
  
  }


}

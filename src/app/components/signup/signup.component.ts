import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  uname:any;
  pass:any;
  repass:any;
  constructor() { }

  ngOnInit(): void {
  }

}

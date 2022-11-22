import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public screen: ScreenSizeService, public router: Router) { 
    screen.isUser = false;
  }

  ngOnInit(): void {
  }
  logout(){
    // router to login
    this.router.navigateByUrl('/login');

  }

}

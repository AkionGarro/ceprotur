import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any = localStorage;
  constructor(public screen: ScreenSizeService, public router: Router) { 
  }


  ngOnInit(): void {
    console.log(this.user);
  }
  logout(){
    // router to login
    this.router.navigateByUrl('/login');

  }
  addAdmin(){
    this.router.navigateByUrl('/admin/add-admin');
  }

}

import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(public screen: ScreenSizeService) { }

  ngOnInit(): void {
    this.screen.isUser = true;
  }

}

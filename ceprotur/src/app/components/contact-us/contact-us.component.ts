import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public screen: ScreenSizeService) { }

  ngOnInit(): void {
    this.screen.isUser = true;
  }

}

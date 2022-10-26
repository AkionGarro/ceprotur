import { Injectable } from '@angular/core';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  screenSize: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { 
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 485px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.screenSize = false;       
      } else {
        this.screenSize = true;
      }
    });
  }
}

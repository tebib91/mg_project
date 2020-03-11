import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostBinding } from '@angular/core';
import fscreen from 'fscreen';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mgfront';

  @ViewChild('fs', { static: false }) fs: ElementRef;

  @HostBinding('class.is-fullscreen') isFullscreen = false;
  subscription: any;
  constructor(private router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isFullscreen = true;
        this.isActive = true;
        this.fs.nativeElement.requestFullscreen();

      }
    });
  }
  isActive = false;
  ngOnInit() {


  }


  openFullscreen(): void {
    this.isFullscreen = true;
    const el = this.fs.nativeElement;

    if (!document.fullscreenElement &&    // alternative standard method
      !document['mozFullScreenElement'] && !document['webkitFullscreenElement']) {  // current working methods
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen(Element['ALLOW_KEYBOARD_INPUT']);
      } else if (el.msRequestFullscreen) {

        el.msRequestFullscreen();
      }
    } else {
      this.isFullscreen = false;
      this.isActive = false;
      document.exitFullscreen();
    }

    setTimeout(() => {
      this.isActive = true;
    }, 500);
  }


}

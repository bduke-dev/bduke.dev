import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: false
})
export class NavComponent implements OnInit, AfterViewInit {

  checked = true;
  private scrollPosition = 0;
  private resizeTimer: any;

  constructor(private gs: GeneralService) { }

  ngOnInit(): void {
    this.checked = this.gs.screenSize() === 'lg';
  }

  ngAfterViewInit(): void {
    this.scrollPosition = window.scrollY;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    //console.log('scroll pos: ' + this.scrollPosition);
    if (!this.scrollPosition.toString()) {
      // wasn't set yet
      this.scrollPosition = 0;
    }
    //console.log('scroll y: ' + window.scrollY);
    const up = window.scrollY - this.scrollPosition < 0;
    //console.log('up ? ' + up);
    this.scrollPosition = window.scrollY;

    const delta = up ? 1 : -1;
    //console.log('delta : ' + delta);
    //console.log('--end--');

    if (window.innerWidth > 768) {
      if (window.scrollY < 40) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.resizeTimer != null) {
      window.clearTimeout(this.resizeTimer);
    }

    this.resizeTimer = window.setTimeout(() => {
      if (window.innerWidth > 768) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }, 200);
  }
}

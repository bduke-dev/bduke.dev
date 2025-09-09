import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { environment } from '../environments/environment';

// declare gtag as a function to set and sent the events
declare let gtag: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {

  title = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {

      if (environment.production && event instanceof NavigationEnd) {
        gtag('config', 'UA-89022005-1', { 'page_path': event.urlAfterRedirects });
      }

    });

    let path = localStorage.getItem('path-bd');
    if (path) {
      localStorage.removeItem('path-bd');
      this.router.navigate([path]);
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //console.log(event);
        this.title = event.url;
        //console.log(this.title);
      }
    });
  }

  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }
}

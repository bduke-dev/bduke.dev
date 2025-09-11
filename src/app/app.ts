import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from '../environments/environment.development';

// declare gtag as a function to set and sent the events
declare let gtag: Function;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = '';

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

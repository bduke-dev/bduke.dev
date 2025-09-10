import { Routes } from '@angular/router';
import { AboutComponent } from './components/webpages/about/about.component';
import { ContactComponent } from './components/webpages/contact/contact.component';
import { HomeComponent } from './components/webpages/home/home.component';
import { WorkComponent } from './components/webpages/work/work.component';

export const routes: Routes = [
    { path: '', title: 'Home', component: HomeComponent },
    { path: 'about', title: 'About', component: AboutComponent },
    { path: 'contact', title: 'Contact', component: ContactComponent },
    { path: 'work', title: 'Work', component: WorkComponent }
];

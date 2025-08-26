import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ManuComponent } from './manu/manu.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TablesComponent } from './tables/tables.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'', redirectTo:"/home", pathMatch:'full' },
    {path:'about', component:AboutComponent},
    {path:'manu', component:ManuComponent},
    {path:'events', component:EventsComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'contacts', component:ContactsComponent},
    {path:'tables', component:TablesComponent}
];

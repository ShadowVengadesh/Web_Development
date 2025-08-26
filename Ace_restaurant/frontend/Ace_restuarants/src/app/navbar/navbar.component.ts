import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}
  tableBooking(){
    console.log('table booked');
  }
  onbook(){
    this.tableBooking();
    this.router.navigate(['/tables']);
  }
}

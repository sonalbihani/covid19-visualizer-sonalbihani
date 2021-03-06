import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from 'src/app/user'
import { AuthService } from 'src/app/_service/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token = localStorage.getItem('user-token');

    constructor(
        private router: Router,private authService: AuthService) {
          
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    ngOnInit(): void {
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.onLogout();
  }

  onLogout(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.logout(token)
      .then((user) => {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
      })
      .catch((err)=> {
        console.log(err);
      });
    }
  }
}

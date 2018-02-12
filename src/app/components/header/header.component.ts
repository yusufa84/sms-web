import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.ensureLoggedIn();
  }

  ensureLoggedIn(){
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.ensureAuthenticated(token)
      .then((user) => {
        console.log(user.json());
        if (user.json().status === 'success') {
          this.isLoggedIn = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}

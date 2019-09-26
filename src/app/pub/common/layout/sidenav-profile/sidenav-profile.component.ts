import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav-profile',
  templateUrl: './sidenav-profile.component.html',
  styleUrls: ['./sidenav-profile.component.scss']
})
export class SidenavProfileComponent implements OnInit {

  userInfo: {email: string, role: string, avatar: string };

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.userInfo = {
      email: 'test@test.com',
      role: 'User',
      avatar: null
    };
  }

  onImageError(event) {
    event.target.src = 'assets/img/user.default-avatar.jpg';
  }

}

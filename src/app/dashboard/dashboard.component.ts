import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    }, (err) => {
      console.log(err);
    });
  }

}

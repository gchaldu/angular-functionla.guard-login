import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent {

  constructor(private authService: AuthService, private router: Router){

  }

  get getUser():User | undefined{
    return this.authService.currentUser;
  }
  onLogOut(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}

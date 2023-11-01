import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';

function checkAuthStatus(): boolean | Observable<boolean>{
  const authService = inject(AuthService);
  const  router = inject(Router);
  const user:User | undefined = authService.currentUser

  return authService.checkStatusAutenticacion()
                    .pipe(
                      tap( estaAutenticado => {
                        if(!estaAutenticado) router.navigate(['/login'])
                      } )
                    )
}

export const AuthGuard = () => {
  return checkAuthStatus()
}

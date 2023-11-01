import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';
import { Observable, map, tap } from 'rxjs';

function checkAuthStatus(): boolean | Observable<boolean>{
  const authService = inject(AuthService);
  const  router = inject(Router);
  return authService.checkStatusAutenticacion()
                    .pipe(
                      tap( estaAutenticado => {
                        if(estaAutenticado){
                          router.navigate(['/private'])

                        }
                      }),
                      map(estaAutenticado => !estaAutenticado)
                    )
}

export const LoginGuard = () => {
  return checkAuthStatus()
}

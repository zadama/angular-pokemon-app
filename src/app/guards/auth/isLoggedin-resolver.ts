import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { TrainerService } from 'src/app/services/trainer/trainer.service';

@Injectable()
export class IsLoggedInResolver implements Resolve<any> {
  constructor(private router: Router, private trainerService: TrainerService) {}

  /**
   * If user is already logged in, we redirect from login page to /pokemons.
   */
  resolve(): void {
    if (this.trainerService.isLoggedIn()) {
      this.router.navigateByUrl('/pokemons');
    }
  }
}

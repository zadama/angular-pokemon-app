import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/trainer.model';
import { TrainerService } from '../../services/trainer/trainer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public trainer: Trainer = {
    username: '',
  };
  constructor(private trainerService: TrainerService) {}

  onUsernameEntered() {
    console.log(this.trainer.username + ' entered');

    // call login with username to save it. Maybe do some validation before?
  }
  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import { faker } from '@faker-js/faker'
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  onInput(e: Event) {
    this.enteredText = (e.target as HTMLInputElement).value;
  }

  compare(randomChar: string, enteredChar: string) {
    if (!enteredChar) return 'pending';
    if (randomChar === enteredChar) return 'correct';
    return 'incorrect';
  }
}

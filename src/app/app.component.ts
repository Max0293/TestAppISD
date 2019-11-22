import {Component} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

class Person {
  firstName: string;
  age: number;
  height: number;
  weight: number;
  resultOfIndex: string;

  constructor() {
  }
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  indexOfBodyMass: any;
  people: Person[];
  person: Person;

  constructor() {
    this.people = [];
    this.person = new Person();
  }

  CheckBMI() {
    this.indexOfBodyMass = this.person.weight / (this.person.height * this.person.height);
    const BMI = this.indexOfBodyMass;

    this.person.resultOfIndex = 'Severely underweight';

    if (BMI >= 16) {
      this.person.resultOfIndex = 'Underweight';

      if (BMI >= 18.5) {
        this.person.resultOfIndex = 'Normal (healthy weight)';

        if (BMI >= 25) {
          this.person.resultOfIndex = 'Overweight';

          if (BMI >= 30) {
            this.person.resultOfIndex = 'Obese Class I';

            if (BMI >= 35) {
              this.person.resultOfIndex = 'Obese Class II';

              if (BMI >= 40) {
                this.person.resultOfIndex = 'Obese Class III';
              }
            }
          }
        }
      }
    }

    alert(this.person.firstName + ' you are ' + this.person.age + ' old and you have ' + this.person.resultOfIndex);

    if (this.indexOfBodyMass < 18.5 || this.indexOfBodyMass > 25) {
      alert('link to "http://nikopharm.ua/ru/dieta-n-2/"');
    }

    this.people.push(this.person);
  }
}


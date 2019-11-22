import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
class Person {
    constructor(firstName, age, height, weight, resultOfIndex) {
        this.firstName = firstName;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.resultOfIndex = resultOfIndex;
    }
}
let AppComponent = class AppComponent {
    constructor() {
        this.people = [];
        this.currentAge = '';
        this.currentName = '';
        this.currentHeight = '';
        this.currentWeight = '';
    }
    getName(event) {
        this.currentName = event.target.value;
    }
    getAge(event) {
        this.currentAge = event.target.value;
    }
    getHeight(event) {
        this.currentHeight = event.target.value;
    }
    getWeight(event) {
        this.currentWeight = event.target.value;
    }
    CheckBMI() {
        if (this.currentName == null || this.currentName.trim() === '' ||
            this.currentAge == null || this.currentHeight == null || this.currentWeight == null) {
            return;
        }
        /*if (typeof(this.currentAge) !== 'number' || typeof(this.currentHeight) !== 'number' || typeof(this.currentWeight) !== 'number') {
                  alert('Please enter valid info');
                  return;
                }*/ else {
            this.indexOfBodyMass = this.currentWeight / (this.currentHeight * this.currentHeight);
            if (this.indexOfBodyMass < 16) {
                this.resultOfIndex = 'Severely underweight';
            }
            if (this.indexOfBodyMass > 16 && this.indexOfBodyMass < 18.5) {
                this.resultOfIndex = 'Underweight';
            }
            if (this.indexOfBodyMass >= 18.5 && this.indexOfBodyMass < 25) {
                this.resultOfIndex = 'Normal (healthy weight)';
            }
            if (this.indexOfBodyMass >= 25 && this.indexOfBodyMass < 30) {
                this.resultOfIndex = 'Overweight';
            }
            if (this.indexOfBodyMass >= 30 && this.indexOfBodyMass < 35) {
                this.resultOfIndex = 'Obese Class I';
            }
            if (this.indexOfBodyMass >= 35 && this.indexOfBodyMass < 40) {
                this.resultOfIndex = 'Obese Class II';
            }
            if (this.indexOfBodyMass >= 40) {
                this.resultOfIndex = 'Obese Class III';
            }
            alert(this.currentName + ' you have ' + this.currentAge + ' old and you have ' + this.resultOfIndex);
            if (this.indexOfBodyMass < 18.5 && this.indexOfBodyMass > 25) {
                alert('link to "http://nikopharm.ua/ru/dieta-n-2/"');
            }
            this.people.push(new Person(this.currentName, this.currentAge, this.currentHeight, this.currentWeight, this.resultOfIndex));
        }
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    template: `
        <div style="font-family: monospace; margin: 20px;">
            <h2>Prime Number Generator</h2>
            <form>
                <label>Input Number: </label>
                <input #input_number name="input_number" type="number"/> <br><br>
                <input type="submit" value="Submit Number" (click)="onNumberSubmit(input_number.valueAsNumber)">
            </form>

            <div>
                <ul *ngFor="let num of numArr">
                    <p> {{num}}</p>
                </ul>
            </div>
        </div>
        <router-outlet></router-outlet>
    `,
    styles: []
})

export class AppComponent {
    title = 'prime-numbers-frontend';
    numArr: Number[] = [];

    constructor(private http: HttpClient) {
    }

    onNumberSubmit(num: number) {
        console.log(num);
        this.http.get('https://localhost:7286/api?num=' + num)
            .subscribe((res) => {
                this.numArr = (<number[]>res)
            })
    }

}

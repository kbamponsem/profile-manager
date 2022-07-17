import { Component, Input } from "@angular/core";

@Component({
    selector: 'gender',
    template: `
        <div class="gender {{gender}}">{{this.capitalize()}}</div>
    `,
    styleUrls: ['./app.component.css']
})

export class Gender {
    @Input() gender: string = '';
    capitalize() {
        return this.gender.charAt(0).toUpperCase() + this.gender.slice(1);
    }
}
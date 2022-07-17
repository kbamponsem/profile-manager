import { Component, Input } from "@angular/core";

@Component({
    selector: 'personal-details',
    template: `
        <div class="name">
            <p>{{details.name.title}} {{details.name.first}} {{details.name.last}}</p>
            <gender gender="{{this.genderedBackground()}}" gender="{{details.gender}}"></gender>
        </div>
        <div class="location">
            <p>{{details.location.street.number}} 
                {{details.location.street.name}}, 
                {{details.location.city}} {{details.location.postcode}},
                {{details.location.state}}, {{details.location.country}}</p>
        </div>
        <div class="userDetails">
            <p>{{details.email}}</p>
            <p>{{details.phone}}</p>
        </div>
        <div></div>
    `,
    styleUrls: ['./app.component.css']
})

export class PersonalDetails {
    @Input() details: any;

    genderedBackground() {
        return this.details.gender;
    }
}
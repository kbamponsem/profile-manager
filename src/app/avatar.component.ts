import { Component, Input } from "@angular/core";

@Component({
    selector: 'avatar',
    template: `<div class="profileAvatar">
        <img src={{photo}}>
    </div>`,
    styleUrls: ["./app.component.css"]

})

export class Avatar {
    @Input() photo: string = '';
}
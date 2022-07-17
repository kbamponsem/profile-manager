import { Component, Input } from "@angular/core"

@Component({
    selector: 'menu-item',
    template: `
    <div routerLink="{{routerLink}}" class="menu-item">
        <div class="icon">
            <img src="{{icon}}" />
        </div>
        <div class="text">{{text}}</div>
    </div>`,
    styleUrls: ['./menuItem.component.css'],
})

export class MenuItem {
    @Input() text: string = '';
    @Input() icon = '';
    @Input() routerLink: any;
}
import { Component, Input } from "@angular/core";

@Component({
    selector: 'profile',
    template: `
        <div class="avatarSection">
            <avatar [photo]="picture"></avatar>
            <p class="username">@{{details.login.username}}</p>
            <div class="menu">
                <div *ngFor="let item of data">
                    <menu-item routerLink="{{item.routerLink}}" text="{{item.text}}" icon="{{item.icon}}"></menu-item>
                </div>
            </div>
        </div>
        <router-outlet></router-outlet>

        <details-sections  class="detailSection" [center]="center" [details]="details" [friends]="friends"></details-sections>
`,
    styleUrls: ["./app.component.css"]

})

export class Profile {
    @Input() picture: string = '';
    @Input() details: any;
    @Input() data: any;
    @Input() center: any;
    @Input() friends: any;

}
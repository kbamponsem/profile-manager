import { Component, Input } from "@angular/core";

@Component({
    selector: 'friends-section',
    template: `<div class="friend" *ngFor="let friend of friends">
            <div>
                <img src="{{friend.picture.medium}}"/>
            </div>
            <div>
                <p>{{friend.name.title}} {{friend.name.first}} {{friend.name.last}}</p>
                <p>{{friend.location.city}}, {{friend.location.country}}</p>
            </div>
    </div>`,
    styleUrls: ["./app.component.css"]
})
export class FriendsSection {
    @Input() friends: any = []
}
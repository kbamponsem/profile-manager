import { Component, Input } from "@angular/core";

@Component({
    selector: 'details-sections',
    template: `
    <personal-details  class="personalDetails" [details]="details"></personal-details>
    <div class="locationFriendsSection">
        <div class="userLocation">
            <google-map style="border-radius: 20px;" [zoom]="8" [center]="center" height="100%" width="100%" class="maps"></google-map>
        </div>
        <friends-section class="friends" [friends]="friends"></friends-section>
    </div>`,
    styleUrls: ['./app.component.css']
})

export class DetailsSection {
    @Input() details: any;
    @Input() friends: any;
    @Input() center: any;
}
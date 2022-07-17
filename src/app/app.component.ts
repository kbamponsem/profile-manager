import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test';
  details: any;
  data = [
    { text: 'Profile', icon: '../assets/profile.png', routerLink:'/profile' },
    { text: 'Connections', icon: '../assets/connections.png', routerLink: '/connections' },
  ]
  friends: any;
  picture: any;
  center: google.maps.LatLngLiteral = { lat: 27.8441, lng: 42.211 };
  constructor(private service: UserService) { }


  ngOnInit() {
    let id = sessionStorage.getItem("username");

    this.service.getUser(id).subscribe(res => {
      console.log(res)
      this.details = res.results[0];

      this.picture = this.details.picture.large;
      console.log(this.details.location.coordinates)
      let lat = this.details.location.coordinates.latitude;
      let lng = this.details.location.coordinates.longitude;
      this.center = { lat: parseFloat(lat), lng: parseFloat(lng) }

      if (id === null)
        sessionStorage.setItem("username", this.details.login.username)

      this.service.getFriends(this.details.login.username).subscribe(res => {
        console.log("Friends", res);
        this.friends = res.results;
      })
    });

  }


}

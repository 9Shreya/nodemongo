import {DataService} from './../service/data.service';
import {Component,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import analytics from 'src/analytics.js'
import snowplow from '@analytics/snowplow'
import {HttpClientModule,HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any
  users
  constructor(private http: HttpClient,private _dataService: DataService) {
    // this.http.get(this.url).subscribe((res) => {
    //   this.data = res
    //   console.log(res);
    // });

    this._dataService.getUsers()
      .subscribe(res => {
        this.users = res
        console.log('hi');

        console.log(this.users);
      }
      );

  }
  file: any
  email: any
  name: any
  ngOnInit(): void {
    analytics.page('home');
    analytics.on('page',({payload}) => {
      console.log('Home:plugin fired')
      // console.log(snowplow.on('',{payload}));

    })
    snowplow(
      console.log("sp.js has loaded")
    );

    snowplow('hi').analyticsSnowplow;
  }
  id: any = Math.round(Math.random() * 1000000000);
  url = 'http://localhost:3000/datafile'
  onSubmit(form: NgForm) {
    var a2 = snowplow(
      form.value
    );
    var a1 = analytics.identify(form.value)
    analytics.on('identify',({payload}) => {
      console.log(' Current Data',payload,payload.traits)

    })
    this.http.post(this.url,form.value).subscribe((res) => {
      console.log(res);

    })

    this._dataService.postUsers(form.value).subscribe((posts) => {
      console.log(posts);
    })
    console.log("geocity",analytics.geo_city)
    // Get all user data
    const userData = analytics.user()
    console.log("Previous userData",userData);


    // Get user id

    const userId = analytics.user('userId')
    console.log("userId",userId);

    // Get user User name
    const userName = analytics.user('traits.name');
    console.log("Name of User",userName);

    const IpAddress = analytics.user('userIpAddress')
    console.log("IP",IpAddress);

    const a3 = analytics.domainsessionidx
    console.log("domainsessionidx",a3)
  }





  tryclick() {

    analytics.track('click');

    analytics.on('track',({payload}) => {
      console.log('click done')
    })

    // analytics.track('EnhancedEcommerceAction', {
    //   action: 'add'
    // })
  }





}

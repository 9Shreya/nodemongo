import {Component,OnInit} from '@angular/core';
import analytics from 'src/analytics.js';
import snowplow from '@analytics/snowplow'
import {NgForm} from '@angular/forms';
import * as $ from 'jquery'
import analyticsSnowplow from '@analytics/snowplow'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

    analytics.page('home');
    analytics.on('page',({payload}) => {
      console.log('About:plugin fired',payload.properties,payload)
    })

  }


  onSubmit(form: NgForm) {
    var a1 = analytics.identify(form.value)
    console.log(snowplow.analyticsSnowplow);
    analytics.on('identify',({payload}) => {
      console.log(' Current Data',payload,payload.traits)

    })
    analytics.once('track',({payload}) => {
      console.log('This will only triggered once when analytics.track() fires',payload)
    })



  }



}

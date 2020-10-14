import {Component} from '@angular/core';


import analytics from 'src/analytics.js'


analytics.on('initialize:snowplow',({instance}) => {
  instance.plugins.snowplow.enableActivityTracking(10,10)
  instance.plugins.snowplow.enableLinkClickTracking()
})



analytics.page();
analytics.on('page:snowplow',({payload}) => {
  console.log('page:snowplowPlugin fired',payload)
})



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snow-analytics';


}

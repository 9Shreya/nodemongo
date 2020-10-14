import Analytics from 'analytics'
import snowplowPlugin from '@analytics/snowplow'
//npm install analytics-plugin-tab-events
import tabEventsPlugin from 'analytics-plugin-tab-events'
import goSquaredPlugin from '@analytics/gosquared'
import windowEventsPlugin from 'analytics-plugin-window-events'
import * as $ from 'jquery';


const analytics = Analytics({
    app: 'app-name',
    debug: true,
    plugins: [
        // ... your analytics integrations

        /* Include tab events plugin */

      
        tabEventsPlugin({


        }),
        /* Example plugin that listener to tab events */
        //customPluginExample({}),

        windowEventsPlugin(),
        // goSquaredPlugin({
        //     projectToken: 'GSN-785604-Z'
        // })

        //customWindowListenerPlugin

        // snowplow("newTracker", "sp", "{{http://localhost:8080}}", {
        //     appId: "cfe23a",
        //     platform: "web",
        //     cookieDomain: null,
        //     discoverRootDomain: true,
        //     cookieName: "_sp_",
        //     cookieSameSite: "None",
        //     cookieSecure: true,
        //     encodeBase64: true,
        //     respectDoNotTrack: false,
        //     pageUnloadTimer: 500,
        //     forceSecureTracker: false,
        //     eventMethod: "post",
        //     bufferSize: 1,
        //     maxPostBytes: 40000,
        //     crossDomainLinker: function(linkElement) {
        //         return (linkElement.href === "http://localhost:4200/" || linkElement.id === "http://localhost:4200/");
        //     },
        //     cookieLifetime: 63072000,
        //     stateStorageStrategy: "cookieAndLocalStorage",
        //     maxLocalStorageQueueSize: 1000,
        //     resetActivityTrackingOnPageView: true,
        //     connectionTimeout: 5000, // Available from 2.15.0
        //     skippedBrowserFeatures: [], // Available from 2.15.0
        //     anonymousTracking: false, // Available from 2.15.0
        //     // anonymousTracking: { withSessionTracking: true } // Optional
        //     contexts: {
        //         webPage: true,
        //         performanceTiming: true,
        //         gaCookies: true,
        //         geolocation: false,
        //         clientHints: true, // Available from 2.15.0
        //         // clientHints: { includeHighEntropy: true } // Optional
        //     }
        // })
    ]
})
window.Analytics = analytics
    // analytics.page()
    /* export the instance for usage in your app */
export default analytics
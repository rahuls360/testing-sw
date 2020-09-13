## Experiments with deploying latest content on a SPA using service workers

1. Clone the project
   `git clone https://github.com/rahuls360/testing-sw.git`
2. Install dependencies
   `yarn install`
3. Connect repo to your hosting. I used netlify-cli
   `npm install -g netlify-cli`
4. Login to netlify-cli
   `netlify login`
5. Deploy to Netlify
   `yarn run deploy:prod`
6. Make minor text changes
7. Deploy new changes
   `yarn run deploy:prod`
8. Try to navigate between pages. You will see an 'Updates available' message, across all your open tabs.
9. On clicking on 'Update'. The service worker are updated and all of your site's tabs are reloaded with new content.
10. Profit ??

#### References

[The Service Worker Lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)

[Building PWAs with React and Workbox](https://www.youtube.com/watch?v=Ok2r1M1jM_M)

[Checking for service worker updates in a single page app](https://stackoverflow.com/questions/51748241/checking-for-service-worker-updates-in-a-single-page-app)

[Service worker JavaScript update frequency (every 24 hours?)](https://stackoverflow.com/questions/38843970/service-worker-javascript-update-frequency-every-24-hours)

[Activate updated service worker on refresh](https://stackoverflow.com/questions/40100922/activate-updated-service-worker-on-refresh/50535316#50535316)

[Service Workers Break the Browser’s Refresh Button by Default; Here’s Why](https://redfin.engineering/service-workers-break-the-browsers-refresh-button-by-default-here-s-why-56f9417694)

[⚡️Talk - Syncing Component State Across Tabs with Service Workers - Tyler Clark - React Conf 2018
](https://www.youtube.com/watch?v=tq4vXRT7TU0)[react-conf-service-worker](https://github.com/twclark0/react-conf-service-worker)

[Tyler Clark - React to Web Workers](https://www.youtube.com/watch?v=pcYuOOe-kbw)

and many more...

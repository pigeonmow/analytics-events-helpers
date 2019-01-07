# Analytics Events Handling
Handy JavaScript classes to drop into a project to track Google analytics events (as long as you're compiling your JavaScript with Webpack etc).

## Usage

Place the two JavaScript class files where ever you like in your project structure, e.g. `resources\assets\js\classes`. Make sure to include the Google Analytics code in your site.

Add your required events in the `buildEventsArray ()` method of the `AnalyticsEvents` class and add the classes you have defined for the events to your HTML.

In your main JavaScript file, for example, `app.js`, import and instantiate the `AnalyticsHandler` class. For example if you're using jQuery:

```javascript
import AnalyticsHandler from './classes/AnalyticsHandler';

$(document).ready(function () {
    // Load up google Analytics events
    new AnalyticsHandler();
});
```

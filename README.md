# timer
Require the SimpleTimer

var SimpleTimer = require("simple-timer-js");
Create a new SimpleTimer instance with the expected duration, timerContainer, originalText.

var timerDurationInSeconds = 60;
var uniqueTimerContainerClassName = "timer-container";
var originalTextInContainer = "";
var timer = new SimpleTimer(timerDurationInSeconds, uniqueTimerContainerClassName, originalTextInContainer);
Call startTimer() to start the timer.

timer.startTimer();
If you want to force end the timer, simply call endTimer(). Otherwise, the timer will stop on its own, after it reaches the given timerDuration.

timer.endTimer();

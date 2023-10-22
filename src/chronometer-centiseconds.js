class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    let currentMin = Math.floor(this.currentTime / 6000);
    return currentMin;
  }

  getSeconds() {
    // ... your code goes here
    // let currentSeconds = Math.floor((this.currentTime-this.getMinutes())/100);
    let currentSeconds = Math.floor((this.currentTime % 6000) / 100);
    return currentSeconds;
  }

  getCentiseconds() {
    // ... your code goes here
    let currentCent = (this.currentTime % 6000) % 100;
    return currentCent;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let cent = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${minutes}:${seconds}.${cent}`;
  }
}

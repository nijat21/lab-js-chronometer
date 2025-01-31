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
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime >= 0) {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    // ... your code goes here
    let currentSeconds = this.currentTime % 60;
    return currentSeconds;
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
    let split = `${this.computeTwoDigitNumber(this.getMinutes())} : ${this.computeTwoDigitNumber(this.getSeconds())}`
    return split;
  }
}

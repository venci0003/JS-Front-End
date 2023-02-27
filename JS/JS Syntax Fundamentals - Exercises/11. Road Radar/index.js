function speedLimit(speed, area) {
  if (area === "motorway") {
    let speedLimit = 130;
    if (speed > speedLimit) {
      let status = "";
      let difference = speed - speedLimit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  } else if (area === "interstate") {
    let speedLimit = 90;
    if (speed > speedLimit) {
      let status = "";
      let difference = speed - speedLimit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  } else if (area === "city") {
    let speedLimit = 50;
    if (speed > speedLimit) {
      let status = "";
      let difference = speed - speedLimit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  } else if (area === "residential") {
    let speedLimit = 20;
    if (speed > speedLimit) {
      let status = "";
      let difference = speed - speedLimit;
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  }
}


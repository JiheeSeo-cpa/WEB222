function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  let latitude = document.querySelector("#latitude");
  let longtitude = document.querySelector("#longtitude");
  let num1 = latitude.value.trim();
  let num2 = longtitude.value.trim();
  let check1 = false;
  let check2 = true;

  if (num1 < -90 || num1 > 90 || isNaN(num1)) {
    document.querySelector("#latLabel>span").innerHTML="";
    document
      .querySelector("#latLabel>span")
      .append("* must be a valid Latitude (-90 to 90");
      check1 = false;
    }
    else {
      document.querySelector("#latLabel>span").innerHTML="";
      check1 = true;
    }


    if (num2 < -180 || num2 > 180 || isNaN(num2)) {
      document.querySelector("#longLabel>span").innerHTML="";
      document
      .querySelector("#longLabel>span")
      .append("* must be a valid Longtitude (-180 to 180");
      check2 = false;
    }
    else {
      document.querySelector("#longLabel>span").innerHTML="";
      check2 = true;
    }
    
    if (check1 === false || check2 === false) {
      event.preventDefault();
      return validate();
    }
  // console.log('TODO - validate the longitude, latitude values before submitting');
}

// function updateTextInput(val) {
// document.getElementById('textInput').value=val; }

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};

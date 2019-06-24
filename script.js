function Validation() {
  var city = document.getElementById('city');
  var state = document.getElementById('state');
  var address = document.getElementById('address');
  var zipcode = document.getElementById('zipcode');

  if (city.value == "") {
    alert("Enter a valid value for city");
  }

  if (state.value == "") {
    alert("Enter a valid value for state");
  }

  if (address.value == "") {
    alert("Enter a valid value for address");
  }

  if (zipcode.value.length < 6 || zipcode.value == "") {
    alert("Enter a valid value for zipcode");
  }
}

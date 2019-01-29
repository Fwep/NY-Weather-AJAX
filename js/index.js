console.log("Hello from the JavaScript console!");

$.ajax({
  method: "GET",
  url:
    "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
  dataType: 'json',
  success: (weather) => console.log(weather)
});

console.log("This message will print before the AJAX request's")
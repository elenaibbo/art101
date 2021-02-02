/**
 * Author:    Elena Ibbetson
 * Created:   1 February 2021
 *
 * License: Public Domain
 **/

//declare variables
var myTransport = ["car", " walk", " run"];

var mainRide = {
  make : "Mazda",
  model : "5",
  color : "white",
  year : 2010,
  age : "11 years"
};

//output
document.writeln("My modes of transport: " + myTransport + "<br>");
document.writeln("<br>");
document.writeln("My Main Ride: <pre>", "Mom van ",
    JSON.stringify(mainRide, null, '\t'), "</pre>");

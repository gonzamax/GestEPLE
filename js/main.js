/*
This file is part of GestEPLE.

    GestEPLE is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    GestEPLE is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with LosGonza Domotique.  If not, see <http://www.gnu.org/licenses/>.


*/
//Global variable that tel that Phonegap is ready
var isPhoneGapReady = false;


function init() {
	document.addEventListener("deviceready", onDeviceReady, false); 
	
}

function onDeviceReady() {
	isPhoneGapReady = true;
	alert("The device is now ready to run Phonegap");
    
}

window.onload = init;


$(document).ready(function (){
  //alert("page chargée");

//creation de la bdd
});




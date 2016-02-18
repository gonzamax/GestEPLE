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
    along with GestEPLE.  If not, see <http://www.gnu.org/licenses/>.


*/

// Wait for device API libraries to load
    //
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
        var db = window.sqlitePlugin.openDatabase({name: "gesteple.db", createFromLocation: 1});
        db.transaction(function(tx) {
+              tx.executeSql("SELECT * from releve_logement;", [], function(tx, res) {
+                //alert("res.rows.length: " + res.rows.length);
+                alert("res.rows.item(0).data_num: " + res.rows.item(0).data_num);
+              });
+            });
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Now safe to use device APIs
        alert("PhoneGap est fonctionnel");
    }

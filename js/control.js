// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6hnLPejDxjSLFdv813K79NoO5BKKYX0c",
  authDomain: "project-iot-945dd.firebaseapp.com",
  databaseURL:
    "https://project-iot-945dd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-iot-945dd",
  storageBucket: "project-iot-945dd.appspot.com",
  messagingSenderId: "540676083606",
  appId: "1:540676083606:web:4efb1914d8162582b897b7",
  measurementId: "G-EPP6WJSYQ2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auto load Temperature-------------------------
firebase
  .database()
  .ref("/TT_IoT/nhietdo")
  .on("value", function (snapshot) {
    let nd = snapshot.val();
    document.getElementById("nhietdo").innerHTML = ` ${nd}˚C`;
    console.log(nd);
  });
firebase
  .database()
  .ref("/TT_IoT/d")
  .on("value", function (snapshot) {
    let value = snapshot.val();
    document.getElementById("doam").innerHTML = ` ${value}%`;
    console.log(value);
  });

firebase
  .database()
  .ref("/TT_IoT/gas")
  .on("value", function (snapshot) {
    let value = snapshot.val();
    document.getElementById("gas").innerHTML = ` ${value}`;
    console.log(value);
  });

firebase
  .database()
  .ref("/TT_IoT/light")
  .on("value", function (snapshot) {
    let value = snapshot.val();
    document.getElementById("light").innerHTML = ` ${value}`;
    console.log(value);
  });

//Update Bulb status-----when reload website-------
firebase
  .database()
  .ref("/TT_IoT")
  .get()
  .then((snapshot) => {
    let c = document.getElementById("living_light");
    if (snapshot.exists()) {
      console.log(snapshot.val());

      let bulb_01_status = snapshot.val();
      if (bulb_01_status["BULB_01"] == "ON") {
        c.checked = true;
      }
    } else console.log("No data available!");
  });
firebase
  .database()
  .ref("/TT_IoT")
  .get()
  .then((snapshot) => {
    let c = document.getElementById("living_fan");
    if (snapshot.exists()) {
      console.log(snapshot.val());

      let bulb_01_status = snapshot.val();
      if (bulb_01_status["BULB_02"] == "ON") {
        c.checked = true;
      }
    } else console.log("No data available!");
  });
firebase
  .database()
  .ref("/TT_IoT")
  .get()
  .then((snapshot) => {
    let c = document.getElementById("living_lamp");
    if (snapshot.exists()) {
      console.log(snapshot.val());

      let bulb_01_status = snapshot.val();
      if (bulb_01_status["BULB_03"] == "ON") {
        c.checked = true;
      }
    } else console.log("No data available!");
  });
//Den 01------------------------------------------------------
function validateTerms() {
  let c = document.getElementById("living_light");
  if (c.checked == true) {
    console.log("On");
    firebase.database().ref("/TT_IoT").update({
      BULB_01: "ON",
    });
  } else {
    console.log("Off");
    firebase.database().ref("/TT_IoT").update({
      BULB_01: "OFF",
    });
  }
}

function validateTerms02() {
  let c = document.getElementById("living_fan");
  if (c.checked == true) {
    console.log("On");
    firebase.database().ref("/TT_IoT").update({
      BULB_02: "ON",
    });
  } else {
    console.log("Off");
    firebase.database().ref("/TT_IoT").update({
      BULB_02: "OFF",
    });
  }
}

function validateTerms03() {
  let c = document.getElementById("living_lamp");
  if (c.checked == true) {
    console.log("On");
    firebase.database().ref("/TT_IoT").update({
      BULB_03: "ON",
    });
  } else {
    console.log("Off");
    firebase.database().ref("/TT_IoT").update({
      BULB_03: "OFF",
    });
  }
}

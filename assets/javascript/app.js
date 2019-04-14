
var config = {
    apiKey: "AIzaSyDFALWOQueByIsDnsf2_EjHONCpBTJq7So",
    authDomain: "fir-hw-bf83b.firebaseapp.com",
    databaseURL: "https://fir-hw-bf83b.firebaseio.com",
    projectId: "fir-hw-bf83b",
    storageBucket: "fir-hw-bf83b.appspot.com",
    messagingSenderId: "1065288144312"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#btn btn-primary").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#name").val().trim();
    var Destination = $("#Destination").val().trim();
    var firstTrain = $("#time").val().trim();
    var Frequency = $("#Frequency").val().trim();

    var newTrain = {
        trainName: trainName,
        Destination: Destination,
        firstTrain: firstTrain,
        Frequency: Frequency,
    };

    database.ref().push(newTrain);

    console.log(newTrain.trainName);
    console.log(newTrain.Destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.Frequency);

    $("#name").val("");
    $("#Destination").val("");
    $("#time").val("");
    $("#Frequency").val("");
});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());


    var trainName = childSnapshot.val().trainName;
    var Destination = childSnapshot.val().Destination;
    var firstTrain = childSnapshot.val().firstTrain;
    var Frequency = childSnapshot.val().Frequency;

    console.log(trainName);
    console.log(Destination);
    console.log(firstTrain);
    console.log(Frequency);

    var Row = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(Destination),
        $("<td>").text(firstTrain),
        $("<td>").text(Frequency),
      );

      $("#table > thead").append(Row);
    });


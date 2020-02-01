//defining the variable for animation end signal
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

//defining the variables for animations to be used
var animationHeartBeat = "animated heartBeat";
var animationFlip = "animated flip";

//save button animation
function saveAnimation() {
    $('.saveBtn').addClass(animationHeartBeat).one(animationEnd, function () {
        $(this).removeClass(animationHeartBeat);
    });
};

//erase button animation
function eraseAnimation() {
    $('.eraseBtn').addClass(animationFlip).one(animationEnd, function () {
        $(this).removeClass(animationFlip);
    });
};


//putting the date on the page
let dateToday = moment().format('LL');
$("#currentDay").text(dateToday);

//setting targets for slots
let $appt9 = $("#slot9in");
let $appt10 = $("#slot10in");
let $appt11 = $("#slot11in");
let $appt12 = $("#slot12in");
let $appt13 = $("#slot13in");
let $appt14 = $("#slot14in");
let $appt15 = $("#slot15in");
let $appt16 = $("#slot16in");
let $appt17 = $("#slot17in");


//getting the current hour for shading
let currentHour = parseInt(moment().format('H'));

switch (currentHour) {
    case 9:
        $appt9.css("background-color", "#ff2626");
        $appt10.css("background-color", "#90ee90");
        $appt11.css("background-color", "#90ee90");
        $appt12.css("background-color", "#90ee90");
        $appt13.css("background-color", "#90ee90");
        $appt14.css("background-color", "#90ee90");
        $appt15.css("background-color", "#90ee90");
        $appt16.css("background-color", "#90ee90");
        $appt17.css("background-color", "#90ee90");
        break;
    case 10:
        $appt9.css("background-color", "#d3d3d3");
        $appt10.css("background-color", "#ff2626");
        $appt11.css("background-color", "#90ee90");
        $appt12.css("background-color", "#90ee90");
        $appt13.css("background-color", "#90ee90");
        $appt14.css("background-color", "#90ee90");
        $appt15.css("background-color", "#90ee90");
        $appt16.css("background-color", "#90ee90");
        $appt17.css("background-color", "#90ee90");
    case 11:
        $appt9.css("background-color", "#d3d3d3");
        $appt10.css("background-color", "#d3d3d3");
        $appt11.css("background-color", "#ff2626");
        $appt12.css("background-color", "#90ee90");
        $appt13.css("background-color", "#90ee90");
        $appt14.css("background-color", "#90ee90");
        $appt15.css("background-color", "#90ee90");
        $appt16.css("background-color", "#90ee90");
        $appt17.css("background-color", "#90ee90");
        break;
    case 12:
        $appt9.css("background-color", "#d3d3d3");
        $appt10.css("background-color", "#d3d3d3");
        $appt11.css("background-color", "#d3d3d3");
        $appt12.css("background-color", "#ff2626");
        $appt13.css("background-color", "#90ee90");
        $appt14.css("background-color", "#90ee90");
        $appt15.css("background-color", "#90ee90");
        $appt16.css("background-color", "#90ee90");
        $appt17.css("background-color", "#90ee90");
        break;
    case 13:
        $appt9.css("background-color", "#d3d3d3");
        $appt10.css("background-color", "#d3d3d3");
        $appt11.css("background-color", "#d3d3d3");
        $appt12.css("background-color", "#d3d3d3");
        $appt13.css("background-color", "#ff2626");
        $appt14.css("background-color", "#90ee90");
        $appt15.css("background-color", "#90ee90");
        $appt16.css("background-color", "#90ee90");
        $appt17.css("background-color", "#90ee90");
        break;
    case 14:
        $appt9.css("background-color", "#d3d3d3");
        $appt10.css("background-color", "#d3d3d3");
        $appt11.css("background-color", "#d3d3d3");
        $appt12.css("background-color", "#d3d3d3");
        $appt13.css("background-color", "#d3d3d3");
        $appt14.css("background-color", "#ff2626");
        $appt15.css("background-color", "#90ee90");
        $appt16.css("background-color", "#90ee90");
        $appt17.css("background-color", "#90ee90");
        break;
    case 15:
        $appt9.css("background-color", "#d3d3d3");
        $appt10.css("background-color", "#d3d3d3");
        $appt11.css("background-color", "#d3d3d3");
        $appt12.css("background-color", "#d3d3d3");
        $appt13.css("background-color", "#d3d3d3");
        $appt14.css("background-color", "#d3d3d3");
        $appt15.css("background-color", "#ff2626");
        $appt16.css("background-color", "#90ee90");
        $appt17.css("background-color", "#90ee90");
        break;
    case 16:
        $appt9.css("background-color", "#d3d3d3");
        $appt10.css("background-color", "#d3d3d3");
        $appt11.css("background-color", "#d3d3d3");
        $appt12.css("background-color", "#d3d3d3");
        $appt13.css("background-color", "#d3d3d3");
        $appt14.css("background-color", "#d3d3d3");
        $appt15.css("background-color", "#d3d3d3");
        $appt16.css("background-color", "#ff2626");
        $appt17.css("background-color", "#90ee90");
        break;
    case 17:
        $appt9.css("background-color", "#d3d3d3");
        $appt10.css("background-color", "#d3d3d3");
        $appt11.css("background-color", "#d3d3d3");
        $appt12.css("background-color", "#d3d3d3");
        $appt13.css("background-color", "#d3d3d3");
        $appt14.css("background-color", "#d3d3d3");
        $appt15.css("background-color", "#d3d3d3");
        $appt16.css("background-color", "#d3d3d3");
        $appt17.css("background-color", "#ff2626");
        break;

}

//checking the local storage for info
function getStorage() {
    if (localStorage.getItem("calendarObj") !== null) {
        calendarObj = JSON.parse(window.localStorage.getItem('calendarObj'));
    }

    $appt9.text(calendarObj.slot9);
    $appt10.text(calendarObj.slot10);
    $appt11.text(calendarObj.slot11);
    $appt12.text(calendarObj.slot12);
    $appt13.text(calendarObj.slot13);
    $appt14.text(calendarObj.slot14);
    $appt15.text(calendarObj.slot15);
    $appt16.text(calendarObj.slot16);
    $appt17.text(calendarObj.slot17);
}

getStorage();


//setting buttons to listen
$(document).ready(function () {
    $("#btn9").on("click", function () {
        calendarObj.slot9 = $appt9.val();
        saveAnimation();
        pushStorage();
        refreshAppointments();
    });

    $("#btn9e").on("click", function () {
        eraseAnimation();
        calendarObj.slot9 = "";
        pushStorage();
        refreshAppointments();
    });

    $("#btn10").on("click", function () {
        calendarObj.slot10 = $appt10.val();
        saveAnimation();
        pushStorage();
        refreshAppointments();
    });

    $("#btn10e").on("click", function () {
        eraseAnimation();
        calendarObj.slot10 = "";
        pushStorage();
        refreshAppointments();
    });

    $("#btn11").on("click", function () {
        calendarObj.slot11 = $appt11.val();
        saveAnimation();
        pushStorage();
        refreshAppointments();
    });

    $("#btn11e").on("click", function () {
        eraseAnimation();
        calendarObj.slot11 = "";
        pushStorage();
        refreshAppointments();
    });

    $("#btn12").on("click", function () {
        calendarObj.slot12 = $appt12.val();
        saveAnimation();
        pushStorage();
        refreshAppointments();

    });

    $("#btn12e").on("click", function () {
        eraseAnimation();
        calendarObj.slot12 = "";
        pushStorage();
        refreshAppointments();
    });

    $("#btn13").on("click", function () {
        calendarObj.slot13 = $appt13.val();
        saveAnimation();
        pushStorage();
        refreshAppointments();
    });

    $("#btn13e").on("click", function () {
        eraseAnimation();
        calendarObj.slot13 = "";
        pushStorage();
        refreshAppointments();


    });
    $("#btn14").on("click", function () {
        calendarObj.slot14 = $appt14.val();
        saveAnimation();
        pushStorage();
        refreshAppointments();
    });

    $("#btn14e").on("click", function () {
        eraseAnimation();
        calendarObj.slot14 = "";
        saveAnimation();
        pushStorage();
        refreshAppointments();
    });


    $("#btn15").on("click", function () {
        calendarObj.slot15 = $appt15.val();
        saveAnimation();
        pushStorage();
        refreshAppointments();

    });

    $("#btn15e").on("click", function () {
        eraseAnimation();
        calendarObj.slot15 = "";
        pushStorage();
        refreshAppointments();
    });

    $("#btn16").on("click", function () {
        calendarObj.slot16 = $appt16.val();
        pushStorage();
        refreshAppointments();

    });

    $("#btn16e").on("click", function () {
        eraseAnimation();
        calendarObj.slot16 = "";
        pushStorage();
        refreshAppointments();
    });

    $("#btn17").on("click", function () {
        calendarObj.slot17 = $appt17.val();
        pushStorage();
        refreshAppointments();

    });

    $("#btn17e").on("click", function () {
        eraseAnimation();
        calendarObj.slot17 = "";
        pushStorage();
        refreshAppointments();
    });

    function pushStorage() {
        window.localStorage.setItem('calendarObj', JSON.stringify(calendarObj));
    }

    function refreshAppointments() {
        $appt9.text(calendarObj.slot9);
        $appt10.text(calendarObj.slot10);
        $appt11.text(calendarObj.slot11);
        $appt12.text(calendarObj.slot12);
        $appt13.text(calendarObj.slot13);
        $appt14.text(calendarObj.slot14);
        $appt15.text(calendarObj.slot15);
        $appt16.text(calendarObj.slot16);
        $appt17.text(calendarObj.slot17);
    }
});
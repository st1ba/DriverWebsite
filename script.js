const button_plus = document.getElementById("speedplus");
const button_minus = document.getElementById("speedminus");

const move_plus = document.getElementById("moveplus");
const move_minus = document.getElementById("moveminus");
const move_send = document.getElementById("movesend");



const slider_speed_value = document.getElementById("speedSetting");

const slider_movement_value = document.getElementById("DistanceSetting");

slider_speed_value.addEventListener("input", SpeedValueDisplayer);

slider_movement_value.addEventListener("input", MovementValueDisplayer);



button_plus.addEventListener("click", button_plus_handler);

button_minus.addEventListener("click", button_minus_handler);


move_plus.addEventListener("click", move_plus_handler);

move_minus.addEventListener("click", move_minus_handler);

move_send.addEventListener("click", move_send_handler);

document.getElementById("speed").value = slider_speed_value.value;
document.getElementById("DistanceInput").value = slider_movement_value.value;

function SpeedValueDisplayer(Event) {
    document.getElementById("speed").value = slider_speed_value.value;
}

function button_plus_handler(Event) {
    slider_speed_value.value = parseInt(slider_speed_value.value) + 100;
    console.log(slider_speed_value.value);
    SpeedValueDisplayer();
}

function button_minus_handler(Event) {
    console.log(slider_speed_value.value);
    slider_speed_value.value = parseInt(slider_speed_value.value) - 100;
    SpeedValueDisplayer();
}

function move_minus_handler(Event){
    slider_movement_value.value = parseInt(slider_movement_value.value) - 100;
    MovementValueDisplayer();
}

function move_plus_handler(Event){
    slider_movement_value.value = parseInt(slider_movement_value.value) + 100;
    MovementValueDisplayer();
}

function move_send_handler(Event){
    console.log(slider_movement_value.value);
}

function MovementValueDisplayer(Event) {
    document.getElementById("DistanceInput").value = slider_movement_value.value;
}
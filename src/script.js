// Slider by Head
const img_on_head = document.querySelectorAll(".slider_head");
const prev_head = document.getElementById('prev_button_head');
const next_head = document.getElementById('next_button_head');

let activerslider_head = 0;

function hide_slider_head() {
    img_on_head.forEach(item => item.classList.remove('on'));
}

function show_slider_head() {
    img_on_head[activerslider_head].classList.add('on');
}


function next_head_slider() {
    hide_slider_head()
    if(activerslider_head == img_on_head.length -1) {
        activerslider_head = 0
    } else {
        activerslider_head ++
    }
    show_slider_head()
}
function prev_head_slider() {
    hide_slider_head()
    if(activerslider_head == 0) {
        activerslider_head = img_on_head.length -1
    } else {
        activerslider_head --
    }

    show_slider_head()
}

next_head.addEventListener('click', next_head_slider);
prev_head.addEventListener('click', prev_head_slider);


// SLider by Chest

const img_on_chest = document.querySelectorAll(".slider_chest");
const prev_chest = document.getElementById('prev_button_chest');
const next_chest = document.getElementById('next_button_chest');

let activerslider_chest = 0;

function hide_slider_chest() {
    img_on_chest.forEach(item => item.classList.remove('on'));
}

function show_slider_chest() {
    img_on_chest[activerslider_chest].classList.add('on');
}


function next_chest_slider() {
    hide_slider_chest()
    if(activerslider_chest == img_on_chest.length -1) {
        activerslider_chest = 0
    } else {
        activerslider_chest ++
    }
    show_slider_chest()
}
function prev_chest_slider() {
    hide_slider_chest()
    if(activerslider_chest == 0) {
        activerslider_chest = img_on_chest.length -1
    } else {
        activerslider_chest --
    }

    show_slider_chest()
}

next_chest.addEventListener('click', next_chest_slider);
prev_chest.addEventListener('click', prev_chest_slider);

// SLider by Legs

const img_on_legs = document.querySelectorAll(".slider_legs");
const prev_legs = document.getElementById('prev_button_legs');
const next_legs = document.getElementById('next_button_legs');

let activerslider_legs = 0;

function hide_slider_legs() {
    img_on_legs.forEach(item => item.classList.remove('on'));
}

function show_slider_legs() {
    img_on_legs[activerslider_legs].classList.add('on');
}


function next_legs_slider() {
    hide_slider_legs()
    if(activerslider_legs == img_on_legs.length -1) {
        activerslider_legs = 0
    } else {
        activerslider_legs ++
    }
    show_slider_legs()
}
function prev_legs_slider() {
    hide_slider_legs()
    if(activerslider_legs == 0) {
        activerslider_legs = img_on_legs.length -1
    } else {
        activerslider_legs --
    }

    show_slider_legs()
}

next_legs.addEventListener('click', next_legs_slider);
prev_legs.addEventListener('click', prev_legs_slider);

// SLider by foot

const img_on_foot = document.querySelectorAll(".slider_foot");
const prev_foot = document.getElementById('prev_button_foot');
const next_foot = document.getElementById('next_button_foot');

let activerslider_foot = 0;

function hide_slider_foot() {
    img_on_foot.forEach(item => item.classList.remove('on'));
}

function show_slider_foot() {
    img_on_foot[activerslider_foot].classList.add('on');
}


function next_foot_slider() {
    hide_slider_foot()
    if(activerslider_foot == img_on_foot.length -1) {
        activerslider_foot = 0
    } else {
        activerslider_foot ++
    }
    show_slider_foot()
}
function prev_foot_slider() {
    hide_slider_foot()
    if(activerslider_foot == 0) {
        activerslider_foot = img_on_foot.length -1
    } else {
        activerslider_foot --
    }

    show_slider_foot()
}

next_foot.addEventListener('click', next_foot_slider);
prev_foot.addEventListener('click', prev_foot_slider);








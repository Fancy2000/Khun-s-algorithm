var
    canv = document.getElementById('canvas'),
    ctx  = canv.getContext('2d');
canv.width  = 1300;
canv.height = 200;
var flag_first = 0, flag_second = 0, first_E = 0, second_E = 0;
let inputFirst = document.querySelector('.input_first');
let inputSecond = document.querySelector('.input_second');
let buttonFirst = document.querySelector('.button_first');
let buttonSecond = document.querySelector('.button_second');
let close = document.querySelector('.container');

function description() {
    ctx.font = "24px serif";
    ctx.fillStyle = "black";
    ctx.fillText("Введите количество вершин в первой и во второй доле графа (первая доля будет находиться сверху, а вторая снизу).", 40, 30);
    ctx.fillText("Для удобства вводите положительное число не больше 5.", 40, 60);
    ctx.fillText("Пример:", 40, 120);
    ctx.fillText("первая доля - 3 вершины", 200, 120);
    for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        x = 550 + j * 70; // x coordinate
        y = 120; // y coordinate
        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
        ctx.stroke();
    }
    ctx.fillText("вторая доля - 2 вершины", 200, 170);
    for (let j = 0; j < 2; j++) {
        ctx.beginPath();
        x = 550 + j * 70; // x coordinate
        y = 120 + 50; // y coordinate
        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
        ctx.stroke();
    }
}

description();

var move_buttons = document.querySelector('.move');
var description_to_make_lines = document.querySelector('.zatemnenie5');
var close_description_to_make_lines = document.querySelector('.close5');
var button_OK = document.querySelector('.centre_button');

buttonFirst.onclick = function () {
    first_E = inputFirst.value;
    if (first_E > 5) {
        first_E = 5;
        inputFirst.value = 5;
    }
    if (first_E <= 0) {
        first_E = 1;
        inputFirst.value = 1;
    }
    ++flag_first;
    if (flag_second && flag_first) {
        ctx.clearRect(0, 0, 1300, 200);
        close.style.display = "none";
        graph();
        description_to_make_lines.style.display = "block";
        close_description_to_make_lines.onclick = function () {
            description_to_make_lines.style.display = "none";
        }
        make_lines_coordinates();
    }
}
buttonSecond.onclick = function () {
    second_E = inputSecond.value;
    if (second_E > 5) {
        second_E = 5;
        inputSecond.value = 5;
    }
    if (second_E <= 0) {
        second_E = 1;
        inputSecond.value = 1;
    }
    ++flag_second;
    if (flag_second && flag_first) {
        ctx.clearRect(0, 0, 1300, 200);
        button_OK.style.display = "flex";
        close.style.display = "none";
        graph();
        description_to_make_lines.style.display = "block";
        close_description_to_make_lines.onclick = function () {
            description_to_make_lines.style.display = "none";
        }
        make_lines_coordinates();
    }
}


function graph() {
    ctx.font = "20px serif";
    if (first_E == 1) {
        ctx.fillText("1", 495, 30);
    }
    if (first_E == 2) {
        ctx.fillText("1", 495, 30);
        ctx.fillText("2", 495 + 70, 30);
    }
    if (first_E == 3) {
        ctx.fillText("1", 495, 30);
        ctx.fillText("2", 495 + 70, 30);
        ctx.fillText("3", 495 + (2 * 70), 30);
    }
    if (first_E == 4) {
        ctx.fillText("1", 495, 30);
        ctx.fillText("2", 495 + 70, 30);
        ctx.fillText("3", 495 + (2 * 70), 30);
        ctx.fillText("4", 495 + (3 * 70), 30);
    }
    if (first_E == 5) {
        ctx.fillText("1", 495, 30);
        ctx.fillText("2", 495 + 70, 30);
        ctx.fillText("3", 495 + (2 * 70), 30);
        ctx.fillText("4", 495 + (3 * 70), 30);
        ctx.fillText("5", 495 + (4 * 70), 30);
    }
    if (second_E == 1) {
        ctx.fillText("1", 495,            195);
    }
    if (second_E == 2) {
        ctx.fillText("1", 495,            195);
        ctx.fillText("2", 495 + 70,       195);
    }
    if (second_E == 3) {
        ctx.fillText("1", 495,            195);
        ctx.fillText("2", 495 + 70,       195);
        ctx.fillText("3", 495 + (2 * 70), 195);
    }
    if (second_E == 4) {
        ctx.fillText("1", 495,            195);
        ctx.fillText("2", 495 + 70,       195);
        ctx.fillText("3", 495 + (2 * 70), 195);
        ctx.fillText("4", 495 + (3 * 70), 195);
    }
    if (second_E == 5) {
        ctx.fillText("1", 495,            195);
        ctx.fillText("2", 495 + 70,       195);
        ctx.fillText("3", 495 + (2 * 70), 195);
        ctx.fillText("4", 495 + (3 * 70), 195);
        ctx.fillText("5", 495 + (4 * 70), 195);
    }

    let x = 0, y = 0;
    ctx.font = "24px serif";
    for (let j = 0; j < first_E; j++) {
        ctx.beginPath();
        x = 500 + j * 70; // x coordinate
        y = 50; // y coordinate
        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
        ctx.fill();
    }
    for (let j = 0; j < second_E; j++) {
        ctx.beginPath();
        x = 500 + j * 70; // x coordinate
        y = 110 + 50; // y coordinate
        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

// time to make lines
var count_click = 0;
var lines_x1;
var lines_y1;
var lines_x2;
var lines_y2;

function make_lines_coordinates() {
    button_OK.onclick = function () {
        button_OK.style.display = "none";
        move_buttons.style.display = "flex";
        console.log("go to kuhn");
        make_graph_for_kuhn();
    }
    canv.addEventListener('click', function(event) {
        if ( button_OK.style.display === "none" ) {
            return;
        }
        if (count_click === 0) {
            lines_x1 = event.offsetX;
            lines_y1 = event.offsetY;
            if (Math.sqrt(Math.pow(lines_x1 - 500, 2) + Math.pow(lines_y1 - 160, 2)) <= 15) {
                lines_x1 = 500;
                lines_y1 = 160;
                if (!not_let_to_fill_second_time) {
                    not_let_to_fill_second_time = 1;
                    ctx.beginPath();
                    ctx.fillStyle = "green";
                    ctx.arc(lines_x1, lines_y1, 15, 0, Math.PI * 2, true);
                    ctx.fill();
                }
                ++count_click;
            } else if (Math.sqrt(Math.pow(lines_x1 - 570, 2) + Math.pow(lines_y1 - 160, 2)) <= 15 && second_E > 1) {
                lines_x1 = 570;
                lines_y1 = 160;
                if (!not_let_to_fill_second_time) {
                    not_let_to_fill_second_time = 1;
                    ctx.beginPath();
                    ctx.fillStyle = "green";
                    ctx.arc(lines_x1, lines_y1, 15, 0, Math.PI * 2, true);
                    ctx.fill();
                }
                ++count_click;
            } else if (Math.sqrt(Math.pow(lines_x1 - 640, 2) + Math.pow(lines_y1 - 160, 2)) <= 15 && second_E > 2) {
                lines_x1 = 640;
                lines_y1 = 160;
                if (!not_let_to_fill_second_time) {
                    not_let_to_fill_second_time = 1;
                    ctx.beginPath();
                    ctx.fillStyle = "green";
                    ctx.arc(lines_x1, lines_y1, 15, 0, Math.PI * 2, true);
                    ctx.fill();
                }
                ++count_click;
            } else if (Math.sqrt(Math.pow(lines_x1 - 710, 2) + Math.pow(lines_y1 - 160, 2)) <= 15 && second_E > 3) {
                lines_x1 = 710;
                lines_y1 = 160;
                if (!not_let_to_fill_second_time) {
                    not_let_to_fill_second_time = 1;
                    ctx.beginPath();
                    ctx.fillStyle = "green";
                    ctx.arc(lines_x1, lines_y1, 15, 0, Math.PI * 2, true);
                    ctx.fill();
                }
                ++count_click;
            } else if (Math.sqrt(Math.pow(lines_x1 - 780, 2) + Math.pow(lines_y1 - 160, 2)) <= 15 && second_E > 4) {
                lines_x1 = 780;
                lines_y1 = 160;
                if (!not_let_to_fill_second_time) {
                    not_let_to_fill_second_time = 1;
                    ctx.beginPath();
                    ctx.fillStyle = "green";
                    ctx.arc(lines_x1, lines_y1, 15, 0, Math.PI * 2, true);
                    ctx.fill();
                }
                ++count_click;
            }
        } else {
            lines_x2 = event.offsetX;
            lines_y2 = event.offsetY;
            if (Math.sqrt(Math.pow(lines_x2 - 500, 2) + Math.pow(lines_y2 - 50, 2)) <= 15) {
                not_let_to_fill_second_time = 0;
                lines_x2 = 500;
                lines_y2 = 50;
                ++count_click;
            } else if (Math.sqrt(Math.pow(lines_x2 - 570, 2) + Math.pow(lines_y2 - 50, 2)) <= 15 && first_E > 1) {
                not_let_to_fill_second_time = 0;
                lines_x2 = 570;
                lines_y2 = 50;
                ++count_click;
            } else if (Math.sqrt(Math.pow(lines_x2 - 640, 2) + Math.pow(lines_y2 - 50, 2)) <= 15 && first_E > 2) {
                not_let_to_fill_second_time = 0;
                lines_x2 = 640;
                lines_y2 = 50;
                ++count_click;
            } else if (Math.sqrt(Math.pow(lines_x2 - 710, 2) + Math.pow(lines_y2 - 50, 2)) <= 15 && first_E > 3) {
                not_let_to_fill_second_time = 0;
                lines_x2 = 710;
                lines_y2 = 50;
                ++count_click;
            } else if (Math.sqrt(Math.pow(lines_x2 - 780, 2) + Math.pow(lines_y2 - 50, 2)) <= 15 && first_E > 4) {
                not_let_to_fill_second_time = 0;
                lines_x2 = 780;
                lines_y2 = 50;
                ++count_click;
            }
            if (!not_let_to_fill_second_time) {
                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.arc(lines_x1, lines_y1, 15, 0, Math.PI * 2, true);
                ctx.fill();
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.arc(lines_x1, lines_y1, 15, 0, Math.PI * 2, true);
                ctx.fill();
            }
        }
        if (count_click === 2) {
            make_lines();
            count_click = 0;
        }
    }, false);
}
var graph_names = [];
let not_let_to_fill_second_time = 0;
function make_lines() {
    var array_graph_names = new Array(2);
    if (lines_x1 === 500 && lines_y1 === 160) {
        array_graph_names[0] = 1;
    }
    if (lines_x1 === 570 && lines_y1 === 160) {
        array_graph_names[0] = 2;
    }
    if (lines_x1 === 640 && lines_y1 === 160) {
        array_graph_names[0] = 3;
    }
    if (lines_x1 === 710 && lines_y1 === 160) {
        array_graph_names[0] = 4;
    }
    if (lines_x1 === 780 && lines_y1 === 160) {
        array_graph_names[0] = 5;
    }
    if (lines_x2 === 500 && lines_y2 === 50) {
        array_graph_names[1] = 1;
    }
    if (lines_x2 === 570 && lines_y2 === 50) {
        array_graph_names[1] = 2;
    }
    if (lines_x2 === 640 && lines_y2 === 50) {
        array_graph_names[1] = 3;
    }
    if (lines_x2 === 710 && lines_y2 === 50) {
        array_graph_names[1] = 4;
    }
    if (lines_x2 === 780 && lines_y2 === 50) {
        array_graph_names[1] = 5;
    }
    let have = 0;
    for (let user of set) {
        if (user[0] === lines_x1 && user[1] === lines_y1 && user[2] === lines_x2 && user[3] === lines_y2) {
            have = 1;
        }
    }
    if (!have) {
        graph_names.push(array_graph_names);
        set.add([lines_x1, lines_y1, lines_x2, lines_y2]);
        ctx.beginPath();
        ctx.moveTo(lines_x1, lines_y1);
        ctx.lineTo(lines_x2, lines_y2);
        ctx.stroke();
    }
}

function dfs(v, was, graph, matching) {
    if (was[v] === true) {
        return false;
    }
    was[v] = true;
    let tmp = graph[v];
    if (tmp.length > 0) {
        for (let i = 0; i !== tmp.length; ++i) {
            if (matching[tmp[i]] === -1 || dfs(matching[tmp[i]], was, graph, matching)) {
                matching[tmp[i]] = v;
                return true;
            }
        }
    }
    return false;
}


function make_graph_for_kuhn() {
    graph_names.sort();
    var n = Number(second_E);
    var m = Number(first_E);
    var matching_tmp = [-1, -1, -1, -1, -1];
    var was_tmp = [false, false, false, false, false];
    var matching = matching_tmp.slice(0, m);
    var was = was_tmp.slice(0, n);
    var graph = [[]];
    for (let i = 0; i !== n - 1; ++i) {
        graph.push([]);
    }
    for (let i = 0; i !== graph_names.length; ++i) {
        graph[graph_names[i][0] - 1].push(graph_names[i][1] - 1);
    }
    for (let i = 0; i !== n; ++i) {
        was.fill(false);
        dfs(i, was, graph, matching);
    }
    for (let i = 0; i < m; ++i) {
        if (matching[i] !== -1) {
            console.log((matching[i] + 1) + " " + (i + 1));
        }
    }
}
var set = new Set();


















// function text() {
//     ctx.font = "24px serif";
//     ctx.fillStyle = "black";
//     ctx.fillText("matching:", 1000, 70);
//     if (i === 1 || i === 2) {
//         ctx.fillText("0 → -1", 1030, 100);
//         ctx.fillText("1 → -1", 1030, 130);
//         ctx.fillText("2 → -1", 1030, 160);
//         ctx.fillText("3 → -1", 1030, 190);
//     }
// }
//




//     if (i === 1) {
//         ctx.beginPath();
//         ctx.moveTo(407 + 100, 167); // 1->2
//         ctx.lineTo(463 + 100, 83);
//         ctx.moveTo(407 + 100 + 70, 167); // 2->3
//         ctx.lineTo(463 + 100 + 70, 83);
//         ctx.moveTo(463 + 100, 167); // 2->1
//         ctx.lineTo(405 + 100, 85);
//         ctx.moveTo(463 + 100 + 70, 167); // 3->1
//         ctx.lineTo(410 + 100, 80);
//         ctx.moveTo(463 + 100 + 75, 165); // 3->2
//         ctx.lineTo(479 + 100, 83);
//         ctx.moveTo(463 + 100 + 77, 165); // 3->3
//         ctx.lineTo(463 + 100 + 77, 84);
//         ctx.moveTo(463 + 100 + 70 * 2, 167); // 4->2
//         ctx.lineTo(480 + 100, 80);
//         ctx.moveTo(457 + 100 + 77 * 2, 165); // 4->4
//         ctx.lineTo(457 + 100 + 77 * 2, 84);
//         ctx.moveTo(463 + 100 + 70 * 3, 166); // 5->3
//         ctx.lineTo(480 + 100 + 70, 82);
//         ctx.stroke();
//     }
// }
//
// var i = 0;
// var popup1 = document.getElementById('next');
// popup1.onclick = function () {
//     if (i < 17) {
//         ctx.clearRect(400, 50, 800, 600);
//         ++i;
//         graph();
//         text();
//     }
// }
// var popup2 = document.getElementById('prev');
// popup2.onclick = function () {
//     if (i > 1) {
//     ctx.clearRect(400, 50, 800, 600);
//     --i;
//     text();
//     graph();
// }



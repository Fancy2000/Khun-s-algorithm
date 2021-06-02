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

//first information for user------------------------------------------------------------------------------

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
    first_E = Number(inputFirst.value);
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
buttonSecond.onclick = function () {
    second_E = Number(inputSecond.value);
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

// draw first graph-------------------------------------------------------------------------------

var graph_coords = [[],[]];

function graph_numbers() {
    ctx.font = "20px serif";
    ctx.fillStyle = "black";
    for (let i = 0; i !== first_E; ++i) {
        ctx.fillText(String(i + 1), 495 + 70 * i, 30);
    }
    for (let i = 0; i !== second_E; ++i) {
        ctx.fillText(String(i + 1), 495 + 70 * i, 195);
    }
}

function graph() {
    graph_numbers();
    let x = 0, y = 0;
    ctx.font = "24px serif";
    for (let j = 0; j < first_E; j++) {
        ctx.beginPath();
        x = 500 + j * 70; // x coordinate
        y = 50; // y coordinate
        graph_coords[1].push([x,y])
        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
        ctx.fill();
    }
    for (let j = 0; j < second_E; j++) {
        ctx.beginPath();
        x = 500 + j * 70; // x coordinate
        y = 110 + 50; // y coordinate
        graph_coords[0].push([x,y])
        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

// time to make lines-------------------------------------------------------------------


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
        text_base();
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

// algorithm kuhn----------------------------------------------------------------------------------------------

function dfs(v, was, graph, matching, state, tmp_was, in_dfs) {
    if (was[v] === true) {
        state.push(["false", was.slice(), matching.slice()]);
        return false;
    }
    was[v] = true;
    let tmp = graph[v];
    if (tmp.length > 0) {
        for (let i = 0; i !== tmp.length; ++i) {
            state.push(["choose_way", v, was.slice(), matching.slice(), i]);
            if (matching[tmp[i]] === -1) {
                matching[tmp[i]] = v;
                if (in_dfs) {
                    state.push(["find_after_dfs", was.slice(), matching.slice(), v, tmp[i]]);
                } else {
                    state.push(["find", was.slice(), matching.slice(), v, tmp[i]]);
                }
                return true;
            }
            state.push(["complementary_chain", was.slice(), matching.slice(), v, tmp[i]]);
            if (dfs(matching[tmp[i]], was, graph, matching, state, tmp_was, 1)) {
                matching[tmp[i]] = v;
                state.push(["change_answer", was.slice(), matching.slice(), v, tmp[i]]);
                return true;
            }
        }
    }
    return false;
}


function make_graph_for_kuhn() {
    let state = [[]];
    graph_names.sort();
    var n = Number(second_E);
    var m = Number(first_E);
    var matching_tmp = [-1, -1, -1, -1, -1];
    var was_tmp = [false, false, false, false, false];
    var matching = matching_tmp.slice(0, m);
    var was = was_tmp.slice(0, n);
    var tmp_was = was;
    var graph = [[]];
    for (let i = 0; i !== n - 1; ++i) {
        graph.push([]);
    }
    for (let i = 0; i !== graph_names.length; ++i) {
        graph[graph_names[i][0] - 1].push(graph_names[i][1] - 1);
    }
    state[0] = ["base", matching.slice()];
    matching_info(matching);
    for (let i = 0; i !== n; ++i) {
        was.fill(false);
        dfs(i, was, graph, matching, state, tmp_was, 0);
    }
    state.push(["final", matching.slice()]);
    for (let i = 0; i < m; ++i) {
        if (matching[i] !== -1) {
            console.log((matching[i] + 1) + " " + (i + 1));
        }
    }
    let state_length = state.length - 1;
    console.log(state);
    iteration_animation(state_length, state, graph);
}


//make animation-------------------------------------------------------------------------------------------------

function draw_find(graph, matching) {
    ctx.clearRect(0, 0, 1300, 200);
    graph_numbers();
    let index = 0;
    for (let i of graph_coords[0]) {
        ctx.fillStyle = "black";
        for (let j = 0; j !== matching.length; ++j) {
            if (index === matching[j]) {
                ctx.fillStyle = "blue";
                break;
            }
        }
        ctx.beginPath();
        ctx.arc(i[0], i[1], 15, 0, Math.PI * 2, true);
        ctx.fill();
        ++index;
    }
    index = 0;
    for (let i of graph_coords[1]) {
        if (matching[index] !== -1) {
            ctx.fillStyle = "blue";
        } else {
            ctx.fillStyle = "black";
        }
        ctx.beginPath();
        ctx.arc(i[0], i[1], 15, 0, Math.PI * 2, true);
        ctx.fill();
        ++index;
    }
    for (let i = 0; i !== graph.length; ++i) {
        for (let j of graph[i]) {
            if (matching[j] === i) {
                ctx.strokeStyle = "blue";
            } else {
                ctx.strokeStyle = "black";
            }
            ctx.beginPath();
            ctx.moveTo(500 + i * 70, 160);
            ctx.lineTo(500 + j * 70, 50);
            ctx.stroke();
        }
    }
}

function draw_choose_way(graph, v, number_visited) {
    ctx.clearRect(0, 0, 1300, 200);
    graph_numbers();
    let index = 0;
    // vertexes--------------------------------------------------------
    for (let i of graph_coords[0]) {
        if (index === v) {
            ctx.fillStyle = "green";
        } else {
            ctx.fillStyle = "black";
        }
        ctx.beginPath();
        ctx.arc(i[0], i[1], 15, 0, Math.PI * 2, true);
        ctx.fill();
        ++index;
    }
    index = 0;
    ctx.fillStyle = "black";
    for (let i of graph_coords[1]) {
        ctx.fillStyle = "black";
        for (let j of graph[v]) {
            if (j === index && index >= number_visited) {
                ctx.fillStyle = "green";
                break;
            }
        }
        ctx.beginPath();
        ctx.arc(i[0], i[1], 15, 0, Math.PI * 2, true);
        ctx.fill();
        ++index;
    }
    //lines------------------------------------------------------------------
    for (let i = 0; i !== graph.length; ++i) {
        if (i === v) {
            let flag = 0;
            for (let j of graph[i]) {
                if (flag < number_visited) {
                    ctx.strokeStyle = "purple";
                } else {
                    ctx.strokeStyle = "green";
                }
                ctx.beginPath();
                ctx.moveTo(500 + i * 70, 160);
                ctx.lineTo(500 + j * 70, 50);
                ctx.stroke();
                ++flag;
            }
        } else {
            ctx.strokeStyle = "black";
            for (let j of graph[i]) {
                ctx.beginPath();
                ctx.moveTo(500 + i * 70, 160);
                ctx.lineTo(500 + j * 70, 50);
                ctx.stroke();
            }
        }
    }
}


function draw_complementary_chain(graph, was, matching, k) {
    ctx.clearRect(0, 0, 1300, 200);
    graph_numbers();
    let index = 0;
    // vertexes--------------------------------------------------------
    for (let i of graph_coords[0]) {
        if (was[index]) {
            ctx.fillStyle = "red";
        } else {
            ctx.fillStyle = "black";
        }
        ctx.beginPath();
        ctx.arc(i[0], i[1], 15, 0, Math.PI * 2, true);
        ctx.fill();
        ++index;
    }
    index = 0;
    ctx.fillStyle = "black";
    for (let i of graph_coords[1]) {
        if (index === k) {
            ctx.fillStyle = "orange";
        } else {
            ctx.fillStyle = "black";
        }
        ctx.beginPath();
        ctx.arc(i[0], i[1], 15, 0, Math.PI * 2, true);
        ctx.fill();
        ++index;
    }
    //lines------------------------------------------------------------------
    for (let i = 0; i !== graph.length; ++i) {
        if (i === matching[k]) {
            for (let j of graph[i]) {
                if (j === k) {
                    ctx.strokeStyle = "orange";
                } else {
                    ctx.strokeStyle = "black";
                }
                ctx.beginPath();
                ctx.moveTo(500 + i * 70, 160);
                ctx.lineTo(500 + j * 70, 50);
                ctx.stroke();
            }
        } else {
            ctx.strokeStyle = "black";
            for (let j of graph[i]) {
                ctx.beginPath();
                ctx.moveTo(500 + i * 70, 160);
                ctx.lineTo(500 + j * 70, 50);
                ctx.stroke();
            }
        }
    }
}

function draw_find_after_dfs(graph, v, k) {
    ctx.clearRect(0, 0, 1300, 200);
    graph_numbers();
    let index = 0;
    for (let i of graph_coords[0]) {
        ctx.fillStyle = "black";
        if (index === v) {
            ctx.fillStyle = "blue";
        }
        ctx.beginPath();
        ctx.arc(i[0], i[1], 15, 0, Math.PI * 2, true);
        ctx.fill();
        ++index;
    }
    index = 0;
    for (let i of graph_coords[1]) {
        ctx.fillStyle = "black";
        if (index === k) {
            ctx.fillStyle = "blue";
        }
        ctx.beginPath();
        ctx.arc(i[0], i[1], 15, 0, Math.PI * 2, true);
        ctx.fill();
        ++index;
    }
    for (let i = 0; i !== graph.length; ++i) {
        index = 0;
        for (let j of graph[i]) {
            if (v === i && j === k) {
                ctx.strokeStyle = "blue";
            } else {
                ctx.strokeStyle = "black";
            }
            ctx.beginPath();
            ctx.moveTo(500 + i * 70, 160);
            ctx.lineTo(500 + j * 70, 50);
            ctx.stroke();
            index++;
        }
    }
}

function draw_change_answer(graph, matching) {
    ctx.clearRect(0, 0, 1300, 200);
    graph_numbers();
    let index = 0;
    for (let i of graph_coords[0]) {
        ctx.fillStyle = "black";
        for (let j = 0; j !== matching.length; ++j) {
            if (index === matching[j]) {
                ctx.fillStyle = "blue";
                break;
            }
        }
        ctx.beginPath();
        ctx.arc(i[0], i[1], 15, 0, Math.PI * 2, true);
        ctx.fill();
        ++index;
    }
    index = 0;
    for (let i of graph_coords[1]) {
        if (matching[index] !== -1) {
            ctx.fillStyle = "blue";
        } else {
            ctx.fillStyle = "black";
        }
        ctx.beginPath();
        ctx.arc(i[0], i[1], 15, 0, Math.PI * 2, true);
        ctx.fill();
        ++index;
    }
    for (let i = 0; i !== graph.length; ++i) {
        for (let j of graph[i]) {
            if (matching[j] === i) {
                ctx.strokeStyle = "blue";
            } else {
                ctx.strokeStyle = "black";
            }
            ctx.beginPath();
            ctx.moveTo(500 + i * 70, 160);
            ctx.lineTo(500 + j * 70, 50);
            ctx.stroke();
        }
    }
}

function base_state(graph) {
    ctx.clearRect(0, 0, 1300, 200);
    graph_numbers();
    let x = 0, y = 0;
    ctx.font = "24px serif";
    ctx.strokeStyle = "black";
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
    for (let i = 0; i !== graph.length; ++i) {
        for (let j of graph[i]) {
            ctx.beginPath();
            ctx.moveTo(500 + i * 70, 160);
            ctx.lineTo(500 + j * 70, 50);
            ctx.stroke();
        }
    }
}

function text_choose_way() {
    ctx.font = "24px serif";
    ctx.fillStyle = "black";
    let text1 = "Выбираем по какому ребру пойдём.";
    let text2 = "Порядок рёбер слева направо";
    let text3 = "Если ребро подсвечено фиолетовым цветом,";
    let text4 = "то по нему мы уже ходили, если зелёным,"
    let text5 = "то можем по нему идти."
    ctx.fillText(text1, 10, 15 + 40);
    ctx.fillText(text2, 10, 40 + 40);
    ctx.fillText(text3, 10, 65 + 40);
    ctx.fillText(text4, 10, 90 + 40);
    ctx.fillText(text5, 10, 115 + 40);
}

function text_false() {
    ctx.font = "21px serif";
    ctx.clearRect(0, 0, 480, 200);
    ctx.fillStyle = "red";
    let text1 = "ОШИБКА. Мы зациклились.";
    ctx.fillText(text1, 0, 15 + 40);
    ctx.fillStyle = "black";
    let text2 = "Об этом свидетельствует то, что";
    let text3 = "оранжевое ребро, которое нам прокладывает путь";
    let text4 = "для дополняющей цепи, ведет в вершину, в которой";
    let text5 = "мы уже побывали (она подсвечена красным).";
    ctx.fillText(text2, 0, 40 + 40);
    ctx.fillText(text3, 0, 65 + 40);
    ctx.fillText(text4, 0, 90 + 40);
    ctx.fillText(text5, 0, 115 + 40);
}

function text_find() {
    ctx.font = "20px serif";
    ctx.fillStyle = "blue";
    let text1 = "Мы нашли новое ребро в максимальном паросочетании!";
    ctx.fillText(text1, 0, 100);
}

function text_complementary_chain() {
    ctx.font = "22px serif";
    ctx.fillStyle = "black";
    let text1 = "Строим дополняющую цепь.";
    let text2 = "Зашли в верхнюю вершину, из нее выходит ребро";
    let text3 = "из паросочетания. Идем по этому ребру";
    let text4 = "(оно оранжевое) в нижнюю вершину. Также";
    let text5 = "помечаем вершины, в которых уже были";
    let text6 = "красным цветом.";
    ctx.fillText(text1, 0, 15 + 40);
    ctx.fillText(text2, 0, 40 + 40);
    ctx.fillText(text3, 0, 65 + 40);
    ctx.fillText(text4, 0, 90 + 40);
    ctx.fillText(text5, 0, 115 + 40);
    ctx.fillText(text6, 0, 140 + 40);
}

function text_find_after_dfs() {
    ctx.fillStyle = "black";
    let text1 = "Нашли свободное ребро, не входящее в паросочетание.";
    let text2 = "Значит мы нашли дополняющую цепь.";
    let text3 = "Добавляем это ребро в максимальное паросочетание и";
    let text4 = "пойдем обратно по дополняющей цепи, попутно меняя ";
    let text5 = "рёбра: если ребро входило в паросочетание мы его";
    let text6 = "убираем, иначе - добавляем.";
    ctx.fillText(text1, 0, 15 + 40);
    ctx.fillText(text2, 0, 40 + 40);
    ctx.fillText(text3, 0, 65 + 40);
    ctx.fillText(text4, 0, 90 + 40);
    ctx.fillText(text5, 0, 115 + 40);
    ctx.fillText(text6, 0, 140 + 40);
}

function text_base() {
    ctx.font = "21px serif";
    ctx.fillStyle = "black";
    let text1 = "Начнём поиск максимального паросочетания.";
    let text2 = "Для навигации используйте кнопки"
    let text3 = "ВПЕРЁД и НАЗАД. Справа можно посмотреть";
    let text4 = "текущую информацию о паросочетаниях.";
    let text5 = "(-1 говорит о том, что из соответствующей";
    let text6 = "вершины не выходит ребро из паросочетания.)";
    ctx.fillText(text1, 0, 20 + 30);
    ctx.fillText(text2, 0, 50 + 30);
    ctx.fillText(text3, 0, 80 + 30);
    ctx.fillText(text4, 0, 110 + 30);
    ctx.fillText(text5, 0, 140 + 30);
    ctx.fillText(text6, 0, 170 + 20);
}

function text_final() {
    ctx.font = "22px serif";
    ctx.fillStyle = "green";
    let text1 = "УРА! Мы нашли максимальное паросочетание!";
    ctx.fillText(text1, 0, 100);
}

function text_change_answer() {
    ctx.fillStyle = "black";
    let text1 = "Поменяли рёбра.";
    ctx.fillText(text1, 300, 100);
}

function matching_info(matching) {
    ctx.fillStyle = "black";
    ctx.font = "22px serif";
    let text1 = "Слева вершины из верхней доли.";
    let text2 = "Справа вершины из нижней доли."
    ctx.fillText(text1, 900, 40);
    ctx.fillText(text2, 900, 60);
    let index = 0;
    for (let i of matching) {
        if (i !== -1) {
            ctx.fillStyle = "blue";
            ctx.fillText(String(index + 1) + " → " + String(i + 1), 1000, 80 + index * 30);
        } else {
            ctx.fillStyle = "black";
            ctx.fillText(String(index + 1) + " → " + String(i), 1000, 80 + index * 30);
        }
        ++index;
    }
}

var go_to_start = document.querySelector('.go_to_start');

function animation(state, graph) {
    if (state[0] === "choose_way") {
        draw_choose_way(graph, state[1], state[4]);
        text_choose_way();
        matching_info(state[3]);
    }
    if (state[0] === "find") {
        draw_find(graph, state[2]);
        text_find();
        matching_info(state[2]);
    }
    if (state[0] === "complementary_chain") {
        draw_complementary_chain(graph, state[1], state[2], state[4]);
        text_complementary_chain();
        matching_info(state[2]);
    }
    if (state[0] === "find_after_dfs") {
        draw_find_after_dfs(graph, state[3], state[4]);
        text_find_after_dfs();
        matching_info(state[2]);
    }
    if (state[0] === "change_answer") {
        draw_change_answer(graph, state[2]);
        text_change_answer();
        matching_info(state[2]);
    }
    if (state[0] === "false") {
        text_false();
        matching_info(state[2]);
    }
    if (state[0] === "base") {
        base_state(graph);
        text_base();
        matching_info(state[1]);
    }
    if (state[0] === "final") {
        draw_find(graph, state[1]);
        text_final();
        matching_info(state[1]);
        go_to_start.style.display = "flex";
    } else {
        go_to_start.style.display = "none";
    }

}

function iteration_animation(state_length, state, graph) {
    var i = 0;
    var popup1 = document.getElementById('next');
    popup1.onclick = function () {
        if (i < state_length) {
            ++i;
            animation(state[i], graph, i);
        }
    }
    var popup2 = document.getElementById('prev');
    popup2.onclick = function () {
        if (i >= 1) {
            --i;
            animation(state[i], graph, i);
        }
    }
}


var set = new Set();




var
    canv = document.getElementById('canvas'),
    ctx  = canv.getContext('2d');
canv.width  = 1300;
canv.height = 200;

function text() {
    ctx.font = "24px serif";
    ctx.fillStyle = "black";
    ctx.fillText("matching:", 1000, 70);
    if (i === 1 || i === 2) {
        ctx.fillText("0 → -1", 1030, 100);
        ctx.fillText("1 → -1", 1030, 130);
        ctx.fillText("2 → -1", 1030, 160);
        ctx.fillText("3 → -1", 1030, 190);
    }
    if (i === 3 || i === 4) {
        ctx.fillText("0 → -1", 1030, 100);
        ctx.fillStyle = "blue";
        ctx.fillText("1 → 0", 1030, 130);
        ctx.fillStyle = "black";
        ctx.fillText("2 → -1", 1030, 160);
        ctx.fillText("3 → -1", 1030, 190);
    }
    if (i === 5 || i === 6) {
        ctx.fillText("0 → -1", 1030, 100);
        ctx.fillStyle = "blue";
        ctx.fillText("1 → 0", 1030, 130);
        ctx.fillText("2 → 1", 1030, 160);
        ctx.fillStyle = "black";
        ctx.fillText("3 → -1", 1030, 190);
    }
    if (i === 7) {
        ctx.fillText("0 → -1", 1030, 100);
        ctx.fillStyle = "blue";
        ctx.fillText("1 → 0", 1030, 130);
        ctx.fillText("2 → ?", 1030, 160);
        ctx.fillStyle = "black";
        ctx.fillText("3 → -1", 1030, 190);
    }
    if (i === 8 || i === 9 || i === 10) {
        ctx.fillText("0 → -1", 1030, 100);
        ctx.fillStyle = "blue";
        ctx.fillText("1 → 0", 1030, 130);
        ctx.fillStyle = "black";
        ctx.fillText("2 → ?", 1030, 160);
        ctx.fillText("3 → -1", 1030, 190);
    }
    if (i === 11 || i === 12) {
        ctx.fillStyle = "blue";
        ctx.fillText("0 → 1", 1030, 100);
        ctx.fillText("1 → 0", 1030, 130);
        ctx.fillStyle = "black";
        ctx.fillText("2 → ?", 1030, 160);
        ctx.fillText("3 → -1", 1030, 190);
    }
    if (i === 13 || i === 14) {
        ctx.fillStyle = "blue";
        ctx.fillText("0 → 1", 1030, 100);
        ctx.fillText("1 → 0", 1030, 130);
        ctx.fillText("2 → 2", 1030, 160);
        ctx.fillStyle = "black";
        ctx.fillText("3 → -1", 1030, 190);
    }
    if (i === 15 || i === 16 || i === 17) {
        ctx.fillStyle = "blue";
        ctx.fillText("0 → 1", 1030, 100);
        ctx.fillText("1 → 0", 1030, 130);
        ctx.fillText("2 → 2", 1030, 160);
        ctx.fillText("3 → 3", 1030, 190);
    }
}

function graph() {
    let x = 0, y = 0;
    ctx.strokeStyle = "#000000";
    for(let k = 0; k < 2; k++) {
        for(let j = 0; j < 5; j++) {
            if (k === 0 && j === 4) {
                continue;
            }
            if (i === 1) {
                if (k === 0) {
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 70 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                } else {
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 130 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                }
            }
            if (i === 2) {
                if (k === 0 && j === 1) {
                    ctx.strokeStyle = "green";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 70 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                }else if (k === 1 && j === 0) {
                    ctx.strokeStyle = "green";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 130 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                } else {
                    if (k === 0) {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 70 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    } else {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 130 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    }
                }
            }
            if (i === 3) {
                if (k === 0 && j === 1) {
                    ctx.strokeStyle = "blue";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 70 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                }else if (k === 1 && j === 0) {
                    ctx.strokeStyle = "blue";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 130 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                } else {
                    if (k === 0) {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 70 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    } else {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 130 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    }
                }
            }
            if (i === 4) {
                if (k === 0 && (j === 0 || j === 2)) {
                    ctx.strokeStyle = "green";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 70 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                } else if (k === 0 && j === 1) {
                    ctx.strokeStyle = "blue";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 70 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                } else if (k === 1 && j === 0) {
                    ctx.strokeStyle = "blue";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 130 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                } else if (k === 1 && j === 1) {
                    ctx.strokeStyle = "green";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 130 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                } else {
                    if (k === 0) {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 70 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    } else {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 130 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    }
                }
            }
            if (i === 5) {
                if (k === 0 && (j === 1 || j === 2)) {
                    ctx.strokeStyle = "blue";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 70 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                }else if (k === 1 && (j === 0 || j === 1)) {
                    ctx.strokeStyle = "blue";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 130 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                } else {
                    if (k === 0) {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 70 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    } else {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 130 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    }
                }
            }
            if (i === 6) {
                if (k === 0 && (j === 0 || j === 1 || j === 2)) {
                    ctx.strokeStyle = "green";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 70 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                }else if (k === 1 && (j === 0 || j === 1)) {
                    ctx.strokeStyle = "blue";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 130 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                } else if (k === 1 && j === 2) {
                    ctx.strokeStyle = "green";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 130 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                } else {
                    if (k === 0) {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 70 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    } else {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 130 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    }
                }
            }
            if (i === 7) {
                if (k === 0 && (j === 1 || j === 2)) {
                    ctx.strokeStyle = "blue";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 70 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                }else if (k === 1 && (j === 0 || j === 2)) {
                    ctx.strokeStyle = "blue";
                    ctx.beginPath();
                    x = 500 + j * 70; // x coordinate
                    y = 130 + k * 50; // y coordinate
                    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.strokeStyle = "#000000";
                } else {
                    if (k === 0) {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 70 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    } else {
                        ctx.beginPath();
                        x = 500 + j * 70; // x coordinate
                        y = 130 + k * 50; // y coordinate
                        ctx.arc(x, y, 15, 0, Math.PI * 2, true);
                        ctx.stroke();
                    }
                }
            }
        }
    }
    if (i === 1) {
        ctx.beginPath();
        ctx.moveTo(407 + 100, 167); // 1->2
        ctx.lineTo(463 + 100, 83);
        ctx.moveTo(407 + 100 + 70, 167); // 2->3
        ctx.lineTo(463 + 100 + 70, 83);
        ctx.moveTo(463 + 100, 167); // 2->1
        ctx.lineTo(405 + 100, 85);
        ctx.moveTo(463 + 100 + 70, 167); // 3->1
        ctx.lineTo(410 + 100, 80);
        ctx.moveTo(463 + 100 + 75, 165); // 3->2
        ctx.lineTo(479 + 100, 83);
        ctx.moveTo(463 + 100 + 77, 165); // 3->3
        ctx.lineTo(463 + 100 + 77, 84);
        ctx.moveTo(463 + 100 + 70 * 2, 167); // 4->2
        ctx.lineTo(480 + 100, 80);
        ctx.moveTo(457 + 100 + 77 * 2, 165); // 4->4
        ctx.lineTo(457 + 100 + 77 * 2, 84);
        ctx.moveTo(463 + 100 + 70 * 3, 166); // 5->3
        ctx.lineTo(480 + 100 + 70, 82);
        ctx.stroke();
    }
    if (i === 2) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(407 + 100, 167); // 1->2
        ctx.lineTo(463 + 100, 83);
        ctx.stroke();
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(407 + 100 + 70, 167); // 2->3
        ctx.lineTo(463 + 100 + 70, 83);
        ctx.moveTo(463 + 100, 167); // 2->1
        ctx.lineTo(405 + 100, 85);
        ctx.moveTo(463 + 100 + 70, 167); // 3->1
        ctx.lineTo(410 + 100, 80);
        ctx.moveTo(463 + 100 + 75, 165); // 3->2
        ctx.lineTo(479 + 100, 83);
        ctx.moveTo(463 + 100 + 77, 165); // 3->3
        ctx.lineTo(463 + 100 + 77, 84);
        ctx.moveTo(463 + 100 + 70 * 2, 167); // 4->2
        ctx.lineTo(480 + 100, 80);
        ctx.moveTo(457 + 100 + 77 * 2, 165); // 4->4
        ctx.lineTo(457 + 100 + 77 * 2, 84);
        ctx.moveTo(463 + 100 + 70 * 3, 166); // 5->3
        ctx.lineTo(480 + 100 + 70, 82);
        ctx.stroke();
    }
    if (i === 3 || i === 4) {
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(407 + 100, 167); // 1->2
        ctx.lineTo(463 + 100, 83);
        ctx.stroke();
        ctx.strokeStyle = "black";
        ctx.beginPath();
        if (i === 4) {
            ctx.strokeStyle = "green";
        }
        ctx.moveTo(407 + 100 + 70, 167); // 2->3
        ctx.lineTo(463 + 100 + 70, 83);
        ctx.moveTo(463 + 100, 167); // 2->1
        ctx.lineTo(405 + 100, 85);
        if (i === 4) {
            ctx.stroke();
            ctx.strokeStyle = "black";
            ctx.beginPath();
        }
        ctx.moveTo(463 + 100 + 70, 167); // 3->1
        ctx.lineTo(410 + 100, 80);
        ctx.moveTo(463 + 100 + 75, 165); // 3->2
        ctx.lineTo(479 + 100, 83);
        ctx.moveTo(463 + 100 + 77, 165); // 3->3
        ctx.lineTo(463 + 100 + 77, 84);
        ctx.moveTo(463 + 100 + 70 * 2, 167); // 4->2
        ctx.lineTo(480 + 100, 80);
        ctx.moveTo(457 + 100 + 77 * 2, 165); // 4->4
        ctx.lineTo(457 + 100 + 77 * 2, 84);
        ctx.moveTo(463 + 100 + 70 * 3, 166); // 5->3
        ctx.lineTo(480 + 100 + 70, 82);
        ctx.stroke();
    }
    if (i === 5) {
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(407 + 100, 167); // 1->2
        ctx.lineTo(463 + 100, 83);
        ctx.moveTo(407 + 100 + 70, 167); // 2->3
        ctx.lineTo(463 + 100 + 70, 83);
        ctx.stroke();
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(463 + 100, 167); // 2->1
        ctx.lineTo(405 + 100, 85);
        ctx.moveTo(463 + 100 + 70, 167); // 3->1
        ctx.lineTo(410 + 100, 80);
        ctx.moveTo(463 + 100 + 75, 165); // 3->2
        ctx.lineTo(479 + 100, 83);
        ctx.moveTo(463 + 100 + 77, 165); // 3->3
        ctx.lineTo(463 + 100 + 77, 84);
        ctx.moveTo(463 + 100 + 70 * 2, 167); // 4->2
        ctx.lineTo(480 + 100, 80);
        ctx.moveTo(457 + 100 + 77 * 2, 165); // 4->4
        ctx.lineTo(457 + 100 + 77 * 2, 84);
        ctx.moveTo(463 + 100 + 70 * 3, 166); // 5->3
        ctx.lineTo(480 + 100 + 70, 82);
        ctx.stroke();
    }
    if (i === 6) {
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(407 + 100, 167); // 1->2
        ctx.lineTo(463 + 100, 83);
        ctx.moveTo(407 + 100 + 70, 167); // 2->3
        ctx.lineTo(463 + 100 + 70, 83);
        ctx.stroke();
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(463 + 100 + 70, 167); // 3->1
        ctx.lineTo(410 + 100, 80);
        ctx.moveTo(463 + 100 + 75, 165); // 3->2
        ctx.lineTo(479 + 100, 83);
        ctx.moveTo(463 + 100 + 77, 165); // 3->3
        ctx.lineTo(463 + 100 + 77, 84);
        ctx.stroke();
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(463 + 100, 167); // 2->1
        ctx.lineTo(405 + 100, 85);
        ctx.moveTo(463 + 100 + 70 * 2, 167); // 4->2
        ctx.lineTo(480 + 100, 80);
        ctx.moveTo(457 + 100 + 77 * 2, 165); // 4->4
        ctx.lineTo(457 + 100 + 77 * 2, 84);
        ctx.moveTo(463 + 100 + 70 * 3, 166); // 5->3
        ctx.lineTo(480 + 100 + 70, 82);
        ctx.stroke();
    }
    if (i === 7) {
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(407 + 100, 167); // 1->2
        ctx.lineTo(463 + 100, 83);
        ctx.moveTo(463 + 100 + 77, 165); // 3->3
        ctx.lineTo(463 + 100 + 77, 84);
        ctx.stroke();
        ctx.strokeStyle = "orange";
        ctx.beginPath();
        ctx.moveTo(407 + 100 + 70, 167); // 2->3
        ctx.lineTo(463 + 100 + 70, 83);
        ctx.moveTo(407 + 100 + 70, 167);
        ctx.lineTo(405 + 100 + 74, 157);
        ctx.moveTo(407 + 100 + 70, 167);
        ctx.lineTo(416 + 100 + 70, 160);
        ctx.stroke();
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(463 + 100 + 70, 167); // 3->1
        ctx.lineTo(410 + 100, 80);
        ctx.moveTo(463 + 100 + 75, 165); // 3->2
        ctx.lineTo(479 + 100, 83);
        ctx.moveTo(463 + 100, 167); // 2->1
        ctx.lineTo(405 + 100, 85);
        ctx.moveTo(463 + 100 + 70 * 2, 167); // 4->2
        ctx.lineTo(480 + 100, 80);
        ctx.moveTo(457 + 100 + 77 * 2, 165); // 4->4
        ctx.lineTo(457 + 100 + 77 * 2, 84);
        ctx.moveTo(463 + 100 + 70 * 3, 166); // 5->3
        ctx.lineTo(480 + 100 + 70, 82);
        ctx.stroke();
    }
}

var i = 0;
var popup1 = document.getElementById('next');
popup1.onclick = function () {
    if (i < 17) {
        ctx.clearRect(400, 50, 800, 600);
        ++i;
        graph();
        text();
    }
}
var popup2 = document.getElementById('prev');
popup2.onclick = function () {
    if (i > 1) {
    ctx.clearRect(400, 50, 800, 600);
    --i;
    text();
    graph();
    }
}



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function Desenho(){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';
    ctx.fillRect (0, 10, 40, 0);
    ctx.strokeRect (0, 10, 40, 0);
    ctx.closePath();
    }
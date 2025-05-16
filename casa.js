const canvas = document.getElementById('Casa');
const ctx = canvas.getContext('2d');

function chao () {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'gray';
    ctx.fillRect(0,450,800,350);
    ctx.closePath();
}
function agua1 () {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#458EFC';
    ctx.fillRect(0,440,150,400);
    ctx.closePath();
}
function agua2 () {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#458EFC';
    ctx.fillRect(0,650,430,800);
    ctx.closePath();
}
function agua3 () {
    ctx.beginPath();
    ctx.fillStyle = '#458EFC';
    ctx.lineWidth = 2; 
    ctx.arc(420, 750, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
function agua4 () {
    ctx.beginPath();
    ctx.fillStyle = '#458EFC';
    ctx.lineWidth = 2; 
    ctx.arc(52, 420, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
function arvore1 () {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#86471A';
    ctx.fillRect(150,250,60,200);
    ctx.closePath();
}
function arvore2 () {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.lineWidth = 2; 
    ctx.arc(180, 200, 80, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
function arvore3 () {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#86471A';
    ctx.fillRect(680,430,60,200);
    ctx.closePath();
}
function arvore4 () {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.lineWidth = 2; 
    ctx.arc(710, 380, 80, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
function casa () {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#86471A';
    ctx.fillRect(320,200,230,250);
    ctx.closePath();
}
function janela () {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#47BDFD';
    ctx.fillRect(340,270,80,80);
    ctx.closePath();
}
function janela2 () {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#47BDFD';
    ctx.fillRect(450,270,80,80);
    ctx.closePath();
}
function telhado() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#F5694D'; 
    ctx.moveTo(320, 200); 
    ctx.lineTo(435, 100); 
    ctx.lineTo(550, 200); 
    ctx.closePath(); 
    ctx.fill(); 
}
function porta() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#624423';
    ctx.fillRect(410,350,50,100);
    ctx.closePath();
}
function sol() {
    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 2; 
    ctx.arc(660, 120, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

chao ();

agua1 ();
agua2 ();
agua3 ();
agua4 ();

arvore1 ();
arvore2 ();

arvore3 ();
arvore4 ();

casa ();
janela ();
janela2 ();
telhado ();
porta ();

sol ();
//var esIst=false;
//var uhr=false;
//var colFg=16777215;
//var colBg=0;

class ColPair{
	constructor(r1=0, g1=0, b1=0, r2=0, g2=0, b2=0){
		this.c1=new Color(r1,g1,b1);
		this.c2=new Color(r2,g2,b2);
	}

	toString(){
		return this.c1.toString(1) + "&" + this.c2.toString(2);
	}
}

class Color{
	constructor(r=0, g=0, b=0){
		this.r=r;
		this.g=g;
		this.b=b;
	}

	toString(nr){
		return "r" + nr + "=" + this.r + "&g" + nr + "=" + this.g + "&b" + nr + "=" + this.b;
	}
}

function getById(str){
	return document.getElementById(str);
}

function buttonClicked(sender) {
	if(sender.id.indexOf("presetNr")!==-1 ) {
		send(presets[parseInt(sender.id.replace("presetNr",""))].toString());
	}
	if(sender.id.indexOf("fgCol")!==-1 ) {
		send(fgCols[parseInt(sender.id.replace("fgCol",""))].toString(1));
	}
	if(sender.id.indexOf("bgCol")!==-1 ) {
		send(bgCols[parseInt(sender.id.replace("bgCol",""))].toString(2));
	}
	if(sender.id.indexOf("esIst")!==-1 ) {
		esIst=!esIst;
		updateBtnStyle(sender, esIst);
		send("esist="+(esIst?1:0));
	}
	if(sender.id.indexOf("uhr")!==-1 ) {
		uhr=!uhr;
		updateBtnStyle(sender, uhr);
		send("uhr="+(uhr?1:0));
	}
}

function colChanged(sender) {
	let no=0;
	if(sender.id.indexOf("fgInp")!==-1 ) {no=1;}
	if(sender.id.indexOf("bgInp")!==-1 ) {no=2;}
	if(no>0){
		let val = sender.value;
		let r = parseInt(val.charAt(1) + val.charAt(2), 16);
		let g = parseInt(val.charAt(3) + val.charAt(4), 16);
		let b = parseInt(val.charAt(5) + val.charAt(6), 16);
		send(new Color(r,g,b).toString(no));
	}
}


function updateBtnStyle(btn, active) {
	if(active){
		btn.style.background = "#ddd";
		btn.style.color = "#444";
	} else {
		btn.style.background = "#444";
		btn.style.color = "#222";
	}
}

function send(str){
	var request = new XMLHttpRequest();
	var url = window.location.href;
	var pos = url.indexOf("?");
	if(pos > 1){
		url = url.substring(0, pos);
	}
	
	url += "?" + str;
	
	request.open('GET', url , true);
	request.send(null);
}

function init() {

	updateBtnStyle(getById("esIst"),esIst);
	updateBtnStyle(getById("uhr"),uhr);
	
	let str = colFg.toString(16)
	let digits = str.length
	while (digits < 6) {
		str = 0 + str;
		digits++;
	}
	getById("fgInp").value = "#"+str;
	
	str = colBg.toString(16)
	digits = str.length
	while (digits < 6) {
		str = 0 + str;
		digits++;
	}
	getById("bgInp").value = "#"+str;
	
	let wcbtn = '<button id="presetNrbtnid" class="clockPrev" onclick="buttonClicked(this);" style="color:rgb(colr2,colg2,colb2)"><br><span style="color:rgb(colr1,colg1,colb1)">E S</span> K <span style="color:rgb(colr1,colg1,colb1)">I S T</span> E F Ü N F<br>Z E H N Z W A N Z I G<br><span style="color:rgb(colr1,colg1,colb1)">D R E I V I E R T E L</span><br>J V O R O S L N A C H<br>H A L B N A C H T A G<br>F Ü N F K L <span style="color:rgb(colr1,colg1,colb1)">Z W Ö L F</span><br>Z W E I N S I E B E N<br>S E C H S O X V I E R<br>D R E I S C H K E L F<br>Z E H N E U N M U H R<br><span style="color:rgb(colr1,colg1,colb1)">o&nbsp;&nbsp;&nbsp;o</span>&nbsp;&nbsp;&nbsp;o&nbsp;&nbsp;&nbsp;o</button>';
	let pre = getById("presets");
	presets.forEach(function(preset, index) {
		let str = wcbtn;
		str = str.replace("btnid", index);
		str = str.replace(/colr1/g, preset.c1.r);
		str = str.replace(/colg1/g, preset.c1.g);
		str = str.replace(/colb1/g, preset.c1.b);
		str = str.replace("colr2", preset.c2.r);
		str = str.replace("colg2", preset.c2.g);
		str = str.replace("colb2", preset.c2.b);
		pre.innerHTML += str;
	}, this);
	
	let colBtn = '<button id="fgbgColbtnid" class="stdBtn" onclick="buttonClicked(this);" style="background:rgb(colr,colg,colb)"></button>';
	let fg = getById("fg");
	let bg = getById("bkg");
	fgCols.forEach(function(fgCol, index) {
		let str = colBtn;
		str = str.replace("fgbg", "fg");
		str = str.replace("btnid", index);
		str = str.replace("colr", fgCol.r);
		str = str.replace("colg", fgCol.g);
		str = str.replace("colb", fgCol.b);
		fg.innerHTML += str;
	}, this);

	bgCols.forEach(function(bgCol, index) {
		let str = colBtn;
		str = str.replace("fgbg", "bg");
		str = str.replace("btnid", index);
		str = str.replace("colr", bgCol.r);
		str = str.replace("colg", bgCol.g);
		str = str.replace("colb", bgCol.b);
		bg.innerHTML += str;
	}, this);
	
}

let presets = [
	new ColPair(255,80,0,20,20,20),
	new ColPair(255,80,0,0,0,0),
	new ColPair(255,0,0,20,20,20),
	new ColPair(255,0,0,0,0,0),
	new ColPair(0,255,0,20,20,20),
	new ColPair(0,255,0,0,0,0),
	new ColPair(10,50,255,20,20,20),
	new ColPair(10,50,255,0,0,0),
	new ColPair(255,255,255,5,10,20),
	new ColPair(180,180,180,0,0,0),
	new ColPair(255,255,0,20,20,20),
	new ColPair(255,255,0,0,0,0)];

let fgCols = [
	new Color(255,0,0),
	new Color(255,80,0),
	new Color(255,255,0),
	new Color(0,255,0),
	new Color(0,255,255),
	new Color(20,80,255),
	new Color(0,0,255),
	new Color(127,0,255),
	new Color(255,0,255),
	new Color(255,0,127)];

let bgCols = [
	new Color(0,0,0),
	new Color(5,5,5),
	new Color(10,10,10),
	new Color(20,20,20),
	new Color(20,5,5),
	new Color(10,10,5),
	new Color(5,20,5),
	new Color(5,20,10),
	new Color(5,5,20),
	new Color(60,0,0),
	new Color(30,30,0),
	new Color(0,60,0),
	new Color(0,20,30),
	new Color(0,0,60),
	new Color(30,0,30)];

init();



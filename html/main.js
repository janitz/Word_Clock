//var esIst=false;
//var uhr=false;

class Preset{
	constructor(r1=0, g1=0, b1=0, r2=0, g2=0, b2=0){
		this.r1=r1;
		this.g1=g1;
		this.b1=b1;
		this.r2=r2;
		this.g2=g2;
		this.b2=b2;
	}
	toString(){
		return "r1=" + this.r1 + "&g1=" + this.g1 + "&b1=" + this.b1 + "&r2=" + this.r2 + "&g2=" + this.g2 + "&b2=" + this.b2;
	}
}
function getById(str){
	return document.getElementById(str);
}
function buttonClicked(sender) {
	if(sender.id.indexOf("presetNr")!==-1 ) {
		send(presets[parseInt(sender.id.replace("presetNr",""))].toString());
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

function updateBtnStyle(btn, active) {
	if(active){
		btn.style.background = "#ddd";
		btn.style.color = "#444";
	} else {
		btn.style.background = "#444";
		btn.style.color = "#222";
	}
}

let presets = [
	new Preset(255,80,0,20,20,20),
	new Preset(255,80,0,0,0,0),
	new Preset(255,0,0,20,20,20),
	new Preset(255,0,0,0,0,0),
	new Preset(0,255,0,20,20,20),
	new Preset(0,255,0,0,0,0),
	new Preset(10,50,255,20,20,20),
	new Preset(10,50,255,0,0,0),
	new Preset(255,255,255,5,10,20),
	new Preset(180,180,180,0,0,0),
	new Preset(255,255,0,20,20,20),
	new Preset(255,255,0,0,0,0)];
let wcdiv = "<button id=\"presetNrbtnid\" class=\"clockPrev\" onclick=\"buttonClicked(this);\" style=\"color:rgb(colr2,colg2,colb2)\"><br><span style=\"color:rgb(colr1,colg1,colb1)\">E S</span> K <span style=\"color:rgb(colr1,colg1,colb1)\">I S T</span> E F Ü N F<br>Z E H N Z W A N Z I G<br><span style=\"color:rgb(colr1,colg1,colb1)\">D R E I V I E R T E L</span><br>J V O R O S L N A C H<br>H A L B N A C H T A G<br>F Ü N F K L <span style=\"color:rgb(colr1,colg1,colb1)\">Z W Ö L F</span><br>Z W E I N S I E B E N<br>S E C H S O X V I E R<br>D R E I S C H K E L F<br>Z E H N E U N M U H R<br><span style=\"color:rgb(colr1,colg1,colb1)\">o&nbsp;&nbsp;&nbsp;o</span>&nbsp;&nbsp;&nbsp;o&nbsp;&nbsp;&nbsp;o</button>";
let pre = getById("presets");
presets.forEach(function(preset, index) {
	let str = wcdiv;
	str = str.replace("btnid", index);
	str = str.replace(/colr1/g, preset.r1);
	str = str.replace(/colg1/g, preset.g1);
	str = str.replace(/colb1/g, preset.b1);
	str = str.replace("colr2", preset.r2);
	str = str.replace("colg2", preset.g2);
	str = str.replace("colb2", preset.b2);
	pre.innerHTML += str;
}, this);
updateBtnStyle(getById("esIst"),esIst);
updateBtnStyle(getById("uhr"),uhr);

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


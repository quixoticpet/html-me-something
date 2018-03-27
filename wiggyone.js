(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 450,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/BAT0001.png", id:"BAT0001"},
		{src:"images/BAT0002.png", id:"BAT0002"},
		{src:"images/BAT0003.png", id:"BAT0003"},
		{src:"images/BAT0004.png", id:"BAT0004"},
		{src:"images/BAT0005.png", id:"BAT0005"},
		{src:"images/BAT0006.png", id:"BAT0006"},
		{src:"images/BAT0007.png", id:"BAT0007"},
		{src:"images/BAT0008.png", id:"BAT0008"},
		{src:"images/BAT0009.png", id:"BAT0009"},
		{src:"images/BAT0010.png", id:"BAT0010"},
		{src:"images/BAT0011.png", id:"BAT0011"},
		{src:"images/BAT0012.png", id:"BAT0012"},
		{src:"images/BAT0013.png", id:"BAT0013"},
		{src:"images/BAT0014.png", id:"BAT0014"},
		{src:"images/BAT0015.png", id:"BAT0015"},
		{src:"images/BAT0016.png", id:"BAT0016"},
		{src:"images/BAT0017.png", id:"BAT0017"},
		{src:"images/BAT0018.png", id:"BAT0018"},
		{src:"images/BAT0019.png", id:"BAT0019"},
		{src:"images/BAT0020.png", id:"BAT0020"},
		{src:"images/BAT0021.png", id:"BAT0021"},
		{src:"images/BAT0022.png", id:"BAT0022"},
		{src:"images/BAT0023.png", id:"BAT0023"},
		{src:"images/BAT0024.png", id:"BAT0024"},
		{src:"images/BAT0025.png", id:"BAT0025"},
		{src:"images/BAT0026.png", id:"BAT0026"},
		{src:"images/BAT0027.png", id:"BAT0027"},
		{src:"images/BAT0028.png", id:"BAT0028"},
		{src:"images/BAT0029.png", id:"BAT0029"},
		{src:"images/BAT0031.png", id:"BAT0031"},
		{src:"images/BAT0032.png", id:"BAT0032"},
		{src:"images/BAT0033.png", id:"BAT0033"},
		{src:"images/BAT0034.png", id:"BAT0034"},
		{src:"images/BAT0035.png", id:"BAT0035"},
		{src:"images/BAT0036.png", id:"BAT0036"},
		{src:"images/BAT0037.png", id:"BAT0037"},
		{src:"images/BAT0038.png", id:"BAT0038"},
		{src:"images/BAT0039.png", id:"BAT0039"},
		{src:"images/BAT0040.png", id:"BAT0040"},
		{src:"images/BAT0041.png", id:"BAT0041"},
		{src:"images/BAT0042.png", id:"BAT0042"},
		{src:"images/BAT0043.png", id:"BAT0043"},
		{src:"images/BAT0044.png", id:"BAT0044"},
		{src:"images/BAT0045.png", id:"BAT0045"},
		{src:"images/BAT0046.png", id:"BAT0046"},
		{src:"images/BAT0047.png", id:"BAT0047"},
		{src:"images/BAT0048.png", id:"BAT0048"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.BAT0001 = function() {
	this.initialize(img.BAT0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0002 = function() {
	this.initialize(img.BAT0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0003 = function() {
	this.initialize(img.BAT0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0004 = function() {
	this.initialize(img.BAT0004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0005 = function() {
	this.initialize(img.BAT0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0006 = function() {
	this.initialize(img.BAT0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0007 = function() {
	this.initialize(img.BAT0007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0008 = function() {
	this.initialize(img.BAT0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0009 = function() {
	this.initialize(img.BAT0009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0010 = function() {
	this.initialize(img.BAT0010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0011 = function() {
	this.initialize(img.BAT0011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0012 = function() {
	this.initialize(img.BAT0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0013 = function() {
	this.initialize(img.BAT0013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0014 = function() {
	this.initialize(img.BAT0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0015 = function() {
	this.initialize(img.BAT0015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0016 = function() {
	this.initialize(img.BAT0016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0017 = function() {
	this.initialize(img.BAT0017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0018 = function() {
	this.initialize(img.BAT0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0019 = function() {
	this.initialize(img.BAT0019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0020 = function() {
	this.initialize(img.BAT0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0021 = function() {
	this.initialize(img.BAT0021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0022 = function() {
	this.initialize(img.BAT0022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0023 = function() {
	this.initialize(img.BAT0023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0024 = function() {
	this.initialize(img.BAT0024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0025 = function() {
	this.initialize(img.BAT0025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0026 = function() {
	this.initialize(img.BAT0026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0027 = function() {
	this.initialize(img.BAT0027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0028 = function() {
	this.initialize(img.BAT0028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0029 = function() {
	this.initialize(img.BAT0029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0031 = function() {
	this.initialize(img.BAT0031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0032 = function() {
	this.initialize(img.BAT0032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0033 = function() {
	this.initialize(img.BAT0033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0034 = function() {
	this.initialize(img.BAT0034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0035 = function() {
	this.initialize(img.BAT0035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0036 = function() {
	this.initialize(img.BAT0036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0037 = function() {
	this.initialize(img.BAT0037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0038 = function() {
	this.initialize(img.BAT0038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0039 = function() {
	this.initialize(img.BAT0039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0040 = function() {
	this.initialize(img.BAT0040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0041 = function() {
	this.initialize(img.BAT0041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0042 = function() {
	this.initialize(img.BAT0042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0043 = function() {
	this.initialize(img.BAT0043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0044 = function() {
	this.initialize(img.BAT0044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0045 = function() {
	this.initialize(img.BAT0045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0046 = function() {
	this.initialize(img.BAT0046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0047 = function() {
	this.initialize(img.BAT0047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.BAT0048 = function() {
	this.initialize(img.BAT0048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BAT0048();
	this.instance.setTransform(-25,-225);

	this.instance_1 = new lib.BAT0047();
	this.instance_1.setTransform(-25,-225);

	this.instance_2 = new lib.BAT0046();
	this.instance_2.setTransform(-25,-225);

	this.instance_3 = new lib.BAT0045();
	this.instance_3.setTransform(-25,-225);

	this.instance_4 = new lib.BAT0044();
	this.instance_4.setTransform(-25,-225);

	this.instance_5 = new lib.BAT0043();
	this.instance_5.setTransform(-25,-225);

	this.instance_6 = new lib.BAT0042();
	this.instance_6.setTransform(-25,-225);

	this.instance_7 = new lib.BAT0041();
	this.instance_7.setTransform(-25,-225);

	this.instance_8 = new lib.BAT0040();
	this.instance_8.setTransform(-25,-225);

	this.instance_9 = new lib.BAT0039();
	this.instance_9.setTransform(-25,-225);

	this.instance_10 = new lib.BAT0038();
	this.instance_10.setTransform(-25,-225);

	this.instance_11 = new lib.BAT0037();
	this.instance_11.setTransform(-25,-225);

	this.instance_12 = new lib.BAT0036();
	this.instance_12.setTransform(-25,-225);

	this.instance_13 = new lib.BAT0035();
	this.instance_13.setTransform(-25,-225);

	this.instance_14 = new lib.BAT0034();
	this.instance_14.setTransform(-25,-225);

	this.instance_15 = new lib.BAT0033();
	this.instance_15.setTransform(-25,-225);

	this.instance_16 = new lib.BAT0032();
	this.instance_16.setTransform(-25,-225);

	this.instance_17 = new lib.BAT0031();
	this.instance_17.setTransform(-25,-225);

	this.instance_18 = new lib.BAT0029();
	this.instance_18.setTransform(-25,-225);

	this.instance_19 = new lib.BAT0028();
	this.instance_19.setTransform(-25,-225);

	this.instance_20 = new lib.BAT0027();
	this.instance_20.setTransform(-25,-225);

	this.instance_21 = new lib.BAT0026();
	this.instance_21.setTransform(-25,-225);

	this.instance_22 = new lib.BAT0025();
	this.instance_22.setTransform(-25,-225);

	this.instance_23 = new lib.BAT0024();
	this.instance_23.setTransform(-25,-225);

	this.instance_24 = new lib.BAT0023();
	this.instance_24.setTransform(-25,-225);

	this.instance_25 = new lib.BAT0022();
	this.instance_25.setTransform(-25,-225);

	this.instance_26 = new lib.BAT0021();
	this.instance_26.setTransform(-25,-225);

	this.instance_27 = new lib.BAT0020();
	this.instance_27.setTransform(-25,-225);

	this.instance_28 = new lib.BAT0019();
	this.instance_28.setTransform(-25,-225);

	this.instance_29 = new lib.BAT0018();
	this.instance_29.setTransform(-25,-225);

	this.instance_30 = new lib.BAT0017();
	this.instance_30.setTransform(-25,-225);

	this.instance_31 = new lib.BAT0016();
	this.instance_31.setTransform(-25,-225);

	this.instance_32 = new lib.BAT0015();
	this.instance_32.setTransform(-25,-225);

	this.instance_33 = new lib.BAT0014();
	this.instance_33.setTransform(-25,-225);

	this.instance_34 = new lib.BAT0013();
	this.instance_34.setTransform(-25,-225);

	this.instance_35 = new lib.BAT0012();
	this.instance_35.setTransform(-25,-225);

	this.instance_36 = new lib.BAT0011();
	this.instance_36.setTransform(-25,-225);

	this.instance_37 = new lib.BAT0010();
	this.instance_37.setTransform(-25,-225);

	this.instance_38 = new lib.BAT0009();
	this.instance_38.setTransform(-25,-225);

	this.instance_39 = new lib.BAT0008();
	this.instance_39.setTransform(-25,-225);

	this.instance_40 = new lib.BAT0007();
	this.instance_40.setTransform(-25,-225);

	this.instance_41 = new lib.BAT0006();
	this.instance_41.setTransform(-25,-225);

	this.instance_42 = new lib.BAT0005();
	this.instance_42.setTransform(-25,-225);

	this.instance_43 = new lib.BAT0004();
	this.instance_43.setTransform(-25,-225);

	this.instance_44 = new lib.BAT0003();
	this.instance_44.setTransform(-25,-225);

	this.instance_45 = new lib.BAT0002();
	this.instance_45.setTransform(-25,-225);

	this.instance_46 = new lib.BAT0001();
	this.instance_46.setTransform(-25,-225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-225,300,450);


// stage content:
(lib.wiggyone = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(25.1,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,225,300,450);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
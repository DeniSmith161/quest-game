(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.slot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.776)").s().p("AnFISQhMAAAAhMIAAuLQAAhMBMAAIOLAAQBMAAAABMIAAOLQAABMhMAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slot, new cjs.Rectangle(-52.9,-52.9,105.9,105.9), null);


(lib.itemNote_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAynaIC7DCQC5DFgMATIlomaInLCMIFeFAAGahAQgNATjmARQhzAJhvAFIiCHpIIRgUg");
	this.shape.setTransform(-0.0104,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC00").s().p("Ag7gOIlelAIHLiMIFoGaQgMATjmARQh0AJhvAFQBvgFB0gJQDmgRAMgTIhGIHIoRAUg");
	this.shape_1.setTransform(-0.05,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-48.5,84.1,97);


(lib.not = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAynaIC7DCQC5DFgMATQgNATjmARQhzAJhvAFIiCHpIIRgUIBGoHIlomaInLCMIFeFA");
	this.shape.setTransform(-0.0104,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC00").s().p("Ag7gOIlelAIHLiMIFoGaQgMATjmARQh0AJhvAFQBvgFB0gJQDmgRAMgTIhGIHIoRAUg");
	this.shape_1.setTransform(-0.05,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-48.5,84.1,97);


(lib.key2_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkcAoQAABDgvAvQgvAvhDAAQhCAAgwgvQgvgvAAhDQAAhCAvgvQAwgvBCAAQBDAAAvAvQAvAvAABCgAjGB+QgTA2gsAsQhMBMhrAAQhsAAhMhMQhMhMAAhsQAAhrBMhMQBMhMBsAAQBrAABMBMQAyAyASA/AjGB+IOHAAIAAmpIi+AAIAAEEIrEAJQAJAhAAAlQAAAugOAog");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ap0DfQhMhLAAhsQAAhrBMhMQBNhMBrAAQBsAABLBMQAyAyASA/QAJAhAAAlQAAAugOAnQgSA2gtAsQhLBNhsAAQhrAAhNhNgAovhJQguAwgBBBQABBCAuAwQAwAvBCAAQBDAAAvgvQAwgwAAhCQAAhBgwgwQgvgvhDAAQhCAAgwAvgAjGB9QAOgnAAguQAAglgJghILEgJIAAkEIC+AAIAAGogAjGB9IAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.key2_icon, new cjs.Rectangle(-71.5,-31,143,62), null);


(lib.key1_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkcAoQAABDgvAvQgvAvhDAAQhCAAgwgvQgvgvAAhDQAAhCAvgvQAwgvBCAAQBDAAAvAvQAvAvAABCgAjGB+QgTA2gsAsQhMBMhrAAQhsAAhMhMQhMhMAAhsQAAhrBMhMQBMhMBsAAQBrAABMBMQAyAyASA/AjGB+IOHAAIAAmpIi+AAIAAEEIrEAJQAJAhAAAlQAAAugOAog");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("Ap0DfQhMhLAAhsQAAhrBMhMQBNhMBrAAQBsAABLBMQAyAyASA/QAJAhAAAlQAAAugOAnQgSA2gtAsQhLBNhsAAQhrAAhNhNgAovhJQguAwgBBBQABBCAuAwQAwAvBCAAQBDAAAvgvQAwgwAAhCQAAhBgwgwQgvgvhDAAQhCAAgwAvgAjGB9QAOgnAAguQAAglgJghILEgJIAAkEIC+AAIAAGogAjGB9IAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.key1_icon, new cjs.Rectangle(-71.5,-31,143,62), null);


(lib.key = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjGB+QgTA2gsAsQhMBMhrAAQhsAAhMhMQhMhMAAhsQAAhrBMhMQBMhMBsAAQBrAABMBMQAyAyASA/AkcAoQAABDgvAvQgvAvhDAAQhCAAgwgvQgvgvAAhDQAAhCAvgvQAwgvBCAAQBDAAAvAvQAvAvAABCgAjGB+IOHAAIAAmpIi+AAIAAEEIrEAJQAJAhAAAlQAAAugOAog");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("Ap0DfQhMhLAAhsQAAhrBMhMQBNhMBrAAQBsAABLBMQAyAyASA/QAJAhAAAlQAAAugOAnQgSA2gtAsQhLBNhsAAQhrAAhNhNgAovhJQguAwgBBBQABBCAuAwQAwAvBCAAQBDAAAvgvQAwgwAAhCQAAhBgwgwQgvgvhDAAQhCAAgwAvgAjGB9QAOgnAAguQAAglgJghILEgJIAAkEIC+AAIAAGogAjBgeIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.key, new cjs.Rectangle(-71.5,-31,143,62), null);


(lib.door_open = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AvoDPQAABTg6BUQg7BUhTAkQhTAlg6ghQg7ghAAhTQAAhUA7hTQA6hVBTgkQBTgkA7AhQA6AgAABUgA6k/rMA1JgXNMAAABWkMg1JAXNg");
	this.shape.setTransform(0,74.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("A6j/rMA1HgXNMAAABWkMg1HAXNgAz/IBQAkAAArgTQBTgkA7hUQA7hUgBhUQABhSg7ghQgcgQghAAIgBAAIAAAAQgjAAgoARIgFACQhTAkg6BUQg6BVAABTQAABSA6AiIADABQAaAOAgAAIAAAAIABAAgA0AIBQggAAgagOIgDgBQg6giAAhSQAAhTA6hVQA6hUBTgkIAFgCQAogRAjAAIAAAAIABAAQAhAAAcAQQA7AhgBBSQABBUg7BUQg7BUhTAkQgrATgkAAIgBAAIAAAAgAvoDOIAAAAg");
	this.shape_1.setTransform(0,74.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EgceguZMA49AAAMAAABczMg49AAAg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F570F").s().p("EgceAuaMAAAhczMA49AAAMAAABczgEgajArSMA1HAAAMAAAhWkMg1HAAAg");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.door_open, new cjs.Rectangle(-183.3,-298,366.6,724.6), null);


(lib.door = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AvoDPQAABTg6BUQg7BUhTAkQhTAlg6ghQg7ghAAhTQAAhUA7hTQA6hVBTgkQBTgkA7AhQA6AgAABUgA6k/rMA1JgXNMAAABWkMg1JAXNg");
	this.shape.setTransform(0,74.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("A6j/rMA1HgXNMAAABWkMg1HAXNgAz/IBQAkAAArgTQBTgkA7hUQA7hUgBhUQABhSg7ghQgcgQghAAIgBAAIAAAAQgjAAgoARIgFACQhTAkg6BUQg6BVAABTQAABSA6AiIADABQAaAOAgAAIAAAAIABAAgA0AIBQggAAgagOIgDgBQg6giAAhSQAAhTA6hVQA6hUBTgkIAFgCQAogRAjAAIAAAAIABAAQAhAAAcAQQA7AhgBBSQABBUg7BUQg7BUhTAkQgrATgkAAIgBAAIAAAAgAvoDOIAAAAg");
	this.shape_1.setTransform(0,74.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Слой_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AvojlQAABTg6A6Qg7A7hTAAQhTAAg6g7Qg7g6AAhTQAAhTA7g7QA6g6BTAAQBTAAA7A6QA6A7AABTgEgceguZMA49AAAMAAABczMg49AAAgEgakgrSMA1JAAAMAAABWkMg1JAAAg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F570F").s().p("EgceAuaMAAAhczMA49AAAMAAABczgEgajArSMA1HAAAMAAAhWkMg1HAAAg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("EgajArSMAAAhWjMA1HAAAMAAABWjgA13jlQAABTA6A7QA6A6BTAAQBTAAA7g6QA7g7gBhTQABhTg7g7Qg7g6hTAAQhTAAg6A6Qg6A7AABTIAAAAgA09hXQg6g7AAhTQAAhTA6g7QA6g6BTAAQBTAAA7A6QA7A7gBBTQABBTg7A7Qg7A6hTAAQhTAAg6g6gAvojlIAAAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("EgceguZMA49AAAMAAABczMg49AAAg");
	this.shape_5.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.3,-298,366.6,724.6);


(lib.bot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApIDSIAACMIRzAAIAeiMApIDSISRAAIowovg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ApIFeIAAiMIJhovIIwIvIyRAAISRAAIgeCMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-36,119,72);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkwGVQhkAAAAhkIAAphQAAhkBkAAIJhAAQBkAAAABkIAAJhQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-40.5,81,81);


(lib.inventary = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.slot4 = new lib.slot();
	this.slot4.name = "slot4";
	this.slot4.setTransform(29,-2.5);

	this.slot3 = new lib.slot();
	this.slot3.name = "slot3";
	this.slot3.setTransform(-82,-2.5);

	this.slot2 = new lib.slot();
	this.slot2.name = "slot2";
	this.slot2.setTransform(-191.95,-2.5);

	this.slot1 = new lib.slot();
	this.slot1.name = "slot1";
	this.slot1.setTransform(-302.95,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot1},{t:this.slot2},{t:this.slot3},{t:this.slot4}]}).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.569)").s().p("Eg5iAKeIAA07MBzFAAAIAAU7g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inventary, new cjs.Rectangle(-368.3,-66.9,736.6,133.9), null);


// stage content:
(lib.quest_game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2];
	// timeline functions:
	this.frame_0 = function() {
		/*this.door_btn.addEventListener("click", function() {
		  alert("Дверь закрыта. Найдите ключ.");
		});*/
		
		this.btrest.addEventListener("click", () => {
		  //this.gotoAndStop(1); // Переход на 10-й кадр
			localStorage.clear();
		location.reload();
		});
		
		
		/*
		this.bot2.addEventListener("click", () => {
		this.gotoAndStop(0);
		});*/
		createjs.Touch.enable(stage);
		
		//// === РАЗМЕР ЭКРАНА (адаптация canvas) ===
		//function resizeGame() {
		//    const canvas = document.getElementById("canvas");
		//    const designWidth = 1920;
		//    const designHeight = 1080;
		
		//    const windowWidth = window.innerWidth;
		//    const windowHeight = window.innerHeight;
		
		//    // Вычисляем масштаб, который заполнит экран максимально, сохраняя пропорции
		//    const scale = Math.min(windowWidth / designWidth, windowHeight / designHeight);
		
		//    // Устанавливаем размеры canvas с учётом масштаба
		//    canvas.style.width = designWidth * scale + "px";
		//    canvas.style.height = designHeight * scale + "px";
		
		//    // Центрируем canvas на экране
		//    canvas.style.position = "absolute";
		//    canvas.style.left = (windowWidth - designWidth * scale) / 2 + "px";
		//    canvas.style.top = (windowHeight - designHeight * scale) / 2 + "px";
		
		//    // Масштабируем stage
		//    stage.scaleX = stage.scaleY = scale;
		
		//    // Обновляем сцену
		//    stage.update();
		//}
		
		
		//window.addEventListener("resize", resizeGame);
		//resizeGame();
		
		// === ЗАГРУЗКА ПРОГРЕССА ===
		let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
		let pickedItems = JSON.parse(localStorage.getItem("pickedItems")) || [];
		let openedDoors = JSON.parse(localStorage.getItem("openedDoors")) || {};
		let savedFrame = parseInt(localStorage.getItem("currentFrame"));
		
		if (!isNaN(savedFrame)) {
		    exportRoot.gotoAndStop(savedFrame);
		    stage.update();
		}
		
		// === СЛОТЫ ИНВЕНТАРЯ ===
		let slots = [
		    exportRoot.inventoryBar.slot1,
		    exportRoot.inventoryBar.slot2,
		    exportRoot.inventoryBar.slot3,
		    exportRoot.inventoryBar.slot4
		];
		slots.forEach(slot => slot.removeAllChildren());
		
		// === СВЯЗЬ ДВЕРЕЙ И КЛЮЧЕЙ ===
		const doorKeyMap = {
		    door1: "key1",
		    door2: "key2",
		    door3: "key3",
		    door4: "key4",
		    door5: "key5"
		};
		
		let selectedKey = null;
		
		// === ФУНКЦИЯ СОХРАНЕНИЯ ПРОГРЕССА ===
		function saveProgress() {
		    localStorage.setItem("inventory", JSON.stringify(inventory));
		    localStorage.setItem("pickedItems", JSON.stringify(pickedItems));
		    localStorage.setItem("openedDoors", JSON.stringify(openedDoors));
		    localStorage.setItem("currentFrame", exportRoot.currentFrame.toString());
		}
		
		// === УСТАНОВКА СОСТОЯНИЯ ДВЕРИ ===
		function setDoorState(doorName, isOpen) {
		    const doorClosed = exportRoot[doorName + "_closed"];
		    const doorOpen = exportRoot[doorName + "_open"];
		    if (!doorClosed || !doorOpen) return;
		
		    doorClosed.visible = !isOpen;
		    doorOpen.visible = isOpen;
		
		    createjs.Sound.play("doorOpen").volume = 0.3;
		
		    openedDoors[doorName] = isOpen;
		    saveProgress();
		    stage.update();
		}
		
		// === ИНИЦИАЛИЗАЦИЯ ДВЕРЕЙ ===
		for (const doorName in doorKeyMap) {
		    const isOpen = openedDoors[doorName] === true;
		    setDoorState(doorName, isOpen);
		}
		
		// === РЕНДЕР ИНВЕНТАРЯ ===
		function renderInventory() {
		    slots.forEach(slot => slot.removeAllChildren());
		
		    inventory.forEach((itemName, index) => {
		        let IconClass = lib[itemName + "_icon"];
		        if (!IconClass) return;
		
		        let icon = new IconClass();
		        icon.scaleX = icon.scaleY = 0.5;
		        icon.cursor = "pointer";
		
		        icon.on("click", function(evt) {
		            evt.stopPropagation();
		
		            if (selectedKey === itemName) {
		                selectedKey = null;
		                icon.alpha = 1;
		            } else {
		                selectedKey = itemName;
		                slots.forEach(slot => {
		                    slot.children.forEach(child => child.alpha = 1);
		                });
		                icon.alpha = 0.6;
		            }
		
		            stage.update();
		        });
		
		        slots[index].addChild(icon);
		    });
		}
		
		// === ОБРАБОТКА КЛИКОВ ПО ЗАКРЫТЫМ ДВЕРЯМ ===
		for (const doorName in doorKeyMap) {
		    const doorClosed = exportRoot[doorName + "_closed"];
		    if (!doorClosed) continue;
		
		    doorClosed.cursor = "pointer";
		
		    doorClosed.on("click", () => {
		        if (!selectedKey) {
		            alert("Выберите ключ из инвентаря.");
		            return;
		        }
		
		        if (doorKeyMap[doorName] === selectedKey) {
		            setDoorState(doorName, true);
		
		            inventory = inventory.filter(i => i !== selectedKey);
		            selectedKey = null;
		            saveProgress();
		            renderInventory();
		        } else {
		            alert("Неверный ключ.");
		        }
		    });
		}
		
		// === ДОБАВЛЕНИЕ ПРЕДМЕТА В ИНВЕНТАРЬ ===
		function addItemToInventory(itemName) {
		    if (inventory.includes(itemName)) return false;
		
		    if (inventory.length >= slots.length) {
		        alert("Инвентарь полон!");
		        return false;
		    }
		
		    inventory.push(itemName);
		
		    if (!pickedItems.includes(itemName)) {
		        pickedItems.push(itemName);
		    }
		
		    selectedKey = null;
		    saveProgress();
		    renderInventory();
		    return true;
		}
		
		// === СКРЫВАЕМ УЖЕ ПОДОБРАННЫЕ ПРЕДМЕТЫ ===
		for (const item of Object.values(doorKeyMap).concat(["itemNote"])) {
		    if (pickedItems.includes(item) && exportRoot[item]) {
		        exportRoot[item].visible = false;
		    }
		}
		
		// === ОБРАБОТЧИКИ КЛИКОВ НА ПРЕДМЕТЫ ===
		for (const itemName of Object.values(doorKeyMap)) {
		    if (exportRoot[itemName]) {
		        exportRoot[itemName].cursor = "pointer";
		        exportRoot[itemName].on("click", () => {
		            if (addItemToInventory(itemName)) {
		                exportRoot[itemName].visible = false;
		            }
		        });
		    }
		}
		
		if (exportRoot.itemNote) {
		    exportRoot.itemNote.cursor = "pointer";
		    exportRoot.itemNote.on("click", () => {
		        if (addItemToInventory("itemNote")) {
		            exportRoot.itemNote.visible = false;
		        }
		    });
		}
		
		// === РЕНДЕР ПРИ ЗАПУСКЕ ===
		renderInventory();
	}
	this.frame_1 = function() {
		this.stop();
		
		/*this.bot1.addEventListener("click", () => {
		this.gotoAndStop(2);
		});*/
		//this.bot1.visible = false;
		///*this.bot2.visible = false;*/
		//const tickHandler = () => {
		//    if (this.door1.currentFrame === 1) {
		//        console.log("Дверь открыта! 1");
		//		this.bot1.visible = true;
		//        this.removeEventListener("tick", tickHandler);
		//    }
		
		//   /* if (this.door2.currentFrame === 1) {
		//        console.log("Дверь открыта! 2");
		//		this.bot2.visible = true;
		//        this.removeEventListener("tick", tickHandler);
		//    }*/
		//};
		
		//this.addEventListener("tick", tickHandler);
		
		// === Переход по двери (пример для door1_open) с сохранением кадра ===
		this.door1_open.addEventListener("click", () => {
		    this.gotoAndStop(2);
		    localStorage.setItem("currentFrame", 2);
		    stage.update();
		});
		
		// Если у тебя другие двери тоже переключают кадры — добавь аналогичные обработчики с сохранением
	}
	this.frame_2 = function() {
		/*this.bot2.visible = false;
		const tickHandler = () => {
		
		
		   if (this.door2.currentFrame === 1) {
		        console.log("Дверь открыта! 2");
				this.bot2.visible = true;
		        this.removeEventListener("tick", tickHandler);
		    }
		};
		
		this.addEventListener("tick", tickHandler);*/
		
		
		// === Переход по двери (пример для door1_open) с сохранением кадра ===
		this.door2_open.addEventListener("click", () => {
		    this.gotoAndStop(1);
		    localStorage.setItem("currentFrame", 1);
		    stage.update();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhSBtQgGgBgJgFQgLgHgRgQQglgigzg3QgLgNACgJQACgFAFgDQAGgCAFADQADABADADIAEAGQAEAHALALIA4A2QARATANAIQABABAAAAQABAAABAAQAAAAABAAQAAAAABgBQAHgQABgXIACgRQABgJAEgGIAIgPIADgHIACgIIAIgMIAIgNIADgJIADgKQAFgLAHgEQAFgDAFABQAGABACAEQADAFgCAHIgGAMIgHATQgCAFgRAdQgLAUgCAPIgDAYIgEAQIgDARIgBAMQgBAGgDADQgEAFgHAAIgEAAgAAuBUIgCgEIABgHIACgDQAGgFAEABIAAgBQAHABAEAHQADAHgEAGQgEAFgEAAIgCAAQgGAAgFgHgAB8ApQgPgDgIgKQgHgIgBgNQgCgIACgPIACgmQACgPAEgGQADgEAGgBQAFgCAEAEIAMgPQAHgIAHgDQAIgEAPAAQAOgBAHAEQAGADAHALQAKAQAFAMQAHARAAAOQAAAcgWAaQgKAMgKAFQgGADgJABIgPABQgSAAgKgDgAB4gcQgCARACANQABAHADADQADACAHAAIAogBQgBgDAGgFQARgOAAgdQAAgKgEgFIgEgFIgFgFIgCgIQgCgFgDgBQgCgCgEAAQgJgBgEACQgEABgEAFIgGAJQgEAEgFACQgGABgDgDIgFAfg");
	this.shape.setTransform(283.9852,72.0859);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// Слой_4
	this.btrest = new lib.Символ1("synched",0);
	this.btrest.name = "btrest";
	this.btrest.setTransform(559.15,336.6,0.4448,0.4448,0,0,0,0.4,0.1);

	this.inventoryBar = new lib.inventary();
	this.inventoryBar.name = "inventoryBar";
	this.inventoryBar.setTransform(431.9,336.3,0.4448,0.4448,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.inventoryBar},{t:this.btrest}]},1).wait(2));

	// Слой_2
	this.key2 = new lib.key2_icon();
	this.key2.name = "key2";
	this.key2.setTransform(576.95,225.15,0.4448,0.4448,0,0,0,0.1,0.2);

	this.itemNote = new lib.not("synched",0);
	this.itemNote.name = "itemNote";
	this.itemNote.setTransform(512.35,245.95,0.4448,0.4448,0,0,0,0.2,0.1);

	this.bot1 = new lib.bot("synched",0);
	this.bot1.name = "bot1";
	this.bot1.setTransform(439.95,191.1,0.4448,0.4448,0,0,0,0.4,0.1);

	this.key4 = new lib.key("synched",0);
	this.key4.name = "key4";
	this.key4.setTransform(483.85,292.45,0.4448,0.4448,0,0,0,0.2,0.1);

	this.key3 = new lib.key2_icon();
	this.key3.name = "key3";
	this.key3.setTransform(667.65,288.5,0.4448,0.4448,0,0,0,0.4,0.2);

	this.key1 = new lib.key("synched",0);
	this.key1.name = "key1";
	this.key1.setTransform(581.5,280.4,0.4448,0.4448);

	this.door2_open = new lib.door_open();
	this.door2_open.name = "door2_open";
	this.door2_open.setTransform(369.25,723.2,0.6851,0.6852);

	this.bot2 = new lib.bot("synched",0);
	this.bot2.name = "bot2";
	this.bot2.setTransform(388.5,828.95);

	this.door2_closed = new lib.door();
	this.door2_closed.name = "door2_closed";
	this.door2_closed.setTransform(369.25,723.2,0.6852,0.6852);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.key1},{t:this.key3},{t:this.key4},{t:this.bot1},{t:this.itemNote},{t:this.key2,p:{regX:0.1,regY:0.2,scaleX:0.4448,scaleY:0.4448,x:576.95,y:225.15}}]},1).to({state:[{t:this.key2,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:440,y:988.95}},{t:this.door2_closed},{t:this.bot2},{t:this.door2_open}]},1).wait(1));

	// Слой_1
	this.door1_open = new lib.door_open();
	this.door1_open.name = "door1_open";
	this.door1_open.setTransform(430.9,176.15,0.3047,0.3047,0,0,0,0.4,0.4);

	this.door1_closed = new lib.door();
	this.door1_closed.name = "door1_closed";
	this.door1_closed.setTransform(430.9,176.15,0.3047,0.3047,0,0,0,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AmDR+IRRgtMAgXAAAIA8AyEAshgQwMAAAAizIZ6WRMiM1AAAMAAxhQoMCLrAAAEAshgQwIZh3kMAAZBQoAmDR+IAO44IRDAAEgnTARRQBTgDBQgCQUognKFBZEgnTARRMAAAgiBI+W3kEhGaAoUIfH3DEgnTgQwMBT0AAA");
	this.shape_1.setTransform(414,151.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("EgnfALyI+W3jMCLrAAAI5iXjg");
	this.shape_2.setTransform(415.225,-31.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999966").s().p("EhGaALqIfH3DICjgFQUpgmKEBZIRRguMAgXAAAIA7AzIZ7WQg");
	this.shape_3.setTransform(414,335.0187);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9900").s().p("EAsgASDMAAAgiyIZi3lMAAZBQpgEhFpgoUIeWXlMAAAAiAI/HXEgEArlARRMggXAAAIAA4LIxDAAIgOY4QqEhZ0pAmIijAGMAAAgiAMBTzAAAMAAAAiygEgnTgQvg");
	this.shape_4.setTransform(414,151.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993300").s().p("AoascIRDAAIAAYLIxRAug");
	this.shape_5.setTransform(430.525,186.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("EgfkgpjMgYYg6eMBwNAAAMAAUDIDEgODAq1MAAAg8AMAirAAAMAAAA8AIOZAAIAvB9MAU1A3QMhxJAAAMAZAg5NgEgfkgpjMBDUAAAMAAABWVEAUoAq1MgirAAAEg4kBkCMAAojIDEgfkAq1MAAAhUYEAjwgpjMAUhg6e");
	this.shape_6.setTransform(362.125,640.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999966").s().p("Eg4kAcnMAZAg5MIRhAAMAirAAAIOZAAIAvB9MAU1A3Pg");
	this.shape_7.setTransform(362.125,1097.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AxVeAMAAAg7/MAirAAAMAAAA7/g");
	this.shape_8.setTransform(383.125,722.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("A/udPMgYYg6dMBwNAAAMgUhA6dg");
	this.shape_9.setTransform(363.125,187.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC9900").s().p("EAjwAsyMAAAhWVMAUhg6eMAAUDIDgEg38hkBMAYYA6eMAAABUYMgZAA5NgEAjBAq1IuZAAMAAAg8AMgirAAAMAAAA8AIxhAAMAAAhUYMBDUAAAMAAABWVgEgfkgpjg");
	this.shape_10.setTransform(362.125,640.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.door1_closed},{t:this.door1_open}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,865.7,1281.3);
// library properties:
lib.properties = {
	id: '32DCE4C80EBD6E45B621BCA224946F1F',
	width: 844,
	height: 390,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['32DCE4C80EBD6E45B621BCA224946F1F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
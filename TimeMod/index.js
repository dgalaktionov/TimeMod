(function () {
	$("<link/>", {
	   rel: "stylesheet",
	   type: "text/css",
	   href: "mods/TimeMod/styles.css"
	}).appendTo("head");
	
	var container = $("<div/>", {
		class: "timemod_container"
	}).appendTo("#gameUIContainer");
	
	$("<div/>", {
		class: "timemod_control"
	}).appendTo(container).append($("<img/>", {
		src: "mods/TimeMod/res/pause.png",
		id: "timemod_pause",
		class: "timemod_button"
	}));
	
	$("<div/>", {
		class: "timemod_control"
	}).appendTo(container).append($("<img/>", {
		src: "mods/TimeMod/res/slow.png",
		id: "timemod_slow",
		class: "timemod_button"
	}));
	
	$("<div/>", {
		class: "timemod_control"
	}).appendTo(container).append($("<img/>", {
		src: "mods/TimeMod/res/play.png",
		id: "timemod_play",
		class: "timemod_button"
	}));
	
	$("<div/>", {
		class: "timemod_control"
	}).appendTo(container).append($("<img/>", {
		src: "mods/TimeMod/res/fast.png",
		id: "timemod_fast",
		class: "timemod_button"
	}));
	
	var PAUSE_SPEED = 0;
	var SLOW_SPEED = 0.5;
	var NORMAL_SPEED = 1;
	var FAST_SPEED = 2;	
	var active = "";

	function deactivate() {
		var current = document.getElementById(active);
		
		if (current) {
			current.classList.remove("active");
		}
	}

	function activate(id) {
		active = id;
		var current = document.getElementById(active);
		
		if (current) {
			current.classList.add("active");
		}
	}

	function pause() {
		GameManager._timeModifier = PAUSE_SPEED;
		GameManager._oldTimeModifier = PAUSE_SPEED;
	}

	function slow() {
		GameManager._timeModifier = SLOW_SPEED;
	}

	function play() {
		GameManager._timeModifier = NORMAL_SPEED;
	}

	function fast() {
		GameManager._timeModifier = FAST_SPEED;
	}

	function change_speed() {
		if (active === this.id)
			return;
		
		deactivate();
		activate(this.id);
		
		switch(this.id) {
			case "timemod_pause":
				pause();
				break;
			case "timemod_slow":
				slow();
				break;
			case "timemod_play":
				play();
				break;
			case "timemod_fast":
				fast();
				break;
			default:
				console.warn("Unknown time control " + this.id);
		}
	}
	
	var buttons = document.getElementsByClassName("timemod_button");

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = change_speed;
	}
})();
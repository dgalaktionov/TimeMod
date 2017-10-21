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
	
	var active = "";
	var saved_speed = 1;

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
		saved_speed = GameManager._timeModifier || GameManager._oldTimeModifier;
		GameManager._timeModifier = 0;
		GameManager._oldTimeModifier = 0;
	}

	function slow() {
		GameManager._timeModifier = saved_speed;
	}

	function play() {
		GameManager._timeModifier = saved_speed;
	}

	function fast() {
		GameManager._timeModifier = saved_speed;
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
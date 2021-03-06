/******************************************************************************/
	function efx(dir)
	{
		this.snd = new Audio(dir);
	}
	
	
	// play sound effects
	efx.prototype.play = function()
	{
		//this.snd.setVolume(0.5);
		this.snd.play();
	}
/******************************************************************************/





/******************************************************************************/
	function deck()
	{
		this.status = 'inactive';
		this.video = "";
		this.name = "";
	}
	
	// volume functions
	deck.prototype.volume = function(vol)
	{
		obj = this.video;
		obj.setVolume(vol);
	}
	
	deck.prototype.returnVolume = function()
	{
		obj = this.video;
		return obj.getVolume();
	}
	
	// deck update fuctions
	deck.prototype.statusUpdate = function()
	{
		obj = this.video;
		return obj.getVideoLoadedFraction();
	}
	
	deck.prototype.timeUpdate = function()
	{
		obj = this.video;
		return obj.getCurrentTime();
	}
	
	deck.prototype.state = function()
	{
		obj = this.video;
		return obj.getPlayerState();
	}
	
	// deck setup functions
	deck.prototype.associate = function(obj, str)
	{
		this.video = obj;
		this.name = str;
	}
	
	deck.prototype.switchStatus = function()
	{
		this.status = this.status == 'inactive' ? 'active' : 'inactive';
	}
	
	// deck load functions
	deck.prototype.load = function(id)
	{
		obj = this.video;
		if(this.status == "active"){
			obj.loadVideoById(id, 0);
		}
	}
	
	deck.prototype.cue = function(id)
	{
		obj = this.video;
		if(this.status == "inactive"){
			obj.cueVideoById(id, 10);
		}
	}
	
	// deck play controls
	deck.prototype.play = function()
	{
		obj = this.video;
		obj.playVideo();
	}
	
	deck.prototype.stop = function()
	{
		obj = this.video;
		obj.stopVideo();
	}
	
	deck.prototype.pause = function()
	{
		obj = this.video;
		obj.pauseVideo();
	}
/******************************************************************************/

var currentVideo = 0;
var params = { allowScriptAccess: "always" };
var videos = new Array("N00dtt6kOjo","jy18UqKRKcY","Bfu_7h15WLU","jyyFf5In-m0","nK1TqCdwRsI","E7trsy11auM");

var atts = {id:'videoA'};
swfobject.embedSWF(	
	"http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=videoA", "videoA", "425", "365", "8", null, null, params, atts
);

var atts = {id:'videoB'};
swfobject.embedSWF(	
	"http://www.youtube.com/apiplayer?enablejsapi=1&playerapiid=videoB", "videoB", "425", "365", "8", null, null, params, atts
);
	
	

function onYouTubePlayerReady (playerId){
	video1 = document.getElementById("videoA");
	video2 = document.getElementById("videoB");
	
	//create two decks
	var deckA = new deck();
	var deckB = new deck();
	
	//set the video to deck association
	deckA.associate(video1, "deckA");
	deckB.associate(video2, "deckB");	
	
	initialize(deckA, deckB);
	
}

function initialize(deckA, deckB) {
	//initialize playback
	deckA.switchStatus();
	deckA.volume(100);
	deckA.load(videos[currentVideo]);
	deckB.volume(0);
	cueNext(isInActive(deckA, deckB));
	
	playback(deckA, deckB, 0);
<<<<<<< HEAD
	//var sndEfx = new efx("sfx/AirHorn-Reggae.ogg");
=======
	//var sndEfx = new efx("sfx/AirHorn-Reggae.mp3");
>>>>>>> 9f9258fa9ecbc39419605538df534ed2acd7cc67
	//sndEfx.play();
}

// this function controls the time between each video
function playback(deckA, deckB, sfxStart) {
	var soundEfx = randomEFX();
	var count = sfxStart;
	var timer = setInterval(
		function(){
			deck = isActive(deckA, deckB);
			var time = deck.timeUpdate();
			if(time > 120){
				switchPlayer(deckA, deckB, timer);
			}		
			//console.log(soundEfx[count] +" : "+ Math.round(time))			
			if(soundEfx[count] == Math.round(time) && count < 24){
				playEFX(1);
				count++;
			}
		}, 500
	);
}


// this function plays a sound effect
function playEFX(num){
	var clips = new Array(
<<<<<<< HEAD
		"sfx/air_horn.ogg",
		"sfx/Laser_Cannon-Mike_Koenig-797224747.ogg",
		"sfx/650826_SOUNDDOGS__se.ogg",
		"sfx/VideoGame-DukeNukem-DamnImGood.ogg",
		"sfx/InfinityWard-LogoSound.ogg",
		"sfx/ray_gun-Mike_Koenig-1169060422.ogg",
		"sfx/Laser_Gun-Mike_Koenig-1975537935.ogg"
	);
	
	var randomClips = shuffleArray(clips);
=======
		"sfx/air_horn_jamaican_dancehall_style_005.mp3",
		"sfx/Laser_Cannon-Mike_Koenig-797224747.mp3",
		"sfx/650826_SOUNDDOGS__se.mp3",
		"sfx/Alien_Machine_Gun-Matt_Cutillo-2023875589.mp3",
		"sfx/VideoGame-DukeNukem-DamnImGood.mp3",
		"sfx/InfinityWard-LogoSound.mp3",
		"sfx/ray_gun-Mike_Koenig-1169060422.mp3",
		"sfx/Laser_Gun-Mike_Koenig-1975537935.mp3"
	);
	
	var randomClips = shuffleArray(clips);
	
>>>>>>> 9f9258fa9ecbc39419605538df534ed2acd7cc67
	for(var i = 0; i<num; i++){
		var sndEfx = new efx(randomClips[i]);
		sndEfx.play();
	}
}


// setup the random times a sound effect with play during a track
function randomEFX(){
	var random = new Array();
	var rand = 0;
	var next = 0;
	var max = 5;
	var min = 0;
	while(random.length < 24){
		rand = Math.round(Math.random() * (max - min) + min);
		random[next] = rand;
		min += 5;
		max += 5;
		next ++;
	}
<<<<<<< HEAD
	
=======
	console.log(random.length);
>>>>>>> 9f9258fa9ecbc39419605538df534ed2acd7cc67
	return random;
}

// this function shuffles an array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


// this function cues up the next video to be played
// it also runs in an infinite loop
function cueNext(deck){	
	if(currentVideo < (videos.length-1)){
		currentVideo++;
	} else {
		currentVideo = 0;
<<<<<<< HEAD
	}
=======
	}console.log(currentVideo);
>>>>>>> 9f9258fa9ecbc39419605538df534ed2acd7cc67
	deck.cue(videos[currentVideo]);
	
}


/****************************** Cross fade family *****************************/
//this function does the cross fading from one video to the next
function switchPlayer(deckA, deckB, timer) {
	clearInterval(timer);
	active = isActive(deckA, deckB);
	inactive = isInActive(deckA, deckB);
	var xfade = setInterval(
		function(){
			if(active.state() == 1) {
				fadeOut(active);
				setupDeck(inactive);
				fadeIn(inactive);
			} else {
				if(active.state() == 5) {
					clearInterval(xfade);
					deckA.switchStatus();
					deckB.switchStatus();
					cueNext(isInActive(deckA, deckB));
					playback(deckA, deckB, 4);
					
				}
			}
		}, 500
	);
}

function setupDeck(deck) {
	if(deck.state() != 1){
		deck.volume(0);
		deck.play();
	}
}

function fadeOut(deck) {
	if(deck.returnVolume() > 0){
		vol = deck.returnVolume();
		deck.volume(vol - 5);	
	} else {
		deck.stop();
	}
}


function fadeIn(deck) {
	if(deck.returnVolume() < 100){
		vol = deck.returnVolume();
		deck.volume(vol + 5);	
	} 
}

/*************************** End cross fade family ****************************/

function isActive(deckA, deckB) {
	if(deckA.status == "active") {
		return deckA;
	} else {
		return deckB;
	}
}

function isInActive(deckA, deckB) {
	if(deckA.status == "inactive") {
		return deckA;
	} else {
		return deckB;
	}
}

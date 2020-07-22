const byeSpeaker = {
	speakWord: 'Good Bye',	
};
//Good Bye
(function () {
	byeSpeaker.speak = function (userName) {
		return (byeSpeaker.speakWord + " " + userName);
	}
}());
var mobu = document.getElementById("usrProf");

mobu.onclick = function(evt) {
	if (Android) {
		Android.TakePhoto();
	}
}
// presents "data" file. A present is a JSON object with the following parameters
// -- title (required): 	displayed in the circle in the main page, can be arbitrary HTML
// -- payload (required): 	the part of the present that will get loaded into the viewer, arbitrary HTML
// -- id (optional): 		an HTML id that will get set on the outer div of the present, so later customizations can be done
// -- callback (optional): 	a function that will get called as the present is being loaded. Must take no arguments
//	if you need arguments, wrap the function with an anonymous function


function YoutubeString(videoId, offset) {
	offset = offset ? offset : 0;
	
	return "<object width='425' height='344'><param name='movie' value='http://www.youtube.com/v/" + videoId + "&hl=en&fs=1&autoplay=1&showinfo=0&rel=0&start=" + offset + "'></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param><embed src='http://www.youtube.com/v/" + videoId + "&hl=en&fs=1&autoplay=1&showinfo=0&rel=0&start=" + offset + "' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' width='425' height='344'></embed></object>";
}

function Mp3String(mp3) {
	return "<object width='300' height='30'><param name='src' value='" + mp3 + "'/><param name='autoplay' value='true' /><embed type='audio/mpeg' src='" + mp3 + "' width='300' height='18' autostart='true' loop='false' /></object>";
}

var presents = [
{ 	
	title: "ANAN GREY!", 
	payload: "<img src='anan.JPEG' width='275' height='350'/>"
},
{
	title: "<img class='blackBorder' src='chill.JPEG' width='100px' height='100px' />",
	payload: "<img src='bahce.JPEG' width='500px' height='400px'/>"
},
{
	title: "<img class='blackBorder' src='archeology.jpg' width='90px' height='90px' />",
	payload: "<img src='aspendos.JPEG' alt='aspendos' width='300' height='500'/>"
},
{
	title: "Nerede Başladı", 
	payload: "<src='https://maps.app.goo.gl/QtshCG9A6tA69E4o7 ' width='600' height='450' style='border:0; />"
},
{
	title: "to trip to trip te trip trip",
	payload: "<img src='side.JPEG' alt='side trip' width='600px' height='500px'/>"
},
{
	title: "Flower Princess",
	payload: "<img src='cicek.JPEG' alt='ilkimiz' width='400px' height='500px'/>"
},
{
	title: "Sherlock",
	payload: YoutubeString("uzyKkKB7mT4")
},
{
	title: "<img class='blackBorder' src='gorgeThumb.jpg' alt='gorge poster' width='90px' height='110px' />",
	payload: "<img src='us.JPEG' alt='us' width='380px' height='473px' />"
},
{
	title: "Shake that ass",
	payload: YoutubeString("WrjwGPb0Hvw")
},
{
	title: "SILLY LADY!", 
	payload: "<img class='whiteBorder' src='silly.JPEG' alt='silly' height='400px' width='300px' />"
},
{
	title: "<img src='at.jpg' alt='bubblegum and marceline' height='100px' width='100px'/>",
	payload: "<img src='marceline.JPEG' alt='tablo' width='340px' height='453px' />"
},
{
	title: "PURNA",
	payload: "<img src='kandirdim.jpg' alt='porno' width='400px' height='300px'/>"
},
{
	title: "Can't take my eyes off You",
	payload: YoutubeString("J36z7AnhvOM")
},
{
	title: "<img src='pumpkinThumb.png' alt='pumpkin' />",
	payload: "<img src='gothic.JPEG' alt='gothic' width='400px' height='500px'/>"
},
{
	title: "EKMEEEEK",
	payload: "<img src='ekmek.JPEG' alt='ekmek' width='300px' height='400px' />"
}
	];
	
	///////// CALLBACKS //////////////
	// These methods are defined in the above presents variable in the "callbacks" label
	// These are called as the present is being loaded into the viewer

	function InitMap() {
		if (GBrowserIsCompatible()) {
			var map = new GMap2(document.getElementById("denver_map"));
			// center on a decent place in Denver
			map.setCenter(new GLatLng(39.75, -105), 13);
			map.setUIToDefault();
		}
	}
	
//Set up the data Model

//Marker Locations
var Model = {
    markerlocations: [
    {category:'all',
    subcategory:'Hotel',
    title: 'Ryokan Sawanoya',
    url: 'http://www.sawanoya.com',
    lat: 35.720968,
    longit: 139.764833,
    icon: 'images/hotel.png',
    iconlist: 'images/hotellist.png',
    placeID: 'ChIJgareHi2MGGARDtCIy-GJdcg',
    yahooloczip:'JAXX0085'},
    
    {category:'all',
    subcategory:'Hotel',
    title: 'Mandarin Oriental',
    url:  'http://www.mandarinoriental.com/',
    lat: 35.686851,
    longit: 139.773129,
    icon: 'images/hotel.png',
    iconlist: 'images/hotellist.png',
    placeID: 'ChIJ281VfFWJGGARYaR_hmZuo0I',
    yahooloczip:'JAXX0085'},

    {category:'all',
    subcategory:'Hotel',
    title: 'Family Inn Saiko',
    url: 'http://www.familyinn-saiko.com/',
    lat: 35.730584,
    longit: 139.690904,
    icon: 'images/hotel.png',
    iconlist: 'images/hotellist.png',
    placeID: 'ChIJdztqNFXtGGARLzy4HZdH0h4',
    yahooloczip:'JAXX0055'},

    {category:'all',
    subcategory:'Sites',
    title: 'Shinjuku Gyoen National Garden',
    url: 'http://www.env.go.jp/garden/shinjukugyoen/english/',
    lat: 35.685176,
    longit: 139.710063,
    icon: 'images/sites.png',
    iconlist: 'images/cameralist.png',
    placeID: 'ChIJPyOTG8KMGGARh_IXobWxHmo',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Sites',
    title: 'Meiji Jingu',
    url: 'http://www.meijijingu.or.jp/english/',
    lat: 35.676389,
    longit: 139.699315,
    icon: 'images/sites.png',
    iconlist: 'images/cameralist.png',
    placeID: 'ChIJ5SZMmreMGGARcz8QSTiJyo8',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Sites',
    title: 'Sensoji Temple',
    url: 'http://www.senso-ji.jp/about/index_e.html',
    lat: 35.714756,
    longit: 139.796666,
    icon: 'images/sites.png',
    iconlist: 'images/cameralist.png',
    placeID: 'ChIJ8T1GpMGOGGARDYGSgpooDWw',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Sites',
    title: 'The Tsukiji Market',
    url: 'http://www.tsukiji-market.or.jp/tukiji_e.htm',
    lat: 35.665503,
    longit: 139.770667,
    icon: 'images/sites.png',
    iconlist: 'images/cameralist.png',
    placeID: 'ChIJTxQgcWSJGGARf-9ie9vqyVc',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Food',
    title: 'Tapas Molecular Bar',
    url:  'http://www.mandarinoriental.com/tokyo/fine-dining/tapas-molecular-bar/',
    lat: 35.686876,
    longit: 139.773139,
    icon: 'images/food.png',
    iconlist: 'images/foodlist.png',
    placeID: 'ChIJ9fcZgFWJGGARba-URZY-YKw',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Food',
    title: 'Waentei-Kikko',
    url: 'http://www.waentei-kikko.com/index_e.html',
    lat: 35.713566,
    longit: 139.796635,
    icon: 'images/food.png',
    iconlist: 'images/foodlist.png',
    placeID: 'ChIJ67nfP8GOGGAR7WwX-OW16ZQ',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Food',
    title: 'Aronia de Takazawa',
    url:  'http://www.takazawa-y.co.jp/en/',
    lat: 35.673660,
    longit: 139.738472,
    icon: 'images/food.png',
    iconlist: 'images/foodlist.png',
    placeID: 'ChIJRXooFYeLGGARCTLfkyRPhfw',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Food',
    title: 'Sushi Yoshitake',
    url: 'http://sushi-yoshitake.com/persistence_e.html',
    lat: 35.668540,
    longit: 139.760983,
    icon: 'images/food.png',
    iconlist: 'images/foodlist.png',
    placeID: 'ChIJTV9t7uiLGGARbd7caq1Xh4c',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Shopping',
    title: 'Ameyoko market',
    url: 'http://www.ameyoko.net/',
    lat: 35.709478,
    longit: 139.774661,
    icon: 'images/shop.png',
    iconlist: 'images/shoplist.png',
    placeID: 'ChIJWU6Dup-OGGAR50Ig8ShNVVg',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Shopping',
    title: 'Ginza Mitsukoshi',
    url:'http://mitsukoshi.mistore.jp.e.bm.hp.transer.com/store/ginza/index.html;jsessionid=nq0MVVJPTpf1T5HtSvJx9xyF7l7TfQvGBMjcK9BK2HjSZW1pqPLg!-1013163712',
    lat: 35.709478,
    longit: 139.774661,
    icon: 'images/shop.png',
    iconlist: 'images/shoplist.png',
    placeID: 'ChIJ7UJFP-eLGGAR-sGYOLisci4',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Shopping',
    title: 'Kiddy Land Harajuku Branch',
    url: 'http://www.kiddyland.co.jp/harajuku/',
    lat: 35.667698,
    longit: 139.706537,
    icon: 'images/shop.png',
    iconlist: 'images/shoplist.png',
    placeID: 'ChIJ3_lCaRXsGGARgPABuAxIjnc',
    yahooloczip: 'JAXX0085'},

    {category:'all',
    subcategory:'Shopping',
    title: 'Mandrake',
    url: 'http://www.mandarake.co.jp/en/shop/',
    lat: 35.709265,
    longit: 139.665912,
    icon: 'images/shop.png',
    iconlist: 'images/shoplist.png',
    placeID: 'ChIJ0Zw0SZfyGGARhpxPKj1bX1s',
    yahooloczip: 'JAXX0085'}

    ] //end of markerlocations
}; //end of Model

// ViewModel Code
var ViewModel = function () {
    var map, // Creation of the map 
        myCenter = new google.maps.LatLng(35.687589, 139.753516), //The location of the center of the map
        markerArray = Model.markerlocations, // Array that stores the marker locations
        placecontent, //initialize the variables for the google place details of the markers
        service, //initialize the variables for the google place details of the markers
        self = this, // assigning self to equal this
        self.listArray = ko.observableArray(), // List(s) that stores the marker locations
        self.filterArray = ko.observableArray(), // List(s) that stores the marker locations
        self.allArray = ko.observableArray(), // List(s) that stores the marker locations
        self.query = ko.observable(""), //Searches the markers
        self.searchItem = ko.observableArray(); //Searches the markers
        
	self.listArray.splice(0); // List(s) that stores the marker locations
        self.filterArray.splice(0); // List(s) that stores the marker locations
        
// Initializing the Map
var initialize = function() {
// Default Map Properties
    var mapProp = {
        center: myCenter,
        zoom: 12,
        panControl:true,
        zoomControl:true,
        mapTypeControl:true,
        scaleControl:true,
        streetViewControl:true,
        overviewMapControl:true,
        rotateControl:true,
        mapTypeId: google.maps.MapTypeId.ROADMAP 
    };
    
// Assign var map to have the new created map which will be inside the container "googleMap"
    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

// Assigns a marker to be the the central marker that will have the position of the center of the map and a infowindow
    var marker = new google.maps.Marker({position: myCenter}); 
    marker.setMap(map);
    var infomarker = new google.maps.InfoWindow({content:"Welcome!"});

// Event Listener that opens up the infowindow when the user clicks on the central marker
    google.maps.event.addListener(marker, 'click', function() {
        map.setCenter(myCenter);
        infomarker.open(map,marker);
    });

// Event Listener that will resize the map when the window changes
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(myCenter);
    });

// Assigns a info window to the markers that will be on the map
    var infowindow = new google.maps.InfoWindow({});

// loops thru all the markerlocations to place them on the list and map
    for (var x = 0;  x <= markerArray.length-1; x++) {
        var mymarker = new google.maps.LatLng(markerArray[x].lat, markerArray[x].longit);

        var icon = {
            url: markerArray[x].icon, // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(0, 0) // anchor  
        };

	var contentwindow =
            '<div class="modal-content">' +
                '<div class="modal-header">' +
                    '<h4 class="modal-title"><img width="20px" src=' + markerArray[x].iconlist + '>&nbsp' + markerArray[x].subcategory.toUpperCase() + ' : '+ markerArray[x].title.toUpperCase() +'</h4>'+
                    '<p class="modal-body">LATITUDE: ' + markerArray[x].lat + ' &nbsp LONGITUDE: ' + markerArray[x].longit + '<br>' +
                    '<a href=' + markerArray[x].url + ' target="_blank">Go to website for more info</a></p>'+
   	        '</div>' +
   	     '</div>';

        var plmarker = new google.maps.Marker({
            position: mymarker,
            title: markerArray[x].title,
            category: markerArray[x].category,
            subcategory: markerArray[x].subcategory,
            map:map,
            url:markerArray[x].url,
            icon: icon,
            iconlist: markerArray[x].iconlist,
            placeid: markerArray[x].placeID,
            info: contentwindow,
            worldzip: markerArray[x].yahooloczip
        });//end of plmarker

        self.filterArray.push(plmarker);
        self.listArray.push(plmarker);

        var jpzip = plmarker.worldzip.
	    contentString = plmarker.info,
	    placedetailID = plmarker.placeid;

// Event Listener that opens up the infowindow when the user clicks on the marker
        google.maps.event.addListener(plmarker, 'click', function (content, ID, jzip) {
 	    return function() {
 		//contain the place ID of the marker location
                var request = {placeId: ID};

		//get place details from google places api
		service = new google.maps.places.PlacesService(map);
		service.getDetails(request, function(details, status) {
		    $(function() {
 			// Specify the ZIP/location code and units (f or c)
                        var loc = jzip; // or e.g. SPXX0050
    			var u = 'f';
   		        var query = "SELECT item.condition FROM weather.forecast WHERE location='" + loc + "' AND u='" + u + "'";
    			var cacheBuster = Math.floor((new Date().getTime()) / 1200 / 1000);
    			var url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=json&_nocache=' + cacheBuster;
  		    	
  		    	window['wxCallback'] = function(data) {
        		    var info = data.query.results.channel.item.condition;
			    $('#wxIcon').css({ backgroundPosition: '-' + (61 * info.code) + 'px 0' }).attr({ title: info.text });
			    $('#wxIcon2').append('<img src="http://l.yimg.com/a/i/us/we/52/' + info.code + '.gif" width="34" height="34" title="' + info.text + '" />');
        		    $('#wxTemp').html(info.temp + '&deg;' + (u.toUpperCase()));
    			};

		    	$.ajax({
		    	    url: url,
        		    dataType: 'jsonp',
        		    cache: true,
        		    jsonpCallback: 'wxCallback'
    			});
		     });
	
	      	   if (status == google.maps.places.PlacesServiceStatus.OK) {
		       //initialize variables
   			var j=0,
        		    photogroup='',
        		    user_ratings='',
        		    formaladdress='',
        		    localnumber='',
        		    localvicinity='',
        		    intphonenum='',
        		    openinghours='';

			if (details.photos !== undefined) {
			    for (j=0; j<=details.photos.length-1; j++) {
			    	photogroup=photogroup+'<img src='+details.photos[j].getUrl({'maxWidth': 200, 'maxHeight': 100})+'>';
			    }
        		}

        		if (details.formatted_address !== undefined) {
        		    formaladdress = '<span class="title-window"><BR>PROPER ADDRESS:<BR></span><span> '+ details.formatted_address + '</span>';
        		}

			if (details.formatted_phone_number !== undefined) {
			    localnumber = '<BR><span class="title-window">LOCAL PHONE:<BR></span><span> '+ details.formatted_phone_number + '</span>';
			}

			if (details.vicinity !== undefined) {
        		    localvicinity = '<BR><span class="title-window">LOCAL ADDRESS:<BR></span><span> '+ details.vicinity + '</span>';
			}

			if (details.international_phone_number !== undefined) {
        		    intphonenum = '<BR><span class="title-window">INTERNATIONAL PHONE:<BR></span><span> '+ details.international_phone_number +  '</span>';
			}

			if (details.opening_hours !== undefined) {
        		    openinghours = '<BR><span class="title-window">OPENING HOURS:<BR></span><span>'+
                            details.opening_hours.weekday_text[0] + '<BR>' +
                            details.opening_hours.weekday_text[1] + '<BR>'+
                            details.opening_hours.weekday_text[2] + '<BR>'+
                            details.opening_hours.weekday_text[3] + '<BR>'+
                            details.opening_hours.weekday_text[4] + '<BR>'+
                            details.opening_hours.weekday_text[5] + '</span>';
			}

                        if (details.rating !== undefined) {
        		    user_ratings = '<BR><span class="title-window">User Ratings:</span><span> '+ details.rating + '<BR></span>';
	
                        }

        		//holds the google place data
            		placecontent ='<div>'+
            			          '<div><BR>'+photogroup+'</div>'+
            			          '<div>'+formaladdress+
            			                  localvicinity+
            					  localnumber+
            					  intphonenum+'</div>'+
            				  '<div>'+openinghours+'</div>'+
            				  '<div>'+user_ratings+
	            		 	'</div>';
	      	   } //end of if status

	           var weather = '<div id="wxWrap"><span id="wxIntro">Current Weather: </span><span id="wxIcon2"></span><span id="wxTemp"></span></div>';

	           //combines all the info that will be added to the infowindo
            	   var finalcontent = content+placecontent+weather;
            	   infowindow.setContent(finalcontent);
	 	
		});  //end of function (details,status) and service getdetails
	
	    map.setCenter(plmarker.position);
	    infowindow.open(map, this);
   	    }; //end of return function
	} (contentString, placedetailID, jpzip)
    	);//end of eventaddListener Infowindow
       } //end of for loop
    self.listArray.splice(x);
}; //end of initialize

//resets the marker on the map
self.resetmarker = function() {
    map.setCenter(myCenter);
};

//search the items using the categories food, hotel, shops, attractions, all
self.searchcat = function(type) {
    self.searchcategory = ko.computed(function() {
    	var query = type;
        self.listArray.splice(0);
	return ko.utils.arrayFilter(self.filterArray(), function(marker) {
	    if (type == 'all') {
	    	if (marker.category.toLowerCase().indexOf(query) > -1) {
	    		self.listArray.push(marker);
                	 return marker.category.toLowerCase().indexOf(query) > -1;
	    	
	    	}
	    
	    }
            else {
            	if (marker.subcategory.toLowerCase().indexOf(query) > -1) {
            	    self.listArray.push(marker);
                     return marker.subcategory.toLowerCase().indexOf(query) > -1;
            	}
            }
	});//end of ko.utils.arrayFilter
    },self);//end of kocomputed
};//end of searchcat

//search the items using the filter text
self.searchitem = ko.computed(function() {
    var query = self.query().toLowerCase();
    self.listArray.splice(0);
    return ko.utils.arrayFilter(self.filterArray(), function(marker) {
        if (marker.title.toLowerCase().indexOf(query) > -1) {
            self.listArray.push(marker);
            return marker.title.toLowerCase().indexOf(query) > -1;
        }
     });//end of ko.utils.arrayFilter
},self );//end of kocomputed

//Makes sure the markers will appear or disapper from the the map based on the search inquery
self.listArray.subscribe(function(){
    var differences = ko.utils.compareArrays(self.filterArray(), self.listArray());
    ko.utils.arrayForEach(differences, function(marker) {
    	if (marker.status == 'deleted') {
            marker.value.setMap(null);
    	}
        else {
            marker.value.setMap(map);
        }
   });//end of koutilsarrayforEach
});//end of subscribe

//open the infowindow by click on the listed items
self.openinfowindow = function(openinfo) {
    google.maps.event.trigger(openinfo, 'click');
};

// Event Listener that will run the initialize function when the window loads
google.maps.event.addDomListener(window, 'load', initialize);

};//end of ViewModel

// Apply all ViewModel knockout bindings
ko.applyBindings(ViewModel);

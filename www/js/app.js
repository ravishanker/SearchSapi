var key = "nykhvp2xrehj246ekvhbcgga" ;
var lat = -37.877089;
var lng = 145.165358;
var mapdata = null;
var cachedData = null;
var currentBusinessData = null;

//var dataFeed = new storeLocator.StaticDataFeed() ;

//var stores ;

//var data = $.parseJSON('{"count":5,"results":[{"name":"Lobby Cafe Chatswood","id":"12254581","primaryContacts":[{"value":"(02) 9410 0197","type":"PHONE"}],"hasExposureProducts":false,"listingType":"Business","reportingId":"eyJzb3VyY2UiOiJZRUxMT1ciLCJwcm9kdWN0SWQiOiIyNTE5ODY4MjkiLCJwcm9kdWN0VmVyc2lvbiI6IjEifQ","primaryAddress":{"state":"NSW","type":"PHYSICAL","latitude":"-33.798","longitude":"151.18161","suburb":"Chatswood","postcode":"2067","addressLine":"67 Albert Ave","geoCodeGranularity":"PROPERTY"},"categories":[{"name":"Cafes","id":"35491","sensitive":false}],"detailsLink":"http://www.yellowpages.com.au/nsw/chatswood/lobby-cafe-chatswood-12254581-listing.html?referredBy=TAPI-e-Z8hkQpWRlZXOKcy9Nujw8C5RQkMSra","pureMobileBusiness":false},{"name":"Garden Bistro Restaurant","id":"12156695","primaryContacts":[{"value":"(02) 9419 7002","type":"PHONE"}],"hasExposureProducts":false,"listingType":"Business","reportingId":"eyJzb3VyY2UiOiJZRUxMT1ciLCJwcm9kdWN0SWQiOiIyNjA5MjY2NzAiLCJwcm9kdWN0VmVyc2lvbiI6IjQifQ","primaryAddress":{"state":"NSW","type":"PHYSICAL","latitude":"-33.79797","longitude":"151.182647","suburb":"Chatswood","postcode":"2067","addressLine":"Shop 212-214 Mandarin Centre Albert Ave","geoCodeGranularity":"PROPERTY"},"categories":[{"name":"Restaurants","id":"33650","sensitive":false}],"detailsLink":"http://www.yellowpages.com.au/nsw/chatswood/garden-bistro-restaurant-12156695-listing.html?referredBy=TAPI-e-Z8hkQpWRlZXOKcy9Nujw8C5RQkMSra","pureMobileBusiness":false},{"name":"Noble Court Seafood Restaurant","id":"13250047","primaryContacts":[{"value":"(02) 9495 8699","type":"PHONE"}],"hasExposureProducts":false,"listingType":"Business","reportingId":"eyJzb3VyY2UiOiJZRUxMT1ciLCJwcm9kdWN0SWQiOiIyNDk3ODQ2NDIiLCJwcm9kdWN0VmVyc2lvbiI6IjMifQ","primaryAddress":{"state":"NSW","type":"PHYSICAL","latitude":"-33.79795","longitude":"151.18231","suburb":"Chatswood","postcode":"2067","addressLine":"Level 4, 65 Albert Ave","geoCodeGranularity":"PROPERTY"},"categories":[{"name":"Restaurants","id":"33650","sensitive":false}],"detailsLink":"http://www.yellowpages.com.au/nsw/chatswood/noble-court-seafood-restaurant-13250047-listing.html?referredBy=TAPI-e-Z8hkQpWRlZXOKcy9Nujw8C5RQkMSra","pureMobileBusiness":false},{"name":"Noodle Queen","id":"13537481","primaryContacts":[{"value":"(02) 9411 2282","type":"PHONE"}],"hasExposureProducts":false,"listingType":"Business","reportingId":"eyJzb3VyY2UiOiJZRUxMT1ciLCJwcm9kdWN0SWQiOiIyNDEwNzQ2NDAiLCJwcm9kdWN0VmVyc2lvbiI6IjEifQ","primaryAddress":{"state":"NSW","type":"PHYSICAL","latitude":"-33.79795","longitude":"151.18231","suburb":"Chatswood","postcode":"2067","addressLine":"Shp 21a/ 65 Albert Ave","geoCodeGranularity":"PROPERTY"},"categories":[{"name":"Restaurants","id":"33650","sensitive":false}],"detailsLink":"http://www.yellowpages.com.au/nsw/chatswood/noodle-queen-13537481-listing.html?referredBy=TAPI-e-Z8hkQpWRlZXOKcy9Nujw8C5RQkMSra","pureMobileBusiness":false},{"name":"Toraya Japanese Restaurant","id":"14400524","primaryContacts":[{"value":"(02) 9884 9620","type":"PHONE"}],"hasExposureProducts":false,"listingType":"Business","reportingId":"eyJzb3VyY2UiOiJZRUxMT1ciLCJwcm9kdWN0SWQiOiI0NzU2NTIyOTgiLCJwcm9kdWN0VmVyc2lvbiI6IjEifQ","primaryAddress":{"state":"NSW","type":"PHYSICAL","latitude":"-33.797946","longitude":"151.182309","suburb":"Chatswood","postcode":"2067","addressLine":"Shp212/ 61 Albert Ave","geoCodeGranularity":"PROPERTY"},"categories":[{"name":"Restaurants","id":"33650","sensitive":false}],"detailsLink":"http://www.yellowpages.com.au/nsw/chatswood/toraya-japanese-restaurant-14400524-listing.html?referredBy=TAPI-e-Z8hkQpWRlZXOKcy9Nujw8C5RQkMSra","pureMobileBusiness":false}],"originalQuery":"cafe","executedQuery":"cafe","totalResults":630,"totalPages":126,"currentPage":1,"message":"OK","date":"2012-03-23T21:19:34.798+1100","time":478,"code":200}');
//------------------------------------------------------------------------------
var myScroll;
function loaded() {
	myScroll = new iScroll('wrapper');
}

//---------------------------------------------

var auth;
var token;

/*
var requestAuthorize = $.ajax({
    url: 'https://webguru.checkfront.com/oauth/authorize/',
    type: 'GET',
    data: {
	type: 'web_server',
	client_id: '3794385764f73e5381382a',
	redirect_uri: 'oob',
	response_type: 'code'
    }
})

requestAuthorize.done(function(authorization) {
    console.log("Authorize: " + authorization);
});

requestAuthorize.fail(function(jqXHR, textStatus){
    console.log("Authorize: " + jqXHR);
});



var requestToken = $.ajax({
    url: 'https://webguru.checkfront.com/oauth/token/',
    type: 'GET',
    data: {
	type: 'web_server',
	client_id: '3794385764f73e5381382a',
	grant_type: 'authorization_code',
	client_secret:'615caea606fc066f9c2f43b72f29d019c121f8c1' ,
	redirect_uri: 'oob' ,
	//refresh_token: '',
	code: '3f81ca8a0eda8b47a836748a2b8a021e'
    },
    dataType: 'json'
});

requestToken.done(function(resToken) {
    console.log("Token: " + resToken);
});

requestToken.fail(function(jqXHR, textStatus) {
    console.log("Error token request " + textStatus);
});
*/

// -----------------------------------------------------------------------------

function getXHR(url, callback) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
	if (this.readyState == 4) {
	    if (this.status == 200 || this.status == 0) {
		callback(this.responseText);
	    } else {
		console.log('something went wrong');
	    }
	}
    }
    req.open('GET', url, true);
    req.send();
}

//
function getJSONP(url, callback) {
    var s = document.createElement('script') ;
    
    path = url + "&callback=jsonpCallback" ;
    
    window.jsonpCallback = callback ;
    s.src = path ;
    document.body.appendChild(s);
}

//
function parseAndLog (JSONstring) {
    var JSONobj = JSONstring ;
    
    if (typeof JSONstring == "string") {
	JSONobj = JSON.parse(JSONstring) ; //eval( '(' + JSONstring +')') ;
    }
    
    //console.log(JSONobj) ;
    return JSONobj ;
}


//------------------------------------------------------------------------------

var _map = null ;
var _llbounds = null ;

function drawMap () {
    console.log("in drawMap");
    
    var latlng = new google.maps.LatLng(currentLatitude, currentLongitude);
    var mapOptions = {
	zoom: 12,
	center: latlng,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	zoomControl: true,
	zoomControlOptions: {
	    style: google.maps.ZoomControlStyle.SMALL,
	    position: google.maps.ControlPosition.LEFT_TOP
	    
	}
    };
    
    _map = //$('#map_canvas').gmap({ 'center': '42.345573,-71.098326' });
    new google.maps.Map(document.getElementById("map_canvas"), mapOptions) ;
    //new storeLocator.View(map, dataFeed);
}

var currentLatitude = "-37.877089" ;
var currentLongitude = "145.165358" ;

var geoOptions = {
    timeout: 10000,
    maximumAge: 11000,
    enableHighAccuracy: true
};

function geoSuccess(position) {
    console.log("geolocation success");
    
    if (_map == null) {
	currentLatitude = position.coords.latitude ;
	currentLongitude = position.coords.longitude ;
	drawMap();
    }
    
    var MyLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var beachMarker = new google.maps.Marker({
	position: MyLatLng,
	map: _map
    });
    
    if (_llbounds == null ) {
	_llbounds = new google.maps.LatLngBounds(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    } else {
	_llbounds.extend(new google.maps.LatLng(position.coords.latitude, position.coords.longitude)) ;
    }
    _map.fitBounds(_llbounds);
}

function geoFail(error) {
    console.log(error.code + ": " + error.message);
    alert("Geolocation failed. \nPlease enable GPS in Settings.");
}


$("#map").live('pagebeforecreate', function(event){
    navigator.geolocation.getCurrentPosition(geoSuccess, geoFail, geoOptions);
    
});

//------------------------------------------------------------------------------

var db;

// select all records and display them
function showRecords() {
  
  db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM Favorites", [], function(tx, result) {
      
      for (var i = 0, item = null; i < result.rows.length; i++) {
        item = result.rows.item(i);
        console.log(item['id'] + ': ' + item['name']);
            
      }
      
    });
  });
}

//
function dbSuccess(tx, resultSet) {
    //console.log("Success");
    //showRecords();
}

//
function dbError(tx, error) {
    console.log(error.code + ':' + error.message);
}

//
function createFavoritesTable() {
    
    //initDB();
    
    var query = 'CREATE TABLE IF NOT EXISTS Favorites (id unique, reference, name, address, phone, rating, icon, vicinity)' ;
    
    db.transaction(function(tx) {
	tx.executeSql(
	    query,
	    [],
	    //callback,
	    dbSuccess,
	    dbError
	    /*
	    function(transaction, resultSet) {
		console.log('success') ;
	    },
	    
	    function(transaction, error) {
		console.log('Error' + error) ;
	    }
	    */
	);
    });
}
// open the database
function initDB() {
    db = openDatabase(
	'Favorites', //name
	'1.0',	// version
	'Favorites', // display_name
	5 * 1024 // 5MB
    );
    createFavoritesTable();
    return db ;
}



//-----
function insertFavorite(favorite) {
    //console.log("insertFav" + favorite + favorite.id);
    
    var query = 'INSERT OR REPLACE INTO Favorites (id, reference, name, address, phone, rating, icon, vicinity) ' +
	'VALUES(?, ?, ?, ?, ?, ?, ?, ?);'
    
    db.transaction(function(tx) {
	//create table if not exists
	createFavoritesTable(tx);
	
	tx.executeSql(
	    query,
	    [favorite.id, favorite.reference, favorite.name, favorite.address,favorite.phone, favorite.rating, favorite.icon, favorite.vicinity],
	    dbSuccess,
	    dbError
	    
	    /*
	    function(transaction, resultSet) {
		console.log('success');
	    },
	    function(transaction, error) {
		console.log(error);
	    }
	    */
	);
    });
    
}

//--
function getFavorites(callback) {
    
    //initDB();
    //createFavoritesTable();
    
    var query = 'SELECT * FROM Favorites;'
    var favorites = [] ;
    db.transaction(function(tx) {
	tx.executeSql(
	    query,
	    [],
	    function(transaction, resultSet) {
		var i = 0, currentRow ;//, favorites = [] ;
		
		for (i; i < resultSet.rows.length; i++) {
		    currentRow = resultSet.rows.item(i);
		    favorites.push(currentRow);
		}
		//console.log(favorites);
		callback(favorites) ;
		
	    },
	    
	    dbError
	    //function(transaction, error) {
		//console.log(error);
	    //}
	);
	//console.log(favorites);
	//return favorites ;
    });
    
}


//------------------------------------------------------------------------------

function addFavorite(data) {
    //console.log("addfavorite" + data[0].id);
    
	
	var id = (data[0].id != null) ? ('"' + data[0].id + '"') : ('""') ;
	var reference = (data[0].reference != null) ? ('"' + data[0].reference + '"') : ('""') ;
	var name = (data[0].name != null) ? ('"' + data[0].name + '"') : ('""') ;
	var address = (data[0].primaryAddress.addressLine != null) ? ('"' + data[0].primaryAddress.addressLine + '"') : ('""') ;
	var phone = (data[0].primaryContacts[0].value != null) ? ('"' + data[0].primaryContacts[0].value + '"') : ('""') ;
	var rating = (data[0].rating != null) ? ('"' + data[0].rating + '"') : ('""') ;
	var icon = (data.icon != null) ? ('"' + data.icon + '"') : ('""') ;
	var vicinity = (data[0].vicinity != null) ? ('"' + data[0].vicinity + '"') : ('""') ;
	
	var favorite = {id: id, reference: reference, name: name, address: address, phone: phone, rating: rating, icon: icon, vicinity: vicinity} ;
	
	//console.log("favorite" + favorite);
	
	insertFavorite(favorite);
	 
    
}

function delFavorite(id) {
    try {
	
	//var db = initDB() ;
	console.log('DELETE FROM Favorites WHERE id = ' + "'" + '"' + id + '"' + "'");
	db.transaction(function(tx) {
	    tx.executeSql('DELETE FROM Favorites WHERE id = ' + "'" + '"' + id + '"' + "'");
	}, function (err) {
	    console.log(err.code + err.message);
	}, function () {
	    //navigator.notification.alert(id + "deleted !");
	    console.log(id + " deleted !");
	    //$.mobile.changePage($("#fav"), {transition: "slideup"});
	}
	);
    } catch (error) {
	console.log('Error trying to delete from Favorites ' + error);
    }
}
//------------------------------------------------------------------------------

function initFavorites() {
    // on clicking remove button
    $('#removefav').click(function() {
	try {
	    if (currentBusinessData != null) {
		console.log(currentBusinessData[0]);
		delFavorite(currentBusinessData[0].id);
		$('#add').show();
		$('remove').hide();
	    }
	} catch (err) {
	    console.log(err + " Error deleting " + currentBusinessData.name);
	}
    });
    
    // on clicking add button
    $('#addfav').click(function() {
	//console.log(currentBusinessData);
	try {
	    if (currentBusinessData != null) {
		addFavorite(currentBusinessData);
		$('#remove').show();
		$('#add').hide();
	    }
	} catch (err) {
	    console.log(err + " Error adding " + currentBusinessData.name);
	}
    });
    
}

//------------------------------------------------------------------------------

function isFav(data, callback) {

    //console.log(data[0]);
    
    try {
	db.transaction(function(tx){
	    
	    var sql = 'SELECT * FROM Favorites WHERE id = ' + "'" + '"' + data[0].id + '"' + "'" ;
	    //console.log("SQL " + sql);
	    tx.executeSql(sql, [], function(tx, results) {
		//console.log("Results " + results.rows.length);
		
		var result = (results != null && results.rows != null && results.rows.length > 0) ;
		
		//console.log(result);
		callback(result);
		
	    }, function (tx, err) {
		console.log("isFav Sql error" + err);
		callback(false);
	    }
	    );
	
	});    
	    
    } catch (error) {
	console.log("isFav error" + error);
	callback(false);
    }
}



//------------------------------------------------------------------------------

function fetchDetails (entry) {
    
    currentBusinessData = null;
    //http://api.sensis.com.au/ob-20110511/test/getByListingID?key=secret&query=999
    var detailsUrl = "http://api.sensis.com.au/ob-20110511/test/getByListingId?key=" +
        key + "&query=" + entry.id ;
        
    
    $.mobile.showPageLoadingMsg();
    
    // reset input fields
    $("#name").html(); $("#address").html(); $("#phone").html();
    $("#rating").html(); $("#homepage").attr("href", "");
    
    $.getJSON(detailsUrl, function (data) {
        
        if (data.results) {
            currentBusinessData = data.results;
	    //console.log(currentBusinessData);
	    //check for Favorites
	    isFav(currentBusinessData, function(isPlaceFav){
		//console.log(currentBusinessData[0].name + " is Fav " + isPlaceFav);
	    
		if (!isPlaceFav) {
		    $("#add").show();
		    $('#remove').hide();
		} else {
		    $("#add").hide();
		    $('#remove').show();
		}
		
		// populate fields
		$("#name").html(data.results[0].name);
		$("#address").html(data.results[0].primaryAddress.addressLine);
		$("#phone").html(data.results[0].primaryContacts[0].value);
		$("#rating").html(data.results.rating);
		//$("#homepage").attr("href", data.results[0].primaryContacts[2].value);
	    
	    });           
            
        }
    }).error (function (err) {
        console.log("Error fetching business details " + err);
    }).complete (function () {
        $.mobile.hidePageLoadingMsg();
    });
    
}

// -----------------------------------------------------------------------------

function getServices(callback) {
    
    var requestApi = $.ajax({
	url: 'https://webguru.checkfront.com/api/2/item/',
	type: 'GET',
	data: {
	    //type: 'web_server',
	    client_id: '3794385764f73e5381382a',
	    //grant_type: 'authorization_code',
	    //client_secret:'615caea606fc066f9c2f43b72f29d019c121f8c1' ,
	    redirect_uri: 'oob' ,
	    access_token: '8f17a849fc882ee3a113d3ef08dedb28',
	    refresh_token: '6dc23a419ff52baccacc5474622566fd'
	    //code: '3f81ca8a0eda8b47a836748a2b8a021e'
	},
	dataType: 'json'
    });
    
    //var services = [] ;
    requestApi.done(function(servicesData) {
	console.log("Token: " + servicesData.items);
	
	
	callback(servicesData.items) ;
	//return services ;
	
    });
    
    requestApi.fail(function(jqXHR, textStatus) {
	console.log("Error token request " + textStatus);
    });    
  
    
}

// -----------------------------------------------------------------------------



function initServices() {
    
    $('#booking').live('pagebeforeshow', function() {
	
	getServices(function(services) {
	    
	    //console.log("init " + services[1].name);
	    if (services) {
		
		$('#services').html("");
		
		for (var key in services) { 
		//$(services).each(function(index, service) {
		    var htmlData = 
		    
		    '<h3>'
		    + services[key].name
		    + '</h3>'   	     
		    + '<section class="ui-grid-b"> 		\
			<!-- Row 1 -->			\
			<div class="ui-block-a"></div> 		\
			<div class="ui-block-b"></div> 		\
			<div class="ui-block-c"></div> 		\
			<!-- Row 2 --> 				\
			<div class="ui-block-a">		\
			  <input type="date" value="" id="datefield" name="datefield" data-mini="true" /> \
			</div> 					\
			\
			<div class="ui-block-b"> \
			  \
			  <div data-role="controlgroup" data-type="horizontal">	 \
										    \
			    <select id="hour" name="hour"> \
			      <option value="9">9</option> \
			      <option value="10">10</option> \
			      <option value="11">11</option> \
			      <option value="12">12</option> \
			      <option value="1">1</option> \
			      <option value="2">2</option> \
			      <option value="3">3</option> \
			      <option value="4">4</option>  \
			    </select> \
				\
			    <select id="ampm" name="ampm"> \
			      <option value="am">am</option> \
			      <option value="pm">pm</option> \
			    </select>	    \
			      \
			  </div> \
			  \
			</div> \
			<div class="ui-block-c"> \
			  <a href="#book" data-role="button" data-icon="plus" data-iconpos="left" data-theme="b" data-mini="true" >Book Now</a> \
			</div> \
		    </section>'  ;
		    
		    
		    var divElem = $(document.createElement('div'));
		    $(divElem).attr({
			'id': "service",
			'data-role': "collapsible",
			'data-collapsed': "true"
			
		      });		    
		    
		    $('#services').append(divElem.html(htmlData));
		    
		   // $(divElem).bind('tap', function(ev) {
			//ev.stopPropagation();
			//return true;
		    //});
		    
		}
		$('#services').collapsible('refresh');
	    } else {
		$('#services').html('Sorry, No services available.');
	    }
	    //$('#services').collapsible('refresh');
	});
    });
}

//------------------------------------------------------------------------------

function loadFavorites() {
    
    $('#fav').live('pagebeforeshow', function(){
	
	getFavorites (function(favorites) {
	    //console.log(favorites);
	    if (favorites.length) {    
		
		$('#fav-list').html("");
		
		favorites.forEach(function(favorite) {
		    var htmlData = '<a href=\"#business\" id=\"'
				+ favorite.id
				+ '\"><img src=\"'
				+ favorite.icon
				+ '\" class=\"ul-li-icon\"></img><h3>&nbsp;'
				+ favorite.name
				+ '</h3><p><strong>&nbsp;Vicinity:'
				+ favorite.vicinity
				+ '</strong></p></a>' ;
		    
		    var liElem = $(document.createElement('li')) ;
				
		    $('#fav-list').append(liElem.html(htmlData)) ;
				
		    $(liElem).bind('tap', function(ev) {
			ev.stopPropagation();
			//console.log(favorite);
			fetchDetails(favorite);
			return true ;
		    });	
		});
		
		//$('#fav-list').listview('refresh') ;
	    } else {
		$('#fav-list').html("No Favorites yet! Search and add some :)") ;
	    }
	    $('#fav-list').listview('refresh') ;
	});
    });
}

//
function populateResults(data){
    //console.log(data);
    cachedData = data;
    $('#result-list').html("");
    
    try {
        
        $.each(data.results, function(index, entry) {
                                    
            //stores += new google.maps.LatLng(entry.primaryAddress.latitude, entry.primaryAddress.longitude) ;
	    
	    var htmlData = "<a href=\"#business\" id=\"" +
            entry.id + "\"><img src=\"" + entry.categories.name +
            "\" class =\"ui-li-icon\"></img><h3>&nbsp;" +
            entry.name + "</h3><p><strong>&nbsp;suburb:" +
            entry.primaryAddress.suburb + "</strong></p></a>";
            
            var liElem = $(document.createElement('li'));
            
            $("#result-list").append(liElem.html(htmlData));
            
            $(liElem).bind("tap", function(event) {
                           
               event.stopPropagation();
               fetchDetails(entry);
               return true;
               
            });        

                           
        });
       
        $("#result-list").listview('refresh');
        
    } catch (err) {
        
        console.log("Error populating results" + err);
    }
    //
    //dataFeed.setStores(stores);
    //console.log(dataFeed);
    
    // populate results page and show
    $.mobile.changePage($("#results"), {transition: "pop"});
    $.mobile.hidePageLoadingMsg();


}


//------------------------------------------------------------------------------ 
function initSearch() {
    
    $("#btnsearch").live("click", function(){

	$.mobile.showPageLoadingMsg();
	
	    
	var radius = $("#radius").val() * 1000 ;
	
	//mapdata = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	
	var searchUrl = "http://api.sensis.com.au/ob-20110511/test/search?key="
	    + key
	    + "&query=" + $("#searchfield").val()
	    + "&rows=20"
	    + "&location=" + lat + "," + lng
	   // + "&location=" + position.coords.latitude + "," + position.coords.longitude
	    + "&radius=" + $("#radius").val();
	    
	
	getXHR(searchUrl, function(response) {
	    var sapiJsonObject = parseAndLog(response);
	    populateResults(sapiJsonObject);
	    
	});
	
    });

}

//------------------------------------------------------------------------------

// If you want to prevent dragging, uncomment this section
	/*
	function preventBehavior(e) 
	{ 
      e.preventDefault(); 
    };
	document.addEventListener("touchmove", preventBehavior, false);
	*/
	
	/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
	see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
	for more details -jm */
	/*
	function handleOpenURL(url)
	{
		// TODO: do something with the url passed in.
	}
	*/
	
	$(document).bind("pageinit", function() {
	    
	
	//function onBodyLoad()
	//{		
		document.addEventListener("deviceready", onDeviceReady, false);
		
		// iScroll events
		//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
		
		// Cross domain setup
		$.support.cors = true ;
		$.mobile.allowCrossDomainPages = true;
		
		//$.support.touchOverflow = true;
		//$.mobile.touchOverflowEnabled = true;
		$.mobile.page.prototype.options.addBackBtn = true;
		$.mobile.page.prototype.options.backBtnTheme = "b";
		
		// initialize 
		initSearch();
		initFavorites();
		loadFavorites();
		//initServices();
		initDB();
	//}
	});
	
	/* When this function is called, Cordova has been initialized and is ready to roll */
	/* If you are supporting your own protocol, the var invokeString will contain any arguments to the app launch.
	see http://iphonedevelopertips.com/cocoa/launching-your-own-application-via-a-custom-url-scheme.html
	for more details -jm */
	function onDeviceReady()
	{
		// do your thing!
		//navigator.notification.alert("Cordova is working");
		
	}
        

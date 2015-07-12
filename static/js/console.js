/* A Javascript console interface for internal functionality.
 * Gives access to mongod instance.
 */
var VISUAL = (function(){
	var that = {}
		, heatmap = null

	that.connect = function(host, port){
		console.log("Attempting to connect...");
		$.ajax({
			url: "/connect",
			method: "POST",
			dataType: "json",
			data: {
				host: host,
				port: port
			},
			success: function(response){
				console.log(response.results);
			}
		});
	};

	that.listFiles = function() {
		$.ajax({
			url: "/listfiles",
			method: "POST",
			dataType: "json",
			success: function(response){
				if(response.status == "error") {
					console.log(response.results);
				} else {
					console.log("In directory /explain");
					response.results.forEach(function(filename){
						console.log(filename);
					})
				}
			}
		});
	};

	that.loadFile = function(filename) {
		console.log("Loading explain/" + filename + "...");
		$.ajax({
			url: "/file",
			method: "POST",
			dataType: "json",
			data: {
				filename: filename
			},
			success: function(response){
				if(response.status == "error") {
					console.log(response.results);
				} else {
					var explain = response.results;
					parseExplain(explain);
				}
			}
		});
	};

	that.showHeatmap = function(database, collection, field, limit) {
		if (heatmap != null) {
			console.log("Heatmap already being shown, clear it"
						+ " with VISUAL.clearHeatmap()");
			return;
		}
		$.ajax({
			url : "fetch",
			method: "POST",
			dataType : "json",
			data: {
				database: database,
				collection: collection,
				field: field,
				limit: limit || 0
			},
			success: function(response){
				if (response.status == "error") {
					console.log(response.results);
				} else {
					onHeatmapFetch(response.results, field);
				}
			}
		});
		console.log("Fetching all data, this can take a while...");
	};

	that.clearHeatmap = function(){
		if (heatmap) {
			heatmap.setMap(null);
			heatmap = null;
		}
	};

	that.drawCell = function(cellHash){
	    loadGeoJson(translateCellHashToGeoJSON(cellHash));
	};


	that.connect.help = function(){
		console.log("Usage: VISUAL.connect(<host>, <port>)");
		console.log("Both <host> and <port> are optional");
	};

	that.showHeatmap.help = function(){
		console.log("Usage: VISUAL.showHeatmap(<database>, <collection>, <field>, <limit>)");
		console.log("<field> is the field with the geo index");
		console.log("<limit> is optional");
	};

	that.clearHeatmap.help = function(){
		console.log("Usage: VISUAL.clearHeatmap()");
		console.log("Clears the current heatmap if one is present");
	};

	that.drawCell.help = function(){
		console.log("Usage: VISUAL.drawCell('1f01321')");
		console.log("Draws an S2 cell on the map");
	};

	that.listFiles.help = function(){
		console.log("Usage: VISUAL.listFiles()");
		console.log("Lists all accessible files from /explain directory");
	};

	that.loadFile.help = function(){
		console.log("Usage: VISUAL.loadFile(<filename>)");
		console.log("Loads file from /explain directory");
	};

	function getCoordinates(point){
		if("type" in point && point.type == "Point"){
			return point.coordinates;
		}
		else {
			//assume old style point
			return point;
		}
	}

	function onHeatmapFetch(results, field){
		//add to google map
		var point_array = [];
		results.forEach(function(result){
			var point = getCoordinates(result[field]);
			point_array.push(new google.maps.LatLng(point[1], point[0]));
		})

		heatmap = new google.maps.visualization.HeatmapLayer({
			data: point_array
		});

		heatmap.setMap(map);
	}

	function instructions(enabled){
		var instructions = [
		, "You can access internal functions from the Javascript console"
		, "with the VISUAL interface. To see help on a specific function, use"
		, "VISUAL.<function>.help()"
		];
		if (!enabled) {
			instructions.push("", "WARNING: Local mode is disabled, so some functions",
			"will be disabled");
		}
		console.log(instructions.join("\n"));
	}

	// initialize with instructions if local mode is enabled
	// otherwise, do nothing
	$.ajax({
		url: "/local",
		method: "POST",
		dataType: "json",
		success: function(response){
			if(response.results == 'Yes')
				instructions(true);
			else
				instructions(false);
		}
	});

	return that;
}());
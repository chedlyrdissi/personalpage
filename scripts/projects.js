var projects = []

$.getJSON('assets/projects.json', function(json) {
	 console.log(json)
}).fail(function() {
	console.log("failed to load json.")
})

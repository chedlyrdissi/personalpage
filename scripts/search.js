$(document).ready(function() {
	$("#searchForm").submit(function(event) {
		event.preventDefault();
		console.log("submit");
		// console.log(event);
		debugger
		return false
	})	
});
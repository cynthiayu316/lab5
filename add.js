var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var name = request.query.name;
	var description = request.query.description;
	var newFriend = {"name":name, "description": description, "imageURL":"https://picsum.photos/500/500"}
	data.friends.push(newFriend)
	response.render('index', data);
 }
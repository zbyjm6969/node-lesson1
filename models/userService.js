function userService(){
	this.getUserById = function(req,res){
		res.end('hello');
	}
}
module.exports = new userService();
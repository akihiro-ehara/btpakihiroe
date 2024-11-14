/**
 * 
 * @On(event = { "Action1" })
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
	// Your code here
	return "hello " + request;
}
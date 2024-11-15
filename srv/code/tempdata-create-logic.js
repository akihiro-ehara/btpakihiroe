/**
 * 
 * @On(event = { "CREATE" }, entity = "myproject1Service.TempData")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
const { v4: uuidv4 } = require('uuid'); // UUIDを生成するためにuuidライブラリを使用

module.exports = async function(request) {
	const data =  { ID: uuidv4(), Message: 'CREATE Test...' };
	request.reply(data); 
}
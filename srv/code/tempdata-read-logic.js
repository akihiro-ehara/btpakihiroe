/**
 * 
 * @On(event = { "READ" }, entity = "myproject1Service.TempData")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
const { date } = require('@cap-js/hana/lib/cql-functions');
const { v4: uuidv4 } = require('uuid'); // UUIDを生成するためにuuidライブラリを使用

module.exports = async function(request) {
	request.data =  { ID: uuidv4(), Message: "hello read world!!"};;
}
/**
 * 
 * @On(event = { "READ","CREATE" }, entity = "myproject1Service.TempData")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
const { v4: uuidv4 } = require('uuid'); // UUIDを生成するためにuuidライブラリを使用

module.exports = async function(request) {

	const requestType = request.event;

	if (requestType === 'CREATE') {
		const { Message } = req.data;
		// ビジネスロジックを実行
		const result = `Processed: ${Message}`;
		return { ID: uuidv4(), Message: result };
		}

	// READ リクエストの処理
	else if (requestType === 'READ') {
		return [{ ID: uuidv4(), Message: 'Test...' }];
	}
}


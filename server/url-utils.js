
var logger = require("./logger.js");


function validateUrlString(url, prefix) {
	if (url.indexOf("..") != -1) {
		logger.warn("illegal URL contains .."+url);
		return false;
	}
	
	if (typeof prefix == "string" && url.indexOf(prefix) !== 0) {
		logger.warn("illegal URL "+url+" does not start with "+prefix);
		return false;
	}
	
	return true;
}

module.exports.validateUrlString = validateUrlString;
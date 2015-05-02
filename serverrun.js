/*
var optimist = require('optimist');
var winston = require('winston');
var defaultLogger = winston.defaultLogger;
var parsePackageJson = require('../lib/parse-package-json');
var path = require('path');
var CorsSupport = require('../lib/cors-support');
var ApiMock = require('../lib/api-mock');
*/
var ApiMock = require('api-mock');


var dir = process.env.OPENSHIFT_REPO_DIR,
	port = process.env.OPENSHIFT_NODEJS_PORT,
	host = process.env.OPENSHIFT_NODEJS_IP;


configuration = {
  'blueprintPath': "./work.api",
  'options': {
    "port" : port
  }
}

var options = 

apiMock = new ApiMock(configuration);
apiMock.run();
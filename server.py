from flask import Flask
from flask import Response
from flask import request
import flask
import json
from bson import json_util
import pymongo
import os

'''
If local mode is enabled, user will have access to
mongod functions from Javascript console.
Only enable this when running locally for testing
'''
LOCAL_ENABLED = False
mongo_client = None
app = Flask(__name__)

@app.route('/')
def index():
    return flask.render_template('geo.html')

@app.route('/demo')
def demo():
    return flask.render_template('demo.html')

@app.route('/fetch', methods=['POST'])
def find(filter={}, limit=None):
	global LOCAL_ENABLED, mongo_client
	if not LOCAL_ENABLED: return _disabledResponse()
	if mongo_client is None:
		return _jsonResponse('Not connected', 'error')
	missing = _fieldsMissing(['database', 'collection', 'field', 'limit'])
	if missing:
		return missing
	db = mongo_client[request.form['database']]
	collection = db[request.form['collection']]
	limit = int(request.form['limit'])
	#TODO: why doesn't projection seem to have any effect?
	results = collection.find(filter={}, projection=[request.form['field']], limit=limit)
	def generate():
		first = True
		for result in results:
			if first:
				yield '{ "results" : ['
				first = False
			else:
				yield ','
			yield json.dumps(result, default=json_util.default)
		yield ']}'
	return Response(generate(), mimetype='text/json')

@app.route('/connect', methods=['POST'])
def connect():
	global LOCAL_ENABLED, mongo_client
	if not LOCAL_ENABLED: return _disabledResponse()
	host = 'localhost'
	port = 27017
	if 'host' in request.form:
		host = request.form['host']
	if 'port' in request.form:
		port = int(request.form['port'])
	try:
		mongo_client = pymongo.MongoClient(host=host, port=port)
	except pymongo.errors.ConnectionFailure as e:
		return _jsonResponse('Could not connect %s' % e, 'error')
	return _jsonResponse('Connected', 'success')

@app.route('/file', methods=['POST'])
def getFile():
	global LOCAL_ENABLED
	if not LOCAL_ENABLED: return _disabledResponse()
	missing = _fieldsMissing(['filename'])
	if missing:
		return missing
	filename = request.form['filename']
	try:
		explain_file = open('explain/%s' % filename, 'r')
	except IOError as ioe:
		return _jsonResponse('Could not open %s' % filename, 'error')
	try:
		contents = json_util.loads(explain_file.read())
	except ValueError as ve:
		return _jsonResponse('Could not parse JSON', 'error')
	explain_file.close()
	return _jsonResponse(contents, 'success')

@app.route('/listfiles', methods=['POST'])
def list():
	global LOCAL_ENABLED
	if not LOCAL_ENABLED: return _disabledResponse()
	files = os.listdir('explain')
	return _jsonResponse(files, 'success')

@app.route('/local', methods=['POST'])
def local():
	global LOCAL_ENABLED
	if LOCAL_ENABLED:
		return _jsonResponse('Yes', 'success')
	else:
		return _jsonResponse('No', 'error')

def _fieldsMissing(fields):
	for field in fields:
		if field not in request.form:
			return _jsonResponse('%s not passed' % field, 'error')
	return False

def _jsonResponse(msg, status):
	if type(msg) is str:
		response_string = '{"results": "%s", "status": "%s"}' % (msg, status)
	else:
		response_string = '{"results": %s, "status": "%s"}' % (json_util.dumps(msg), status)
	return Response(response_string, mimetype='json')

def _disabledResponse():
	return _jsonResponse('Local mode is disabled', 'error')
if __name__ == '__main__':
    app.debug = True
    app.run()

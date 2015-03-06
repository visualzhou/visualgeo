from flask import Flask
import flask
import parser
import json

LIBPATH = "/Users/syzhou/10gen/support/visualgeo/s2/mongo-s2/build/libs2parser.dylib"

app = Flask(__name__)

s2parser = parser.S2Parser(LIBPATH)


@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/post', methods=['POST'])
def post():
    print(flask.request.form)
    return 'OK'

@app.route('/unhashs2', methods=['POST'])
def unhashs2():
    geohash = flask.request.form["hashs2"]
    geojson = s2parser.parse_to_json(geohash);
    print geojson
    return flask.jsonify(**geojson)

@app.route('/parse_cells', methods=['POST'])
def parse_cells():
    cells = json.loads(flask.request.form["cells"])
    print "parsing cells: ", cells
    polygons = []
    for cell in cells:
        geojson = s2parser.parse_to_json(cell);
        polygons.append(geojson)
    return flask.jsonify(polygons=polygons)

if __name__ == '__main__':
    app.debug = True
    app.run()

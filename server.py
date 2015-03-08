from flask import Flask
import flask
import json

app = Flask(__name__)

@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/demo')
def demo():
    return flask.render_template('demo.html')

if __name__ == '__main__':
    app.debug = True
    app.run()

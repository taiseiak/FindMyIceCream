"""
Map web application that shows where the nearest
locations are from the user.
"""

import flask
import config
from flask import request
import logging
import geocoder

# Globals
app = flask.Flask(__name__)
CONFIG = config.configuration()
app.secret_key = CONFIG.SECRET_KEY
app.debug = CONFIG.DEBUG

if app.debug:
    app.logger.setLevel(logging.DEBUG)


# Pages
@app.route("/")
@app.route("/index")
def index():
    app.logger.debug("Enter home page")
    flask.g.topic = CONFIG.FIND
    flask.session['topic'] = CONFIG.FIND
    return flask.render_template('index.html')


# Error handlers
@app.errorhandler(404)
def error_404(e):
    app.logger.warning("++ 404 error: {}".format(e))
    return flask.render_template('404.html'), 404


@app.errorhandler(500)
def error_500(e):
    app.logger.warning("++ 500 error: {}".format(e))
    assert not True  # I want to invoke the debugger
    return flask.render_template('500.html'), 500


@app.errorhandler(403)
def error_403(e):
    app.logger.warning("++ 403 error: {}".format(e))
    return flask.render_template('403.html'), 403


# Reverse Geocoding
@app.route("/_get_addy")
def get_addy():
    """
    With an input of latitude and longitude, sends a
    JSON file with the information of the address.
    """
    app.logger.debug("Got JSON request")
    lat = request.args.get('lat', type=float)
    lng = request.args.get('lng', type=float)

    app.logger.debug('latitude: {}'.format(lat))
    app.logger.debug('longitude: {}'.format(lng))

    g = geocoder.google([lat, lng], method='reverse')
    app.logger.debug("g.json: {}".format(g.json))
    return flask.jsonify(result=g.json)


if __name__ == "__main__":
    print("Opening for global access on port {}".format(CONFIG.PORT))
    app.run(port=CONFIG.PORT, host="0.0.0.0")

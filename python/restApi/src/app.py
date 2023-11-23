from flask import Flask
from routes.authRoutes import authRoutes

app = Flask(__name__)

app.register_blueprint(authRoutes)
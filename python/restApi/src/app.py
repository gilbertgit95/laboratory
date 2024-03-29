from dotenv import load_dotenv
load_dotenv()

from flask import Flask
from routes.authRoutes import authRoutes
from routes.featureRoutes import featureRoutes
from utils.config import config

app = Flask(__name__)

app.register_blueprint(authRoutes)
app.register_blueprint(featureRoutes)

# execute the server
if __name__ == '__main__':
    # print(__name__)
    # print(config)
    app.run(debug=True, port=config['AppPort'])
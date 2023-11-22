from flask import Flask
from routes.authRoutes import authRoutes

app = Flask(__name__)

app.register_blueprint(authRoutes)

# execute the server
if __name__ == '__main__':
    print(__name__)
    app.run(debug=True)
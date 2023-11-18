from flask import Flask

app = Flask(__name__)

# root endpoint
@app.route('/')
def rootRoute():
    return {
        'data': 'test'
    }

# execute the server
if __name__ == '__main__':
    print(__name__)
    app.run(debug=True)
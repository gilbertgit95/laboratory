from dotenv import load_dotenv
load_dotenv()

from utils.config import config
from app import app

# execute the server
if __name__ == '__main__':
    print(__name__)
    print(config)
    app.run(debug=True, port=config['AppPort'])
from dotenv import load_dotenv
load_dotenv()

import os
osVersion = os.getenv('OS')

password = os.getenv('APP_PASSWORD')
username = os.getenv('APP_USERNAME')

print(f'your app is running on { osVersion } and keys are: { password }, { username }')
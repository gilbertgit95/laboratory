import json
from datetime import datetime

data = {
    'date': str(datetime.now())
}
data['author'] = 'gilbert'
data['skills'] = ['web develoment', 'JavaScript', 'Python']

jsonData = json.dumps(data)

print(jsonData)
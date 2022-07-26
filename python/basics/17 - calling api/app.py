import requests

HOST_ADRESS = 'http://localhost:8080/data.json'
HEADER = {}

data = requests.get(HOST_ADRESS)

print(data.json())
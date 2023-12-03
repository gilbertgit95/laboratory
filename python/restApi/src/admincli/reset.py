from .seeder import seed
from .cleaner import cleanAll

def reset():
    print('reseting has started')

    cleanAll()
    seed()

    print('reseting has ended')
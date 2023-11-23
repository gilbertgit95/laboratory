from dotenv import load_dotenv
load_dotenv()

import inquirer
from utils.config import config

def main():
    print('\nWelcome to admin cli! where you can execute administrative automation. Just be careful because some of the processes could be distructive to you data.\n')

    questions = [
        inquirer.Password("confirmKey", message="Please enter the confirmation key to proceed"),
        inquirer.List(
            "process",
            message="Select proccess to execute",
            choices=["reset", "seed"],
        )
    ]

    answers = inquirer.prompt(questions)

    if answers['confirmKey'] == config['AppAdminConfirmKey']:
        # check whta process to execute
        if answers['process'] == 'reset':
            print('Execute reset')
        elif answers['process'] == 'seed':
            print('Execute seed')
        else:
            print('[Error] Nothing was selected')
    else:
        print('[Error] Confirmation key is not correct! Please enter the right key base on the .env configuration')

# execute the entry function
main()

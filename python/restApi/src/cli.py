from dotenv import load_dotenv
load_dotenv()

import inquirer
from admincli.reset import reset
from admincli.seeder import seed
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
            reset()
        elif answers['process'] == 'seed':
            seed()
        else:
            print('[Error] Nothing was selected')
    else:
        print('[Error] Confirmation key is not correct! Please enter the right key base on the .env configuration')

# execute the entry function
main()

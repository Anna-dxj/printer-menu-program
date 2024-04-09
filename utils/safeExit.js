import inquirer from "inquirer";
import { returnMainMenu } from './returnToMenu.js';

const options = [
    'Yes, exit',
    'No, stay'
];

const safeExit = () => {
    inquirer.prompt([{
        type: 'list', 
        name: 'yesNo',
        message: 'Are you sure you want to exit? Upon exit, terminal will automatically close.',
        choices: options
    }]).then((choice) => {
        const { yesNo } = choice;

        if (yesNo === `Yes, exit`) {
            console.log('Exiting...')
            setTimeout(() => {
                process.exit()
            }, 1000)
        } else if (yesNo === 'No, stay') {
            returnMainMenu()
        }
    })
}

export { safeExit }
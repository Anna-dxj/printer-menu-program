import inquirer from 'inquirer';

import { safeExit } from './safeExit.js';
import { addPrinterMenu } from '../menu/addPrinterMenu.js';
import { removePrinterMenu } from '../menu/removePrinterMenu.js'

const filePath = 'C:/Users/alangford/Documents/printerScript.ps1'

const options = [
    `Add a Printer`,
    `Remove a Printer`,
    `I'm done`
];

const returnMainMenu = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: options
    }]).then((choice) => {
        const {menu} = choice;
        if (menu === `Add a Printer`) {
            addPrinterMenu(returnMainMenu)
        } else if (menu === `Remove a Printer`) {
            console.log('boo')
            removePrinterMenu(returnMainMenu)
        } else if (menu === `I'm done`) {
            safeExit()
        }
    })
};

export { returnMainMenu }
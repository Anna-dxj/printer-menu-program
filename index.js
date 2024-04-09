import inquirer from 'inquirer';

import { addPrinterMenu } from './menu/addPrinterMenu.js'
import { removePrinterMenu } from './menu/removePrinterMenu.js'
import { clearFile } from './utils/generatePowershellScript.js';
import { returnMainMenu } from './utils/returnToMenu.js';
import { safeExit } from './utils/safeExit.js';

const filePath = 'C:/Users/alangford/Documents/printerScript.ps1'

const options = [
    `Add a Printer`,
    `Remove a Printer`,
    `I'm done`
];

const showMainMenu = () => {
    clearFile(filePath) 

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

showMainMenu();
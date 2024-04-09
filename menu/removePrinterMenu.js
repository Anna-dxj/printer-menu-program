import inquirer from "inquirer";

import { thunderbirdMenu } from './offices/thunderbirdMenu.js'
import { westValleyMenu } from "./offices/westValleyMenu.js";
import { scottsdaleMenu } from "./offices/scottsdaleMenu.js";

const options = ['Thunderbird', 'West Valley', 'Scottsdale'];

const removePrinterMenu = (showMainMenu) => {
    inquirer.prompt([{
        type: 'list', 
        name: 'office',
        message: 'Select printer to remove:', 
        choices: options, 
    }]).then((response) => { 
        const {office} = response;
        if (office === 'Thunderbird') {
            thunderbirdMenu(showMainMenu, 'remove')
        } else if (office === 'West Valley') {
            westValleyMenu(showMainMenu, 'remove')
        } else if (office === 'Scottsdale') {
            scottsdaleMenu(showMainMenu, 'remove')
        }
    
    })
}

// addPrinterMenu()

export { removePrinterMenu }
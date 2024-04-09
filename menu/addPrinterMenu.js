import inquirer from "inquirer";

import { thunderbirdMenu } from './offices/thunderbirdMenu.js';
import { scottsdaleMenu } from "./offices/scottsdaleMenu.js";
import { westValleyMenu } from "./offices/westValleyMenu.js";

const options = ['Thunderbird', 'West Valley', 'Scottsdale'];

const addPrinterMenu = (showMainMenu) => {
    inquirer.prompt([{
        type: 'list', 
        name: 'office',
        message: 'Select printer to add:', 
        choices: options, 
    }]).then((response) => { 
        const {office} = response;
        if (office === 'Thunderbird') {
            thunderbirdMenu(showMainMenu, 'add')
        } else if (office === 'West Valley') {
            westValleyMenu(showMainMenu, 'add')
        } else if (office === 'Scottsdale') {
            scottsdaleMenu(showMainMenu, 'add')
        }
    
    })
}

// addPrinterMenu()

export { addPrinterMenu }
// C:\Users\alangford\Documents\printer-menu\menu\addPrinterMenu.js
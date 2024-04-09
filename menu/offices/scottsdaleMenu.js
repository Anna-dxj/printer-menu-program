import inquirer from "inquirer";
import fs from 'fs'

import { printerNameConverter } from "../../utils/printer.js";
import { generatePowershellScript } from "../../utils/generatePowershellScript.js";

const filePath = 'C:/Users/alangford/Documents/printerScript.ps1'

const printerOptions = [
    'Admin 2', 
    'Ahmad',
    'Billing 1', 
    'Billing Forms', 
    'BOC Main 1', 
    'BOCRX',
    'Front Desk', 
    'HR', 
    'Lab', 
    'MA 1', 
    'Main 1', 
    'New Patient Scheduling 1', 
    'Nurse West 1', 
    'PA 1', 
    'RXPrinter West Tray 1'
]

const scottsdaleMenu = (showMainMenu, operation) => {
    inquirer.prompt([{
        type: 'list', 
        name: 'printer', 
        message: 'Choose a printer', 
        choices: printerOptions,
    }]).then((response) => {
        const {printer} = response;

        let printerName = ''
        printerName = printerNameConverter(printerOptions.indexOf(printer), printerName, 'Scottsdale', printerOptions)
        // console.log(`${printer} => ${printerName}`)

        if (operation === 'remove') {
            console.log(`Writing script to remove ${printer} ...\n`)
        } else if (operation === 'add') {
            console.log(`Writing script to add ${printer} ...`)
        }

        fs.appendFile(filePath, generatePowershellScript(printerName, operation), (error) => {
            if (error) {console.log(error)}
        })
        
        console.log('Success! Ready to run in PDQ Deploy')
        showMainMenu()
    })
}

export {scottsdaleMenu}
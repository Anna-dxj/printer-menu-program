import inquirer from "inquirer";
import fs from 'fs'

import { printerNameConverter } from "../../utils/printer.js";
import { generatePowershellScript } from "../../utils/generatePowershellScript.js";

const filePath = 'C:/Users/alangford/Documents/printerScript.ps1'

const printerOptions = [
    'Billing 1', 
    'BOC 2', 
    'BOC MFP',
    'BOC RX', 
    'Front 2', 
    'Front Desk', 
    'HR', 
    'MA 1', 
    'Manager 1', 
    'New Patient Scheduling',
    'Nurse 3', 
    'Nursing MFP', 
    'PA 1',
    'Research'
]

const thunderbirdMenu = (showMainMenu, operation) => {
    inquirer.prompt([{
        type: 'list', 
        name: 'printer', 
        message: 'Choose a printer', 
        choices: printerOptions,
    }]).then((response) => {
        const {printer} = response;

        let printerName = ''
        printerName = printerNameConverter(printerOptions.indexOf(printer), printerName, 'Thunderbird', printerOptions)
        // console.log(`${printer} => ${printerName}`)
        
        if (operation === 'remove') {
            console.log(`Writing script to remove ${printer} ...`)
        } else if (operation === 'add') {
            console.log(`Writing script to add ${printer} ...`)
        }

        fs.appendFile(filePath, generatePowershellScript(printerName, operation), (error) => {
            if (error) {console.log(error)}
        })
        
        console.log('\nSuccess! Ready to run in PDQ Deploy.')
        showMainMenu()
    })
}

export {thunderbirdMenu}
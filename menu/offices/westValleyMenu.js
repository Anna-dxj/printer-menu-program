import inquirer from "inquirer";
import fs from 'fs'

import { printerNameConverter } from "../../utils/printer.js";
import { generatePowershellScript } from "../../utils/generatePowershellScript.js";

const filePath = 'C:/Users/alangford/Documents/printerScript.ps1'

const printerOptions = [
    'Billing 01',
    'Billing 02', 
    'Billing 03',
    'Billing 03 Forms',
    'Billing Admin',
    'Billing Admin Forms',
    'Billing Forms',
    'Billing Main',
    'BOC',
    'BOC RX',
    'Dispensary',
    'Front Desk',
    'MA 01',
    'MFP Test HCFA',
    'MFP Test Plain',
    'Nurse Station',
    'Schedule Auth',
    'Schedule Auth Forms'
]

const westValleyMenu = (showMainMenu, operation) => {
    inquirer.prompt([{
        type: 'list', 
        name: 'printer', 
        message: 'Choose a printer', 
        choices: printerOptions,
    }]).then((response) => {
        const {printer} = response;
        
        let printerName = ''
        printerName = printerNameConverter(printerOptions.indexOf(printer), printerName, 'West Valley', printerOptions)
        console.log(`${printer} => ${printerName}`)

        // console.log(printer)
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

export {westValleyMenu}
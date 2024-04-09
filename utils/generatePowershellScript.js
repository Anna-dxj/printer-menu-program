import fs from 'fs';

const clearFile = (filePath) => {
    fs.writeFile(filePath, '', (error) => {
        if (error) {console.log(error)}
    })
}

const generatePowershellScript = (printerName, operation) => {
    if (operation === 'add') {
        return `Add-Printer -ConnectionName \\\\pvh-dc4\\${printerName} \n`
    } else if (operation === 'remove') {
        return `Remove-Printer -Name "\\\\pvh-dc4\\${printerName}" \n`
    }
}

export {generatePowershellScript, clearFile}
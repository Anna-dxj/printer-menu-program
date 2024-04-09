const printerNameConverter = (printerIndex, printerName, office, printerOptions) => {
    const printerNameSDO = [
        'SDO_ADMIN_02',
        'SDO_Ahmad',
        'SDO_BILLING_01',
        'SDO_BILLING_FORMS',
        'SDO_BOC_MAIN_01',
        'SDO-BOCRX', 
        'SDO_FRONT_DESK',
        'SDO_HR',
        'SDO_LAB',
        'SDO_MA_01',
        'SDO_MAIN_01',
        'SDO_NEW_PATIENT_SCHEDULING_01',
        'SDO_NURSE_WEST_01',
        'SDO_PA_01',
        'SDO_RXPRINTER_WEST_TRAY1'
    ];
    
    const printerNameTBO = [
        'TBO_BILLING_01', 
        'TBO_BOC_02',
        'TBO_BOC_MFP',
        'TBO_BOC_RX',
        'TBO_FRONT_02',
        'TBO_FRONT_DESK',
        'TBO-HR',
        'TBO_MA_01',
        'TBO_Manager_01',
        'TBO_NEW_PATIENT_SCHEDULING',
        'TBO_NURSE_03',
        'TBO_NURSING_MFP',
        'TBO_PA_01',
        'TBO_Research'
    ]; 
    
    const printerNameWVO = [
        'WVO-BILLING-01',
        'WVO-BILLING-02',
        'WVO_BILLING_03',
        'WVO_BILLING_03_FORMS',
        'WVO-BILLING-ADMIN',
        'WVO-BILLING-ADMIN-FORMS',
        'WVO-BILLING-FORMS',
        'WVO-BILLING-MAIN',
        'WVO-BOC',
        'WVO-BOC-RX',
        'WVO_Dispensary',
        'WVO-FRONT-DESK',
        'WVO-MA-01',
        'WVO_MFP_TEST_HCFA',
        'WVO_MFP_TEST_PLAIN',
        'WVO-NURSE-STATION',
        'WVO-SCHEDULE-AUTH',
        'WVO-SCHEDULE-AUTH-FORMS'
    ]

    let printerNameArr = []

    if (office === 'Scottsdale') {
        printerNameArr = [...printerNameSDO]
    } else if (office === 'Thunderbird') {
        printerNameArr = [...printerNameTBO]
    } else if (office === 'West Valley') {
        printerNameArr = [...printerNameWVO]
    }
    
    printerName = printerNameArr[printerIndex]

    return printerName
}

export {printerNameConverter}
import { navigateTo, onNavigationPage } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"
import { onDatePickerPage } from "./datePickerPage"
import { onFormLayoutsPage } from "./formLayoutPage"

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()

})

    it('verify navigation across the pages', () => {

        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.toolTipPage()
        navigateTo.toasterPage()
    })

    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', {browser: ['!firefox', '!edge']}, () => {

        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormwithNameAndEmail('Yelena', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatePickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Yelena', 'Bronstein')
        onSmartTablePage.updateAgeByFirstName('Yelena', '35')
        onSmartTablePage.deleteRowByIndex(1)
    })

})
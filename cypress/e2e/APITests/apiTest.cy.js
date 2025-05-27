import petInformation from "../../testData/APITestData/apiTestData"


describe('API tests', () => {

    it('Add new pet', () => {
        cy.addNewPet(petInformation.name, petInformation.status)

    })

    it('Get pet by ID', () => {
        cy.getPetByID(petInformation.id)

    })

    it('Update pet by ID', () => {
        cy.updatePetByID(petInformation.id, petInformation.name, petInformation.status)

    })

    it('Delete pet', () => {
        cy.deletePet(petInformation.id)

    })
})
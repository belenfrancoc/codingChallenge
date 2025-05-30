

const BASE_URL = 'https://petstore.swagger.io/v2';

export const PetsApi = {

  addPet(id, name, status) {
    return cy.request({
      method: 'POST',
      url: `${BASE_URL}/pet`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        id,
        category: {
          id: 0,
          name: 'string'
        },
        name,
        photoUrls: ['string'],
        tags: [
          {
            id: 0,
            name: 'string'
          }
        ],
        status
      }
    });
  },

  getPetByID(id) {
    return cy.request({
      method: 'GET',
      url: `${BASE_URL}/pet/${id}`,
      headers: {
        'Accept': 'application/json'
      }
    });
  },

  updatePetByID(id, name, status) {
    return cy.request({
      method: 'POST',
      url: `${BASE_URL}/pet/${id}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: true,
      body: {
        name,
        status
      }
    });
  },

  deletePet(id) {
    return cy.request({
      method: 'DELETE',
      url: `${BASE_URL}/pet/${id}`,
      headers: {
        'Accept': 'application/json'
      }
    });
  }
};

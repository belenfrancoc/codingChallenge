import { PetsApi } from "../requests/PetsApi";
import petInformation from "../testData/APITestData/apiTestData";

Cypress.Commands.add('addNewPet', (name, status) => {
  const id = petInformation.id;

  PetsApi.addPet(id, name, status).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('id', id);

    if (response.body.name) {
      expect(response.body).to.have.property('name', name);
    }

    if (response.body.status) {
      expect(response.body).to.have.property('status', status);
    }

    expect(response.body).to.have.property('photoUrls').and.be.an('array');
    expect(response.body).to.have.property('tags').and.be.an('array');
  });
});

Cypress.Commands.add('getPetByID', (id) => {
  PetsApi.getPetByID(id).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('id', id);
  });
});

Cypress.Commands.add('updatePetByID', (id, name, status) => {
  PetsApi.updatePetByID(id, name, status).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('code', 200);
    expect(response.body).to.have.property('type', 'unknown');
    expect(response.body).to.have.property('message', `${id}`); 
  });
});


Cypress.Commands.add('deletePet', (id) => {
  PetsApi.deletePet(id).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('message', `${id}`);
  });
});

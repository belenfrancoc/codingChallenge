
import { PetsApi } from "../requests/PetsApi";
import petInformation from "../testData/APITestData/apiTestData";


function retry(fn, retries = 6, delay = 1000) {
  return fn().then(
    
    (res) => res,
    (err) => {
      if (retries > 1) {
        cy.wait(delay);
        return retry(fn, retries - 1, delay);
      }
      throw err;
    }
  );
}


Cypress.Commands.add("addNewPet", (name, status, retries = 6) => {
  const id = petInformation.id;
  return retry(
    () =>
      PetsApi.addPet(id, name, status).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", id);

        if (response.body.name) {
          expect(response.body).to.have.property("name", name);
        }
        if (response.body.status) {
          expect(response.body).to.have.property("status", status);
        }

        expect(response.body).to.have.property("photoUrls").and.be.an("array");
        expect(response.body).to.have.property("tags").and.be.an("array");
      }),
    retries
  );
});


Cypress.Commands.add("getPetByID", (id, retries = 6) => {
  return retry(
    () =>
      PetsApi.getPetByID(id).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", id);
      }),
    retries
  );
});


Cypress.Commands.add("updatePetByID", (id, name, status, retries = 6) => {
  return retry(
    () =>
      PetsApi.updatePetByID(id, name, status).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("code", 200);
        expect(response.body).to.have.property("type", "unknown");
        expect(response.body).to.have.property("message", `${id}`);
      }),
    retries
  );
});


Cypress.Commands.add("deletePet", (id, retries = 6) => {
  return retry(
    () =>
      PetsApi.deletePet(id).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("message", `${id}`);
      }),
    retries
  );
});

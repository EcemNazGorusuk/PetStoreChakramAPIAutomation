//chakram kütüphanesi import edilir
const chakram = require("chakram"),
  expect = chakram.expect;

describe("Pet Test", function () {
  //PET CREATE TEST
  it("/v2/pet createPet", function () {
    const requestBody = {
        "id": 9876543,
        "category": {
          "id": 477473,
          "name": "pet"
        },
        "name": "Boncuk",
        "photoUrls": [
          "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg"
        ],
        "tags": [
          {
            "id": 1,
            "name": "cat"
          }
        ],
        "status": "available"
      };
    const response = chakram.post(
      "https://petstore.swagger.io/v2/pet",
      requestBody
    );
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });

 
});


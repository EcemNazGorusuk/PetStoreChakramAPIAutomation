//chakram kütüphanesi import edilir
const chakram = require("chakram"),
  expect = chakram.expect;

describe("Pet Test", function () {
  //PET CREATE TEST
  it("/v2/pet createPet", function () {
    const requestBody = {
      id: 9876543,
      category: {
        id: 477473,
        name: "pet",
      },
      name: "Boncuk",
      photoUrls: [
        "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg",
      ],
      tags: [
        {
          id: 1,
          name: "cat",
        },
      ],
      status: "available",
    };
    const response = chakram.post(
      "https://petstore.swagger.io/v2/pet",
      requestBody
    );
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });



  //GET PET TEST
  it("/v2/pet getPet", function () {
    // const requestBody = {
    //   id: 9876543,
    //   category: {
    //     id: 477473,
    //     name: "pet",
    //   },
    //   name: "Boncuk",
    //   photoUrls: [
    //     "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg",
    //   ],
    //   tags: [
    //     {
    //       id: 1,
    //       name: "cat",
    //     },
    //   ],
    //   status: "available",
    // };

    // const response = chakram.post("https://petstore.swagger.io/v2/pet",requestBody); //hata almamak için
    // expect(response).to.have.status(200);
    const response2 = chakram.get("https://petstore.swagger.io/v2/pet/9876543");
    expect(response2).to.have.status(200); //ok
    return chakram.wait();
  });


  //UPDATE PET TEST
  it("/v2/pet updatePet", function () {
    const requestBody = {
      id: 9876543,
      category: {
        id: 477473,
        name: "pet",
      },
      name: "Pamuk",
      photoUrls: [
        "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg",
      ],
      tags: [
        {
          id: 1,
          name: "cat",
        },
      ],
      status: "available",
    };
    const response = chakram.put(
      "https://petstore.swagger.io/v2/pet",
      requestBody
    );
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });



  //DELETE TEST
  it("/v2/pet deletePet", function () {
    const response = chakram.delete(
      " https://petstore.swagger.io/v2/pet/9876543"
    );
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });
});

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
    expect(response).to.comprise.of.json(requestBody);
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });

  //GET PET TEST
  it("/v2/pet getPet", function () {
    const responseBody = {
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

    const response = chakram.get("https://petstore.swagger.io/v2/pet/9876543");
    expect(response).to.comprise.of.json(responseBody); //responseBody ve responseları karşılaştıracak
    expect(response).to.have.status(200); //ok
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

    // Güncellenen name'i doğrula
    expect(response).to.comprise.of.json(requestBody); //request ve responseları karşılaştıracak
    expect(response).to.comprise.of.json({ name: "Pamuk" });
    console.log(requestBody.name);

    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });

  //DELETE TEST
  it("/v2/pet deletePet", function () {
    const responseBody = {
      code: 200,
      type: "unknown",
      message: "9876543",
    };

    const response = chakram.delete(
      " https://petstore.swagger.io/v2/pet/9876543"
    );

    expect(response).to.comprise.of.json(responseBody); //responseBody ve responseları karşılaştıracak
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });
});

//chakram kütüphanesi import edilir
const chakram = require("chakram"),
  expect = chakram.expect;

/*
  describe -> bir grup testin bir arada olduğu bloğu temsil eder
  it -> blokta bulunan testlerin her biridir

  Testlerimizde  Chakram’ın get(), post(), put(), patch() veya delete() gibi request metodlarını 
  kullanarak API çağrıları yapabiliriz 
  Örnek : const response = chakram.get("https://petstore.swagger.io/v2/user/");
*/

describe("User Test", function () {
  //GET USER INFO TEST
  it("getUserInfo", function () {

    const requestBody = {
      id: 1,
      username: "berk",
      firstName: "Berk",
      lastName: "Akkavak",
      email: "berkak@gmail.com",
      password: "12345",
      phone: "1231454534",
      userStatus: 0,
    };

    const response = chakram.post("https://petstore.swagger.io/v2/user",requestBody); //hata almamak için
    expect(response).to.have.status(200); //gelen status code doğruluğunu teyit etmek

    const response2 = chakram.get("https://petstore.swagger.io/v2/user/berk");
    expect(response2).to.have.status(200); //ok
    return chakram.wait();
  });

  //USER CREATE TEST
  it("userCreate", function () {
    const requestBody = {
      id: 1,
      username: "berk",
      firstName: "Berk",
      lastName: "Akkavak",
      email: "berkak@gmail.com",
      password: "12345",
      phone: "1231454534",
      userStatus: 0,
    };
    const response = chakram.post(
      "https://petstore.swagger.io/v2/user",
      requestBody
    );
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });

  //GET WRONG USER TEST
  it("getWrongUserInfo", function () {
    const response = chakram.get("https://petstore.swagger.io/v2/user/ecem1");
    expect(response).to.have.status(404); //not found
    return chakram.wait();
  });

  //LOGIN TEST
  it("login", function () {
    const qsBody = {
      username: "berk",
      password: "12345",
    };
    const response = chakram.get("https://petstore.swagger.io/v2/user/login", {
      qs: qsBody,
    });
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });

  //LOGOUT TEST
  it("logout", function () {
    const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });

  //UPDATE USER TEST
  it("updateUser", function () {
    const requestBody = {
      id: 1,
      username: "berk",
      firstName: "Berk",
      lastName: "Akkavak",
      email: "berkakkavak@outlook.com", //updated
      password: "12345",
      phone: "1231454534",
      userStatus: 0,
    };
    const response = chakram.put(
      "https://petstore.swagger.io/v2/user/berk",
      requestBody
    );
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });

  //DELETE TEST
  it("deleteUser", function () {
    const response = chakram.delete("https://petstore.swagger.io/v2/user/berk");
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });

  //CREATE WITH LIST TEST
  it("createWithList", function () {
    const requestBody = [{
      "id": 11,
      "username": "ahmet",
      "firstName": "Ahmet",
      "lastName": "Öz",
      "email": "ahmet1@gmail.com",
      "password": "1234",
      "phone": "345",
      "userStatus": 0
    },
    {
      "id": 12,
      "username": "mehmet",
      "firstName": "Mehmet",
      "lastName": "Masad",
      "email": "mehmet@gmail.com",
      "password": "234",
      "phone": "123213",
      "userStatus": 0
    }];

    const response = chakram.post(
      "https://petstore.swagger.io/v2/user/createWithList",
      requestBody
    );
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });

   //CREATE WITH ARRAY TEST
   it("createWithList", function () {
    const requestBody = [{
      "id": 11,
      "username": "cenk",
      "firstName": "Cenk",
      "lastName": "Akkavak",
      "email": "cenk1@gmail.com",
      "password": "1234",
      "phone": "345",
      "userStatus": 0
    },
    {
      "id": 12,
      "username": "lara",
      "firstName": "Lara",
      "lastName": "Akkavak",
      "email": "lara1@gmail.com",
      "password": "234",
      "phone": "123213",
      "userStatus": 0
    }];

    const response = chakram.post(
      "https://petstore.swagger.io/v2/user/createWithArray",
      requestBody
    );
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });
});

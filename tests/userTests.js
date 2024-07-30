//chakram kütüphanesi import edilir
const chakram = require('chakram'),
  expect = chakram.expect;
/*
  describe -> bir grup testin bir arada olduğu bloğu temsil eder
  it -> blokta bulunan testlerin her biridir

  Testlerimizde  Chakram’ın get(), post(), put(), patch() veya delete() gibi request metodlarını 
  kullanarak API çağrıları yapabiliriz 
  Örnek : const response = chakram.get("https://petstore.swagger.io/v2/user/");
*/
describe("User Test", function () {
  it("getUserInfo", function () {
    const response = chakram.get("https://petstore.swagger.io/v2/user/ecem");
    //gelen status code doğruluğunu teyit etmek
    expect(response).to.have.status(200); //ok
    return chakram.wait();
  });
  it("getWrongUserInfo", function () {
    const response = chakram.get("https://petstore.swagger.io/v2/user/ecem1");
    //gelen status code doğruluğunu teyit etmek
    expect(response).to.have.status(404); //not found
    return chakram.wait();
  });
});




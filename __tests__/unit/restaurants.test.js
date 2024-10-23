const CarCompanyController = require("../../controllers/carcompany.controller");
const CarCompanyModel = require("../../models/carcompany.model");
const httpMocks = require("node-mocks-http");
const newCarCompany = require("../mock-data/new-carcompany.json");

CarCompanyModel.create = jest.fn();

let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("CarCompanyController.createCarCompany", () => {
  beforeEach(() => {
    req.body = newCarCompany;
  });
  it("should have a createCarCompany function", () => {
    expect(typeof CarCompanyController.createCarCompany).toBe("function");
  });
  it("should call CarCompanyModel.create", () => {
    CarCompanyController.createCarCompany(req, res, next);
    expect(CarCompanyModel.create).toHaveBeenCalledWith(newCarCompany);
  });
  it("should return 201 response code", () => {
    CarCompanyController.createCarCompany(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it("should return json body in response", () => {
    CarCompanyModel.create.mockReturnValue(newCarCompany);
    CarCompanyController.createCarCompany(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newCarCompany);
  });
});

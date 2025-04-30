import supertest from "supertest";
import api from "../api/api.js";

const request = supertest(api);

export default request;

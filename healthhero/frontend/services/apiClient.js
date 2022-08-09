import axios from "axios";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "token";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request(endpoint, method = `GET`, data = {}) {
    const url = `${this.remoteHostUrl}/${endpoint}`;
    console.log("url is: ", url);
    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    } else {
      this.token = window.localStorage.getItem("token");
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      console.log(this.token);
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (error) {
      console.error({ errorResponse: error.response });
      const message = error?.response?.data?.error?.message;
      return { data: null, error: message || String(error) };
    }
  }

  async fetchUserFromToken() {
    return await this.request(`auth/me`, `GET`);
  }

  // async getNutrition() {
  //   return await this.request({ endpoint: `nutrition/`, method: `GET` });
  // }
  async listCommBySchool() {
    const res = await this.request(`community/schoolcommunities`, `GET`);
    return res;
  }
  async listres() { //lists all restaurants probs dont need 
    const res = await this.request(`restaurant/`, `GET`);
    return res;
  }

  async listMinRestaurants(){
    const res = await this.request(`restaurant/minrestriction`, `GET`);
    return res; 
  }

  async createPost(data, point) {
    return await this.request(point + `/`, `POST`, data);
  }

  async loginUser(credentials) {
    return await this.request(`auth/login`, `POST`, credentials);
  }

  async logoutUser() {
    this.setToken(null);
    localStorage.setItem(this.tokenName, "");
  }

  async signupUser(credentials) {
    const res = await this.request(`auth/register`, `POST`, credentials);
    this.setToken(res.data.token);

    return res;
  }

  async listRestaurantRestrictions(restaurantId){
    const res = await this.request(`restaurant/restrictionsbyrest?restaurantid=${restaurantId}`, "GET")
    return res;
  }

  async listRestrictions() { //lists all restrictions for restaurant form 
    const res = await this.request("restrictions", "GET");
    return res;
  }

  async listUserRestrictions(){//lists user restrictions 
    const res = await this.request("restrictions/user", "GET")
    return res; 
  }

  async listDiets() {
    const res = await this.request("restrictions/diets", "GET");
    return res;
  }

  async listAllergies() {
    const res = await this.request("restrictions/allergies", "GET");
    return res;
  }

  async listSchools() {
    const res = await this.request("schools", "GET");
    return res;
  }
  // async listSchools() {
  //   const res = await this.request("schools", "GET");
  //   return res;
  // }

  async addSchoolToUser(schoolId) {
    console.log("school id in apiClient", schoolId);
    const data = { schoolId };
    return await this.request(`schools/userschool`, `PATCH`, data);
  }

  async postUserRestrictions(userRestrictions) {
    console.log("user restrictions in apiClient", userRestrictions);
    const res = await this.request(
      `restrictions/user`,
      `POST`,
      userRestrictions
    );
    return res;
  }
}

export default new ApiClient("http://localhost:3001");

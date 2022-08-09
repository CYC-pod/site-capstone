const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Restaurant {
  static async listRests(userId) {
    console.log("userId: ", userId);
    const results = await db.query(
      `SELECT *
      FROM restaurant
      WHERE user_id = $1;`,
      [userId]
    );
    return results.rows;
  }

  static async listRestsbyId(user) {
    console.log("user: ", user);
    console.log("email :", user.email)
    const results = await db.query(
      `SELECT *
      FROM restaurant
      WHERE user_id = (select id from users where email = $1);`,
      [user.email]
    );
    return results.rows;
  }

  static async PostRests(restaurant, userId) {
    if (restaurant.name.length === 0) {
      throw new BadRequestError("No restaurant name provided");
    }

    if (restaurant.location.length === 0) {
      throw new BadRequestError("No restaurant location provided");
    }

    if (restaurant.image_url === 0) {
      throw new BadRequestError("Restaurant image cannot be zero");
    }
    if (restaurant.description.length === 0) {
      throw new BadRequestError("Restaurant description cannot be zero");
    }
    const result = await db.query(
      `
            INSERT INTO restaurant(
               name,
               location,
               image_url,
               description,
           user_id)
            VALUES ($1,$2,$3,$4,$5)
            RETURNING id, name,location,image_url, description, user_id;
            `,
      [
        restaurant.name,
        restaurant.location,
        restaurant.image,
        restaurant.description,
        userId,
      ]
    );
    const results = result.rows[0];
    return results;
  }

  static async UpdateRests(restaurant, userId) {
    req.body = ` UPDATE restaurant
      SET column1 = value1, column2 = value2...., columnN = valueN
      WHERE [condition];`;
  }

  static async createRestaurant(user, restaurantForm){
    // id          SERIAL PRIMARY KEY,
    // user_id     INTEGER,
    // name        TEXT NOT NULL, 
    // location    INTEGER,
    // image_url   TEXT,
    // description TEXT NOT NULL,
    // FOREIGN KEY

    await db.query(
      `insert into restaurant (user_id, name, location, image_url, description)
      values ((select id from users where email = $1), $2, $3, $4, $5)`,
      [
        user.email,
        restaurantForm.name,
        restaurantForm.location,
        restaurantForm.image,
        restaurantForm.description
      ]
    )
  }

  static async addAccommodation(restaurant, restrictions) {
    for (let i = 0; i < restrictions.length; i++) {
      const result = await db.query(
        `
        INSERT INTO Accommodation(restaurant_id, restriction_name)
        VALUES ($1,$2)
        RETURNING restaurant_id, restriction_name
        `,
        [restaurant.id, restrictions[i]]
      );
    }
  }
}
module.exports = Restaurant;

const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Restaurant {
  static async listRests(userId) {
    console.log("userId: " , userId)
    const results = await db.query(
      `SELECT *
      FROM restaurant
      WHERE user_id = $1;`,
      [userId]
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
        restaurant.image_url,
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

  static async addAccommodation(restaurant, restrictions){
    for(let i = 1; i < restrictions.length + 1; i++)
    {
      const result = await db.query(
        `
        INSERT INTO Accommodation(restaurant_id, restriction_id)
        VALUES ($1,$2)
        RETURNING restaurant_id, restriction_id
        `, [restaurant.id, i]
      )

    }
    
  }
}
module.exports = Restaurant;

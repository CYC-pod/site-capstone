const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Restaurant {
  static async listRests(userId) {
    console.log("userId: " , userId)
    const results = await db.query(
      `SELECT *
      FROM restaurant
      `,
    );
    return results.rows;
  }

  static async listRestaurantRestrictions(restaurantId){
    const result = await db.query(
      `
      SELECT restriction_name
      FROM accommodation 
      WHERE restaurant_id = $1
      `, [restaurantId]
    )
    const results = result.rows.map((row) => row.restriction_name)
    return results;
  }

  static async listRestsByRestriction(userRestrictions){
    console.log(userRestrictions)
    const result = await db.query(
      `
      SELECT * 
      FROM restaurant
      INNER JOIN accommodation
      ON restaurant.id = accommodation.restaurant_id
      WHERE restriction_name = ANY ($1)
      `,
      [userRestrictions]
    )
    const results = result.rows
    console.log("results in rest model: " , results)
    return results
  }

  static async restaurantByAllRestrictions(userId){
    const result = await db.query(
      `
      SELECT restaurantid FROM (SELECT COUNT (*) AS numMatches, r.id AS restaurantId
      FROM accommodation as a, restaurant as r, (SELECT restriction_name FROM user_restriction WHERE user_id = $1) AS sur
      WHERE r.id = a.restaurant_id AND a.restriction_name = sur.restriction_name GROUP BY r.id) AS nrm, (SELECT count (*)
            FROM user_restriction 
            WHERE user_id = $1) as sur
      WHERE nrm.numMatches = count;
      `,[userId]
    );
    const results = result.rows[0];
    return results;
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

  static async addAccommodation(restaurant, restrictions){
    for(let i = 0; i < restrictions.length ; i++)
    {
      const result = await db.query(
        `
        INSERT INTO Accommodation(restaurant_id, restriction_name)
        VALUES ($1,$2)
        RETURNING restaurant_id, restriction_name
        `, [restaurant.id, restrictions[i]]
      )
    }
  }
}

module.exports = Restaurant;

const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Accomidation{

    static async postAccomidations(accomidation){
        const result = await db.query(
            `
            INSERT INTO accomidation(restaurant_id, restriction_id)
            VALUES($1,$2)
            RETURNING restaurant_id, restriction_id;  
            `,
            [accomidation.restaurant_id, accomidation.restriction_id]);
            const results = result.rows[0];
            return results;
    }

}
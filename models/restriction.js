const bcrypt = require("bcrypt")
const { BCRYPT_WORK_FACTOR } = require("../config")
const db = require("../db")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")

class Restrictions{
    static async listRestrictions(){
        const results = await db.query(
            `
            SELECT * 
            FROM restriction;
            `
        ); 
        return results.rows; 
    }

    static async postRestrictions(restriction){
        if (restriction.name.length === 0) {
            throw new BadRequestError("No restriction name provided");
        }
    
        if (restriction.type.length === 0) {
            throw new BadRequestError("No restriction type provided");
        }
    
        if (restriction.image_url === 0) {
            throw new BadRequestError("No school image provided");
        }
        
        const result = await db.query(
        `
        INSERT INTO school(name, image, location)
        VALUES($1,$2,$3)
        RETURNING name, image, location;  
        `,
        [school.name, school.image, school.location]);
        
        const results = result.rows[0];
        return results;
    }
}

module.exports = Restrictions;


/*
 - query to fetch restriction ID where name = "vegan"
 - query to fetch all restaurant Ids from accomidation where restrictionID = result of first query 
 


*/
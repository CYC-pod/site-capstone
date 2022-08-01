const bcrypt = require("bcrypt")
const { BCRYPT_WORK_FACTOR } = require("../config")
const db = require("../db")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")

class Restrictions{
    static async listRestrictions(){
        const results = await db.query(
            `
            SELECT * 
            FROM RESTRICTION;
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
        
        const result = await db.query(
        `
        INSERT INTO restriction(name, type)
        VALUES($1,$2)
        RETURNING name, type;  
        `,
        [restriction.name, restriction.type]);
        
        const results = result.rows[0];
        return results;
    }
}

module.exports = Restrictions;


/*
 - query to fetch restriction ID where name = "vegan"
 - query to fetch all restaurant Ids from accomidation where restrictionID = result of first query 



*/
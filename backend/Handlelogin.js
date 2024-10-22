//const httpStatus  = require("http-status");
import httpStatus from "http-status";
//const {LoginSchema} = require("./schema/LoginSchema")
import LoginSchema from './schema/LoginSchema.js';

//const bcyrpt = require("bcrypt");
import bcrypt from 'bcrypt';

//const crypto  = require("crypto");
import crypto from "crypto";

const register = async (req, res) => {
    const { username, mailid, password } = req.body;

    try {
        let mail = await LoginSchema.findOne({ mailid });
        if (mail) {
            console.log(mail);
            return res.status(httpStatus.FOUND).json({ message: "user alerady exist" })
        }
        //if user not exist
        let salts = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salts);
        mail = await LoginSchema.create({
            username: username,
            mailid: mailid,
            password: hashpassword
        })
        res.json(mail);
        res.status(httpStatus.CREATED).json({ message: "Registered sucess" })
    } catch (error) {
        throw error;
    }
}

//login part
 const login = async (req, res) => {
    const { mailid, password } = req.body;

    if (!mailid || !password) {

        return res.status(400).json({ message: "Please Provide " });
    }

    try {
        let temp_mailid = null;
        temp_mailid = await LoginSchema.findOne({ mailid });
        
        if (temp_mailid == null) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "username not found" });// user name not exist
        }

        

        //hasing password
        
        let isPasswordCorrect = await bcrypt.compare(password,temp_mailid.password);
        if (isPasswordCorrect == true) {
            let token = crypto.randomBytes(20).toString("hex");
            temp_mailid.token = token;
            await temp_mailid.save();
            console.log({ message: "login sucessfully" });

           
            return res.status(httpStatus.FOUND).json({message: "login sucessfully"})
        } else {

            res.status(httpStatus.NOT_FOUND).json({ message: "invalid username and password" });

           return  res.json({ message: "invalid username and password" });
        }

    } catch (error) {
        throw res.json({ message: `Somthing Went wrong ${error}` });
    }
}

export {login,register}

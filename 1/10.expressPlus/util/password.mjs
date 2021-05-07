
import bcrypt from "bcrypt";

const saltrounds = 12;   
const plainTextPassword = "napster123"
const incorrectpassword = "Secretpassword"
const hashedPassword = "$2b$12$E3XrAeGJjRZkxTt3NKN0Lu1wpz4Z3br6dXJAJAkY4c6TA8rRLKImy";



bcrypt.hash(plainTextPassword, saltrounds, (error, hash) =>{
    console.log(hash);
});

bcrypt.compare(plainTextPassword, hashedPassword, (error, result) =>{
    console.log("is the password correct", result);
})

bcrypt.compare(incorrectpassword, hashedPassword, (error, result) =>{
    console.log("is the password correct", result);
})

export default {}

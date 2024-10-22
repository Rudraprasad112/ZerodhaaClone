import {Schema,model} from "mongoose";


const LoginSchema = new Schema({
    username:{type:String,required:true},
    mailid:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    token:{type:String}
});
const Login = new model("login",LoginSchema)
export default Login;
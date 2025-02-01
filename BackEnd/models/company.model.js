import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    discription:{
        type: String
    },
    website:{
        type: String, // url
    },
    location:{
        type: String
    },
    logo:{
        type: String, // url of the logo
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{timestamps: true});
export const Company = mongoose.model("Company",companySchema);

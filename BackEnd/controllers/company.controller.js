import {Company} from "../models/company.model.js"
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/dataUri.js";
export const registerCompany = async (req,res) => {
    try {
        const {companyName} = req.body; 
        const file = req.file;

        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        if(!companyName){
            return res.status(400).json({
                mess: "Please enter company Name",
                success: false
            })
        };
        let company = await Company.findOne({name:companyName}); 
        if(company){
            return res.status(400).json({
                mess: "Company is already registerd!!",
                success: false
            });
        }
        company = Company.create({
            name: companyName,
            userId: req.id,
            logo : cloudResponse.secure_url
        }) 
        return res.status(200).json({
            mess: "Company registerd Successfully",
            company,
            success: true         
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const getCompany = async (req,res) =>{
    try {
        const userId = req.id;
        const companies = await Company.find({userId});
        if(!companies){
            return res.status(404).json({
                mess: "Companies Not Found",
                success: false
            })
        }
        return res.status(200).json({
            mess: "your companies",
            companies,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const getCompanyById = async (req,res) =>{
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if(!company){
            return res.status(404).json({
                mess: "Company Not Found",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const updateCompany = async (req,res) =>{
    try {
        const {name,discription,website,location} = req.body;
        const file = req.file;
        // cloudinary will comes here
        const updatedData = {name,discription,website,location};

        const company = await Company.findByIdAndUpdate(req.params.id,updatedData,{new:true});

        if(!company){
            return res.status(404).json({
                mess: "Company not found!!",
                success: false
            })
        }
        return res.status(200).json({
            mess: "Company information Updated!!",
            success: true,
        })
    } catch (error) {
        console.log(error);
    }
} 
const { response } = require("express");
const Response = require("../../utils/response");

module.exports=(customerService)=>{
    const {FindAllCustomer, registerCustomer} = customerService();
    const create = async (req, res)=>{
        try {
            const payload = req.body;
            const customer = await registerCustomer(payload)
            res.json(Response().successMessage(res.satusCode, 'SUCCESS', customer))
        } catch (error) {
            res.json(Response().errorMessage(res.satusCode,'ERROR'))
            // return error.message;
            
        }
    }
    const list = async (req, res)=>{
        try {
            // const payload = req.body;
            const customer = await FindAllCustomer()
            res.json(Response().successMessage(res.satusCode, 'SUCCESS', customer))
        } catch (error) {
            res.json(Response().errorMessage(res.satusCode,'ERROR'))
            // return error.message;
            
        }
    }
    return {create, list}

}
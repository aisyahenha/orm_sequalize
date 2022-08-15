//const {create, list} = require("../repository/customer.repository")

CustomerService =(CustomerReository)=>{
    const {create, list} = CustomerReository();
    const registerCustomer = async (payload)=>{
        try {
            return await create(payload)
            
        } catch (error) {
            return Array.message;
            
        }
    }
    const FindAllCustomer = async ()=>{
        try {
            return await list()
            
        } catch (error) {
            return Array.message;
            
        }
    }
    return {FindAllCustomer, registerCustomer}
}
module.exports= CustomerService
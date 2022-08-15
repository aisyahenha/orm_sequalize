const CustomerService = require ('../service/customer.service')

module.exports= (repoManager) =>{
    const {customerReository} = repoManager();
    const customerService =()=>{
        CustomerService()
    }
}
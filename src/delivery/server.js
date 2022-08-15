const express = require('express')
const app = express();
const config = require ("../config/config");
const infraManager = require('../manager/config.manager');
const jsonmiddleware = require("./middleware/json.middleware")
const approuter = require("./router/app.route")
const customerRoute = require ("../delivery/router/customerRoute");
const infraManager = require('../manager/config.manager');
const managerRepository = require('../manager/manager.repository');
const managerService = require('../manager/manager.service');
const customerController = require('../delivery/controller/customer.controller');


module.exports=()=>{
    const {host, port} = config();
    const InfraManager = infraManager(config)
    const RepoManager = managerRepository(InfraManager)
    const ServiceManager =()=> managerService(RepoManager);

    const initCustomerRoute = ()=>{
        const CustomController = customerController
    }
}




import express from 'express';
import UserService from '../components/User/service';

const UserRouter: express.Router = express.Router();

UserRouter.post('category', UserService.createCategory);
UserRouter.get('category', UserService.findAllCategory);
UserRouter.put('category',UserService.updateCategory);
UserRouter.delete('category/:id',UserService.deleteCategory);

//Service
UserRouter.post('service',UserService.createService);
UserRouter.put('service/:id',UserService.updateService);
UserRouter.delete('service/:id',UserService.deleteService);
UserRouter.get('service',UserService.findAllServices);
UserRouter.get('service/:id',UserService.findService);

//CashRegister
UserRouter.post('cashRegister',UserService.createCash);
UserRouter.put('cashRegister/:id',UserService.openCash);
UserRouter.put('cashRegister/:id',UserService.closeCash);
UserRouter.get('cashRegister/:id',UserService.findCash);

export default UserRouter; 
import { ICash } from "../../config/models/cashRegister";
import { ICategory } from "../../config/models/category";
import { CashEnum } from "../../config/models/enums/cashEnum";
import { IService } from "../../config/models/service";


export interface IUserService{
    createCategory(ICategory: ICategory): Promise<ICategory>;
    findAllCategory(): Promise <ICategory[]>;
    updateCategory(body: any): Promise<ICategory>;
    deleteCategory(id: string): Promise<void>;

    //Service
    createService(IService: IService): Promise<IService>;
    updateService(body:any): Promise<IService>;
    deleteService(id: string): Promise <void>;
    findAllServices(): Promise < IService[] >;
    findService(id: string): Promise <IService>;

    //CashRegister
    createCash(ICash: ICash): Promise<ICash>;
    openCash(_id:string): Promise<ICash>;
    closeCash(_id: string): Promise<ICash>;
    findCash(_id: string): Promise<ICash>;
}
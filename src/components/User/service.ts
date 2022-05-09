import cashRegister, { ICash } from "../../config/models/cashRegister";
import category, { ICategory } from "../../config/models/category";
import { CashEnum } from "../../config/models/enums/cashEnum";
import service, { IService } from "../../config/models/service";
import { IUserService } from "./interface";

const UserService: IUserService = {

    async createCategory(body: ICategory): Promise<ICategory>{
        try {
            const categories: ICategory = new category({
                name: body.name,
                desc: body.desc
            });

            const query: any = await category.findOne({ name: body.name });

            if (query)
                throw new Error("Esta Categoria ja foi registrada...");

            const saved: ICategory = await categories.save();

            return saved;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    async findAllCategory(): Promise <ICategory[]>{
        try {
            return await category.find({});
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

   async updateCategory(body: any): Promise<ICategory>{
       return body;
   },

    async deleteCategory(id: string): Promise<void>{
        try {
            const query = await category.remove({ _id: id });
            if (query)
                return query;
            else
                throw new Error("Categoria não encontrado");
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    //Service
    async createService(body: IService): Promise<IService>{
        try {
            const newService: IService = new service({
                name: body.name,
                desc: body.desc,
                status: body.status,
                category: body.category   
            });

            const query: any = await service.findOne({ name: body.name });

            const categoryExist = await category.findOne({name: body.category});

            if (query)
                throw new Error("Este Serviço ja foi registrado...");

            if(!categoryExist)
                throw new Error("Categoria não existe");

            const saved: IService = await newService.save();

            return saved;
        } catch (error:any) {
            throw new Error(error.message);
        }
    },

    async updateService(body:any): Promise<IService>{
        return body;
    },
    async deleteService(id: string): Promise <void>{
        try {
            const query = await service.remove({ _id: id });
            if (query)
                return query;
            else
                throw new Error("Serviço não encontrado");
        } catch (error: any) {
            throw new Error(error.message);
        }
    },
    async findAllServices(): Promise < IService[] >{
        try {
            return service.find({});  
        } catch (error: any) {
            throw new Error(error.message)
        }
    },
    async findService(id: string): Promise <IService>{
        try {
            const query: any = service.findOne({_id: id});
            if(query)
                return query;
            else
                throw new Error("Serviço não encontrado");
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    async createCash(body: ICash): Promise<ICash>{
        try {
            const newCash: ICash = new cashRegister({
                total: body.total
            });
            const saved = newCash.save();
            return saved;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    async openCash(_id:string): Promise<any>{
        try {
            return await cashRegister.findByIdAndUpdate({_id}, {$set: {status: CashEnum.open}});
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    async closeCash(_id:string): Promise<any>{
        try {
            return await cashRegister.findByIdAndUpdate({_id}, {$set: {status: CashEnum.closed}});
        } catch (error:any) {
            throw new Error(error.message);
        }
    },
    async findCash(_id: string): Promise<any>{
        try {
            const cash = await cashRegister.findById({_id});
            if(cash)
                return cash;
            else
                throw new Error('Caixa não Encontrado!!') ;
        } catch (error:any) {
                throw new Error(error.message);
        }
    }

}

export = UserService;
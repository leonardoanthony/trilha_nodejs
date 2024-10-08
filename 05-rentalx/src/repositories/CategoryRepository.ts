import { Category } from "../model/Category";

interface ICreateCategoryDTO{
    name: string;
    description: string;
}

export class CategoriesRepository {
    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    create({name, description}: ICreateCategoryDTO): void{

        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })
        
        this.categories.push(category)
    }

    list() {
        return this.categories;
    }

    findByName(name){
        const category = this.categories.find(category => category.name === name);

        return category;
    }
}
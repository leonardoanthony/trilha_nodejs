import { CategoriesRepository } from "../repositories/CategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {

    constructor(private categoryRepository: CategoriesRepository) {}

    execute({name, description} : IRequest){
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if(categoryAlreadyExists){
            throw new Error('Category Already Exists');
        }

        this.categoryRepository.create({name, description});
    }
}
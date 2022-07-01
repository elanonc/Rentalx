import { Category } from "../model/Category";

interface ICreateCategoryDTO { // Utilizando o conceito de DTO
    name: string;              // DTO: Data transfer object => Criar um objeto que vai ser responsável pela transferencia de dados entre uma camada e outra
    description: string;    
}

class CategoriesRepository {
    
    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    create({name, description}: ICreateCategoryDTO) {
        const category = new Category();

        Object.assign(category, { // atribui item a item dentro do objeto passado por parametro
            name, 
            description, 
            created_at: new Date(),
        })

        this.categories.push(category);

    }
}

export { CategoriesRepository };
import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

// Utilizando Singleton Pattern 

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor(){ // construtor private para não poder criar uma nova instancia com new CategoriesRepository()
        this.categories = [];
    }

    private static getInstance(): CategoryRepository{ //Cria instancia ou repassa instancia já existente
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }

    create({name, description}: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name, 
            description, 
            created_at: new Date(),
        })

        this.categories.push(category);

    }

    list(): Category[] {
        return this.categories;
    } 

    findByName(name: String): Category {
        const category = this.categories.find(category => category.name == name);

        return category;
    }
}

export { CategoriesRepository };
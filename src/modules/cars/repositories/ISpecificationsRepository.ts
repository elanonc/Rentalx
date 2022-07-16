import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: String;
    description: String;
}

interface ISpecificationRepository {
    create( { description, name}: ICreateSpecificationDTO ) : void;
    findByName(name: string): Specification; 
}

export { ISpecificationRepository, ICreateSpecificationDTO };
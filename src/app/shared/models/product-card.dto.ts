import { CategoryDTO } from "../../Category/models/category.dto";



export interface ProductCardDto{
    id: string;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: CategoryDTO;
    creationAt: Date;
    images: string[];
}
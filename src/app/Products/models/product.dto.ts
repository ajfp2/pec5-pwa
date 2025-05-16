import { CategoryDTO } from "../../Category/models/category.dto";

export class ProductDTO {
    id!: string;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: CategoryDTO;
    images: string[];

    constructor(title: string, slug: string, price: number, description: string, category: CategoryDTO, imgs: string[]) {
        this.title = title;
        this.slug = slug;
        this.price = price;
        this.description = description;
        this.category = category;
        this.images = imgs;
    }
}
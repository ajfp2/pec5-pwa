import { CategoryDTO } from "../../Category/models/category.dto";

export class ProductDTO {
    id!: string;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: CategoryDTO;
    creationAt: Date;
    images: string[];

    constructor(title: string, slug: string, price: number, description: string, category: CategoryDTO, create: Date, imgs: string[]) {
        this.title = title;
        this.slug = slug;
        this.price = price;
        this.description = description;
        this.category = category;
        this.creationAt = create;
        this.images = imgs;
    }
}
export class CategoryDTO {
  id!: string;
  name: string;
  slug: string;
  image: string;

  constructor(name: string, slug: string, image: string) {
    this.name = name;
    this.slug = slug;
    this.image = image;
  }
}
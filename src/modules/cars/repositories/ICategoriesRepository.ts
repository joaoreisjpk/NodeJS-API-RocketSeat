import { Category } from "../entities/Category";

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: { name: string, description: string }): void
};

export { ICategoriesRepository }
 
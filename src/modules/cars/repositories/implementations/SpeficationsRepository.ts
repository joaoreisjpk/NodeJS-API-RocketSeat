import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";


class SpeficationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: SpeficationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpeficationsRepository {
    if(!SpeficationsRepository.INSTANCE) {
      SpeficationsRepository.INSTANCE = new SpeficationsRepository()
    }
    return SpeficationsRepository.INSTANCE;
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification);
  }

  findByName(name: string): Boolean {
    return this.specifications.some(specification => specification.name === name)
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpeficationsRepository };

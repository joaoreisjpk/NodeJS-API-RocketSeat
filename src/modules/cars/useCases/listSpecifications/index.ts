import { SpeficationsRepository } from "../../repositories/implementations/SpeficationsRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";


const specificationRepository = SpeficationsRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository)
const listSpecificationController = new ListSpecificationController(listSpecificationUseCase);

export { listSpecificationController };

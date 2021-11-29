import { PartialType } from "@nestjs/mapped-types";
import { Cola } from "../entities/cola.entity";

export class CreateColaDto extends PartialType(Cola){
}

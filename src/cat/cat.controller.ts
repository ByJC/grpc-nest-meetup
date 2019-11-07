import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

interface CatById {
  id: number;
}

interface Cat extends CatById  {
  name: string;
}

const CATS: Cat[] = [
  {id: 1, name: 'Node'},
  {id: 2, name: 'Deno'},
];

@Controller('cat')
export class CatController {

  @GrpcMethod('CatService', 'FindOne')
  findOne(data: CatById): Cat {
    return CATS.find(({ id }) => id === data.id);
  }
}

import { Controller, OnModuleInit, Get } from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod } from '@nestjs/microservices';

import { grpcClientOptions } from '../grpc-client.options';
import { Observable } from 'rxjs';

interface CatById {
  id: number;
}

interface Cat extends CatById {
  name: string;
}

// interface CatService {
//   findOne(data: CatById): Observable<any>;
// }

@Controller('cat')
export class CatController /*implements OnModuleInit */ {
  // @Client(grpcClientOptions)
  // private readonly client: ClientGrpc;

  // private catService: CatService;

  // @Get()
  // execute(): Observable<any> {
  //   return this.catService.findOne({ id: 1 });
  // }

  // onModuleInit() {
  //   this.catService = this.client.getService<CatService>('CatService');
  // }

  @GrpcMethod('CatService', 'FindOne')
  findOne(data: CatById): Cat {
    const cats: Cat[] = [{ id: 1, name: 'Node' }, { id: 2, name: 'Deno' }];
    return cats.find(({ id }) => id === data.id);
  }
}

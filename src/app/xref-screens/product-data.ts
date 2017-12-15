import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IProduct } from './product';

export class ProductData implements InMemoryDbService {

    createDb() {
       const product: IProduct[] = [
          {
            'id': 1,
            'memberCode': 'INDI',
            'procedureCode': 'BOB',
            'productCode': 'Scott'
          },
          {
            'id': 2,
            'memberCode': 'INDI',
            'procedureCode': 'Sheena',
            'productCode': 'Carson'
          },
          {
            'id': 3,
            'memberCode': 'INDI',
            'procedureCode': 'Obama',
            'productCode': 'Trump'
          }
        ];
        return { product };
    }
}

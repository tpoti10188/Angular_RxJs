export interface IProduct {
    id: number;
    memberCode: string;
    procedureCode: string;
    productCode: string;
}
export class ProductbyProc implements IProduct {
    constructor(public id: number,
                public memberCode: string,
                public procedureCode: string,
                public productCode: string) { }
}

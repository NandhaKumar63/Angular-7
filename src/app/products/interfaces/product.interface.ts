export interface IProduct {
    id: number;
    name: string;
    displayName: string;
    itemNumber: number;
    retailPrice: number;
    applicablePrice: number;
    shortDescription: string;
    imageModelList: any[];
    stockAvailable: boolean;
}
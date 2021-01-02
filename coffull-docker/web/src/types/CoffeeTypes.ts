// Coffeeのtype
export type CoffeeType = {
    id: number,
    name: string,
    feature: string,
    taste: string,
    impressions: string,
}

// CoffeeDetailのURLパラメータ
export type CoffeeDetailParamType = {
    coffeeId: string;
};
declare type StringOfLength<Min, Max> = string & {
    __value__: never;
};
export declare const stringOfLength: <Min extends number, Max extends number>(input: unknown, min: Min, max: Max) => StringOfLength<Min, Max>;
export {};

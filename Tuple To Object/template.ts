type TupleToObject<T extends readonly PropertyKey[]> = {
    [TItem in T[number]]: TItem;
};

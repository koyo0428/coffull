// CoffeeNoteのtype
export type CoffeeNoteType = {
    noteId: string | null,
    name: string,
    feature: string,
    taste: string,
    impression: string,
}

// CoffeeDetailのURLパラメータ
export type CoffeeNoteDetailParamType = {
    noteId: string;
};
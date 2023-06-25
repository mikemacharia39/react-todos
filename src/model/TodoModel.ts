export class TodoModel {

    rowNumber: number;
    rowTask: string;
    rowDescription: string;

    constructor(rowNumber: number, rowTask: string, rowDescription: string) {
        this.rowNumber = rowNumber;
        this.rowTask = rowTask;
        this.rowDescription = rowDescription;
    }
}
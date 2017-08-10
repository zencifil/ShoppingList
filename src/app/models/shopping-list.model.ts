import { ShoppingListItem } from "./shopping-list-item.model";
import { Person } from "./person.model";

export class ShoppingList {
    constructor(name: string, 
        createTime: Date, 
        createdBy: Person, 
        dueDate: Date, 
        isDone: boolean, 
        items: ShoppingListItem[]) {}
}
const formatValue = (input: string | number | boolean): string | number | boolean => {
    if (typeof input === "string") return input.toUpperCase();
    if (typeof input === "number") return input * 10;
    return !input;
}



const getLength = (input: string | (number | string | boolean)[]): number => {
    if (typeof input === "string") return input.length;
    return input.length;
}



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}



const filterByRating = (arr: { title: string, rating: number }[]): { title: string, rating: number }[] => {
    return arr.filter(item => item.rating >= 4);
}



const filterActiveUsers = (arr: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {
    return arr.filter(item => item.isActive);
}



interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}
function printBookDetails(input: Book ): void {
    console.log(`Title: ${input.title}, Author: ${input.author}, Published: ${input.publishedYear}, Available: ${input.isAvailable ? "yes" : "No"}`);
}



function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
    let output: (number | string)[] = [];

    for (let elem of [...arr1, ...arr2]) {
        let exists = false;
        for (let outputElem of output) {
            if (elem === outputElem) {
                exists = true;
            }
        }
        if (!exists) {
            output = [...output, elem]
        }
    }
    return output;
}



const calculateTotalPrice = (arr: {
    name: string,
    price: number,
    quantity: number,
    discount?: number
}[]): number => {
    let output = 0;

    arr.reduce((sum, item) => {
        if (item.discount === undefined) {
            sum += item.price * item.quantity;
        } else {
            sum += item.price * item.quantity * (1 - (item.discount / 100));
        }
        output = sum;
        return sum;
    }, 0)
    return output;
}
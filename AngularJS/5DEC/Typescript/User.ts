export class User {
    private name: string;
    private age: number;
    private isIndian: boolean;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.isIndian = true;
    }
    getname(): string {
        return this.name;
    }
}
export class Employee extends User{

}
// let u1=new User("ABC",45);
// console.log(u1.getname());
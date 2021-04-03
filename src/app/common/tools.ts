export abstract class TOOLS{
    static generateRandomNumber(min:number,max:number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
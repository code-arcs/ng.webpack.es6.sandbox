class RandomNames {
    constructor() {
        this.names = ['Dennis', 'Stephan', 'Jonas', 'Georg'];
    }

    getName() {
        const totalNames = this.names.length;
        const rand = Math.floor(Math.random() * totalNames);
        return this.names[rand];
    }
    getNameAtIndex(index) {
        return this.names[index];
    }
}

export default  RandomNames;

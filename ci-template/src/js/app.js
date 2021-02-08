export default class Character {
    constructor(name, type){
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        
        if (name.length < 2 || name.length > 10 || typeof (name) !== 'string') {
            throw new Error('Ошибка в имени');
        }

        if (!types.includes(type)) {
            throw new Error ('Ошибка в типе');
        }

        this.name = name;
        this.type = type;
        this.level = 1;
        this.health = 100;
    }
}
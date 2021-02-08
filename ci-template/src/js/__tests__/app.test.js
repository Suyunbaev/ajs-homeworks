import {Daemon, Zombie, Undead, Magician, Swordsman, Bowman} from '../typeMan';
import Character from '../app';

test('Наследуется от Character', () => {
    expect(new Zombie('Ann', 'Zombie')).toBeInstanceOf(Character);
  });
  
  test('Наследуется от Character', () => {
    expect(new Undead('Ann', 'Undead')).toBeInstanceOf(Character);
  });
  
  test('Создание нового персонажа Zombie', () => {
    const received = new Zombie('Ann', 'Zombie');
    const expected = {
      name: 'Ann',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(received).toEqual(expected);
  });
  
  test('Создание нового персонажа Bowman', () => {
    const received = new Bowman('Ann', 'Bowman');
    const expected = {
      name: 'Ann',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(received).toEqual(expected);
  });
  
  test('Создание нового персонажа Undead', () => {
    const received = new Undead('Ann', 'Undead');
    const expected = {
      name: 'Ann',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(received).toEqual(expected);
  });
  
  test('Создание нового персонажа Swordsman', () => {
    const received = new Swordsman('Ann', 'Swordsman');
    const expected = {
      name: 'Ann',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(received).toEqual(expected);
  });
  
  test('Создание нового персонажа Magician', () => {
    const received = new Magician('Ann', 'Magician');
    const expected = {
      name: 'Ann',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(received).toEqual(expected);
  });
  
  test('Создание нового персонажа Daemon', () => {
    const received = new Daemon('Roman', 'Daemon');
    const expected = {
      name: 'Roman',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(received).toEqual(expected);
  });
  
  test('Тип Character', () => {
    const received = typeof Character;
    const expected = 'function';
    expect(received).toBe(expected);
  });
  
  test('Проверка свойств', () => {
    const magic = new Magician('Ann', 'Magician');
    const received = magic.attack;
    const expected = 10;
    expect(received).toBe(expected);
  });
  
  test('Ошибка в name', () => {
    const errName = { name: 'A', type: 'Bowman' };
    expect(() => {
      const bow = new Character(errName);
      return bow;
    }).toThrow();
  });
  
  test('Ошибка в name', () => {
    const errName = { name: 4, type: 'Bowman' };
    expect(() => {
      const bow = new Character(errName);
      return bow;
    }).toThrow();
  });
  
  test('Ошибка в name', () => {
    const errName = { name: 'AnnVasilyeva', type: 'Bowman' };
    expect(() => {
      const bow = new Character(errName);
      return bow;
    }).toThrow();
  });
  
  test('Ошибка в type', () => {
    const errType = { name: 'Ann', type: 'Bow' };
    expect(() => {
      const bow = new Character(errType);
      return bow;
    }).toThrow();
  });
  
  test('Ошибка в type', () => {
    expect(() => {
      const bow = new Daemon('Ann', 'Bow');
      return bow;
    }).toThrow();
  });
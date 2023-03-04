//---------------------- Sample Factory Function
const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName};
  };
  
  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  jimmie.attack(badGuy);

  // Object assign sample

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(target, source);

console.log(target); // outputs: { a: 1, b: 4, c: 5 }
console.log(result); // outputs: { a: 1, b: 4, c: 5 }

// Sample 2

const obj = { a: 1, b: 2 };
const clone = Object.assign({}, obj);

console.log(obj); // outputs: { a: 1, b: 2 }
console.log(clone); // outputs: { a: 1, b: 2 }

// Module Method Sample

const myModule = (function() {
    // private variables and functions
    let privateVar = 0;
  
    function privateMethod() {
      console.log('This is a private method');
    }
  
    // public API
    return {
      publicVar: 'This is a public variable',
      publicMethod: function() {
        console.log('This is a public method');
        privateVar++;
        privateMethod();
      }
    };
  })();
  
  console.log(myModule.publicVar); // outputs: "This is a public variable"
  
  myModule.publicMethod(); // outputs: "This is a public method" and "This is a private method"

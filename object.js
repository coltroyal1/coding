const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
    };

    pen.color = "red";

    console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

    const aurora = {
        name: "Aurora",
        health: 150,
        strength: 25,
        xp: 0
        };
        
        
        function describe( aurora) {
        return `${ aurora.name} has ${ aurora.health} health points and ${ aurora.strength} as strength and ${ aurora.xp} as xp`;
        }
        console.log(describe(aurora));

        // TODO: create the character object here
// Aurora is harmed by an arrow
aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learn a new skill
aurora.xp += 15;
console.log(describe(aurora));

const dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark:"grrr!"
}


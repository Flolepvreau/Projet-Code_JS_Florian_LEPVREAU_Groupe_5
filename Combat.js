class Personnage {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.attaque = attaque;
        this.precision = precision;
    }

    attaquer(adversaire) {
        const chance = Math.random();
        console.log(`${this.nom} essaie d'attaquer...`);

        if (chance < this.precision) {
            console.log(`${this.nom} a attaqué avec succès !`);
            adversaire.subirAttaque(this.attaque);
        } else {
            console.log(`${this.nom} a raté son attaque.`);
        }
    }

    subirAttaque(damages) {
        this.pointsDeVie -= damages;
        console.log(`${this.nom} a perdu ${damages} points de vie. Il lui reste ${this.pointsDeVie} points de vie.`);
        if (this.pointsDeVie <= 0) {
            console.log(`${this.nom} est éliminé !`);
        }
    }

    estVivant() {
        return this.pointsDeVie > 0;
    }
}

let personnage1 = new Personnage("Héros", 150, 50, 0.9); // 90% de chance de toucher
let personnage2 = new Personnage("Monstre", 200, 75, 0.5); // 50% de chance de toucher

while (personnage1.estVivant() && personnage2.estVivant()) {
    personnage1.attaquer(personnage2);
    if (personnage2.estVivant()) {
        personnage2.attaquer(personnage1);
    }
}

if (personnage1.estVivant()) {
    console.log(`${personnage1.nom} est le vainqueur !`);
} else {
    console.log(`${personnage2.nom} est le vainqueur !`);
}
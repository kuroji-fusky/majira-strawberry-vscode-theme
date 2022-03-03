/* Decleare 'user' interface */
interface user {
  name: string;
  species: string;
  height: number;
  id: number;
}

/* Object oriented programming is pain */
class someone {
  name: string;
  species: string;
  height: number;
  id: number;

  constructor(name: string, fursona: string, height: number, id: number) {
    this.name = name;
    this.species = fursona;
    this.height = height;
    this.id = id;
  }
}

const furryYouTuber: user = new someone("Majira Strawberry", "Fox", 6.9, 420);

interface findCutie {
  name: string,
  fursona: string
}

function identifyYourselfMF(getDatCutie: findCutie) {
  console.log(
    `Hello there ${getDatCutie.name}, you're a ${getDatCutie.fursona} right? You're such a cutie!`
  );
}
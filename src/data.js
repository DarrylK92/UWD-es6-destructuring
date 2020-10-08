const animals = [
  {
    name: "cat",
    sound: "nyan",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "wan" }
];

function useAnimals(animal) {
  return {
    animal.name,
    function() {
      console.log(animal.sound);
      
    }
  };
}

export default animals;
export { useAnimals };
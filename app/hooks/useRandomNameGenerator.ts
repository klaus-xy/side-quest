import nameWords from "../mock-data/word-bank.json";

const { adjectives: NAME_ADJECTIVES, nouns: NAME_NOUNS } = nameWords;

const useRandomNameGenerator = () => {
  const generateRandomName = () => {
    const adjective =
      NAME_ADJECTIVES[Math.floor(Math.random() * NAME_ADJECTIVES.length)];
    const noun = NAME_NOUNS[Math.floor(Math.random() * NAME_NOUNS.length)];
    return `${adjective} ${noun}`;
  };

  return { generateRandomName };
};

export default useRandomNameGenerator;

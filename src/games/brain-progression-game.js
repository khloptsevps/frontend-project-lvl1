import getRandomNumber from '../utils/math.js';
import gameEngine from '../index.js';

// buildMathProgression
const buildProgression = () => {
  let begin = getRandomNumber(0, 101);
  const step = getRandomNumber(1, 5);
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(begin);
    begin += step;
  }
  return result;
};

// game task
const task = 'What number is missing in the progression?';

// game
const gameProgression = () => {
  const progression = buildProgression();
  const index = getRandomNumber(0, 9);
  const answer = progression[index];
  const question = progression
    .map((item) => ((item === answer) ? '..' : item))
    .join(' ');
  return [question, String(answer)];
};

// game start
export default () => console.log(gameEngine(task, gameProgression));

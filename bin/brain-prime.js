#!/usr/bin/env node

import runGame from '../src/index.js';
import { rules, questionCorrectAnswer } from '../src/games/prime-game.js';

runGame(rules, questionCorrectAnswer);

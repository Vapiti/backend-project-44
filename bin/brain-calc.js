#!/usr/bin/env node

import { runGame } from "../src/index.js";
import { rules, questionCorrectAnswer } from '../src/games/calc-game.js'

runGame(rules, questionCorrectAnswer);
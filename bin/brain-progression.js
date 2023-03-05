#!/usr/bin/env node

import { runGame } from "../src/index.js";
import { rules, questionCorrectAnswer } from '../src/games/progression-game.js'

runGame(rules, questionCorrectAnswer);
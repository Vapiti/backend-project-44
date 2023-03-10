#!/usr/bin/env node

import { greeting, getName, evenGame } from "../src/games/even-game.js";

greeting();
const name = getName();
evenGame(name);
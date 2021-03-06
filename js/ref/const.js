/**
 * 
 * Constants for the game.
 * Avoid using strings as much as possible, it's easier to store and share integers.
 * 
 */

var CHARACTERS = ['Indiana', 'The Green One'];
//  Eligor, Shekhtur, Malandrax, and Joal

// on board
var EMPTY = 0;
var PLAYER1 = 1;
var PLAYER2 = 2;

//card type
var LEFT = 0;
var RIGHT = 1;
var COMBINED = 2;

// characteristics
var TARGET = 0;
var STRENGTH = 1;
var SPEED = 2;

// effects
var MOVE_ONE = 0;
var FORWARD_ONE_OR_TWO = 1;
var BACKWARD_ONE_OR_TWO = 2;
var MOVE_1_2_3 = 3;
var MOVE_1_2_3_INVULNERABLE = 4;

var GAIN_2_INIT_TOKEN = 5;
var STRENGTH_PLUS_1_NEXT_TURN = 6;
var PUSH_1_SPACE_PER_DAMAGE = 7;
var RAISE_ATTACK_2_FROM_LAST_TURN = 8;
var IGNORE_ABSORPTION_PRIORITY_MORE_7 = 9;
var NO_HIT_FURTHER_TARGET_3 = 10;
var EXACTLY_3_INIT_TOKEN = 11;
var FORWARD_0_TO_3_SPACES_LOSE_1_PER_SPACE = 12;
var IGNORE_TOLERANCE_IF_INIT_6 = 13;
var SPECIAL_LIFE_ABSORPTION = 14;
var SPECIAL_NO_BID = 15;
var SPECIAL_NO_ABSORPTION_AND_TOLERANCE = 16;
var GAIN_SPEED_PER_DAMAGE_LIMIT5 = 17;
var MOVE_OPPONENT_ONE = 18;

// game elements 
var SPEED_TOKEN = 0;

// bid effects 
var SPEED_TOKEN_FOR_INIT = 0;

// game phases
var CHOOSE_CARDS = 0;
var BID_PHASE = 1;
var START_TURN = 2;
var ATTACKER_PHASE = 3;
var DEFENDER_PHASE = 4;
var END_TURN = 5;
/**
 * Reference providing all the static game data (content). This module should be included outside of this package, but not the submobules (characters, cards). 
 * This one is the entry point.
 * 
 * @module reference
 */
define(["app/cards", "app/characters"], function(CARDS, FIGHTERS) {

    return {

        characterIndex: function(charName) {
            return CHARACTERS.indexOf(charName);
        },

        cardsForCharacter: function(charIndexOrName) {
            var idx = (typeof charIndexOrName == "number") ? charIndexOrName : this.characterIndex(charIndexOrName);

            return CARDS.HERO_CARDS[idx];
        },

        baseCards: function() {
            return CARDS.BASE_CARDS;
        },

        characterAttributes: function(charIndexOrName, version) {
            var idx = (typeof charIndexOrName == "number") ? charIndexOrName : this.characterIndex(charIndexOrName);
            if (version == undefined) version = 0;

            return FIGHTERS.DEF[idx][version];
        },

    }

});
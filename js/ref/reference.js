/**
 * Reference providing all the static game data (content). This module should be included outside of this package, but not the submobules (characters, cards). 
 * This one is the entry point.
 * 
 * @module reference
 */
define(["ref/cards", "ref/characters"], function(CARDS, FIGHTERS) {

    return {

        characterIndex: function(charName) {
            return CHARACTERS.indexOf(charName);
        },

        cardsForCharacter: function(charIndexOrName) {
            var idx = (typeof charIndexOrName == "number") ? charIndexOrName : this.characterIndex(charIndexOrName);

            return CARDS.HERO_CARDS[idx];
        },

        cardForCharacter: function(cardIndex, charIndexOrName) {
            var characterCards = this.cardsForCharacter(charIndexOrName);
            if (characterCards != undefined && characterCards.length > cardIndex) {
                return characterCards[cardIndex];
            }

            return undefined;
        },

        baseCards: function() {
            return CARDS.BASE_CARDS;
        },

        baseCard: function(cardId) {
            return this.baseCards()[cardId];
        },

        giveCard: function(cardId, charIndexOrName) {
            if (charIndexOrName != undefined) {
                return this.cardForCharacter(cardId, charIndexOrName);
            } else {
                return this.baseCard(cardId);
            }
        },

        characterAttributes: function(charIndexOrName, version) {
            var idx = (typeof charIndexOrName == "number") ? charIndexOrName : this.characterIndex(charIndexOrName);
            if (version == undefined) version = 0;

            return FIGHTERS.DEF[idx][version];
        },

    }

});
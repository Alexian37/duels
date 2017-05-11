define(["app/cards"], function(C) {

    return {

        characterIndex: function(charName) {
            return CHARACTERS.indexOf(charName);
        },

        cardsForCharacter: function(charIndexOrName) {
            var idx = (typeof charIndexOrName == "number") ? charIndexOrName : this.characterIndex(charIndexOrName);

            return C.HERO_CARDS[idx];
        }
    }

});
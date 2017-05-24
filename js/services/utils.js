define([], function() {

    var CLICK = 'click';

    function internalHandler(event) {
        var data = event.data.data;
        var context = event.data.context;
        var handler = event.data.handler;
        var $target = $(event.currentTarget);

        handler.call(context, data, $target);
    }

    function internalHandlerSimpleValue(event) {
        var fields = event.data.fields;
        var context = event.data.context;
        var handler = event.data.handler;
        var $target = $(event.currentTarget);

        var result = undefined;
        if (typeof fields == "string") {
            result = $target.data(fields);
        } else if (typeof fields == "object" && fields.length >= 1) {
            result = [];
            for (var i = 0; i < fields.length; i++) {
                result.push($target.data(fields[i]));
            }
        }



        handler.call(context, result);
    }

    return {

        povAllowedToPlay: function(pov, game) {
            return (typeof pov == "number" && game != undefined && game.workflow != undefined && game.workflow.currentPlayer === pov);
        },

        eventHandler: function(cssSelector, data, handler, context, eventType, reset) {
            if (eventType == undefined) {
                eventType = CLICK;
            }
            if (reset !== false) {
                $(cssSelector).off();
            }
            $(cssSelector).on(eventType, { context: context, data: data, handler: handler }, internalHandler);
        },

        simpleValueOnClick: function(cssSelector, fields, handler, context) {
            $(cssSelector).on(CLICK, { context: context, fields: fields, handler: handler }, internalHandlerSimpleValue);
        }

    }

});
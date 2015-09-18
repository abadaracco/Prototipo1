/**
 * Created by leonardooyharzabal on 18/09/15.
 */
Ext.define('Prototipo1.controller.Controller', {
    extend: 'Ext.app.Controller',

    config: {

        control: {
            button: {
                tap: 'onButtonTap'
            }
        }
    },

    onButtonTap: function(button) {
        Ext.getCmp('resp1').setCls('green');
        Ext.getCmp('resp2').setCls('red');
        Ext.getCmp('resp3').setCls('red');
    }
});
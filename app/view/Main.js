/*Ext.define('Prototipo1.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {

                docked: 'top',
                xtype: 'titlebar',
                title: 'BPS Trivia',


            },



        ]
    }



});

/**
 * Demonstrates a range of Button options the framework offers out of the box
 */
Ext.define('Prototipo1.view.Main',  {
    extend: 'Ext.Container',
    xtype: 'Main',
    requires: [
        'Ext.TitleBar',
        'Ext.layout.VBox',
        'Ext.getCmp',
    ],

    config: {
        layout: {
            type : 'vbox',
            pack : 'center',
            align: 'stretch'
        },
        defaults: {
            xtype: 'container',
            flex : 1,
            layout: {
                type : 'hbox',
                align: 'middle'
            },
            defaults: {
                xtype : 'button',
                flex  : 1,
                margin: 10
            }
        },
        items: [

            {

                docked: 'top',
                xtype: 'titlebar',
                title: 'BPlayS',


            },

            {
                items: [
                    {
                        xtype:'button',
                        ui:'plain',
                        text: '¿Cuál es el salario mínimo nacional?',


                    },

                ]
            },

            {
                items: [
                    {
                        xtype:'button',
                        id: 'resp1',
                        text: '$ 10.000',


                        listeners: {
                            tap: function(b) {

                                alert("Acertaste!!");

                            }
                        },



                    },

                ]
            },
            {
                items: [
                    {
                        id: 'resp2',
                        text: '$ 12.000',

                        listeners: {
                            tap: function() {
                                alert("Fallaste :(");

                            }
                        }
                    },




                ]
            },

            {
                items: [
                    {
                        id: 'resp3',
                        text: '$ 14.000',

                        listeners: {
                            tap: function() {
                                alert("Fallaste :(");

                            }
                        }
                    },
                ]
            },

        ]
    },


});





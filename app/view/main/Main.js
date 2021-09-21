/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('VT.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    // reference: 'main',
    // controller: 'extend',
    
    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'VT.view.iag.IagNestedList',
        'VT.view.home.Home',
        'VT.view.ExtendController'
    ],

    controller: 'extend',
    viewModel: 'main',

    id: 'main',
    // reference:'mainMainPanel',

    layout: {
        type: 'card',
        animation: 'fade'
    },

    defaults: {
        tab: {
            iconAlign: 'top',
        }
    },
    

    tabBarPosition: 'bottom',

    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Начало',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'home',
                title: 'Изпълнителна агенция по горите',
                // reference: 'home'
            }]
        },
        {
            title: 'ИАГ',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'iaglist'
            }]
        },
        {
            title: 'За програмата',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'iaglist'
            }]
        },
    ]
});

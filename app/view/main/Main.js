/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('VT.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    controller: 'vt',    
    
    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'VT.view.iag.IagNestedList',
        'VT.view.home.Home',
    ],

    id: 'main',

    layout: {
        type: 'card',
        animation: 'fade'
    },

    tabBarPosition: 'bottom',

    items: [
        {
            xtype: 'home',
            title: 'Изпълнителна агенция по горите',
        },
        {
            xtype: 'iagnestedlist',
            title: 'Изпълнителна агенция',
        },
        {
            xtype: 'rdgnestedlist',
            title: 'Регионални дирекции',
        },
        {
            xtype: 'dgsnestedlist',
            title: 'Горски стопанства',
        },
        {
            html: 'Търсене',// xtype: 'searchnestedlist',
            title: 'Търсене в БД',
        },
        {
            xtype: 'dpnestedlist',
            title: 'Държавни предприятия',
        },
        {
            html: 'За приложението',// xtype: 'about',
            title: 'За приложението',
        },
       
    ]
});

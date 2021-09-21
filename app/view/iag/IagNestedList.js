
Ext.define('VT.view.iag.IagNestedList',{
    extend: 'Ext.dataview.NestedList',
    xtype: 'iaglist',

    controller: 'extend',

    requires: [
        'VT.view.iag.IagNestedListController',
        'VT.view.iag.IagNestedListModel',
        'VT.store.Iag'
    ],

    
    viewModel: {
        type: 'iag-iagnestedlist'
    },

    // html: 'Hello, World!!'
    // renderTo: document.body,
    // height: 300,
 
    title: 'Телефонен указател',
    displayField: 'text',
    toolbar: {
        items: [
            {
                xtype:'spacer'
            },
            {
                xtype: 'button',
                // id: 'btnBackToHome',
                align: 'right',
                text: 'Начало',
                handler: function(){
                    // Ext.getCmp('#iaglist');
                    var main = Ext.getCmp('main');
                     main.setActiveItem(0);
                    console.log('tap');
                }
            }
        ],
    },
    // store: {
    //     type:'iag',
    // },
    store: {
        // type: 'iag',
        model: 'VT.model.Empl',
        root: {},
        proxy: {
            type: 'jsonp',
            // url: null,
            url: 'https://vasil.iag.bg/tel/v3/rdg',
            reader: {
                type: 'json',
                rootProperty: 'items',
                // totalProperty: 'total'
            }
        },
    },
});

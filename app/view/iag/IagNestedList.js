Ext.define('VT.view.iag.IagNestedList',{
    extend: 'Ext.dataview.NestedList',
    alias: 'widget.iagnestedlist',

    controller: 'vt',

    requires: [
        'Ext.XTemplate',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.util.Filter',
    ],

    detailCard: {
        html: 'You are viewing the detail card!',
    },

    displayField: 'text',
    
    toolbar: {
        items: [
            {
                xtype:'spacer'
            },
            {
                xtype: 'button',
                align: 'right',
                // text: 'Меню',
                iconCls: 'x-fa fa-home',
                handler: function(){
                    var main = Ext.getCmp('main');
                    main.setActiveItem(0);
                }
            }
        ],
    },
   
    store: {
        id: 'iagStore',
        model: 'VT.model.Empl',
        root: {},
        proxy: {
            type: 'jsonp',
            url: 'https://vasil.iag.bg/tel/v3/iag',
            reader: {
                type: 'json',
                rootProperty: 'items',
            }
        }
    }

});

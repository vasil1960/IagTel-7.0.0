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
        },
    },

    listeners: {
        leafitemtap: function(nestedList, list, index, target, record) {
            console.log('leafitemtap');
            var detailCard = nestedList.getDetailCard();
            detailCard.setHtml([

                '<table style="text-align:center">',
                '    <tr>',
                '        <td style="padding:5px"><img src="https://vasil.iag.bg/upload/'+record.get('glav_pod')+'/'+record.get('picture')+'" width="180" heigh="180">',
                '    </td>',
                '    <tr>',
                '        <td><h1>'+record.get('text')+'</h1></td>',
                '    </tr>',
                '    <tr>',
                '        <td><small>Поделение: </small><b>'+record.get('dgs')+'</td>',
                '    </tr>',
                '    <tr>',
                '        <td><small>Моб. тел: </small><b>'+record.get('gsm')+'</b></td>',
                '    </tr>',
                '    <tr>',
                '        <td><small>Email: </small><b>'+record.get('email')+'</b></td>',
                '    </tr>',
                '    <tr>',
                '        <td><small>Длъжност: </small><b>'+record.get('dlagnost')+'</b></td>',
                '    </tr>',
                '    <tr>',
                '        <td><small>Дирекция: </small><b>'+record.get('directorate')+'</b></td>',
                '    </tr>  ',
                // '   ',
                '</table>'
            ].join(""));
        }
    },
});

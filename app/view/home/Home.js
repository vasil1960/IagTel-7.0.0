
Ext.define('VT.view.home.Home',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.home',

       controller: 'vt',
   
    // html: 'Hello, World!!'
    config: {
        layout: 'vbox',
        // titlebar: 'sdsd',
        padding: 20,
        margin: '0 0 20 0',
        // font-size: 50,
        items: [
            {
                xtype: 'panel',
                flex: 1,
                layout: 'fit',
                items: [
                    {
                        xtype: 'image',
                        src: 'resources/images/main.png'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                margin: 10,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'iagBtn',
                                margin: '',
                                icon: 'true',
                                ui:'action',
                                iconAlign: 'top',
                                iconCls: 'x-fa fa-user',
                                text: 'ИАГ',
                            },
                            {
                                xtype: 'spacer',
                                width: 20
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                disabled: false,
                                ui:'action',
                                id: 'rdgBtn',
                                iconAlign: 'top',
                                iconCls: 'x-fa fa-users',
                                text: 'РДГ'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        margin: '10 0',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'dgsBtn',
                                ui:'action',
                                iconAlign: 'top',
                                iconCls: 'x-fa fa-users',
                                text: 'ДГС/ДЛС',
                            },
                            {
                                xtype: 'spacer',
                                width: 20
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'searchBtn',
                                ui: 'action',
                                iconAlign: 'top',
                                iconCls: 'x-fa fa-search',
                                text: 'Търсене'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                ui: 'action',
                                disabled: false,
                                id: 'dpBtn',
                                iconAlign: 'top',
                                iconCls: 'x-fa fa-users',
                                text: 'ДП'
                            },
                            {
                                xtype: 'spacer',
                                width: 20
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                ui: 'action',
                                id: 'aboutBtn',
                                icon: 'true',
                                iconAlign: 'top',
                                iconCls: 'x-fa fa-question',
                                text: 'Относно'
                            }
                        ]
                    },
                ]
            }
        ]
    }
});

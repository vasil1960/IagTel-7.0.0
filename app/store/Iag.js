Ext.define('VT.store.Iag', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.iag',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.util.Filter',
        'VT.model.Empl'
    ],

    // config: {
        
    //     model: 'VT.model.Empl',
    //     remoteFilter: false,
    //     root:{},
    //     // storeId: 'Iag',
    //     // pageSize: 15,
    //     // clearOnLoad: false,
    //     // clearOnPageLoad: false,
    //     // syncRemovedRecords: false,
    //     defaultRootProperty: 'text',
    //     proxy: {
    //         type: 'jsonp',
    //         // url: null,
    //         url: 'https://vasil.iag.bg/tel/v2',
    //         reader: {
    //             type: 'json',
    //             rootProperty: 'items',
    //             // totalProperty: 'total'
    //         }
    //     },
    // }

   
});

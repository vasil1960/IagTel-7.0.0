Ext.define('VT.view.dp.DpNestedList',{
    extend: 'VT.view.iag.IagNestedList',
    
    alias: 'widget.dpnestedlist',
    
    store: {
        proxy: {
            url: 'https://vasil.iag.bg/tel/v3/dp',
        },
    },
});
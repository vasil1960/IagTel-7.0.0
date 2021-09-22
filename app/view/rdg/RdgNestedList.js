Ext.define('VT.view.rdg.RdgNestedList',{
    extend: 'VT.view.iag.IagNestedList',
    
    alias: 'widget.rdgnestedlist',
    
    store: {
        proxy: {
            url: 'https://vasil.iag.bg/tel/v3/rdg',
        },
    },
});
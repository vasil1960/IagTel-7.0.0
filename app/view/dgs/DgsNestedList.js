Ext.define('VT.view.rdg.DgsNestedList',{
    extend: 'VT.view.iag.IagNestedList',
    
    alias: 'widget.dgsnestedlist',
    
    store: {
        proxy: {
            url: 'https://vasil.iag.bg/tel/v3/dgs',
        },
    },
});
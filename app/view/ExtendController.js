Ext.define('VT.view.ExtendController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.extend',

    init: function(){
        this.control({
            '#iagBtn': {
                tap: 'onIagBtnTap'
            },
            // 'main#button': {
            //     tap: 'onBtnBackToHome'
            // },
        })
    },

   
    // onBtnBackToHome: function(){
    //     // var main = Ext.getCmp('main');
    //     // main.setActiveItem(0);
    //     console.log('btn HomeTap');
    // },
   
    onIagBtnTap: function(){
        console.log('onIagBtnTaap');
        var main = Ext.getCmp('main');
        main.setActiveItem(1);
    }
});


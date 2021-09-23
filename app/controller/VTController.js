Ext.define('VT.controller.VTController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.vt',

    init: function(){
        this.control({
            '#iagBtn': {
                tap: 'onIagBtnTap'
            },
            '#rdgBtn': {
                tap: 'onRdgBtnTap'
            },
            '#dgsBtn': {
                tap: 'onDgsBtnTap'
            },
            '#searchBtn': {
                tap: 'onSearchBtnTap'
            },
            '#dpBtn': {
                tap: 'onDpBtnTap'
            },
            '#aboutBtn': {
                tap: 'onAboutBtnTap'
            },
            // '#vasil':{
            //     leafitemtap: 'leafItemTap'
            // }
        })
    },

    onIagBtnTap: function(){
        this.btnTap(1);
    },

    onRdgBtnTap: function(){
        this.btnTap(2);
    },

    onDgsBtnTap: function(){
        this.btnTap(3);
    },

    onSearchBtnTap: function(){
        this.btnTap(4);
    },

    onDpBtnTap: function(){
        this.btnTap(5);
    },

    onAboutBtnTap: function(){
        this.btnTap(6);
    },
    
    btnTap: function(x){
        var main = Ext.getCmp('main');
        main.setActiveItem(x);
    },


    // leafItemTap: function(){
    //     console.log('ttttt');
    // }

});


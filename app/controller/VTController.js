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
            'iagnestedlist':{
                leafitemtap: 'leafItemTap'
            }
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


    leafItemTap: function(nestedList, list, index, target, record) {
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

});


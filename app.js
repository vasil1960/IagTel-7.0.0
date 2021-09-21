/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'VT.Application',

    name: 'VT',

    requires: [
        // This will automatically load all classes in the VT namespace
        // so that application classes do not need to require each other.
        'VT.*'
    ],

    // The name of the initial view to create.
    mainView: 'VT.view.main.Main'
});

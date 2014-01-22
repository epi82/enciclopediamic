/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */

Ext.onReady(function(){

    Ext.QuickTips.init();

    var msg = function(title, msg){
        Ext.Msg.show({
            title: title,
            msg: msg,
            minWidth: 200,
            modal: true,
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK
        });
    };    
    
    var fp = new Ext.FormPanel({
        renderTo: 'fi-form',
        fileUpload: true,
        width: 670,
        frame: true,
        title: 'Upload immagine',
        autoHeight: true,
        bodyStyle: 'padding: 10px 10px 0 10px;',
        labelWidth: 50,
        defaults: {
            anchor: '95%',
            allowBlank: false,
            blankText: 'Campo obbligatorio',
            msgTarget: 'side'
        },
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Nome',
            name: 'photo-name'
        },{
            xtype: 'fileuploadfield',
            id: 'form-file',
            emptyText: 'Seleziona immagine...',
            fieldLabel: 'Foto',
            name: 'photo-path',
            buttonText: '',
            buttonCfg: {
                iconCls: 'upload-icon'
            }
        }],
        buttons: [
        {
          text:'Indietro',
          iconCls:'home',
          listeners: { 
          render: function(button){ 
                button.getEl().on('click', function(){ 
                    location.href='index.php';                
                }); 
              } 
          }                             
        },        
        {
            text: 'Carica',
            handler: function(){
                if(fp.getForm().isValid()){
                  fp.getForm().submit({
                      url: 'file-upload.php',
                      waitMsg: 'Upload immagine in corso...',
                      success: function(fp, o){
                          msg('Success', 'Upload completato. Immagine "'+o.result.file+'" caricata sul server.');   
                      }
                  });
                }
            }
        },{
            text: 'Reset',
            handler: function(){
                fp.getForm().reset();
            }
        }]
    });

});
Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
  
  var ModFam = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Cancella termine enciclopedico',
        bodyStyle:'padding:15px 5px 0',
        width: 950,
        defaults: {width: 800},
        defaultType: 'textfield',
        
        items: [
                {
                    name: 'id',
                    fieldLabel: 'Id',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    value: id,                   
                    style:'background-color:transparent; background-image: none;',
                    readOnly: true     
                },                
                {
                    name: 'ter',
                    fieldLabel: 'Termine',
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    value: ter,                   
                    style:'background-color:transparent; background-image: none;',
                    readOnly: true     
                },
                {
                    name: 'data',
                    fieldLabel: 'Data',
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    value: data,                   
                    style:'background-color:transparent; background-image: none;',
                    readOnly: true     
                },                                
                {
                    inputType: 'hidden',
                    id: 'submitbutton',
                    name: 'tipo',
                    value: 'del_ter'
                }              
              ],
        buttons: [
                  {
                    text:'Indietro',
                    iconCls:'home',
                    listeners: { 
                    render: function(button){ 
                          button.getEl().on('click', function(){ 
                              //alert('works in IE6, IE8, FF');
                              location.href='index.php';                
                          }); 
                        } 
                    }                             
                  },                  
                  {
                      text: 'Cancella',
                      handler: function() {
                      ModFam.getForm().getEl().dom.action = 'save_carica.php';
                      ModFam.getForm().getEl().dom.method = 'POST';
                      ModFam.getForm().submit();
                  }
                }]
 
  });

if ($("#formDelTermine").length>0)
  {
    ModFam.render('formDelTermine');
  }
    
});
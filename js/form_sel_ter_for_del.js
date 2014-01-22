Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
  
  var rd_termine_data = new Ext.data.JsonReader({}, ['id','termine']);
    
  var rd_termine_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-termine-from-db.php'  
  }),  
  reader: rd_termine_data,  
  remoteSort: false  
  });
 
  var simple = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Seleziona "termine"',
        bodyStyle:'padding:15px 5px 0',
        width: 950,
        defaults: {width: 300},
        defaultType: 'textfield',
        
        items: [
                {
                    id: 'ter',
                    name: 'ter',
                    xtype: 'combo',
                    width: 800,
                    store: rd_termine_data_active,
                    fieldLabel: 'Termine',  
                    displayField: 'termine',
                    valueField: 'id',
                    hiddenName : 'TerId',                    
                    emptyText:'Seleziona termine...',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    forceSelection:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                    
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
                      text: 'Seleziona',
                      handler: function() {
                      simple.getForm().getEl().dom.action = 'del_termine.php';
                      simple.getForm().getEl().dom.method = 'POST';
                      simple.getForm().submit();
                      }                  
                  }                                  
                 ]
 
  });
  
if ($("#formSelTermine").length>0)
    {
     simple.render('formSelTermine'); 
    }
    
});
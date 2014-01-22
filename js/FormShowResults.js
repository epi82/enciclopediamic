Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
 
  var simple = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Operazione completata',
        bodyStyle:'padding:15px 5px 0',
        width: 500,
        defaults: {width: 300},
        defaultType: 'textfield',
        html: '<b>'+stampa1+'</b><br /><b>'+stampa2+'</b>',
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
                  }
                 ]        
  });
  
simple.render('formShowResults');
 
});
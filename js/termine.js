Ext.onReady(function(){            
    
    Ext.fly('grid-example').update('');
    Ext.fly('grid-example').setStyle('display', 'block');
       
    var store = new Ext.data.JsonStore({
      url: "get-data-for-termine.php?id="+id,
      root: "rows",
      id:'id',   
      totalProperty:'totalCount',      
      remoteSort: true,    
      autoDestroy: true,
      fields: [
         {name: 'id'},
         {name: 'termine'},
         {name: 'definizione'},
         {name: 'data'}
      ]
    });                   

      var grid = new Ext.grid.GridPanel({
        store: store,
        loadMask: new Ext.LoadMask(Ext.getBody(), {msg:"Caricamento..."}),
        columns: [ 
            {id:'definizione', header: "Termine: <b>"+termine+"</b> - Ultimo aggiornamento: <b>"+data+"</b>", width: 995, align: 'left', renderer: def, menuDisabled: true, sortable: false, dataIndex: 'definizione'}
        ],                     
        tbar: tbar,
        buttons: 
        [
          {
            text:'Torna indietro',
            iconCls:'home',
            listeners: { 
            render: function(button){ 
                  button.getEl().on('click', function(){ 
                      //alert('works in IE6, IE8, FF');
                      location.href='index.php';                
                  }); 
                } 
            }                             
          }
        ],
        width:1010,
        frame:true,
        disableSelection: true,
        trackMouseOver: false,
        enableColumnMove: false,
        autoHeight : true,                
        title:
        '<div align="center"><img src="images/bannermicologia.png" alt="" border="0"></div><br /><div align="center">Glossario Illustrato Micologico in fase di revisione integrale</div><div align="center" class="testoblu">- i termini emendati risultano evidenziati dalla presenza di una data di revisione -</div>',
        renderTo: "grid-example"
      });
      
      function def(val, meta){
              //meta.css += 'testodef';
              //return Ext.util.Format.htmlDecode(val);
              return '<div style="white-space:normal;">' + Ext.util.Format.htmlDecode(val) + '</div>';
      }  
    
    store.load({params:{start:0, limit:15}});
    
    grid.render('grid-example');                            
            
});
Ext.onReady(function(){            
    
    var store = new Ext.data.JsonStore({
      url: "get-images-for-grid.php",
      root: "rows",
      id:'id',   
      totalProperty:'totalCount',      
      remoteSort: true,
      sortInfo: {
            field: 'id',
            direction: 'DESC'
      },      
      autoDestroy: true,
      fields: [
         {name: 'id'},
         {name: 'url'}
      ]
    });
      
    var filterRow = new Ext.ux.grid.FilterRow({
      autoFilter: false,
      listeners: {
        change: function(data) {
          store.baseParams = data;
          store.load({
            params: {start: 0, limit: 5}
          });
        }
      }
    });    
    
    var panelResizer = new Ext.ux.PanelResizer({ minHeight: 200 });
    
    var highlightSort = new Ext.ux.plugins.grid.highlightSort({});
    
    var editor = new Ext.ux.grid.RowEditor({
        saveText: 'Update',
        cancelText: 'Chiudi',
        clicksToEdit: 1
    });       

      var grid = new Ext.grid.GridPanel({
        store: store,
        loadMask: new Ext.LoadMask(Ext.getBody(), {msg:"Caricamento..."}),
        columns: [ 
            {id:'id', header: "Id", align: 'left', width: 50, sortable: true, renderer: url, dataIndex: 'id'},
            {id:'preview', header: "Anteprima", align: 'center', width: 250, sortable: false, renderer: preview, dataIndex: 'url'},            
            {id:'url', header: "Url immagine", align: 'left', width: 350, sortable: true, renderer: url, dataIndex: 'url', filter:{ },
            editor: 
              {
                xtype: 'textfield',
                allowBlank: false
              }
            }          
        ],        
        highlightClasses: {
          ASC:  'x-custom-sort-asc'
          // DESC stays at default = x-ux-col-sort-desc
        },        
        bbar: new Ext.PagingToolbar({
            pageSize: 5,
            store: store,
            displayInfo: true,
            plugins: [new Ext.ux.ProgressBarPager()]
        }),    
        plugins: [filterRow, panelResizer, highlightSort, editor],       
        height:680,
        width:670,
        frame:true,                
        title:'<div align="center">Lista immagini caricate sul server</div>',
        renderTo: "list-images"
      });
      
    grid.render('list-images');    

    store.load({params:{start:0, limit:5}});                       
    
    
    function url(val,meta,record){
            var id = record.data.id;
            return ('<a class="link20">' + val + '</a>');           
    }         
    
    function preview(val){
          return '<img align="center" src="../' + val + '" alt="" border="0" height="100" width="200"/>';       
    }        
        
});
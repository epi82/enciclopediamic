Ext.onReady(function(){            
    
    var store = new Ext.data.JsonStore({
      url: "get-data-for-grid.php",
      root: "rows",
      id:'id',   
      totalProperty:'totalCount',      
      remoteSort: true,
      sortInfo: {
            field: 'termine',
            direction: 'ASC'
      },      
      autoDestroy: true,
      fields: [
         {name: 'id'},
         {name: 'termine'},
         {name: 'argomento'},
         {name: 'foto'},
         {name: 'data'}
      ]
    });
      
    var filterRow = new Ext.ux.grid.FilterRow({
      autoFilter: false,
      listeners: {
        change: function(data) {
          store.baseParams = data;
          store.load({
            params: {start: 0, limit: 15}
          });
        }
      }
    }); 
    
    var panelResizer = new Ext.ux.PanelResizer({ minHeight: 400 });    
    var highlightSort = new Ext.ux.plugins.grid.highlightSort({});                 

      var grid = new Ext.grid.GridPanel({
        store: store,
        loadMask: new Ext.LoadMask(Ext.getBody(), {msg:"Caricamento..."}),
        columns: [ 
            {id:'termine', header: "Termine", align: 'left', width: 400, sortable: true, renderer: ter, dataIndex: 'termine', filter:{ }},
            {id:'argomento', header: "Argomento", align: 'left', width: 450, sortable: true, renderer: arg, dataIndex: 'argomento', filter:{ }},
            {id:'foto', header: "Foto", width: 50, align: 'center', sortable: true, renderer: foto, dataIndex: 'foto', 
            filter:
              {
                field: 
                {
                  xtype: "combo",
                  mode: 'local',
                  store: new Ext.data.JsonStore
                  ({
                    id: 0,
                    fields: ['name','value'],
                    data: 
                    [
                        {name : '-',   value: '-'},
                        {name : 'Si',   value: '1'},
                        {name : 'No',  value: '0'}
                    ]
                  }),
                  valueField: 'value',
                  displayField: 'name',
                  triggerAction: 'all',
                  value: "-"
                },
                fieldEvents: ["select"],
                test: function(filterValue, value) 
                      {
                        return filterValue === "-" || filterValue === value;
                      }
               }                        
            },
            {id:'data', header: "Aggiornato", width: 90, align: 'center', sortable: true, renderer: data, dataIndex: 'data'}   
        ],        
        highlightClasses: {
          ASC:  'x-custom-sort-asc'
          // DESC stays at default = x-ux-col-sort-desc
        },        
        bbar: new Ext.PagingToolbar({
            pageSize: 15,
            store: store,
            displayInfo: true,
            plugins: [new Ext.ux.ProgressBarPager()]
        }),    
        plugins: [filterRow, panelResizer, highlightSort],
        
        tbar: tbar,        
        height:800,
        width:1010,
        frame:true,                
        title:
        '<div align="center"><img src="images/bannermicologia.png" alt="" border="0"></div><br /><div align="center">Glossario Illustrato Micologico in fase di revisione integrale</div><div align="center" class="testoblu">- i termini emendati risultano evidenziati dalla presenza di una data di revisione -</div>',
        renderTo: "grid-example"
      });
      
    grid.render('grid-example');    
    store.load({params:{start:0, limit:15}});      
           
        
    function all(val){
            return '<span style="color:#000088;">' + val + '</span>';
    }
        
    function ter(val,meta,record){
            var id = record.data.id;
            return ('<a class="link20" href="termine.php?show='+id+'">' + val + '</a>');
            
    }    
    
    function arg(val, meta){
            //meta.css += 'testoarg';
            return '<div style="white-space:normal;">' + Ext.util.Format.htmlDecode(val) + '</div>';
            //return Ext.util.Format.htmlDecode(val);
    }
     
    function data(val){
        anno=val.substring(0,4);
        mese=val.substring(5,7);
        giorno=val.substring(8,10);
        date=giorno+"/"+mese+"/"+anno;
        if(anno == '0000'){            
            return '<span style="color:#000088;">' + "" + '</span>';
        }
        return '<span style="color:#000088;">' + date + '</span>';        
    }
    
    function foto(val){
      if (val=='1')
        {
          return '<img align="center" src="images/foto2.png" alt="" border="0"/>';
        }
      return "";       
    }        
        
});
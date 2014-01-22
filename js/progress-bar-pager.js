Ext.onReady(function(){            
    
    var store = new Ext.data.JsonStore({
      url: "get-data-for-grid.php",
      root: "rows",
      id:'id',   
      totalProperty:'totalCount',      
      //baseParams: {limit: 15},
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
    
   /* 
    var cellTips = new Ext.ux.plugins.grid.CellToolTips([
      { field: 'genere', tpl: '<b>Genere: <i>{genere}</i></b><br />Specie: <i>{specie}</i><br />Famiglia: <i>{famiglia}</i><br />' },
      { field: 'comme', tpl: '<tpl if="comme==\'P\'"><b>P = Pianta senza indicazioni di propriet&agrave;</b></tpl><tpl if="comme==\'PO\'"><b>PO = Piante officinali - Aromatiche e cosmetiche</b></tpl><tpl if="comme==\'PC\'"><b>PC = Piante commestibili</b></tpl><tpl if="comme==\'PCO\'"><b>PCO = Piante commestibili e officinali</b></tpl><tpl if="comme==\'PV\'"><b>PV = Piante velenose</b></tpl><tpl if="comme==\'PVO\'"><b>PVO = Piante velenose e officinali</b></tpl>'}
    ]);    
   */
    
    var panelResizer = new Ext.ux.PanelResizer({ minHeight: 200 });
    
    var highlightSort = new Ext.ux.plugins.grid.highlightSort({});
    
    var tbar = new Ext.Toolbar({
        items: 
        [
          {xtype: 'tbseparator'},
          {
            text:'<div align="center" class="testoicone">Il Meraviglioso Mondo dei Funghi e dei Fiori Spontanei</div>',
            iconCls:'forum',
            listeners: { 
                render: function(button){ 
                    button.getEl().on('click', function(){ 
                        //alert('works in IE6, IE8, FF');
                        location.href='http://www.funghiitaliani.it/';                
                    }); 
                } 
            }       
          },
          {xtype: 'tbseparator'},          
          {
            text:'<div align="center" class="testoicone">Micologia</div>',
            iconCls:'mico',
            listeners: { 
                render: function(button){ 
                    button.getEl().on('click', function(){ 
                        //alert('works in IE6, IE8, FF');
                        location.href='http://www.funghiitaliani.it/micologia/indice.html';                
                    }); 
                } 
            }       
          },                    
          {xtype: 'tbseparator'},          
          {
            text:'<div align="center" class="testoicone">Botanica</div>',
            iconCls:'bota',
            listeners: { 
                render: function(button){ 
                    button.getEl().on('click', function(){ 
                        //alert('works in IE6, IE8, FF');
                        location.href='http://www.funghiitaliani.it/botanica/indice.html';                
                    }); 
                } 
            }       
          },          
          {xtype: 'tbseparator'},
          {
            text:'<div align="center" class="testoicone">Shop AMINT</div>',      
            iconCls:'shop',
            listeners: { 
                render: function(button){ 
                    button.getEl().on('click', function(){ 
                        //alert('works in IE6, IE8, FF');
                        location.href='http://shop.amint.it/';                
                    }); 
                } 
            }       
          },          
          {xtype: 'tbseparator'},
          {
            text:'<div align="center" class="testoicone">Chat AMINT</div>',            
            iconCls:'chat',
            listeners: { 
                render: function(button){ 
                    button.getEl().on('click', function(){ 
                        //alert('works in IE6, IE8, FF');
                        location.href='http://www.funghiitaliani.it/index.php?app=chat';                
                    }); 
                } 
            }       
          }                                                                        
        ]        
    });               

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
        plugins: [filterRow, panelResizer, highlightSort /*cellTips*/],
        
        tbar: tbar,
        /*footer: true,
        
        footerCfg: {
            cls: 'testo_foot',            
            html: '<br /><center>a cura di Elia Curti WebMaster A.M.I.N.T. - Grafica A.M.I.N.T. Tomaso Lezzi</center>'
        },*/         
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
            meta.css += 'testoarg';
            return Ext.util.Format.htmlDecode(val);
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
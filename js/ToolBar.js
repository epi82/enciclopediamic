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
        text:'<div align="center" class="testoicone">Iscriviti AMINT</div>',      
        iconCls:'shop',
        listeners: { 
            render: function(button){ 
                button.getEl().on('click', function(){ 
                    //alert('works in IE6, IE8, FF');
                    location.href='http://www.funghiitaliani.it/index.php?app=nexus';                
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
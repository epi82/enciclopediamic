/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
//Panel

Ext.onReady(function(){
    var p = new Ext.Panel({
        title: '<div style="text-align:left;">&nbsp;&nbsp;<u>Gestione</u>:&nbsp;&nbsp;Funzionalit&agrave; pannello amministrazione</div>',
        collapsible:true,
        renderTo: 'panel-functions',
        width:350,
        html: html2.join('')
    });
    
//Button    
    function renderButtons(title){

        new ButtonPanel2(
            '',
            [{
                text: 'Immagini',
                iconCls: 'upload',
                scale: 'medium',
                iconAlign: 'top',
                handler: function(e, target, panel){
                    location.href="image.php";
                }                              
            }
            ]
        );              
    }

    renderButtons('Normal Buttons');
});

// Helper class for organizing the buttons
ButtonPanel2 = Ext.extend(Ext.Panel, {
    layout:'table',
    defaultType: 'button',
    baseCls: 'x-plain',
    cls: 'btn-panel',
    renderTo : 'doc_functions',
    menu: undefined,
    split: false,

    layoutConfig: {
        columns:3
    },

    constructor: function(desc, buttons){
        // apply test configs
        for(var i = 0, b; b = buttons[i]; i++){
            b.menu = this.menu;
            b.enableToggle = this.enableToggle;
            b.split = this.split;
            b.arrowAlign = this.arrowAlign;
        }
        var items = [{
            xtype: 'box',
            autoEl: {tag: 'h3', html: desc, style:"padding 3px 0 3px;"},
            colspan: 3
        }].concat(buttons);

        ButtonPanel2.superclass.constructor.call(this, {
            items: items
        });
    }
});

// Some sample html
var html2 = [
  '<table>',
    '<tr height="50">',
      '<td bgcolor="#FFFFFF" width="40"></td>',
      '<td bgcolor="#FFFFFF" width="150"><img src="../images/menu_icon.png"></td>',      
      '<td bgcolor="#FFFFFF" id="doc_functions" width="160"></td>',      
    '</tr>',  
  '</table>'
];
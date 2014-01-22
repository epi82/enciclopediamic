Ext.ux.TinyMCE.initTinyMCE();

Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
 
  var ModFam = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Inserimento nuovo Termine',
        bodyStyle:'padding:15px 5px 0',
        width: 1000,
        defaults: {width: 300},
        labelAlign: 'right',    
        defaultType: 'textfield',
        items: [
                {
                    name: 'ter',
                    fieldLabel: 'Termine',
                    width: 850,  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    forceSelection:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'   
                },        
                {
                    xtype: "tinymce",
                    fieldLabel: "Argomento",
                    id: "arg",
                    name: "arg",
                    width: 850,
                    height: 250,
                    tinymceSettings: {
                        mode : "textareas",
                        theme : "advanced",
                        document_base_url : "http://enciclopedia.funghiitaliani.it",
                        plugins : "safari,spellchecker,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",
                        theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect,help",
                        theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
                        theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
                        theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak",
                        theme_advanced_toolbar_location : "top",
                        theme_advanced_toolbar_align : "left",
                        theme_advanced_statusbar_location : "bottom",
                        language: "it"                                             
                    },
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    forceSelection:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                                                  
                },        
                {
                    xtype: "tinymce",
                    fieldLabel: "Definizione",
                    id: "def",
                    name: "def",
                    width: 850,
                    height: 750,
                    tinymceSettings: {
                        mode : "textareas",
                        theme : "advanced",
                        document_base_url : "http://enciclopedia.funghiitaliani.it",
                        plugins : "safari,spellchecker,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",
                        theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect,help",
                        theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
                        theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
                        theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak",
                        theme_advanced_toolbar_location : "top",
                        theme_advanced_toolbar_align : "left",
                        theme_advanced_statusbar_location : "bottom",
                        language: "it"                                             
                    },
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    forceSelection:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                                                  
                },
                {
                    xtype     : 'checkbox',
                    name      : 'foto',
                    fieldLabel: 'Foto',
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                                  
                },                
                {
                    xtype     : 'datefield',
                    name      : 'data',
                    fieldLabel: 'Data',
                    format: 'd-m-Y',
                    altFormats: 'd-m-Y', 
                    allowBlank: false,
                    blankText: 'Campo obbligatorio',                    
                    invalidText: 'Data non valida - Formato richiesto: (gg-mm-aaaa)',
                    emptyText:'Seleziona data aggiornamento...'                      
                },
                {
                    inputType: 'hidden',
                    id: 'submitbutton',
                    name: 'tipo',
                    value: 'new_ter'
                }  
              ],
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
                      text: 'Salva',
                      handler: function() {
                      ModFam.getForm().getEl().dom.action = 'save_carica.php';
                      ModFam.getForm().getEl().dom.method = 'POST';
                      ModFam.getForm().submit();
                      }
                  }
                 ]
  });

if ($("#formNewTermine").length>0)
  {
    ModFam.render('formNewTermine');
  }
    
});
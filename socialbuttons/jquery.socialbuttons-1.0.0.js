;(function($, window, undefined) {
	$.socialbuttons=function(element, options){
    /*	Defaults values
			@aligment: 'String' (Indicates the aligment to elements childs)
				left to left aligment
				right to right aligment
				center to center aligment
      @buttons: Array of String (Indicates the buttons to show). Its values are:
				g-plus to google plus
				facebook to facebook
				twitter to twitter
			@effect:'String' (Indicates the type of effect for apply at the childs)
				opacity opacity effect
				reverse changes the property background-color value by the property color value and vice versa
				rotate (default) rotation effect
			@fixed: 'String' (Indicates that position respect to their father is fixed)
				none (default) the position is not fixed
				yes the position is fixed
			@look: 'String' (Indicates the look to elements childs). Its values are:
				circle the border element is a circle
				square (default) the border element is a square
      @position:'String' (Indicates the position to elements childs). Its values are:
				column to align the elements in a column respect of its father
				row (default) to align the elements in a row in respect of its father
    */
		var defaults={
			'aligment':'left',
			'buttons':["g-plus","facebook",'twitter','linkedin'],
			'effect':'rotate',
			'fixed':'none',
			'look':'square',
			'position':'row',
		}
		var plugin=this;
		//plugin properties
		plugin.settings={
		}
		var $element = $(element),
           element = element;
		//constructor
		plugin.init=function(){
		// the plugin's final properties are the merged default and user-provided options (if any)
			plugin.settings = $.extend({}, defaults, options)
		}
		//private methods
		var getUrl=function(){
			//Get the current url
			return encodeURI(window.location.href);
		}
		var getTitle=function(){
			//Get page title
			return encodeURI(document.title);
		}
		var generalCss=function(){
			/*Css common for apply to all elements*/
			/*Parent element*/
			$('#'+element.id).css({
				'position':function(){
					var position;
					switch (plugin.settings.fixed) {
						case 'yes':
							position='fixed';
							break;
						default:
							position='static';
							break;
					}
					return position;
				},
				'width':function(){
					var width;
					switch (plugin.settings.fixed) {
						case 'yes':
							width=$('#'+element.id).parent().css('width');
							break;
						default:
							width='auto';
							break;
					}
					return width;
				},
			});
			/*Social Buttons*/
			if(plugin.settings.fixed==='none'){
				$('#wrapper-button').css({
					'text-align':function(){
							var align;
							switch (plugin.settings.aligment) {
								case 'right':
									align='right';
									break;
								case 'center':
									align='center';
									break;
								default:
									align='left';
									break;
							}
							return align;
					},
				});
			}else{
			$('#wrapper-button').css({
				'float':function(){
					var float;
					switch (plugin.settings.aligment) {
						case 'right':
							float='right';
							break;
						case 'center':
							float='center';
							break;
						default:
							float='left';
							break;
					}
					return float;
				},
			});
		}
			$('#wrapper-button li').css({
				'border-radius':function(){
					var radius;
					switch (plugin.settings.look) {
						case 'circle':
							radius='50%';
							break;
						default:
							radius='0px';
							break;
					}
					return radius;
				},
				'display':function(){
					var display;
					switch (plugin.settings.position) {
						case 'column':
							display='block';
							break;
						case 'row':
						default:
							display='inline-block';
							break;
					}
					return display;
				},
				'font-size':function(){
					var fontSize;
					switch (plugin.settings.look) {
						case 'circle':
							fontSize='2em';
							break;
						case 'square':
						default:
							fontSize='1.8em';
							break;
					}
					return fontSize;
				},
				'height':'1em',
				'list-style':'none',
				'margin':function(){
					var margin;
					switch (true) {
						case ((plugin.settings.position==='column')&&(plugin.settings.aligment==='center')):
							margin='5px auto 5px auto';
							break;
						default:
							margin='5px 5px 5px 5px';
							break
					}
					return margin;
				},
				'padding':function(){
					var padding;
					switch (plugin.settings.look) {
						case 'circle':
							padding='8px 8px 8px 8px';
							break;
						case 'square':
						default:
							padding='5px 5px 5px 5px';
							break;
					}
					return padding;
				},
				'text-align':'center',
				'width':'1em',
			});
		}
		var facebook=function(){
		/*Facebook button*/
			$('#wrapper-button').append("<li id='fb'><i class='fa fa-facebook'></i></li>");
			$('#fb').css({
				'background-color':'#43609c',
				'border':'1px solid #43609c',
				'color':'#fff',
			})
			.click(function(){
				var urlShare='http://facebook.com/sharer.php?u='+getUrl()+'t='+getTitle();
				window.open(urlShare,'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height='+($(window).height()/3)+',width='+$(window).width()/3);
			});
		}
		var google=function(){
		/*Google plus button*/
      $('#wrapper-button').append("<li id='gp'><i class='fa fa-google-plus'></i></li>");
			$('#gp').css({
				'background-color':'#cc3732',
				'border':'1px solid #cc3732',
				'color':'#fff',
			})
			.click(function(){
				var urlShare='https://plus.google.com/share?url='+getUrl();
				window.open(urlShare,'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=auto'+($(window).height()/3)+',width='+$(window).width()/3);
			});
		}
		var linkedin=function(){
		/*Linkedin button*/
			$('#wrapper-button').append("<li id='ln'><i class='fa fa-linkedin'></i></li>");
			$('#ln').css({
				'background-color':'#1b86bc',
				'border':'1px solid #1b86bc',
				'color':'#fff',
			})
			.click(function(){
				var urlShare='https://www.linkedin.com/shareArticle?mini=true&url='+getUrl();
				window.open(urlShare,'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height='+($(window).height()/3)+',width='+$(window).width()/3);
			});
		}
		var twitter=function(){
		/*Twitter button*/
			$('#wrapper-button').append("<li id='tw'><i class='fa fa-twitter'></i></li>");
			$('#tw').css({
				'background-color':'#55acee',
				'border':'1px solid #55acee',
				'color':'#fff',
			})
			.click(function(){
				var urlShare='http://twitter.com/home?status='+getUrl();
				window.open(urlShare,'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height='+($(window).height()/3)+',width='+$(window).width()/3);
			});
		}
		var wrapperButtons=function(){
			$('#'+element.id).append('<ul id="wrapper-button"></ul>')
			$('#wrapper-button').css({
				'padding':'1em',
				'text-align':'center',
			});
		}
		//public methods
		plugin.start=function(){
			//Append to HTML element head the cdn url to font-awesome if doesn't exist
			if(typeof($('head').children('link').attr('href'))!=='//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'){
				$('head').append('<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">');
			}
			//Create ul element for wrapp buttons
			wrapperButtons();
			//Create the social buttons indicated in the array
			if(plugin.settings.buttons.indexOf('g-plus')!=-1){
      	google();
			}
			if(plugin.settings.buttons.indexOf('facebook')!=-1){
				facebook();
			}
			if (plugin.settings.buttons.indexOf('twitter')!=-1){
				twitter();
			}
			if(plugin.settings.buttons.indexOf('linkedin')!=-1){
				linkedin();
			}
			//After creating the social buttons, we format
			generalCss();
			/*Events*/
			$('#wrapper-button li').hover(function(evt){
				//Event hover on buttons
				evt.preventDefault();
				$(this).css({
					'cursor':'hand',/*To internet explorer*/
					'cursor':'pointer',/*Other navigator*/
				});
				switch (plugin.settings.effect) {
					case 'opacity':
						$(this).css({
							'transition':'opacity 1s easy-in-out',
							'-moz-transition':'opacity 1s easy-in-out',
							'-o-transition':'opacity 1s easy-in-out',
							'-webkit-transition':'opacity 1s easy-in-out',
							'opacity':'0.5',
						});
						break;
					case 'reverse':
						var obj={};
						Object.defineProperty(obj, 'BACKGROUND_COLOR',{
							value:$(this).css('background-color'),
							writable:false,
						});
						Object.defineProperty(obj, 'COLOR',{
							value:$(this).css('color'),
							writable:false,
						});
						$(this).css({
							'background-color':function(){
								return obj.COLOR;
							},
							'color':function(){
								return obj.BACKGROUND_COLOR;
							},
						});
						break;
					case 'rotate':
					default:
						$(this).animate(
							{deg:360},
							{step:function(now,fx){$(this).css({'transform':'rotate('+now+'deg)'});},duration:'slow'},
							'linear');
						break;
				}
			},function(evt){
				evt.preventDefault();
				$(this).css({
					'cursor':'default',
				});
				switch (plugin.settings.effect) {
					case 'opacity':
						$(this).css({
							'transition':'opacity 1s easy-in-out',
							'opacity':'1',
						});
						break;
					case 'reverse':
						var obj={};
						Object.defineProperty(obj, 'BACKGROUND_COLOR',{
							value:$(this).css('color'),
							writable:false,
						});
						Object.defineProperty(obj, 'COLOR',{
							value:$(this).css('background-color'),
							writable:false,
						});
						$(this).css({
							'background-color':function(){
								return obj.BACKGROUND_COLOR;
							},
							'color':function(){
								return obj.COLOR;
							},
						});
						break;
					case 'rotate':
					default:
						$(this).animate(
							{deg:0},
							{step:function(now,fx){$(this).css({'transform':'rotate('+now+'deg)'});},duration:'slow'},
							'linear');
						break;
				}
				/*Eliminamos el elemento que muestra el numero de veces que se ha compartido la publicación*/
				$('#tooltip-social').remove();
			});
			$(window).resize(function(){
				/*Parent element*/
				$('#'+element.id).css({
					'position':function(){
						var position;
						switch (plugin.settings.fixed) {
							case 'yes':
								position='fixed';
								break;
							default:
								position='static';
								break;
						}
						return position;
					},
					'width':function(){
						return $('#'+element.id).parent().css('width');
					},
				});
			});
		}
		//fire up the plugin
		plugin.init();
	}
    // add the plugin to the jQuery.fn object
    $.fn.socialbuttons = function(options) {
        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {
            // if plugin has not already been attached to the element
            if (undefined == $(this).data('socialbuttons')) {
                // create a new instance of the plugin
                // pass the DOM element and the user-provided options as arguments
                var plugin = new $.socialbuttons(this, options);
                // in the jQuery version of the element
                // store a reference to the plugin object
                // you can later access the plugin and its methods and properties like
                // element.data('pluginName').publicMethod(arg1, arg2, ... argn) or
                // element.data('pluginName').settings.propertyName
                $(this).data('socialbuttons', plugin);
            }
        });
    }
}( jQuery, window, undefined));

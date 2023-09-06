/*************************************************************
 * This script is developed by Arturs Sosins aka ar2rsawseen, http://webcodingeasy.com
 * Feel free to distribute and modify code, but keep reference to its creator
 *
 * White board class provides a way to draw on website. It is possible to set width and color of drawing line.
 * Main reason for this package is to save some notes on different pages of website, 
 * or share drawings with others using import/export function, for example, 
 * with webdesigners, to direct them to flaws, bugs or changes in design.
 *
 * For more information, examples and online documentation visit: 
 * http://webcodingeasy.com/JS-classes/Drawing-on-websites
**************************************************************/
var vedit = function(config){
	
	var conf = {
		overlayCss: {
			backgroundColor: "blue",
			MsFilter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
			filter: "alpha(opacity=50)",
			MozOpacity: 0.5,
			KhtmlOpacity: 0.5,
			opacity: 0.5
		},
		contextCss:{
			backgroundColor: "white",
			border: "2px solid black",
			padding: "15px"
		},
		lang:{
			add: "Add >",
			edit: "Edit >",
			del: "Delete",
			copy: "Copy",
			paste: "Paste >",
			current_tag: "Current tag: ",
			current_id: "Current id: ",
			current_class: "Current class: ",
			tag_name: "TagName: ",
			insert_before: "Insert before element",
			insert_inside: "Insert inside element",
			insert_after: "Insert after element",
			create_element: "Create",
			paste_before: "Paste before element",
			paste_inside: "Paste inside element",
			paste_after: "Paste after element"
		},
		forbidTags: [],
		forbidProperties: []
	};
	
	var scroll, overlay, interval, context, curElem, addElem, editElem, clipboard;
	var lastX = 0, lastY = 0;
	var selected = false;
	
	this.construct = function(){
		//copying configuration
		for(var opt in config){
			conf[opt] = config[opt];
		}
		scroll = get_scroll();
		add_event(window, "scroll", function(){
			scroll = get_scroll();
		});
		
		if (window.Node && Node.prototype && !Node.prototype.contains)
		{
			Node.prototype.contains = function (arg) {
				return !!(this.compareDocumentPosition(arg) & 16)
			}
		}
		
		overlay = document.createElement("div");
		for(var i in conf.overlayCss)
		{
			overlay.style[i] = conf.overlayCss[i];
		}
		overlay.style.position = "absolute";
		overlay.style.zIndex = 1000;
		overlay.style.display = "none";
		document.body.appendChild(overlay);
		
		addElem = document.createElement("div");
		addElem.style.display = "none";
		addElem.style.border = "1px solid black";
		addElem.style.padding = "10px";
		addElem.style.position = "absolute";
		addElem.style.marginLeft = "30px";
		addElem.style.marginTop = "-20px";
		addElem.style.backgroundColor = "white";
		
		var p = document.createElement("p");
		p.innerHTML = conf.lang.tag_name;
		addElem.appendChild(p);
		
		var p = document.createElement("p");
		var inp = document.createElement("input");
		inp.setAttribute("id", "vedit_create_tagname");
		p.appendChild(inp);
		addElem.appendChild(p);
		
		var p = document.createElement("p");
		var select = document.createElement("select");
		select.setAttribute("id", "vedit_insert_type");
		p.appendChild(select);
		addOption(1, conf.lang.insert_before, select);
		addOption(2, conf.lang.insert_inside, select, true);
		addOption(3, conf.lang.insert_after, select);
		addElem.appendChild(p);
		
		var p = document.createElement("p");
		var inp = document.createElement("input");
		inp.setAttribute("type", "button");
		inp.setAttribute("value", conf.lang.create_element);
		add_event(inp, "click", function(){
			if(curElem)
			{
				var tag = document.getElementById("vedit_create_tagname").value;
				var select = document.getElementById("vedit_insert_type");
				var value = select.options[select.selectedIndex].value;
				try{
					var el = document.createElement(tag);
					el.innerHTML = "&nbsp;";
					if(value == 1)
					{
						curElem.parentNode.insertBefore(el, curElem);
					}
					else if(value == 2)
					{
						curElem.appendChild(el);
					}
					else
					{
						if(curElem.nextSibling)
						{
							curElem.parentNode.insertBefore(el, curElem.nextSibling);
						}
						else
						{
							curElem.parentNode.appendChild(el);
						}
					}
					overlay.style.display = "none";
				}
				catch(e){}
			}
		});
		p.appendChild(inp);
		addElem.appendChild(p);
		
		pasteElem = document.createElement("div");
		pasteElem.style.display = "none";
		pasteElem.style.border = "1px solid black";
		pasteElem.style.padding = "10px";
		pasteElem.style.position = "absolute";
		pasteElem.style.marginLeft = "30px";
		pasteElem.style.marginTop = "-20px";
		pasteElem.style.backgroundColor = "white";
		
		var p = document.createElement("p");
		var select = document.createElement("select");
		select.setAttribute("id", "vedit_paste_type");
		select.setAttribute("disabled", "true");
		p.appendChild(select);
		addOption(1, conf.lang.paste_before, select);
		addOption(2, conf.lang.paste_inside, select, true);
		addOption(3, conf.lang.paste_after, select);
		pasteElem.appendChild(p);
		
		var p = document.createElement("p");
		var inp = document.createElement("input");
		inp.setAttribute("type", "button");
		inp.setAttribute("value", conf.lang.paste);
		inp.setAttribute("id", "vedit_paste_button");
		inp.setAttribute("disabled", "true");
		add_event(inp, "click", function(){
			if(curElem && clipboard)
			{
				var select = document.getElementById("vedit_paste_type");
				var value = select.options[select.selectedIndex].value;
				var el = clipboard.cloneNode(true);
				try{
					if(value == 1)
					{
						curElem.parentNode.insertBefore(el, curElem);
					}
					else if(value == 2)
					{
						curElem.appendChild(el);
					}
					else
					{
						if(curElem.nextSibling)
						{
							curElem.parentNode.insertBefore(el, curElem.nextSibling);
						}
						else
						{
							curElem.parentNode.appendChild(el);
						}
					}
					overlay.style.display = "none";
				}
				catch(e){}
			}
		});
		p.appendChild(inp);
		pasteElem.appendChild(p);
		
		editElem = document.createElement("div");
		editElem.style.display = "none";
		editElem.style.border = "1px solid black";
		editElem.style.padding = "10px";
		editElem.style.position = "absolute";
		editElem.style.marginLeft = "30px";
		editElem.style.marginTop = "-20px";
		editElem.style.backgroundColor = "white";
		
		var p = document.createElement("p");
		p.innerHTML = conf.lang.current_tag;
		var span = document.createElement("span");
		span.setAttribute("id", "vedit_element_tag");
		p.appendChild(span);
		editElem.appendChild(p);
		
		var p = document.createElement("p");
		p.innerHTML = conf.lang.current_id;
		var span = document.createElement("span");
		span.setAttribute("id", "vedit_element_id");
		p.appendChild(span);
		editElem.appendChild(p);
		
		var p = document.createElement("p");
		p.innerHTML = conf.lang.current_class;
		var span = document.createElement("span");
		span.setAttribute("id", "vedit_element_class");
		p.appendChild(span);
		editElem.appendChild(p);
		
		var p = document.createElement("p");
		var select = document.createElement("select");
		select.setAttribute("id", "vedit_select_properties");
		p.appendChild(select);
		editElem.appendChild(p);
		
		var p = document.createElement("p");
		var inp = document.createElement("input");
		inp.setAttribute("id", "vedit_property_value");
		add_event(inp, "keyup", function(e){
			if(curElem)
			{
				var target = get_event_target(e);
				var select = document.getElementById("vedit_select_properties");
				var value = select.options[select.selectedIndex].value;
				curElem.style[value] = target.value;
				overlay.style.display = "none";
			}
			
		});
		p.appendChild(inp);
		editElem.appendChild(p);
		
		var p = document.createElement("p");
		var select = document.createElement("select");
		select.setAttribute("id", "vedit_select_attributes");
		p.appendChild(select);
		editElem.appendChild(p);
		
		var p = document.createElement("p");
		var inp = document.createElement("input");
		inp.setAttribute("id", "vedit_attribute_value");
		add_event(inp, "keyup", function(e){
			if(curElem)
			{
				var target = get_event_target(e);
				var select = document.getElementById("vedit_select_attributes");
				var value = select.options[select.selectedIndex].value;
				curElem[value] = target.value;
				overlay.style.display = "none";
			}
			
		});
		p.appendChild(inp);
		editElem.appendChild(p);
		
		context = document.createElement("div");
		for(var i in conf.contextCss)
		{
			context.style[i] = conf.contextCss[i];
		}
		context.style.position = "absolute";
		context.style.zIndex = 1001;
		context.style.display = "none";
		
		var ul = document.createElement("ul");
		ul.style.listStyle = "none";
		ul.style.padding = 0;
		ul.style.margin = 0;
		
		addMenu(conf.lang.add, ul, function(){}, addElem);
		addMenu(conf.lang.edit, ul, function(){}, editElem);
		addMenu(conf.lang.copy, ul, copyElement);
		addMenu(conf.lang.paste, ul, function(){}, pasteElem);
		addMenu(conf.lang.del, ul, deleteElement);
		
		context.appendChild(ul);
		
		document.body.appendChild(context);
	};
	
	this.editOn = function(){
		add_event(document, "mousemove", MouseMove);
		add_event(document, "mousedown", MouseClick);
		add_event(document, "contextmenu", function(e){
            prevent_default(e); 
            return false;
        });
		interval = setInterval(redraw, 100);
	};
	
	this.editOff = function(){
		remove_event(document, "mousemove", MouseMove);
		remove_event(document, "mousedown", MouseClick);
		remove_event(document, "contextmenu", function(e){
            prevent_default(e); 
            return false;
        });
		clearInterval(interval);
	};
	
	var MouseMove = function(e){
		lastX = e.clientX;
		lastY = e.clientY;
	};
	
	var MouseClick = function(e){
		if(check_button(e))
		{
			prevent_default(e);
			selected = true;
			e = get_page_coord(e);
			if(overlay)
			{
				overlay.style.display = "none";
			}
			var lastElem = curElem;
			curElem = document.elementFromPoint(e.pageX, e.pageY);
			if(curElem)
			{
				if(curElem != lastElem)
				{
					selected = false;
					redraw()
					selected = true;
				}
				editElement();
				if (curElem.nodeType == 3) { // Opera
					curElem = curElem.parentNode;
				}
				context.style.top = e.pageY + "px";
				context.style.left = e.pageX + "px";
				context.style.display = "block";
			}
			
			if(overlay)
			{
				overlay.style.display = "block";
			}
			return false;
		}
		else
		{
			var target = get_event_target(e);
			if(!context.contains(target))
			{
				selected = false;
				context.style.display = "none";
			}
		}
	};
	
	var editElement = function(){
		if(curElem)
		{
			document.getElementById("vedit_element_tag").innerHTML = curElem.nodeName;
			if(curElem.id != undefined && curElem.id != "")
			{
				var el = document.getElementById("vedit_element_id");
				el.innerHTML = curElem.id;
				el.parentNode.style.display = "block";
			}
			else
			{
				document.getElementById("vedit_element_id").parentNode.style.display = "none";
			}
			if(curElem.className != undefined && curElem.className != "")
			{
				var el = document.getElementById("vedit_element_class");
				el.innerHTML = curElem.id;
				el.parentNode.style.display = "block";
			}
			else
			{
				document.getElementById("vedit_element_class").parentNode.style.display = "none";
			}
			var select = document.getElementById("vedit_select_properties");
			select = ClearOptionsFast(select);
			var first = true;
			for(var i in curElem.currentStyle)
			{
				if(first)
				{
					first = false;
					document.getElementById("vedit_property_value").value = getStyle(curElem, i);
				}
				addOption(i, i, select);
			}
			add_event(select, "change", function(e){
				var target = get_event_target(e);
				target.options[target.selectedIndex].value;
				document.getElementById("vedit_property_value").value = getStyle(curElem, target.options[target.selectedIndex].value);
			});

			var select = document.getElementById("vedit_select_attributes");
			select = ClearOptionsFast(select);
			var first = true;
			for(var i in curElem)
			{
				if(typeof curElem[i] == "string")
				{
					if(first)
					{
						first = false;
						document.getElementById("vedit_attribute_value").value = curElem[i];
					}
					addOption(i, i, select);
				}
			}
			add_event(select, "change", function(e){
				var target = get_event_target(e);
				target.options[target.selectedIndex].value;
				document.getElementById("vedit_attribute_value").value = curElem[target.options[target.selectedIndex].value];
			});
		}
	};
	
	var deleteElement = function(){
		if(curElem)
		{
			curElem.parentNode.removeChild(curElem);
			overlay.style.display = "none";
		}
	};
	
	var copyElement = function(){
		if(curElem)
		{
			clipboard = curElem.cloneNode(true);
			document.getElementById("vedit_paste_type").disabled = false;
			document.getElementById("vedit_paste_button").disabled = false;
		}
	};
	
	var ClearOptionsFast = function(selectObj){
		var selectParentNode = selectObj.parentNode;
		var newSelectObj = selectObj.cloneNode(false); // Make a shallow copy
		selectParentNode.replaceChild(newSelectObj, selectObj);
		return newSelectObj;
	};
	
	var redraw = function(){
		if(!selected)
		{
			if(overlay.style.display == "block")
			{
				overlay.style.display = "none";
			}
			var elem = document.elementFromPoint(lastX, lastY);
			if(elem)
			{
				if (elem.nodeType == 3) { // Opera
					elem = elem.parentNode;
				}
				if(elem != overlay && elem != context)
				{
					var obl = elem.getBoundingClientRect();
					var d = {};
					d.y = obl.top + scroll.y;
					d.x = obl.left + scroll.x;
					d.width = (obl.width) ? obl.width : (obl.left-obl.right);
					d.height = (obl.height) ? obl.height : (obl.top - obl.bottom);
					overlay.style.top = d.y + "px";
					overlay.style.left = d.x + "px";
					overlay.style.width = obl.width + "px";
					overlay.style.height = obl.height + "px";
					overlay.style.display = "block";
				}
			}
		}
	};
	
	var addOption = function(val, text, parent, selected){
		var op = document.createElement("option");
		op.setAttribute("value", val);
		op.innerHTML = text;
		if(selected)
		{
			op.setAttribute("selected", true);
		}
		parent.appendChild(op);
	};
	
	var addMenu = function(val, parent, handler, addition){
		var li = document.createElement("li");
		var a = document.createElement("a");
		a.innerHTML = val;
		a.setAttribute("href", "#");
		a.style.color = "black";
		a.style.textDecoration = "none";
		add_event(a, "mousedown", handler);
		li.style.padding = "3px";
		li.appendChild(a);
		add_event(li, "mouseover", function(e){
			var target = get_event_target(e);
			while(target.nodeName.toLowerCase() != "li")
			{
				target = target.parentNode;
			}
			//target.style.backgroundColor = "grey";
			target.getElementsByTagName("a")[0].style.textDecoration = "underline";
			var sub = target.getElementsByTagName("div");
			if(sub && sub[0])
			{
				sub[0].style.display = "block";
			}
		});
		add_event(li, "mouseout", function(e){
			var target = get_event_target(e);
			while(target.nodeName.toLowerCase() != "li")
			{
				target = target.parentNode;
			}
			//target.style.backgroundColor = "white";
			target.getElementsByTagName("a")[0].style.textDecoration = "none";
			var sub = target.getElementsByTagName("div");
			if(sub && sub[0])
			{
				sub[0].style.display = "none";
			}
		});
		if(addition)
		{
			li.appendChild(addition);
		}
		parent.appendChild(li);
	};
	
	//convert css to camelCase
	var toCamel = function(str){
		return str.toString().replace(/-([a-z])/gi, function(s, group1){
			return group1.toUpperCase();
		});
	};
	
	var getStyle = function(el,styleProp){
		if (el.currentStyle)
			var y = el.currentStyle[styleProp];
		else if (window.getComputedStyle)
			var y = document.defaultView.getComputedStyle(el,null).getPropertyValue(styleProp);
		return y;
	}
	
	//get element that fired event
	var get_event_target = function(event){
		if(!event)
		{
			return window.event.srcElement;
		}
		else if(event.target)
		{
			return event.target; 
		}
		else
		{
			return event.srcElement;
		}
	};
	
	// scroll position
	var get_scroll = function(){
		var x = 0, y = 0;
		if( typeof( window.pageYOffset ) == 'number' ) {
			//Netscape compliant
			y = window.pageYOffset;
			x = window.pageXOffset;
		} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
			//DOM compliant
			y = document.body.scrollTop;
			x = document.body.scrollLeft;
		} else if( document.documentElement && 
		( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
			//IE6 standards compliant mode
			y = document.documentElement.scrollTop;
			x = document.documentElement.scrollLeft;
		}
		var obj = new Object();
		obj.x = x;
		obj.y = y;
		return obj;
	};
	
	var get_page_coord = function(e){
		//checking if pageY and pageX is already available
		if (typeof e.pageY == 'undefined' &&  
			typeof e.clientX == 'number' && 
			document.documentElement)
		{
			//if not, then add scrolling positions
			e.pageX = e.clientX + document.body.scrollLeft
				+ document.documentElement.scrollLeft;
			e.pageY = e.clientY + document.body.scrollTop
				+ document.documentElement.scrollTop;
		};
		//return e which now contains pageX and pageY attributes
		return e;
	};
	
	//check if right button clicked
	var check_button = function(e) {
		var rightclick = false;
		if (!e) var e = window.event;
		if (e.which) rightclick = (e.which == 3);
		else if (e.button) rightclick = (e.button == 2);
		return rightclick;
	};
	
	//prevent default event behaviour
	var prevent_default = function(event){
		event = (event) ? event : window.event;
		if(event.preventDefault)
		{
			event.preventDefault();
		}
		else
		{
			event.returnValue = false;
		}
	};
	
	//add event
	var add_event = function(element, type, listener){
		if(element.addEventListener)
		{
			element.addEventListener(type, listener, false);
		}
		else
		{
			element.attachEvent('on' +  type, listener);
		}
	};
	
	//remove event
	var remove_event = function(element, type, listener){
		if(element.removeEventListener)
			element.removeEventListener(type, listener, false);
		else
			element.detachEvent('on' +  type, listener);
	};
	
	this.construct();
}
var v = new vedit()
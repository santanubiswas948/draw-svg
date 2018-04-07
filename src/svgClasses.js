"use strict";
//create path===================
		function SvgPath(obj)
		{
			let path=document.createElementNS('http://www.w3.org/2000/svg','path');
			for(let prop in obj)
			{
				path.setAttributeNS(null,prop,obj[prop]);
			}
			return path;
		}
//create Polygon===================
		function SvgPolygon(obj)
		{
			let polygon=document.createElementNS('http://www.w3.org/2000/svg','polygon');
			for(let prop in obj)
			{
				polygon.setAttributeNS(null,prop,obj[prop]);
			}
			return polygon;
		}
//create Line===================
		function SvgLine(obj)
		{
			let line=document.createElementNS('http://www.w3.org/2000/svg','line');
			for(let prop in obj)
			{
				line.setAttributeNS(null,prop,obj[prop]);
			}
			return line;
		}
	export  {SvgPath};
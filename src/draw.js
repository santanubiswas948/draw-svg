"use strict";
import {SvgPath} from './svgClasses';
import {getPositionX,getPositionY} from './positionClass';
import draw_obj from './allControl';
//draw function===============
function drawNow(evt)
{
	let color=document.getElementById('color_picker').value;	
	let div=document.getElementById('svg');
	let positionX=evt.pageX - getPositionX(div)-getPositionX(document.getElementById('draw_div'))-1;
	let positionY=evt.pageY - getPositionY(div)-getPositionY(document.getElementById('draw_div'))-1;
	if(draw_obj.prevX==0)
	{
		draw_obj.prevX=positionX;
		draw_obj.prevY=positionY;
		draw_obj.flag=1;
	}
	else
	{
		if(draw_obj.flag==1)
		{
			let prevX=draw_obj.prevX;
			let prevY=draw_obj.prevY;
			let path=new SvgPath({
				'd' : "M"+prevX+","+prevY+" L"+positionX+","+positionY,
				'fill' : 'none',
				'stroke' : color,
				'stroke-width' : 2.2,
				'id' : 'path'+(div.children.length+1),
			});
			div.appendChild(path);
			draw_obj.flag=0;
			draw_obj.prevX=positionX;
			draw_obj.prevY=positionY;
		}
		else
		{
			
			let lastchildPath=document.getElementById('path'+(document.getElementById('svg').children.length));
			let get_d_attr=lastchildPath.getAttribute('d');
			let curvX=(draw_obj.prevX+positionX)/2;
			let curvY=(draw_obj.prevY+positionY)/2;
			lastchildPath.setAttribute('d',get_d_attr+" C"+curvX+","+curvY+" "+curvX+","+curvY+" "+positionX+","+positionY);
			draw_obj.prevX=positionX;
			draw_obj.prevY=positionY;
		}
	}			
}
export default drawNow;		
		
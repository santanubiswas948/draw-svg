"use strict";
import drawNow from './draw';
let draw_div=document.getElementById('svg');
		let draw_obj={
			prevX : 0,
			prevY : 0,
			flag  : 0,
			flag1  : 0,
			total_polygon  : 0,
			draw : () => {	
				//start time of draw=========
				draw_div.addEventListener('mousedown',()=>{
					draw_div.addEventListener('mousemove',drawNow);
				});
				//draw end time==================
				draw_div.addEventListener('mouseup',()=>{
					draw_div.removeEventListener('mousemove',drawNow);
					draw_obj.prevX=0;
					draw_obj.prevY=0;
				});
			},
			download : () =>{
				document.getElementById('svg').setAttribute("xmlns", "http://www.w3.org/2000/svg");
				let svgData = document.getElementById('svg').outerHTML;
				let svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
				let svgUrl = URL.createObjectURL(svgBlob);
				let save_btn = document.getElementById('link');
				save_btn.href = svgUrl;
				save_btn.download = "san.svg";
			},
			clear : () =>{
				let svg_children=document.getElementById('svg').children;
				let parentelm=document.getElementById('svg');
				while(parentelm.children.length>0)
				{
					parentelm.removeChild(parentelm.firstChild);
				}
			}
			
		}
		
		//all control flows==================
		draw_obj.draw();
		
		//download image---
		document.getElementById('link').addEventListener('click',()=>{
			draw_obj.download();
		});
		
		//clear image---
		document.getElementById('clear_image').addEventListener('click',()=>{
			draw_obj.clear();
		});
		
export default draw_obj;
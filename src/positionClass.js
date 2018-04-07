"use strict";
//For getting X position-----------------
		function getPositionX(elem)
		{
				let x=0;
				do{
					if(!isNaN(elem.offsetLeft))
					{
						x +=elem.offsetLeft;
					}
				}while(elem=elem.offsetParent);
				return x;
		}

//For getting Y Position---------------------------
		function getPositionY(elem)
		{
				let y=0;
				do{
					if(!isNaN(elem.offsetTop))
					{
						y +=elem.offsetTop;
					}
				}while(elem=elem.offsetParent);
				return y;
		}
	export{getPositionX,getPositionY};

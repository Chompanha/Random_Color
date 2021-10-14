const button = document.querySelector("button");
const body = document.querySelector("body");
const color = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const text = document.querySelector("#text");
const background = document.querySelector(".background")

function set_ramdom_color ()
{
    return Math.floor (Math.random()*color.length);
}

setInterval (function ()
{
    let color_code = "#";
   for (let i =0 ;i<6;i++)
   {
      color_code+=color [set_ramdom_color()];
   }
 body.style.backgroundColor =color_code;
 text.innerHTML =color_code ;

} , 2000);
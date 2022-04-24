"use strict"
//<script type="text/javascript">
	const actor=["Chloe Moretz",
    "Elsa Jean","Emma Stone","Emma Watson","Evelin Zakamsky",
		"Gillian Anderson","Hannah Hays","Ivanka Trump",
		"Lola","Maria Bondareva","Mia Magma",
		"Natalya Poklonskaya","Nicole Kidman",
		"Olga Bashmarova","Sweta Schulz",
		"Yasmin Blant"
		];
	let actor_win=["","","","","","","","","","","",""];
	
/*************************************/

	function start0() {	
		frame_content.setAttribute('src','htm/zamer.htm')
	}		
	function start() {
		setTimeout("start0()",2000)
	}
	var new_color
	var new_back
	var old_color
	var old_back
	const nbody=document.getElementsByTagName("body")[0]
	function get_color() {
		 old_color=nbody.style.color
	//	 alert(nbody.style.color)
 }
 
 	function set_color() {
 			new_color=btn_color.value
  			nbody.style.color=new_color
 		}
  	function set_back() {
 			new_back =btn_back.value
  			nbody.style.background=new_back
 		}
  	function set_restore() {
 			nbody.style.background="#094f4f"
  			nbody.style.color="white"
 		}

  const list_htm=["htm/zamer.htm","htm/molnia.htm",
      "htm/minisun.htm","htm/minisun_o.htm",
      "pdfs/page3.html","pdfs/page4.html",
      "pdfs/page6.html","pdfs/page10.html",
			]
	function goto(d) {
			let b="",c="";
      switch(d) {	
      case 1:
        b=list_htm.pop()
        list_htm.unshift(b)
        c=b
        frame_content.setAttribute('src',c);
        break;
      case 2:
        b=list_htm.shift()
        list_htm.push(b)
        c=b
        frame_content.setAttribute('src',c);
        break;
      }
	    return c
	}	
			
	function about(d) {
			let b="",c="";
      switch(d) {	
      case 0:
       c="./pdfs/licen.htm"
        frame_content.setAttribute('src',c);
        break;
      case 1:
       c="./pdfs/about1.htm"
        frame_content.setAttribute('src',c);
        break;
      case 2:
       c="./pdfs/arbeiter.htm"
        frame_content.setAttribute('src',c);
        break;
      case 3:
       c="./htm/priz.htm"
        frame_content.setAttribute('src',c);
        break;
      }
	    return c
	}	
	function electro(d) {
			let b="",c="";
      switch(d) {	
      case 0:
       c="./htm/zamer.htm"
        frame_content.setAttribute('src',c);
        break;
      case 1:
       c="./pdfs/about1.htm"
        frame_content.setAttribute('src',c);
        break;
      case 2:
       c="./htm/molnia.htm"
        frame_content.setAttribute('src',c);
        break;
      case 3:
       c="./htm/minisun.htm"
        frame_content.setAttribute('src',c);
        break;
       case 4:
       c="./htm/minisun_o.htm"
        frame_content.setAttribute('src',c);
        break;
      }
	    return c
	}	
	function slab(d) {
			let b="",c="";
      switch(d) {	
      case 0:
       c="./pdfs/page3.html"
        frame_content.setAttribute('src',c);
        break;
      case 1:
       c="./pdfs/page4.html"
        frame_content.setAttribute('src',c);
        break;
      case 2:
       c="./pdfs/page6.html"
        frame_content.setAttribute('src',c);
        break;
      case 3:
       c="./pdfs/page10.html"
        frame_content.setAttribute('src',c);
        break;
       case 4:
       c="./htm/minisun_o.htm"
        frame_content.setAttribute('src',c);
        break;
      }
	    return c
	}	
			
/***************************************/
			
	function all_actor(actor) {
		let ret="Select actor : \n";
		for (i=0;i<actor.length;i++) {
			ret+= i+". "+ actor[i];
			ret+="\n";
		}
		return ret
	}	
	function path_face(arg) {
		const face="img/"+arg+"/face.jpg";
		return face;
	}
	function sel_abit(arg) {
		const r=prompt(all_actor(actor),"2");
		const i=parseInt(r);
		const ret=actor[i];
		actor_win[i]=arg;
		return ret;
	}
	function path_act_nude(winid) {
		let path="";
		for (i=0;i<actor.length;i++) {
			if (actor_win[i]==winid){
				path="img/"+actor[i];
				break;			
			}
		}
		return path;
	}
	function stop_image_m() {
		stop_cry();
		image_m.setAttribute('src','none')
		image_f.setAttribute('src','none')
	}
let queue_image=["0","1","2","3","4","5","6","7","8","9"]
	function set_image_m(winid,dir_path) {
		let a=Math.random();
		let tip_img="",num_img=0;
		if (a<0.6 || true ){
			tip_img=".gif";				
		} else{
			tip_img=".jpg";
		}
  /*Wariant 1 
		let b=Math.random();
    b*=10; //count pics
		num_img=parseInt(b);				
    */
  /* Wariant  2 */
    num_img=queue_image.shift()
    queue_image.push(num_img)
		let path=path_act_nude(winid)+"/"+dir_path+"/"+num_img+tip_img;
//    console.log(num_img,path,queue_image)
		image_m.setAttribute('src',path);
		image_f.setAttribute('src',path_act_nude(winid)+"/face.jpg");

		let d=0;		
		if (dir_path=="relax"){d=1;}
		if (dir_path=="light"){d=2;}
		if (dir_path=="work"){d=3;}
		if (dir_path=="work_a"){d=4;}
		if (dir_path=="dp"){d=5;}
		if (dir_path=="bdsm"){d=6;}
		play_cry(d);
		//alert(path);
	}
	function leto() {
		leto64();				
		leto63();				
		leto62();
		leto61();
		leto54();
		leto53();				
		leto52();
		leto51();
		leto44();
		leto43();				
		leto42();
		leto41();
		leto34();
		leto33();				
		leto32();
		leto31();
		leto24();
		leto23();				
		leto22();
		leto21();
		leto14();
		leto13();				
		leto12();
		leto11();
	}
	function leto11() {
		const old_klass='h_1_1';
		let new_klass='h_1_2';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_1_1.setAttribute('src',"none");
				h_1_2.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
/*				alert(actor[i]+' переведена '+actor_win[i]
				+' '+old_klass+' '+new_klass);
*/
			}
		}
	}
	function leto12() {
		const old_klass='h_1_2';
		const new_klass='h_1_3';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_1_2.setAttribute('src',"none");
				h_1_3.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
/*				alert(actor[i]+' переведена '+actor_win[i]
 				+' '+old_klass+' '+new_klass);
*/
			}
		}
	}
	function leto13() {
		const old_klass='h_1_3';
		const new_klass='h_1_4';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_1_3.setAttribute('src',"none");
				h_1_4.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto14() {
		const old_klass='h_1_4';
		const new_klass='h_2_1';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_1_4.setAttribute('src',"none");
				h_2_1.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto21() {
		const old_klass='h_2_1';
		const new_klass='h_2_2';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_2_1.setAttribute('src',"none");
				h_2_2.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto22() {
		const old_klass='h_2_2';
		const new_klass='h_2_3';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_2_2.setAttribute('src',"none");
				h_2_3.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto23() {
		const old_klass='h_2_3';
		const new_klass='h_2_4';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_2_3.setAttribute('src',"none");
				h_2_4.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert(actor[i]+' переведена '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto24() {
		const old_klass='h_2_4';
		const new_klass='h_3_1';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_2_4.setAttribute('src',"none");
				h_3_1.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto31() {
		const old_klass='h_3_1';
		const new_klass='h_3_2';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_3_1.setAttribute('src',"none");
				h_3_2.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto32() {
		const old_klass='h_3_2';
		const new_klass='h_3_3';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_3_2.setAttribute('src',"none");
				h_3_3.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto33() {
		const old_klass='h_3_3';
		const new_klass='h_3_4';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_3_3.setAttribute('src',"none");
				h_3_4.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert(actor[i]+' переведена '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}

	function leto34() {
		const old_klass='h_3_4';
		const new_klass='h_4_1';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_3_4.setAttribute('src',"none");
				h_4_1.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto41() {
		const old_klass='h_4_1';
		const new_klass='h_4_2';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_4_1.setAttribute('src',"none");
				h_4_2.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto42() {
		const old_klass='h_4_2';
		const new_klass='h_4_3';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_4_2.setAttribute('src',"none");
				h_4_3.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto43() {
		const old_klass='h_4_3';
		const new_klass='h_4_4';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_4_3.setAttribute('src',"none");
				h_4_4.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert(actor[i]+' переведена '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}

	function leto44() {
		const old_klass='h_4_4';
		const new_klass='h_5_1';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_4_4.setAttribute('src',"none");
				h_5_1.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto51() {
		const old_klass='h_5_1';
		const new_klass='h_5_2';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_5_1.setAttribute('src',"none");
				h_5_2.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto52() {
		const old_klass='h_5_2';
		const new_klass='h_5_3';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_5_2.setAttribute('src',"none");
				h_5_3.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto53() {
		const old_klass='h_5_3';
		const new_klass='h_5_4';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_5_3.setAttribute('src',"none");
				h_5_4.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert(actor[i]+' переведена '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto54() {
		const old_klass='h_5_4';
		const new_klass='h_6_1';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_5_4.setAttribute('src',"none");
				h_6_1.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto61() {
		const old_klass='h_6_1';
		const new_klass='h_6_2';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_6_1.setAttribute('src',"none");
				h_6_2.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto62() {
		const old_klass='h_6_2';
		const new_klass='h_6_3';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_6_2.setAttribute('src',"none");
				h_6_3.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert("leto "+actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto63() {
		const old_klass='h_6_3';
		const new_klass='h_6_4';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_6_3.setAttribute('src',"none");
				h_6_4.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert(actor[i]+' переведена '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}
	function leto64() {
		const old_klass='h_6_4';
		const new_klass='h_7_1';
		for (i=0;i<actor_win.length;i++) {
			if (actor_win[i]==old_klass) {
				actor_win[i]=new_klass;
				h_6_4.setAttribute('src',"none");
				h_7_1.setAttribute('src',"img/"+actor[i]
					+"/face.jpg");
//				alert(actor[i]+' '+actor_win[i]
//				+' '+old_klass+' '+new_klass);
			}
		}
	}

/*****************
* sector
* sound
******************/
//  console.log(c)
var ifr=document.getElementById("frame_content").contentWindow
function done_css() {
/* 		frame_content.src.css0.disabled=!check_css0.checked
		document.getElementById(css1).disabled=!check_css1.checked
		document.getElementById(css2).disabled=!check_css2.checked
		document.getElementById(css3).disabled=!check_css3.checked
*/	
    ifr.postMessage("123","*")    
	}
function stop_cry() {
	aud.pause();
}

//</script>	


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
 			nbody.style.background="#032020"
  			nbody.style.color="white"
 		}

  const list_htm=["zamer.htm","molnia.htm",
      "minisun.htm","minisun_o.htm"
			]
	function goto(d) {
			let b="",c="";
      switch(d) {	
      case 1:
        b=list_htm.pop()
        list_htm.unshift(b)
        c="htm/"+b
        frame_content.setAttribute('src',c);
        break;
      case 2:
        b=list_htm.shift()
        list_htm.push(b)
        c="htm/"+b
        frame_content.setAttribute('src',c);
        break;
      }
	    return c
	}	
			
	function about(d) {
			let b="",c="";
      switch(d) {	
      case 0:
       c="./pdfs/about0.htm"
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
       c="./pdfs/about3.htm"
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
const z_relax=["enigma.mp3","hotrs.mp3","enigma2.mp3",
		"enigma3.mp3","enigma4.mp3","enigma5.mp3",
		"enigma6.mp3","enigma7.mp3"];
const z_light=["blonde_rot.mp3","sara_rot.mp3",
		"bliz_ov.mp3","barby_ska.mp3",
		"pisk.mp3"
		]; //
const z_work=["crying_w_3.mp3","moam_sweta.mp3","girl1mast.mp3",
		"ruswife_work.mp3",
		"dp45.mp3","ola_a.mp3","annap_v.mp3"
		];
const z_work_a=["rus_a_org.mp3","andr_a.mp3","dima_a.mp3",
		"ollla_a.mp3","crying_w_31.mp3","oro.mp3",
		"swestonesmin.mp3","wife3.mp3","mia_anal.mp3",
		"dp35.mp3","oktavia92.mp3","barby_ov.mp3",
		"bliz_cry.mp3", "pisk2.mp3"		
		]; 
const z_dp=["rus2_dp.mp3","rus_dp.mp3",
		"blonde_dp.mp3","barby_dp.mp3","poln_dp.mp3",
		"cryg_1702.mp3","dp25.mp3",
		"octav_bdsm.mp3","sara_dp.mp3",
		"lutik_dp.mp3"
		]; 
const z_bdsm=["rus3_dp_bdsm.mp3","rus_a_bbddsm.mp3",
		"rus_a_bddsm.mp3","oln_bdsm.mp3", "izn_bsds.mp3",
		"scream_valentino.mp3","oktavia_bdsm.mp3",
		"dogs_w.mp3","lutik_dp2.mp3",
		"red.mp3","rene_dp.mp3","oln_bdsm.mp3",
		"barby_bdsm.mp3"
		];
//let b_light=0,b_work=0,b_work_a=0, b_bdsm=0,b_dp=0,b_relax=0
function rnd_src(d) {
	let b="",c="";
	switch(d) {	
	case 2:
		b=z_light.shift()
    z_light.push(b)
		c="cry/"+b
		aud.setAttribute('src',c);
		break;
	case 3:
		b=z_work.shift()
    z_work.push(b)
		c="cry/"+b;
		aud.setAttribute('src',c);
		break;
	case 4:
		b=z_work_a.shift()
    z_work_a.push(b)
		c="cry/"+b
		aud.setAttribute('src',c);
		break;
	case 5:
		b=z_dp.shift()
    z_dp.push(b)
		c="cry/"+b;
		aud.setAttribute('src',c);
		break;
	case 6:
		b=z_bdsm.shift()
    z_bdsm.push(b)
		c="cry/"+b;
		aud.setAttribute('src',c);
		break;
	default:
		b=z_relax.shift()
    z_relax.push(b)
		c="cry/"+b;
		aud.setAttribute('src',c);
	}
//  console.log(c)
}
function done_css() {
/* 		frame_content.src.css0.disabled=!check_css0.checked
		document.getElementById(css1).disabled=!check_css1.checked
		document.getElementById(css2).disabled=!check_css2.checked
		document.getElementById(css3).disabled=!check_css3.checked
*/	
    document.getElementById("frame_content").contentWindow
        
	}
function stop_cry() {
	aud.pause();
}

//</script>	


var nam,rno,stream,coll;

function op() {
	nam=document.getElementById("name").value;
	rno=document.getElementById("rollNo").value;
	stream=document.getElementById("stream").value;
	coll=document.getElementById("college").value;
	if (confirm("Please confirm your details \n Name : "+nam+"\n Roll no : "+rno+"\n Stream : "+stream+"\n College : "+coll) == true) {
		disab();
	}
}

function disab() {
	document.getElementById("f1").style.display="none";
	document.getElementById("f2").style.display="block";
}

var c=0;
function addQ() {

	c++;

	var qs=document.createElement("span");
	qs.innerHTML = "Question : ";
	var o1s=document.createElement("span");
	o1s.innerHTML = "Option 1 : ";
	var o2s=document.createElement("span");
	o2s.innerHTML = "Option 2 : ";
	var o3s=document.createElement("span");
	o3s.innerHTML = "Option 3 : ";
	var o4s=document.createElement("span");
	o4s.innerHTML = "Option 4 : ";
	var q=document.createElement("input");
	q.setAttribute("id","q" + c );
	q.setAttribute("name","q" + c );
	var a1=document.createElement("input");
	a1.setAttribute("id","a1" + c );
	a1.setAttribute("name","a1" + c );
	var a2=document.createElement("input");
	a2.setAttribute("id","a2" + c );
	a2.setAttribute("name","a2" + c );
	var a3=document.createElement("input");
	a3.setAttribute("id","a3" + c );
	a3.setAttribute("name","a3" + c );
	var a4=document.createElement("input");
	a4.setAttribute("id","a4" + c );
	a4.setAttribute("name","a4" + c );
	var r1=document.createElement("input");
	r1.setAttribute("type","radio");
	r1.setAttribute("name","a" + c );
	r1.setAttribute("value","1");
	r1.setAttribute("checked","checked");
	var r2=document.createElement("input");
	r2.setAttribute("type","radio");
	r2.setAttribute("name","a" + c );
	r2.setAttribute("value","2");
	var r3=document.createElement("input");
	r3.setAttribute("type","radio");
	r3.setAttribute("name","a" + c );
	r3.setAttribute("value","3");
	var r4=document.createElement("input");
	r4.setAttribute("type","radio");
	r4.setAttribute("name","a" + c );
	r4.setAttribute("value","4");

	document.getElementById("f1").appendChild(document.createElement("br"));

	document.getElementById("f1").appendChild(qs);
	document.getElementById("f1").appendChild(q);
	document.getElementById("f1").appendChild(document.createElement("br"));


	document.getElementById("f1").appendChild(o1s);
	document.getElementById("f1").appendChild(r1);
	document.getElementById("f1").appendChild(a1);
	document.getElementById("f1").appendChild(document.createElement("br"));


	document.getElementById("f1").appendChild(o2s);
	document.getElementById("f1").appendChild(r2);
	document.getElementById("f1").appendChild(a2);
	document.getElementById("f1").appendChild(document.createElement("br"));


	document.getElementById("f1").appendChild(o3s);
	document.getElementById("f1").appendChild(r3);
	document.getElementById("f1").appendChild(a3);
	document.getElementById("f1").appendChild(document.createElement("br"));


	document.getElementById("f1").appendChild(o4s);
	document.getElementById("f1").appendChild(r4);
	document.getElementById("f1").appendChild(a4);
	document.getElementById("f1").appendChild(document.createElement("br"));

}

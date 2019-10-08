	
function entrance(){
	var stuNum,x,ans;
	x=document.getElementById("form1");
	stuNum=x.elements["num"].value;
	
	if(stuNum==17140404||stuNum==17126991||stuNum==17110009||stuNum==17140412||stuNum==17140447||stuNum==17140447||stuNum==16442896||stuNum==16774931||stuNum==16114477||stuNum==16519036||stuNum==16100328||stuNum==16442804||stuNum==16472486||stuNum==16114451||stuNum==15327681||stuNum==15041000||stuNum==16345823||stuNum==16360033||stuNum==16321103||stuNum==16370076||stuNum==16465134||stuNum==16432586||stuNum==16101251||stuNum==16438934||stuNum==17116601||stuNum==16333223||stuNum==16309311||stuNum==14560287||stuNum==16483684||stuNum==16401714||stuNum==16349321||stuNum==17140382||stuNum==17140391||stuNum==17140421||stuNum==15378586||stuNum==16103530||stuNum==16375211||stuNum==16312261||stuNum==17110009||stuNum==16329476||stuNum==16416304||stuNum==14509707||stuNum==16417504||stuNum==16399856||stuNum==16473414||stuNum==16392641||stuNum==16351296||stuNum==15044734||stuNum==16442896||stuNum==15039196||stuNum==15480562||stuNum==16339141||stuNum==17140412||stuNum==16348791||stuNum==16482412||stuNum==16320261||stuNum==17140447||stuNum==17126991||stuNum==16319906||stuNum==16457054||stuNum==15764445||stuNum==16468296||stuNum==16408022||stuNum==16410236||stuNum==17140404||stuNum==16501106||stuNum==16388923||stuNum==16369733||stuNum==16428704||stuNum==16325901||stuNum==16348136||stuNum==16300351||stuNum==16382003||stuNum==15047911||stuNum==16461064||stuNum==16354406||stuNum==16355811||stuNum==16101294||stuNum==15019853||stuNum==16779289||stuNum==16336066||stuNum==16440304||stuNum==16318711||stuNum==16114418||stuNum==16329053||stuNum==15318661||stuNum==17150736||stuNum==16444352||stuNum==12729231){
		window.location.href="timetable.html";
	}
	else{
		document.getElementById('output').innerHTML =("Incorrect");	
	}
}
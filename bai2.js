let str = prompt()



function viethoa(str) {

	var strArr=str.split(" ");


	for(var i=0;i<strArr.length;i++){

      var charArr=strArr[i].split("");

	    charArr[0]=charArr[0].toUpperCase();

      strArr[i]=charArr.join("");

	    
	}
	return strArr.join(" ");
}
  
    let ketqua  = viethoa(str)
      console.log(ketqua)
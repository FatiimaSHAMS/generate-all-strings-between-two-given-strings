
const submition = document.getElementById("submition")
submition.innerHTML = ""
function addOneToString(str, index,firstStr,lastStr) {
    if (index < 0) {
      return null;
    }
    prefix = "";
    postfix = "";
    prefix = index > 0 ? str.substring(0, index) : "";
    postfix = index < (str.length - 1) ? str.substring(index + 1) : "";
    if (str.charAt(index) < lastStr.charAt(index)) {
      middleChar = String.fromCharCode(str.charCodeAt(index) + 1)
      return prefix + middleChar + postfix;
    } else {
      middleChar = String.fromCharCode(firstStr.charCodeAt(index));
      return addOneToString(prefix + middleChar + postfix, index - 1,firstStr,lastStr);    }
  }

  function calculate() {
    var str1 = document.getElementById("text1").value;
    var str2 = document.getElementById("text2").value;
    newStr = str1;
    
      
    
    while (newStr != null && newStr < str2) {

      newStr = addOneToString(newStr, str1.length - 1,str1,str2);
      
      if (newStr != null && newStr <= str2) { 
        submition.append(` `);
        submition.append(newStr);
        submition.append(",");



       
        
      }
      
      
    }
    
    
  }

  


  
                    

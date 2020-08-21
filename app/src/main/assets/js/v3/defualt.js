function finishingTouch() {
  var final0 = document.getElementById("ansiText").value; 
  var final1 = final0.replace(/Ä%/g, "%Ä");
  var final2 = final1.replace(/ öì/g, " ö");
  var final3 = final2.replace(/ ÷ì/g, " ÷");
  var final4 = final3.replace(/þ%/g, "%þ");
  var final5 = final4.replace(/þ\)/g, ")þ");
  var final6 = final5.replace(/þ,/g, ",þ");
  var final7 = final6.replace(/þÊ/g, "Êþ");
  var final8 = final7.replace(/þ¤/g, "¤þ");
  var final9 = final8.replace(/þÅ/g, "Åþ");
  var final10 = final9.replace(/þä/g, "äþ");
  var final11 = final10.replace(/vÊ/g, "vÈ");
  var final12 = final11.replace(/uÊ/g, "uÈ");
  var final13 = final12.replace(/ÓÊ/g, "ÓÈ");
  var final14 = final13.replace(/þé%/g, "%þé");
  var final15 = final14.replace(/þé\)/g, ")þé");
  var final16 = final15.replace(/þé,/g, ",þé");
  var final17 = final16.replace(/þéä/g, "äþé");
  var final18 = final17.replace(/é%/g, "%é");
  var final19 = final18.replace(/é\)/g, ")é");
  var final20 = final19.replace(/é,/g, ",é");
  var final21 = final20.replace(/éä/g, "äé");
  var final22 = final21.replace(/vþü%/g, "vþY");
  var final23 = final22.replace(/‘þü%/g, "‘þY");
  var final24 = final23.replace(/Ï%/g, "Ï$");
  var final25 = final24.replace(/´%/g, "´$");
  var final26 = final25.replace(/‰Êþ/g, "‰þÆ");
  var final27 = final26.replace(/ÝÊþ/g, "ÝþÆ");
  var final28 = final27.replace(/àÊþ/g, "àþÆ");
  var final29 = final28.replace(/‘Êþ/g, "‘þÆ"); 
  var final30 = final29.replace(/ØÊþ/g, "ØþÆ");
  var final31 = final30.replace(/ŠéÊ/g, "ŠéÉ");
  var final32 = final31.replace(/£Ê/g, "£É");
  var final33 = final32.replace(/ÙŠéÊ/g, "ÙŠéÉ");
  var final34 = final33.replace(/QÊ/g, "QÉ");
  var final35 = final34.replace(/_Ê/g, "_É");
  var final36 = final35.replace(/_«Ê/g, "_É«");
  var final37 = final36.replace(/sþiÊ/g, "sþiÉ");
  var final38 = final37.replace(/TÊ/g, "TÉ");
  var final39 = final38.replace(/ßþ<Ê/g, "ßþ<É"); 
  var final40 = final39.replace(/\[Ê/g, "\[È");
  var final41 = final40.replace(/Êþ%/g, "Ê%þ");
  var final42 = final41.replace(/Êþ\)/g, "Ê\)þ");
  var final43 = final42.replace(/Êþ,/g, "Ê,þ");
  var final44 = final43.replace(/É%/g, "É$");
  var final45 = final44.replace(/Æ%/g, "Æ$");
  var final46 = final45.replace(/Èþ%/g, "Èþ$");
  var final47 = final46.replace(/i%/g, "i$");
  var final48 = final47.replace(/i\)/g, "i\(");
  var final49 = final48.replace(/q%/g, "q$");
  var final50 = final49.replace(/q\)/g, "q\(");
  var final51 = final50.replace(/@ùÌ%/g, "@ùÌ&");
  var final52 = final51.replace(/@ùÌ\)/g, "@ùÌ*");
  var final53 = final52.replace(/…Ê%/g, "…Ê&");
  var final54 = final53.replace(/…Ê\)/g, "…Ê*");
  var final55 = final54.replace(/íÊ%/g, "íÊ&");
  var final56 = final55.replace(/íÊ\)/g, "íÊ*");
  var final57 = final56.replace(/”Ê%/g, "”Ê&");
  var final58 = final57.replace(/”Ê\)/g, "”Ê*");
  var final59 = final58.replace(/•Ê%/g, "•Ê&");
  var final60 = final59.replace(/•Ê\)/g, "•Ê*");
  var final61 = final60.replace(/²Ì%/g, "²Ì&");
  var final62 = final61.replace(/²Ì\)/g, "²Ì*");
  var final63 = final62.replace(/îÊ%/g, "îÊ&");
  var final64 = final63.replace(/îÊ\)/g, "îÊ*");
  var final65 = final64.replace(/îû%/g, "îû&");
  var final66 = final65.replace(/îû\)/g, "îû*");
  var final67 = final66.replace(/ ó/g, " ò");
  var final68 = final67.replace(/vþ!়/g, "!vþü");
  var final69 = final68.replace(/vþöì়/g, "öìvþü");
  var final70 = final69.replace(/vþ÷ì়/g, "÷ìvþü");
  var final71 = final70.replace(/‘þ!়/g, "!‘þü");
  var final72 = final71.replace(/‘þöì়/g, "öì‘þü");
  var final73 = final72.replace(/‘þ÷ì়/g, "÷ì‘þü");
  var final74 = final73.replace(/ë!়/g, "!ëû");
  var final75 = final74.replace(/ëöì়/g, "öìëû");
  var final76 = final75.replace(/ë÷ì়/g, "÷ìëû");
  var final77 = final76.replace(/«%/g, "%«");
  var final78 = final77.replace(/«\)/g, "\)«");
  var final79 = final78.replace(/«,/g, ",«");
  var final80 = final79.replace(/ñ%/g, "%ñ");
  var final81 = final80.replace(/ñ\)/g, "\)ñ");
  var final82 = final81.replace(/ñ,/g, ",ñ");
  var final83 = final82.replace(/Ï\)/g, "Ï\(");
  var final84 = final83.replace(/Ï,/g, "Ï+"); 
  var final85 = final84.replace(/´\)/g, "´\(");
  var final86 = final85.replace(/´,/g, "´+");
  var final87 = final86.replace(/É\)/g, "É\(");
  var final88 = final87.replace(/É,/g, "É+");
  var final89 = final88.replace(/Æ\)/g, "Æ\(");
  var final90 = final89.replace(/Æ,/g, "Æ+");
  var final91 = final90.replace(/Èþ\)/g, "Èþ\(");
  var final92 = final91.replace(/Èþ,/g, "Èþ+");  
  var final93 = final92.replace(/i,/g, "i+"); 
  var final94 = final93.replace(/q,/g, "q+");
  var final95 = final94.replace(/‡Ê%/g, "‡Ê&"); 
  var final96 = final95.replace(/‡Ê\)/g, "‡Ê*"); 
  var final97 = final96.replace(/’Ê%/g, "’Ê&"); 
  var final98 = final97.replace(/’Ê\)/g, "’Ê*"); 
  var final99 = final98.replace(/e%/g, "e&"); 
  var final100 = final99.replace(/e\)/g, "e*"); 
  var final101 = final100.replace(/¼%/g, "¼&"); 
  var final102 = final101.replace(/¼\)/g, "¼*"); 
  var final103 = final102.replace(/Ë%/g, "Ë&"); 
  var final104 = final103.replace(/Ë\)/g, "Ë*"); 
  var final105 = final104.replace(/×%/g, "×&"); 
  var final106 = final105.replace(/×\)/g, "×*"); 
  var final107 = final106.replace(/¡ìÊ%/g, "¡ìÊ&"); 
  var final108 = final107.replace(/¡ìÊ\)/g, "¡ìÊ*"); 
  var final109 = final108.replace(/\nöì/g, "\nö");
  var final110 = final109.replace(/\n÷ì/g, "\n÷");
  var final111 = final110.replace(/òöì/g, "òö");
  var final112 = final111.replace(/òn÷ì/g, "ò÷");
  
  var final = final112;

  if(final.charAt(0) == "ö") {
    var finalText = final.replace("öì", "ö");
  } 
  else if (final.charAt(0) == "÷") {
    var finalText = final.replace("÷ì", "÷");
  }  
  else {
    var finalText = final;
  }    
  document.getElementById("ansiText").value = finalText;
}
           

document.getElementById("ansiText").oninput =  function ()
{
  var text = document.getElementById('ansiText').value;
  document.getElementsByClassName('mdl-textfield__input')[0].value = ConvertToUnicode("bijoy", text);
  document.getElementsByClassName('mdl-textfield')[0].MaterialTextfield.change();
} 


document.getElementById("uniText").oninput = function ()
{
  var text = document.getElementById("uniText").value;
  document.getElementsByClassName('mdl-textfield__input')[1].value = ConvertToASCII("bijoy", text);
  finishingTouch();	
  document.getElementsByClassName('mdl-textfield')[1].MaterialTextfield.change();
} 



function clearText() {
  textTest = document.getElementById("uniText").value;

  if (textTest == "") {
    var toast = document.getElementById("funcFailed");
    toast.classList.add("toastShow");
    setTimeout( function(){
      toast.classList.remove("toastShow"); 
    }, 3000);
  }

  else {
    var toast = document.getElementById("clearSuccess");
    toast.classList.add("toastShow");
    setTimeout( function(){
      toast.classList.remove("toastShow"); 
    }, 3000);

    document.getElementById("uniText").value = "";
    document.getElementsByClassName('mdl-textfield')[0].MaterialTextfield.change();
    document.getElementById("ansiText").value = "";
    document.getElementsByClassName('mdl-textfield')[1].MaterialTextfield.change();
  }
}

function doCopy(wText) {
  textTest = document.getElementById("uniText").value;

  if (textTest == "") {
    var toast = document.getElementById("funcFailed");
    toast.classList.add("toastShow");
    setTimeout( function(){
      toast.classList.remove("toastShow"); 
    }, 3000);
  }

  else {
    var toast = document.getElementById("copySuccess");
    toast.classList.add("toastShow");
    setTimeout( function(){
      toast.classList.remove("toastShow"); 
    }, 3000);
    
    var copyText = document.getElementById(wText);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
}



document.getElementById('pasteUni').addEventListener('click', ()=> {

    navigator.clipboard.readText()
    .then((text) =>{  
      if (text == "") {
        var toast = document.getElementById("pasteEmpty");
        toast.classList.add("toastShow");
        setTimeout( function(){
          toast.classList.remove("toastShow"); 
        }, 3000);
      }
      else {
        let pasteArea = document.getElementById('uniText');
        pasteArea.value = text;

        document.getElementById("ansiText").value = ConvertToASCII("bijoy", text);
        finishingTouch();

        var toast = document.getElementById("pasteSuccess");
        toast.classList.add("toastShow");
        setTimeout( function(){
          toast.classList.remove("toastShow"); 
        }, 3000);
      }
    })
    .catch(err => {
        var toast = document.getElementById("pasteFailed");
        toast.classList.add("toastShow");
        setTimeout( function(){
          toast.classList.remove("toastShow"); 
        }, 3000);
    });
  
});

document.getElementById('pasteAnsi').addEventListener('click', ()=> {

    navigator.clipboard.readText()
    .then((text) =>{  
      if (text == "") {
        var toast = document.getElementById("pasteEmpty");
        toast.classList.add("toastShow");
        setTimeout( function(){
          toast.classList.remove("toastShow"); 
        }, 3000);
      }
      else {
        let pasteArea = document.getElementById('ansiText');
        pasteArea.value = text;

        document.getElementById("uniText").value = ConvertToUnicode("bijoy", text);

        var toast = document.getElementById("pasteSuccess");
        toast.classList.add("toastShow");
        setTimeout( function(){
          toast.classList.remove("toastShow"); 
        }, 3000);
      }
    })
    .catch(err => {
        var toast = document.getElementById("pasteFailed");
        toast.classList.add("toastShow");
        setTimeout( function(){
          toast.classList.remove("toastShow"); 
        }, 3000);
    });

});
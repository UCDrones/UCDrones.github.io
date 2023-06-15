/* ################   User Interaction   ################*/

function layerToggle() {
    // Get the checkbox
    var checkBox = document.getElementById("classAir");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  
 function copyTextBoxLat() {
  // Get the text field
  var copyText = document.getElementById("flat");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
 navigator.clipboard.writeText(copyText.value);
 }
 
  function copyTextBoxLon() {
  // Get the text field
  var copyText = document.getElementById("flon");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

function defineActions(event){
	  const item = event.item;
	  
	  if (item.title === "FAA Airspace Information"){
	  	  item.open = true;
	  }
	  if (item.title === "CA Local Regulations"){
		  item.open = true;
	  }
  }
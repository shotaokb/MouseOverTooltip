function drawViz(data) {

  const tooltip = new Tooltip();
  const divIcon = document.getElementById("iconDiv");

  const st = {
    textColor: data.style.textcolor.value.color || data.style.textcolor.defaultValue,
    borderColor: data.style.bordercolor.value.color || data.style.bordercolor.defaultValue,
    textFont: data.style.textfont.value || data.style.textfont.defaultValue,
    textSize: data.style.textsize.value || data.style.textsize.defaultValue ,
    borderWidth: data.style.borderwidth.value || data.style.borderwidth.defaultValue,
    borderStyle: data.style.borderstyle.value || data.style.borderstyle.defaultValue,
    borderRadius: data.style.borderradius.value || data.style.borderradius.defaultValue,
    iconSize: data.style.iconsize.value || data.style.iconsize.defaultValue,
    iconColor: data.style.iconcolor.value.color /*|| data.style.iconcolor.defaultValue*/,
    backgroundColor: data.style.backgroundcolor.value.color || data.style.backgroundcolor.defaultValue,
    tooltipIcon: data.style.tooltipicon.value || data.style.tooltipicon.defaultValue,
    tooltipText: data.style.tooltiptext.value || data.style.tooltiptext.defaultValue,
  };

  //change icon
  switch(st.tooltipIcon){
    case "0": divIcon.innerHTML = svgIcons[0]; break;
    case "1": divIcon.innerHTML = svgIcons[1]; break;
    case "2": divIcon.innerHTML = svgIcons[2]; break;
    default: divIcon.innerHTML = svgIcons[0];
  }
  divIcon.innerHTML = svgIcons[st.tooltipIcon];

  //append style
  const svg = document.getElementById("svgicon");

  //tooltip area
  svg.setAttribute("tooltip", st.tooltipText);
  svg.addEventListener("mouseover", function(event) {
    tooltip.Schedule(this, event, st.textColor, st.borderColor, st.textFont, st.textSize, st.borderWidth, st.borderStyle, st.borderRadius, st.backgroundColor);
  });

  //icon size setting
  divIcon.style.width = `${st.iconSize}px`;
  divIcon.style.height = `${st.iconSize}px`;

  //icon color setting
  const tpclass = document.getElementsByClassName("iconstyle");
  if(st.iconColor){
    for(let i=0; i<tpclass.length; i++){
      tpclass[i].setAttribute("style",`fill: ${st.iconColor}`);
    }
  }else{
    for(let i=0; i<tpclass.length; i++){
      tpclass[i].setAttribute("style",`fill: ${data.theme.themeAccentFontColor.color}`);
    }
  }
}

// subscribe to data and style changes
const div = document.createElement("div");
div.setAttribute("id", "iconDiv");
document.body.appendChild(div);
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });

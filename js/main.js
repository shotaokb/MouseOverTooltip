function drawViz(data) {

  const tooltip = new Tooltip();
  const divIcon = document.getElementById("iconDiv");

  const st = {
    textColor: data.style.textcolor.value.color,
    borderColor: data.style.bordercolor.value.color,
    textFont: data.style.textfont.value,
    textSize: data.style.textsize.value,
    borderWidth: data.style.borderwidth.value,
    borderStyle: data.style.borderstyle.value,
    borderRadius: data.style.borderradius.value,
    iconSize: data.style.iconsize.value,
    iconColor: data.style.iconcolor.value.color,
    backgroundColor: data.style.backgroundcolor.value.color,
    tooltipIcon: data.style.tooltipicon.value,
    tooltipText: data.style.tooltiptext.value,
  };

  //change icon
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

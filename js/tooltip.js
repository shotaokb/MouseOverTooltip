//cf. https://so-zou.jp/web-app/tech/programming/javascript/sample/tooltip.htm
const Tooltip = function(){
      //content
      this.content = document.createElement("div");
      this.content.className = "tooltip-content";

      //shadow
      this.shadow = document.createElement("div");
      this.shadow.className = "tooltip-shadow";
      this.shadow.style.visibility = "hidden";

      this.shadow.appendChild(this.content);
      document.body.appendChild(this.shadow);
}

Tooltip.DELAY = 300; //delay time
Tooltip.OFFSET = 5; //mouse pointer offset

//functions
Tooltip.prototype ={
  Show: function(text, x, y, tcolor, bcolor, tfont, tsize, bwidth, bstyle, bradius, bgcolor) {
    //content and styles
    this.content.innerText = text;
    this.content.style.color = tcolor;
    this.content.style.border = `${bwidth}px ${bstyle} ${bcolor}`;
    this.content.style.borderRadius = `${bradius}px`;
    this.content.style.fontFamily = tfont;
    this.content.style.fontSize = `${tsize}px`;
    this.content.style.backgroundColor = bgcolor;

    //shadow
    this.shadow.style.left = `${x}px`;
    this.shadow.style.top = `${y}px`;
    this.shadow.style.visibility = "visible";
  },

  Hide: function() {
    this.shadow.style.visibility = "hidden";
  },

  Schedule: function(targetElement, event, tColor, bColor, tFont, tSize, bWidth, bStyle, bRadius, bgColor) {
    let e = event || window.event;

    let x = e.clientX;
    let y = e.clientY;

    x += window.pageXOffset || document.documentElement.scrollLeft;
    y += window.pageYOffset || document.documentElement.scrollTop;

    const _this = this;

    const timerID = setTimeout(function() {

      const text = targetElement.getAttribute("tooltip");
      _this.Show(text, x + Tooltip.OFFSET, y + Tooltip.OFFSET, tColor, bColor, tFont, tSize, bWidth, bStyle, bRadius, bgColor);
    },
    Tooltip.DELAY);

    function MouseOut() {
      _this.Hide();

      clearTimeout(timerID);

      if (targetElement.removeEventListener) {
        targetElement.removeEventListener("mouseout", MouseOut, false);
      }
    }
    targetElement.addEventListener("mouseout", MouseOut, false);
  }
}

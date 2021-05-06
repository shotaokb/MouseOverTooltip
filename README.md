# GoogleDataStudio Mouseover Tooltip

![Mouseover Tooltip Icon](https://raw.githubusercontent.com/shotaokb/MouseOverTooltip/master/mouseover_tooltip_icon.jpg)

## Instructions

### Step1 Download dscc.min.js to ./js
https://developers.google.com/datastudio/visualization/library

### Step2 Type following commands
```bash
$ cat js/dscc.min.js > mouseovertooltip.js
$ echo >> mouseovertooltip.js
$ cat js/icons.js >> mouseovertooltip.js
$ cat js/tooltip.js >> mouseovertooltip.js
$ cat js/main.js >> mouseovertooltip.js
```
or
```bash
$ cat js/dscc.min.js > mouseovertooltip.js && echo >> mouseovertooltip.js && cat js/icons.js >> mouseovertooltip.js && cat js/tooltip.js >> mouseovertooltip.js && cat js/main.js >> mouseovertooltip.js
```

### Step3 Push 4 files your gcs bucket
1. manifest.json
2. mouseovertooltip.js
3. mouseovertooltip.json
4. style.css

## How to Use this Community Visualization on DataStudio

### English
Component ID: gs://community-viz-shotaokb/mouseovertooltip/en

### Japanese
Component ID: gs://community-viz-shotaokb/mouseovertooltip/ja


## How to use branches in Github
master: This is the version we offer on Google Data Studio.
prod: This is a test version of the latest features under development and available in the [DEV]MouseOverTooltip.
develop: This is a version under development.

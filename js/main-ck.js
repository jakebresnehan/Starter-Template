/* ==========================================================================
   Author's custom scripts
   ========================================================================== */// FitVid's added because not too many sites don't have video's these days
// $(document).ready(function(){
//    // Target your .container, .wrapper, .post, etc.
//    //$("#thing-with-videos").fitVids();
//  });
/* ==========================================================================
   FitWeird  **** USED FOR DEVELOPMENT ****
   ========================================================================== *//*
 * A window monitor
 * Super handy for responsive design development.
 * Calculator is located in bottom right of viewport
 * More info - https://github.com/davatron5000/fitWeird
 *           - https://github.com/jhermsmeier/fitWeird
 */(function(e,t){"use strict";if(!t.getElementById("fitweird")){var n=t.createElement("div"),r=n.style,i=parseFloat(getComputedStyle(t.body).fontSize),s,o;r.bottom=0;r.right=0;r.position="fixed";r.backgroundColor="rgba(58, 58, 58, 0.8)";r.padding="0.4em 1em";r.color="#00CC00";r.fontFamily="monospace";n.id="fitweird";t.body.appendChild(n);var u=function(){s=e.innerWidth;o=e.innerHeight;n.innerHTML=s+"px &times; "+o+"px :: "+s/i+"em &times; "+o/i+"em"};addEventListener("resize",u);u()}})(this,document);
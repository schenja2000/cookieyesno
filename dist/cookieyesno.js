var cookieyesno=function(){"use strict";
/*!
    CookieYesNo | philippG777 | https://github.com/philippG777/cookieyesno | BSD 3-Clause License
    */return class{constructor(e){this.cookie={set:function(e,t){let n=new Date;n.setTime(n.getTime()+7776e6),document.cookie=e+"="+t+";expires="+n.toUTCString()+";path=/"},get:function(e){const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const s=t[n].trim().split("=");if(s[0]==e)return s[1]}return null}},this._config=e,this._changeListeners=[],this._acceptListeners=[],this._rejectListeners=[],this.banner=this._createBanner(),this._applyStyle(),this._addListeners(),null==this._load()?this.show():this._runAcceptRejectListeners()}_load(){const e=this.cookie.get("_cyn");return null==e?null:JSON.parse(e)}_save(e){this.cookie.set("_cyn",JSON.stringify(e))}onChange(e){this._changeListeners.push(e)}onAccept(e,t){!0===this.getSettings()[e]?t():this._acceptListeners.push({name:e,cb:t})}onReject(e,t){!1===this.getSettings()[e]?t():this._rejectListeners.push({name:e,cb:t})}getSettings(){const e=this._load();return null==e?{}:e}reviewSettings(){this._bannerApplySettings(this.getSettings()),this.show()}_createBanner(){const e=document.createElement("div");e.className="cyn-banner";let t='<h3 style="font-size: 28px; font-weight: bold;">This site uses cookies</h3>';t+="<p>"+this._config.text+"</p>",t+='<table class="cyn-categories"><tbody>';for(const e in this._config.categories){const n=this._config.categories[e];t+='<tr><td style="font-weight:bold;">'+e+"</td><td>"+n.description+"</td><td>",t+='<input type="checkbox" value="'+e+'"'+(n.allowed?" checked":"")+(!0===n.changeable||void 0===n.changeable?"":" disabled")+"/>",t+="</td></tr>"}return t+="</tbody></table>",t+='<p>For detailed information take a look at the <a href="'+this._config.cookiePolicy+'">Cookie Policy</a>.</p>',t+='<button class="cyn-btn-save">Save Settings</button>',t+='<button class="cyn-btn-accept-all">Accept all</button>',e.innerHTML=t,e.style.display="none",document.body.appendChild(e),e}_bannerApplySettings(e){let t=this.banner.getElementsByTagName("input");for(let n=0;n<t.length;n++)"checkbox"==t[n].type&&(t[n].checked=null!=e[t[n].value.toLowerCase()]&&1==e[t[n].value.toLowerCase()])}_applyStyle(){let e=this.banner.style;e.zIndex=5e3,e.backgroundColor="#fff",e.position="fixed",e.padding="16px",e.boxShadow="0 0 24px #aaa",e.borderRadius="8px",window.innerWidth<=768?e.right=e.left=e.bottom="16px":e.right=e.bottom="32px",e=this.banner.getElementsByTagName("table")[0].style,e.margin="16px";const t=this.banner.getElementsByTagName("td");for(let e=0;e<t.length;e++)t[e].style.padding="8px";const n=this.banner.getElementsByTagName("button");for(let t=0;t<n.length;t++)e=n[t].style,e.boxSizing="border-box",e.cursor="pointer",e.margin="8px",e.marginTop="24px",e.borderRadius="4px","cyn-btn-accept-all"==n[t].className?(e.border="0px",e.backgroundColor="#48c774",e.color="white",e.fontWeight="bold",e.fontSize="24px",e.padding="12px",e.paddingLeft=e.paddingRight="16px"):(e.backgroundColor="white",e.color="#999",e.border="2px solid #bbb",e.fontSize="20px",e.padding="8px")}_addListeners(){const e=this.banner.getElementsByTagName("button");for(let t=0;t<e.length;t++)e[t].addEventListener("click",this._onButtonClick.bind(this))}_onButtonClick(e){let t={};const n=e.target.className;if(-1!=n.indexOf("cyn-btn-accept-all"))for(const e in this._config.categories)t[e.toLowerCase()]=!0;else{if(-1==n.indexOf("cyn-btn-save"))return;{const e=this.banner.getElementsByTagName("input");for(let n=0;n<e.length;n++)"checkbox"==e[n].type&&(t[e[n].value.toLowerCase()]=e[n].checked)}}this.hide();for(let e=0;e<this._changeListeners.length;e++)this._changeListeners[e](t);this._runAcceptRejectListeners(t),this._save(t)}_runAcceptRejectListeners(e){void 0===e&&(e=this.getSettings());for(let t=0;t<this._acceptListeners.length;t++)!0===e[this._acceptListeners[t].name]&&this._acceptListeners[t].cb();for(let t=0;t<this._rejectListeners.length;t++)!1===e[this._rejectListeners[t].name]&&this._rejectListeners[t].cb()}show(){this.banner.style.display="block"}hide(){this.banner.style.display="none"}}}();

(function(e){function t(t){for(var a,i,u=t[0],p=t[1],s=t[2],l=0,y=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&y.push(r[i][0]),r[i]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(e[a]=p[a]);d&&d(t);while(y.length)y.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=p(p.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function u(e){return p.p+"js/"+({}[e]||e)+"."+{"chunk-6dcfb2fe":"fd628d96","chunk-7465e4fc":"0caf975b"}[e]+".js"}function p(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,p),n.l=!0,n.exports}p.e=function(e){var t=[],n={"chunk-6dcfb2fe":1,"chunk-7465e4fc":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-6dcfb2fe":"965b1acf","chunk-7465e4fc":"d37fa095"}[e]+".css",r=p.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return t()}var y=document.getElementsByTagName("style");for(u=0;u<y.length;u++){s=y[u],l=s.getAttribute("data-href");if(l===a||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],d.parentNode.removeChild(d),n(o)},d.href=r;var c=document.getElementsByTagName("head")[0];c.appendChild(d)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,p.nc&&l.setAttribute("nonce",p.nc),l.src=u(e);var y=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;y.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",y.name="ChunkLoadError",y.type=a,y.request=i,n[1](y)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},p.m=e,p.c=a,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)p.d(n,a,function(t){return e[t]}.bind(null,a));return n},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var y=0;y<s.length;y++)t(s[y]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o=(n("68be"),n("2877")),u={},p=Object(o["a"])(u,i,r,!1,null,null,null),s=p.exports,l=n("8c4f");a["default"].use(l["a"]);var y=new l["a"]({mode:"history",routes:[{path:"/",name:"Hibox",component:function(){return n.e("chunk-7465e4fc").then(n.bind(null,"481e"))}},{path:"/airdrop",name:"AirDrip",component:function(){return n.e("chunk-6dcfb2fe").then(n.bind(null,"d737"))}}]});y.afterEach((function(e,t){window.scrollTo(0,0)}));var d=y,c=n("bc3a"),m=n.n(c),f=n("5c96"),b=n.n(f),T=(n("0fae"),n("7212")),v=n.n(T),w=(n("dfa4"),n("caf9")),h=n("e90d");a["default"].use(b.a),a["default"].use(v.a),a["default"].use(w["a"],{preLoad:1,attempt:1}),a["default"].config.productionTip=!1,m.a.defaults.timeout=5e3;new h["a"];a["default"].prototype.$http=m.a,new a["default"]({router:d,render:function(e){return e(s)}}).$mount("#app")},"68be":function(e,t,n){"use strict";n("f281")},e90d:function(e,t,n){"use strict";var a=n("d225"),i=n("b0b4"),r=[{inputs:[{internalType:"uint256",name:"_airdropTotalAmount",type:"uint256"},{internalType:"uint256",name:"_airdropTerm",type:"uint256"},{internalType:"uint256",name:"_airdropStartTime",type:"uint256"},{internalType:"uint256",name:"_airdropDeadline",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"receiptAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"erc721TokenAirdropper",type:"event"},{inputs:[],name:"airdropDeadline",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"airdropRecord",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropStartTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropTerm",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"airdropTimeRecord",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropTotalAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"airdropWhitelistNum",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"dests",type:"address[]"},{internalType:"uint256[]",name:"tokenids",type:"uint256[]"}],name:"doAirdrop",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAirdrop",outputs:[{internalType:"uint256",name:"nftTokenId",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAirdropAvailableNum",outputs:[{internalType:"uint256",name:"num",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAirdropAvailableNum1",outputs:[{internalType:"uint256",name:"num",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"_airdropTotalAmount",type:"uint256"}],name:"setTotalAmount",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_airdropTerm",type:"uint256"}],name:"setTerm",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_airdropStartTime",type:"uint256"}],name:"setStartTime",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_airdropDeadline",type:"uint256"}],name:"setDeadline",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_airdropNFTIndex",type:"uint256"}],name:"setAirdropNFTIndex",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"}],name:"setTokenAddress",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_airdropNFTBeginIndex",type:"uint256"},{internalType:"uint256",name:"_airdropNFTEndIndex",type:"uint256"}],name:"startDoAirdropNFT",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_airdropAddresses",type:"address[]"},{internalType:"uint256[]",name:"_airdropNums",type:"uint256[]"}],name:"setWhitelists",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_airdropAddress",type:"address"},{internalType:"uint256",name:"_airdropNum",type:"uint256"}],name:"setWhitelist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_airdropNFTEndIndex",type:"uint256"}],name:"changeDoAirdropNFTEndIndex",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAirdropNFTIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"}],o=r,u=[{inputs:[{internalType:"string",name:"initBaseURI",type:"string"},{internalType:"string",name:"initNotRevealedUri",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"MAX_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_isSaleActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"_revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseExtension",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mintPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"notRevealedUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenQuantity",type:"uint256"}],name:"AdminMintAgentNFT",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenQuantity",type:"uint256"}],name:"mintAgentNFT",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"flipSaleActive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"flipReveal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_mintPrice",type:"uint256"}],name:"setMintPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_notRevealedURI",type:"string"}],name:"setNotRevealedURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseExtension",type:"string"}],name:"setBaseExtension",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxBalance",type:"uint256"}],name:"setMaxBalance",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxMint",type:"uint256"}],name:"setMaxMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],p=u,s=(n("c0d8"),n("5c96"),"0xBaD1A1a03B196A756871b050d3e48F4DF5AFe177"),l="0x7cC71dA09C61a2706cA378DFa63204612505c194",y=function(){function e(){Object(a["a"])(this,e);var t=this;t.wei=null,t.bnb=null,t.hibox=null,t.hpy=null,t.hiboxNFT=null,t.web3Provider=null,t.web3=null,t.accountAddr=null,t.walletMode="metamask",t.airdropAvailableNum=0,t.nftUrl=null,console.log("constructer web3 status ",window.ethereum)}return Object(i["a"])(e,[{key:"connectMetamask",value:function(){var t=this;return new Promise((function(a,i){"undefined"!==typeof window.ethereum?window.ethereum.enable().then((function(i){e.accountAddr=i[0];var r=n("c0d8");if(window.ethereum){t.web3Provider=window.ethereum,console.log("web3Provider",window.ethereum);try{window.ethereum.enable()}catch(o){alert("User denied account access"),console.error("ethereum User denied account access")}}else window.web3?(console.log("currentProvider",window.web3.currentProvider),t.web3Provider=window.web3.currentProvider):t.web3Provider=new r.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545");e.web3=new r(t.web3Provider),console.log("new  web3 accountAddr = ",t,i),a(!0)})).catch((function(e){console.log("login failed: ",e),i(!1),alert(e)})):(i(!1),t.$message("Please install metamask"))}))}},{key:"getMetaMaskAccount0",value:function(){var t=new Promise((function(t,n){e.web3.eth.getAccounts((function(a,i){console.log("getAccounts res[0] ",a,i[0]),a?(e.accountAddr=null,n(a)):(e.accountAddr=i[0],t(i[0]))}))}));return t}},{key:"getAvailableNum",value:function(t){var n=new Promise((function(n,a){var i=new e.web3.eth.Contract(o,s);console.log("hiboxContract - > getAirdropAvailableNum ",i),i.methods.getAirdropAvailableNum().call({from:t},(function(e,t){console.log("hiboxContract - > getAirdropAvailableNum ",e,t),e||t<=0?a("No available NFT"):n(t)}))}));return n}},{key:"airdropSend",value:function(t){var n=new Promise((function(n,a){if(t>0){var i=new e.web3.eth.Contract(o,s);i.methods.getAirdrop().send({from:e.accountAddr,gas:2e5,gasPrice:e.web3.utils.toWei("30","gwei")},(function(e,t){e?(console.log("airdropSend err : ",e),a(e)):(console.log("airdropSend success ",t),n(t))}))}else a("No more available NFT for the account.")}));return n}},{key:"requestAirdrop",value:function(){var e=this,t=this.getMetaMaskAccount0().then((function(t){return e.getAvailableNum(e.accountAddr)})).catch((function(e){console.log(e)})).then((function(t){return e.airdropSend(t)})).catch((function(e){console.log(e)})).then((function(t){return e.nftData(e.accountAddr)})).catch((function(e){console.log(e)})).then((function(t){return e.nftDetail(t)})).catch((function(e){console.log(e)}));return t}},{key:"balanceOfAccount",value:function(t){var n=new Promise((function(n,a){e.web3.eth.getBalance(t).then((function(t){e.wei=t,e.bnb=e.web3.utils.fromWei(t,"ether"),console.log("bnb:"+e.web3.utils.fromWei(t,"ether")),n(e.web3.utils.fromWei(t,"ether"))}))}));return n}},{key:"nftData",value:function(t){var n=new Promise((function(n,a){var i=new e.web3.eth.Contract(p,l);console.log("nftInfoContract",i),i.methods.tokenOfOwnerByIndex(t,1).call((function(e,t){console.log("tokenOfOwnerByIndex ",e,t),i.methods.tokenURI(t).call((function(e,t){console.log("nftData ",e,t),e?a(e):n(t)}))}))}));return n}},{key:"nftDetail",value:function(e){var t=new Promise((function(t,n){console.log("nftDetail : ",e),void 0==e?n("get NFT info failed"):fetch(e).then((function(e){console.log(e.json()),t(e.json())})).catch((function(e){n(e)}))}));return t}},{key:"dump",value:function(){console.log("web3.version ",self.web3.version),console.log("web3.providers ",self.Web3.providers),console.log("account ",self.accountAddr)}}]),e}();t["a"]=y},f281:function(e,t,n){}});
//# sourceMappingURL=app.32cf32f8.js.map
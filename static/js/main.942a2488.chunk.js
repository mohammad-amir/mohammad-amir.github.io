(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),c=t.n(r),s=(t(14),t(3)),m=t(4),i=t(5),o=t(7),u=t(6),E=t(8),d=(t(15),function(e){var a=e.name,t=e.position,l=e.intro,r=e.socialLinks;e.displayPosition;return n.a.createElement("section",{id:"home",className:"tt-fullHeight","data-stellar-vertical-offset":"50","data-stellar-background-ratio":"0.8"},n.a.createElement("div",{className:"intro"},n.a.createElement("div",{className:"intro-sub"},a),n.a.createElement("h1",null,t),n.a.createElement("p",null,l?l.map((function(e,a){return n.a.createElement("span",{key:a},e,n.a.createElement("br",null))})):null),n.a.createElement("div",{className:"social-icons"},n.a.createElement("ul",{className:"list-inline"},r?r.map((function(e,a){return n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("i",{className:e.iconClass})))})):null))),n.a.createElement("div",{className:"mouse-icon"},n.a.createElement("div",{className:"wheel"})))}),p=function(e){var a=e.profileImageId,t=e.name,l=e.nationality,r=e.emailId,c=e.mobileNo,s=e.careerObjective,m=e.profileSummary,i=e.profileSummarySkills,o=e.signatureImageId,u=e.resumePdfId;return n.a.createElement("section",{id:"about",className:"about-section section-padding"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"section-title wow fadeInUp"},"About Me"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 col-md-push-8"},n.a.createElement("div",{className:"biography"},n.a.createElement("div",{className:"myphoto"},n.a.createElement("img",{src:"https://drive.google.com/uc?id="+a,alt:""})),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"Name: "),t),n.a.createElement("li",null,n.a.createElement("strong",null,"Nationality: "),l),n.a.createElement("li",null,n.a.createElement("strong",null,"Email: "),r),n.a.createElement("li",null,n.a.createElement("strong",null,"Phone: "),c)))),n.a.createElement("div",{className:"col-md-8 col-md-pull-4"},n.a.createElement("div",{className:"short-info wow fadeInUp"},n.a.createElement("h3",null,"Objective"),n.a.createElement("p",null,s)),n.a.createElement("div",{className:"short-info wow fadeInUp"},n.a.createElement("h3",null,"What I Do ?"),n.a.createElement("p",null,m?m.map((function(e,a){return n.a.createElement("span",{key:a},e,n.a.createElement("br",null))})):null),n.a.createElement("ul",{className:"list-check"},i?i.map((function(e,a){return n.a.createElement("li",{key:a},e)})):null)),n.a.createElement("div",{className:"my-signature"},n.a.createElement("img",{src:"https://drive.google.com/uc?id="+o,alt:""})),n.a.createElement("div",{className:"download-button"},n.a.createElement("a",{className:"btn btn-info btn-lg",href:"#contact"},n.a.createElement("i",{className:"fa fa-paper-plane"}),"Send me message"),n.a.createElement("a",{className:"btn btn-primary btn-lg",href:"https://drive.google.com/uc?export=download&id="+u},n.a.createElement("i",{className:"fa fa-download"}),"Download My Resume"))))))},v=function(e){var a=e.mainSkills,t=e.otherSkills;return n.a.createElement("section",{id:"skills",className:"skills-section section-padding"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"section-title wow fadeInUp"},"Skills"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},a?a.map((function(e,t){return t<a.length/2?n.a.createElement("div",Object.assign({key:t},{className:"skill-progress"}),n.a.createElement("div",{className:"skill-title"},n.a.createElement("h3",null,e.name)),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar six-sec-ease-in-out",role:"progressbar","aria-valuenow":e.score,"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("span",null,e.score,"%")))):null})):null),n.a.createElement("div",{className:"col-md-6"},a?a.map((function(e,t){return t<a.length/2?null:n.a.createElement("div",Object.assign({key:t},{className:"skill-progress"}),n.a.createElement("div",{className:"skill-title"},n.a.createElement("h3",null,e.name)),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar six-sec-ease-in-out",role:"progressbar","aria-valuenow":e.score,"aria-valuemin":"0","aria-valuemax":"100"},n.a.createElement("span",null,e.score,"%"))))})):null),n.a.createElement("div",{className:"skill-progress"})),n.a.createElement("div",{className:"skill-chart text-center"},n.a.createElement("h3",null,"More skills")),n.a.createElement("div",{className:"row more-skill text-center"},t?t.map((function(e,a){return n.a.createElement("div",Object.assign({key:a},{className:"col-xs-12 col-sm-4 col-md-2"}),n.a.createElement("div",{className:"chart","data-percent":e.score,"data-color":"3498db"},n.a.createElement("span",{className:"percent"}),n.a.createElement("div",{className:"chart-text"},n.a.createElement("span",null,e.name))))})):null)))},N=function(e){var a=e.name;return n.a.createElement("header",{className:"header"},n.a.createElement("nav",{className:"navbar navbar-custom",role:"navigation"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-header"},n.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#custom-collapse"},n.a.createElement("span",{className:"sr-only"},"Toggle navigation"),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"})),n.a.createElement("a",{className:"navbar-brand",href:"/"},n.a.createElement("h1",null,a))),n.a.createElement("div",{className:"collapse navbar-collapse",id:"custom-collapse"},n.a.createElement("ul",{className:"nav navbar-nav navbar-right"},n.a.createElement("li",null,n.a.createElement("a",{href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{href:"#skills"},"Skills")),n.a.createElement("li",null,n.a.createElement("a",{href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{href:"#contact"},"Contact")))))))},f=function(e){var a=e.name,t=e.position;return n.a.createElement("footer",{className:"footer-wrapper"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"copyright text-center"},n.a.createElement("p",null,"Design and Developed by ",a," - ",t))))))},h=function(e){var a=e.totalYearsOfExperience,t=e.totalProjects,l=e.awardsWon;return n.a.createElement("section",{id:"facts",className:"facts-section text-center","data-stellar-vertical-offset":"50","data-stellar-background-ratio":"0.2"},n.a.createElement("div",{className:"tt-overlay-bg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"count-wrap"},n.a.createElement("div",{className:"col-sm-4 col-xs-4"},n.a.createElement("i",{className:"fa fa-flask"}),n.a.createElement("h3",{className:"timer"},a),n.a.createElement("p",null,"Years of Experience")),n.a.createElement("div",{className:"col-sm-4 col-xs-4"},n.a.createElement("i",{className:"fa fa-thumbs-up"}),n.a.createElement("h3",{className:"timer"},t),n.a.createElement("p",null,"Projects Delivered")),n.a.createElement("div",{className:"col-sm-4 col-xs-4"},n.a.createElement("i",{className:"fa fa-trophy"}),n.a.createElement("h3",{className:"timer"},l),n.a.createElement("p",null,"Awards Won"))))))))},b=function(e){var a=e.mainApiUrl,t=e.addressLineOne,l=e.addressLineTwo,r=e.locationMapUrl,c=e.mobileNo;return n.a.createElement("section",{id:"contact",className:"contact-section section-padding"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"section-title wow fadeInUp"},"Get in touch"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"contact-form"},n.a.createElement("form",{name:"contact-form",id:"contactForm",action:a,method:"POST"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",required:""})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"email",required:""})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"subject"},"Subject"),n.a.createElement("input",{type:"text",name:"subject",className:"form-control",id:"subject"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"message"},"Message"),n.a.createElement("textarea",{name:"message",className:"form-control",id:"message",rows:"5",required:""})),n.a.createElement("button",{type:"submit",name:"submit",className:"btn btn-primary"},"Send Message")))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"row center-xs"},n.a.createElement("div",{className:"col-sm-6 col-xs-6"},n.a.createElement("i",{className:"fa fa-map-marker"}),n.a.createElement("address",null,n.a.createElement("strong",null,"Address/Street"),t,",",n.a.createElement("br",null),l)),n.a.createElement("div",{className:"col-sm-6 col-xs-6"},n.a.createElement("i",{className:"fa fa-mobile"}),n.a.createElement("div",{className:"contact-number"},n.a.createElement("strong",null,"Phone Number"),c?c.split(",").map((function(e){return n.a.createElement("span",{key:e},e,n.a.createElement("br",null))})):null))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"location-map"},n.a.createElement("iframe",{src:r,width:"100%",height:"350",frameBorder:"0",style:{border:"0"},allowFullScreen:""}))))))))},g=function(e){var a=e.experiences,t=e.educations;return n.a.createElement("section",{id:"resume",className:"resume-section section-padding"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"section-title wow fadeInUp"},"Resume"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"resume-title"},n.a.createElement("h3",null,"Experience")),n.a.createElement("div",{className:"resume"},n.a.createElement("ul",{className:"timeline"},a?a.map((function(e,a){return n.a.createElement("li",Object.assign({key:a},{className:a%2===0?"":"timeline-inverted"}),n.a.createElement("div",{className:"posted-date"},n.a.createElement("span",{className:"month"},e.duration)),n.a.createElement("div",{className:"timeline-panel wow fadeInUp"},n.a.createElement("div",{className:"timeline-content"},n.a.createElement("div",{className:"timeline-heading"},n.a.createElement("h3",null,e.title),n.a.createElement("span",null,e.organisation)),n.a.createElement("div",{className:"timeline-body"},n.a.createElement("b",null,"Technologies and Tools:"),n.a.createElement("p",null,e.technologies),e.responsibilities?n.a.createElement("b",null,"Responsibilities:"):null,n.a.createElement("p",null,e.responsibilities?e.responsibilities.map((function(e,a){return n.a.createElement("span",{key:a},e,n.a.createElement("br",null))})):null)))))})):null)))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"resume-title"},n.a.createElement("h3",null,"Education")),n.a.createElement("div",{className:"resume"},n.a.createElement("ul",{className:"timeline"},t?t.map((function(e,a){return n.a.createElement("li",Object.assign({key:a},{className:a%2===0?"":"timeline-inverted"}),n.a.createElement("div",{className:"posted-date"},n.a.createElement("span",{className:"month"},e.duration)),n.a.createElement("div",{className:"timeline-panel wow fadeInUp"},n.a.createElement("div",{className:"timeline-content"},n.a.createElement("div",{className:"timeline-heading"},n.a.createElement("h3",null,e.title),n.a.createElement("span",null,e.instituteUniversity)),n.a.createElement("div",{className:"timeline-body"},n.a.createElement("p",null,e.details)))))})):null))))))},y=function(e){var a=e.ono,t=e.emailId;return a?n.a.createElement("section",{className:"hire-section text-center","data-stellar-vertical-offset":"50","data-stellar-background-ratio":"0.2"},n.a.createElement("div",{className:"hire-section-bg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h2",null,"I am open for new opportunities"),n.a.createElement("a",{href:"mailto:"+t,className:"btn btn-default btn-lg"},n.a.createElement("i",{className:"fa fa-envelope-o"})," Hire Me")))))):null};function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}var k=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={p:0},t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getProfileData()}},{key:"getProfileData",value:function(){var e=this;fetch("https://raw.githubusercontent.com/mohammad-amir/mohammad-amir.github.io/ProfileDataServer/db.json").then((function(e){return e.json()})).then((function(a){return e.setState(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},a),(function(){return e.setDisplayValues()}))}))}},{key:"setDisplayValues",value:function(){var e=this,a=this.state,t=a.position,l=a.p,n=a.f;l+=n=0===l?1:l===t.length?-1:n;var r=t.substr(0,l);this.setState({displayPosition:r,p:l,f:n},(function(){return setTimeout((function(){return e.setDisplayValues()}),100)}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d,this.state),n.a.createElement(N,this.state),n.a.createElement(p,this.state),n.a.createElement(v,this.state),n.a.createElement(g,this.state),n.a.createElement(h,this.state),n.a.createElement(y,this.state),n.a.createElement(b,this.state),n.a.createElement(f,this.state))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.942a2488.chunk.js.map
!function e(t,o,n){function a(r,s){if(!o[r]){if(!t[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(i)return i(r,!0);throw new Error("Cannot find module '"+r+"'")}var c=o[r]={exports:{}};t[r][0].call(c.exports,function(e){var o=t[r][1][e];return a(o?o:e)},c,c.exports,e,t,o,n)}return o[r].exports}for(var i="function"==typeof require&&require,r=0;r<n.length;r++)a(n[r]);return a}({1:[function(e,t,o){"use strict";var n=angular.module("app",["ngRoute","truncate","app.IndexPage","app.PlumbingProblemsPage","app.ResidentialPlumbingPage","app.CommercialPlumbingPage","app.BlogPage","app.AboutUsPage","app.ContactUsPage","app.ReviewsPage","app.ArticlesPage"]).config(["$locationProvider","$routeProvider",function(e,t){e.hashPrefix("!"),t.otherwise({redirectTo:"/"})}]);angular.module("app.AboutUsPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/AboutUs",{templateUrl:"/app/views/AboutUs.html"})}]),angular.module("app.ArticlesPage",["ngRoute"]).config(["$routeProvider",function(e){var t={"Drain Cleaning":"./#!/Services/DrainCleaning","Emergency Plubming":"./#!/Services/EmergencyPlubming","Sewer Services":"./#!/Services/SewerServices","Trenchless Sewer":"./#!/Services/TrenchlessSewer","Gass Shut off Valve":"./#!/Services/GassShutoffValve","Faucets & Fixtures":"./#!/Services/FaucetsFixtures","Water Heaters":"./#!/Services/WaterHeaters"},o={"Our Company":"./#!/Informations/OurCompany",Careers:"./#!/Informations/Careers",Certification:"./#!/Informations/Certification",Blog:"./#!/Blog",Reviews:"./#!/Reviews",FAQ:"./#!/Informations/FAQ","Contact us":"./#!/ContactUs"},n={Services:t,Informations:o};for(var a in n){var i=n[a];for(var r in i){r=r.replace(/(\s|&)+/g,"");var s=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},l="/"+s(a)+("/"+r),c="/app/views/"+a.toLowerCase()+("/"+r+".html");e.when(l,{templateUrl:c})}}}]),angular.module("app.CommercialPlumbingPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/CommercialPlumbing",{templateUrl:"/app/views/CommercialPlumbing.html"})}]),angular.module("app.BlogPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/Blog",{templateUrl:"/app/views/Blog.html",controller:"app.BlogPage.ListCtrl"}),e.when("/Blog/:id",{templateUrl:"/app/views/Post.html",controller:"app.BlogPage.PostCtrl"})}]).controller("app.BlogPage.ListCtrl",["$scope","$routeParams","$location","Blog",function(e,t,o,n){e.posts={},t.p,n.then(function(t){e.posts=t.posts})}]).controller("app.BlogPage.PostCtrl",["$scope","$routeParams","$sce","Blog",function(e,t,o,n){var a=t.id;n.then(function(t){var o=t.posts[a];e.id=o.id,e.link_title=o.title,e.title=o.title,e.about=o.about,e.template=o.template,console.log(o.template)});e.id=null,e.link_title="",e.title="",e.about="",e.content=o.trustAsHtml("<p>Loading..."),e.template=""}]),angular.module("app.ContactUsPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/ContactUs",{templateUrl:"/app/views/ContactUs.html",controller:"app.ContactUsPage.PageCtrl"})}]).controller("app.ContactUsPage.PageCtrl",["$scope",function(e){e.processSend=!1,e.send=function(t){e.processSend=1,console.log(1),setTimeout(function(){console.log(2),e.processSend=2,e.$apply()},500),setTimeout(function(){console.log(3),e.processSend=!1,e.$apply()},1500)}}]),angular.module("app.IndexPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"/app/views/index.html",controller:"app.IndexPage.PageCtrl"})}]).controller("app.IndexPage.PageCtrl",["$scope","Blog",function(e,t){e.blogPosts={},t.then(function(t){e.blogPosts=t.posts,console.log(t.posts)})}]),angular.module("app.PlumbingProblemsPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/PlumberProblems",{templateUrl:"/app/views/PlumberProblems.html"})}]),angular.module("app.ResidentialPlumbingPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/ResidentialPlumbing",{templateUrl:"/app/views/ResidentialPlubming.html"})}]),angular.module("app.ReviewsPage",["ngRoute"]).config(["$routeProvider",function(e){e.when("/Reviews",{templateUrl:"/app/views/Reviews.html",controller:"app.ReviewsPage.PageCtrl"})}]).controller("app.ReviewsPage.PageCtrl",["$scope","Reviews",function(e,t){e.list=t.reverse(),e.processTestimonial=!1,e.add=function(t){e.processTestimonial=2,setTimeout(function(){e.processTestimonial=!1,e.list.unshift({author:t.author,content:t.content,created:"",location:t.location}),e.$apply()},500)}}]),n.factory("Blog",function(){var e={1:{id:1,title:"The Hazards of Sewage Backup",image:"/images/table/5.jpg",created:"September 1, 2016",about:"A sewage backup will commonly present a serious health hazard mainly caused by bacteria, viruses and parasites. Sewage backup is dangerous due to the many ways it transmits diseases and because it is sometimes hard to predict.",template:"/app/views/posts/1.html"},2:{id:2,title:"Los Angeles Drain Cleaning Services",image:"/images/table/4.jpg",created:"September 1, 2016",about:"Do you have a clogged sink and after all your efforts and money and the problem still persist then the best thing to do is to hire a drain cleanings services. As you know, this kind of services is intended for all kinds of water fixtures and sinks. It is also essential when the pipes get blocked with stuffs, which is common for kitchens and bathrooms.",template:"/app/views/posts/2.html"},3:{id:3,title:"Los Angeles Plumbing Services",image:"/images/table/1.jpg",created:"September 1, 2016",about:"In every house, it is expected to have some type of indoor plumbing from bathroom, shower room to the sink. This is the reason why plumbing installation is very imperative to make this possible. On the other hand, if you live in Los Angeles, it can be a challenge to find Los Angeles plumbers. When looking for plumbers, it would be best to choose the one that is skill, trustworthy and affordable. Since there are a lot of plumbers in Los Angeles, it is not easy to find the right one. Plumbing is a complicated task that is not an easy endeavor, so you need to look for the best one that offers good service.",template:"/app/views/posts/3.html"}};return new Promise(function(t,o){var n={posts:e};t(n)})}),n.factory("InformationsNav",function(){return{"Our Company":"./#!/AboutUs",Careers:"./#!/Informations/Careers",Certification:"./#!/Informations/Certification",Blog:"./#!/Blog",Reviews:"./#!/Reviews",FAQ:"./#!/Informations/FAQ","Contact us":"./#!/ContactUs"}}),n.factory("Reviews",function(){return[{author:"Charlie",created:"2013-10-15, 21:56",location:"Los Angeles,CA",content:"Gabriel was at my place less than an hour after I first called, and quickly fixed the problem I was having. In doing so, he found and repaired a couple of other minor issues without any extra charges. Price was very reasonable and Gabriel was absolutely on-point. I will absolutely use Rush Plumbing for all my future needs. Highly recommended!"},{author:"Braien",created:"2013-10-14, 21:39",location:"Los Angeles,CA",content:"I have always had good experiences with Rush Plumbing. Their technician, gabriel, is very prompt, friendly and knowledgeable. I was given an honest and accurate assessment of my problem. He was also easy to reach and available to answer all my questions even after the work was completed. I would use Rush Plumbing again, and I highly recommend them. Thank you Brian .H Woodland Hills"},{author:"Martin",created:"2013-09-09, 19:42",location:"Los Angeles,CA",content:"Gabriel was great I needed a professional plumber my toilet was overflowing we had roots in the pipes so he cleaned them out. Thank you I will always use you in the future"},{author:"encino",created:"2013-08-19, 03:49",location:"Los Angeles,CA",content:"Im really impressed with rush plumbing these guys are responsible nice and especially clean I highly recommend rush plumbing."},{author:"Sarah, T",created:"2013-08-14, 20:53",location:"Los Angeles,CA",content:"These guys are highly recommended. They are friendly, hard working, HONEST and really know their stuff. and the best thing is that they don't try to rip you off... Los Angeles"},{author:"Guest",created:"2013-03-05, 20:50",location:"Los Angeles,CA",content:"Incredible response time... You guys are the best. Any time I've had a plumbing issue these guys have had it fixed with incredible speed and accuracy. I wish there were more like you. Thanks."},{author:"Mark Wells",created:"2013-02-11, 21:28",location:"Los Angeles,CA",content:"AWESOME AWESOME AWESOME. Had an emergency in the middle of the night and they came and saved my house from a potentially highly damaging accident. Very good customer service. A+ quality work, and to top it off very reasonable pricing. Got this guy's # on my phone now and will definitely call him again when the need arises"},{author:"Dave Evens",created:"2013-02-11, 21:26",location:"Los Angeles,CA",content:"I came home late last night and my ceiling was pouring water. I went upstairs and the toilets was overflowing so much that the water had leaked through and was pouring out of the ceiling. I called rush plumbing and they were there in 30 mins. Keep in mind...this was at 1am. They fixed the problem very fast, cleaned up the mess and i was good as new in no time. I need a re piping job at my other house and they have def gained my business and trust!!"}]}),n.factory("ServicesNav",function(){return{"Drain Cleaning":"./#!/Services/DrainCleaning","Emergency Plubming":"./#!/Services/EmergencyPlubming","Sewer Services":"./#!/Services/SewerServices","Trenchless Sewer":"./#!/Services/TrenchlessSewer","Gass Shut off Valve":"./#!/Services/GassShutoffValve","Faucets & Fixtures":"./#!/Services/FaucetsFixtures","Water Heaters":"./#!/Services/WaterHeaters"}}),n.factory("SiteNav",function(){return{Home:"/#!/","Plumbing Problems":"/#!/PlumberProblems","Residential Plumbing":"/#!/ResidentialPlumbing","Commercial Plumbing":"/#!/CommercialPlumbing",Blog:"/#!/Blog","About Us":"/#!/AboutUs","Contact Us":"/#!/ContactUs",Reviews:"/#!/Reviews"}}),n.factory("SocialNav",function(){return{facebook:"https://www.facebook.com/Rush-Plumbing-Rooter-163890030484600/",twitter:"","google-plus":"",fax:"tel:+18183441111",rss:"",yelp:"https://www.yelp.com/biz/rush-plumbing-woodland-hills-2"}}),n.controller("InformationsNavCtrl",["$scope","InformationsNav",function(e,t){e.links=t}]),n.controller("MenuSwitcherCtrl",["$scope",function(e){e.open=!1,e.switch=function(){e.open=!e.open},e.$on("$locationChangeSuccess",function(){e.open=!1}),window.addEventListener("resize",function(){var t=window.innerWidth;t>499&&e.open&&(e.open=!1,e.$apply())},!1)}]),n.controller("ReviewsCtrl",["$scope","Reviews",function(e,t){e.list=t,e.getRand=function(e){for(var o=[],n=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a=0;a<1e6;a++){if(a>20)break;if(o.length==e)break;var i=n(0,t.length-1);o.indexOf(t[i])==-1&&o.push(t[i])}return o}}]),n.controller("ServicesNavCtrl",["$scope","ServicesNav",function(e,t){e.links=t}]),n.controller("SiteNavCtrl",["$scope","SiteNav",function(e,t){e.links=t}]),n.controller("SocialNavCtrl",["$scope","SocialNav",function(e,t){e.links=t,e.icons={facebook:"fa-facebook",twitter:"fa-twitter","google-plus":"fa-google-plus",fax:"fa-fax",rss:"fa-rss",yelp:"fa-yelp"},e.links=t}])},{}]},{},[1]);
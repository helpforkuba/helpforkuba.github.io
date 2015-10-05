!function(){"use strict";angular.module("app",["app.core","app.widgets","app.layout"])}(),function(){"use strict";angular.module("blocks.diagnostics",[])}(),function(){"use strict";angular.module("blocks.exception",["blocks.logger"])}(),function(){"use strict";angular.module("blocks.logger",[])}(),function(){"use strict";angular.module("blocks.router",["ui.router","blocks.logger"])}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngSanitize","blocks.diagnostics","blocks.exception","blocks.logger","blocks.router","ui.router"])}(),function(){"use strict";angular.module("app.layout",["app.core"])}(),function(){"use strict";angular.module("app.widgets",[])}(),function(){"use strict";function o(o){o.decorator("$interpolate",e)}function e(o,e,t){function a(){function t(o,t){function a(){var a=o.apply(this,arguments),i=a.trim(),n=i?e.info:e.warn,r="Binding: "+t+" = "+i;return n.call(e,r),a}return a}var a=o.apply(this,arguments),i=arguments[0];return angular.isFunction(a)&&i?t(a,i.trim()):a}return t.enable?(angular.extend(a,o),a):o}var t={enable:!0};angular.module("blocks.diagnostics").constant("diagnostics",t).config(o),o.$inject=["$provide"],e.$inject=["$delegate","$log","diagnostics"]}(),function(){"use strict";function o(){this.config={appErrorPrefix:void 0},this.configure=function(o){this.config.appErrorPrefix=o},this.$get=function(){return{config:this.config}}}function e(o){o.decorator("$exceptionHandler",t)}function t(o,e,t){return function(a,i){var n=e.config.appErrorPrefix||"",r={exception:a,cause:i};a.message=n+a.message,o(a,i),t.error(a.message,r)}}angular.module("blocks.exception").provider("exceptionHandler",o).config(e),e.$inject=["$provide"],t.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";function o(o,e){function t(t){return function(a){var i,n;return a.data&&a.data.description&&(i="\n"+a.data.description,n=t+i),a.data.description=n,e.error(n),o.reject(a)}}var a={catcher:t};return a}angular.module("blocks.exception").factory("exception",o),o.$inject=["$q","logger"]}(),function(){"use strict";function o(o,e){function t(t,a,i){e.error(t,i),o.error("Error: "+t,a)}function a(t,a,i){e.info(t,i),o.info("Info: "+t,a)}function i(t,a,i){e.success(t,i),o.info("Success: "+t,a)}function n(t,a,i){e.warning(t,i),o.warn("Warning: "+t,a)}var r={showToasts:!0,error:t,info:a,success:i,warning:n,log:o.log};return r}angular.module("blocks.logger").factory("logger",o),o.$inject=["$log","toastr"]}(),function(){"use strict";function o(o,e,t){function a(o,a,n,r){function c(o,a){o.forEach(function(o){o.config.resolve=angular.extend(o.config.resolve||{},i.resolveAlways),e.state(o.state,o.config)}),a&&!g&&(g=!0,t.otherwise(a))}function s(){a.$on("$stateChangeError",function(e,t,a,i,n,r){if(!p){f.errors++,p=!0;var c=t&&(t.title||t.name||t.loadedTemplateUrl)||"unknown target";"Error routing to "+c+". "+(r.data||"")+". <br/>"+(r.statusText||"")+": "+(r.status||"");console.log(r),o.path("/")}})}function l(){s(),d()}function u(){return n.get()}function d(){a.$on("$stateChangeSuccess",function(o,e,t,a,i){})}var p=!1,g=!1,f={errors:0,changes:0},m={configureStates:c,getStates:u,stateCounts:f};return l(),m}var i={docTitle:void 0,resolveAlways:{}};o.html5Mode(!0),this.configure=function(o){angular.extend(i,o)},this.$get=a,a.$inject=["$location","$rootScope","$state","logger"]}angular.module("blocks.router").provider("routerHelper",o),o.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function o(o){o.options.timeOut=4e3,o.options.positionClass="toast-bottom-right"}function e(o,e,t,i,n){function r(){var o={};n.configure({docTitle:"HfK: ",resolveAlways:o})}t.enable=!1,o.debugInfoEnabled(!1),e.debugEnabled&&e.debugEnabled(!0),i.configure(a.appErrorPrefix),r()}var t=angular.module("app.core");t.config(o),o.$inject=["toastr"];var a={appErrorPrefix:"[HfK Error] ",appTitle:"Help for Kuba",imageBasePath:"/images/photos/",unknownPersonImageSource:"unknown_person.jpg"};t.value("config",a),t.config(e),e.$inject=["$compileProvider","$logProvider","diagnostics","exceptionHandlerProvider","routerHelperProvider"]}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function o(o){var t="/404";o.configureStates(e(),t)}function e(){return[{state:"404",config:{url:"/404",templateUrl:"app/core/404.html",title:"404"}}]}angular.module("app.core").run(o),o.$inject=["routerHelper"]}(),function(){"use strict";function o(){function o(){}o()}angular.module("app.layout").controller("Shell",o)}(),function(){"use strict";function o(o){o.configureStates(e())}function e(){return[{state:"shell",config:{url:"/",templateUrl:"app/layout/shell.html",controller:"Shell",controllerAs:"vm",title:"shell"}}]}angular.module("app.layout").run(o),o.$inject=["routerHelper"]}(),function(){"use strict";function o(o){function e(e,t,a){var i=($(o),e.position);t.click(function(o){o.preventDefault(),$("body, html, .body, #body").animate({scrollTop:i},500)})}var t={link:e,scope:{position:"=hfkScrollTo"},restrict:"A"};return t}angular.module("app.widgets").directive("hfkScrollTo",o),o.$inject=["$window"]}(),angular.module("app.core").run(["$templateCache",function(o){o.put("app/layout/shell.html",'<header class="row page-header" style="background-image: url(\'images/me_before.jpg\');"><section class="header-text col l5 offset-l1 s12 offset-s0 m10 offset-m1"><h4>Witaj, jestem Kuba Kruk</h4><p>Jak już tutaj jesteś, zapraszam Cię, poznaj moją historię...</p><div class=goto-container><a href class="btn-floating btn-large waves-effect waves-light" data-hfk-scroll-to=690><i class=material-icons>expand_more</i></a></div></section></header><div class=container><div class=row><div class="col l3 m3 s0"><img class=responsive-img src=images/me_after.jpg><div class=collection><a class=collection-item href="http://www.spelnionemarzenia.org.pl/" target=_blank>Fundacja</a> <a class=collection-item href="https://www.facebook.com/Pomoc-dla-Kuby-1661825474063067/timeline/" target=_blank>Facebook</a> <a class=collection-item href=mailto:pomocdlakubykruka@gmail.com>Kontakt</a></div></div><div class="main col l9 m9 s12"><div class=divider></div><section id=my-story class=my-story><h3>Moja historia</h3><p>Cześć, nazywam się Kuba Kruk, mam 10 lat.</p><p>Moja smutna historia zaczęła się ok. 4 lata temu, kiedy nowotwór zabrał mi moją mamę. Zostaliśmy ja i moja młodsza siostra, sami z tatą.</p><p>Koszmar powrócił w lutym tego roku. Podczas zajęć w-f przewróciłem się i doznałem urazu prawej ręki. Po 3 miesiącach od tego zdarzenia okazało się, że tym razem <strong>RAK</strong> (<a href="http://www.sarcoma.pl/miesaki/" target=_blank>osteosarcoma - nowotwór złośliwy kości, tzw. \'mięsak\'</a>) dopadł mnie.</p><p>Podczas operacji usunięcia nowotworu (17 września 2015), aby ratować moje życie lekarze musieli amputować prawą rękę (wraz z częścią obojczyka i łopatki).</p><p>Jednak to nie koniec mojej choroby. Czeka mnie jeszcze <strong>ok. roku leczenia onkologicznego</strong>, w tym operacja na płuca gdzie zdiagnozowano przerzuty z chorej ręki.</p><p>Chciałbym jak inni chłopcy w moim wieku, chodzić do szkoły, grać w piłkę, jeździć na rowerze i być zdrowym.</p><p>Jedyną szansą na „normalne” funkcjonowanie jest dla mnie zakup protezy mechanicznej. Proteza ta choć częściowo zastąpi mi prawdziwą rękę oraz usprawni codzienne życie.</p><p style=color:#01579b>Wykonanie takiej protezy jest dość kosztowne (<strong>ok. 60.000 PLN</strong>), dlatego zwracam się z prośbą do ludzi dobrych i życzliwych o pomoc w zbiórce pieniędzy.</p></section><div class=divider></div><section><h3>Jeśli chcesz mi pomóc</h3><p>Wszelkie wsparcie finansowe proszę kierować na konto Fundacji Spełnionych Marzeń.</p><address>Fundacja Spełnionych Marzeń<br>ul. Oleandrów 6<br>00-629 Warszawa<br>ING Bank Śląski o/Warszawa<br><strong>29 1050 1025 1000 0022 7611 6304</strong> z dopiskiem „Jakub Kruk”<br>KRS: 0000128832<br></address></section></div></div></div><footer class=page-footer><div class=footer-copyright><div class=container>2015 Kuba Kruk</div></div></footer>'),o.put("app/core/404.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class="fa fa-warning"></i></div><div class="datas-text pull-right"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class="widget wblue"><div ht-widget-header title="Page Not Found" allow-collapse=true></div><div class="widget-content text-center text-info"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>')}]);

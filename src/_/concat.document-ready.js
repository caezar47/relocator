$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();r.indexOf("msie")!=-1&&(e="msie"),r.indexOf("trident")!=-1&&(e="msie"),r.indexOf("konqueror")!=-1&&(e="konqueror"),r.indexOf("firefox")!=-1&&(e="firefox"),r.indexOf("safari")!=-1&&(e="safari"),r.indexOf("chrome")!=-1&&(e="chrome"),r.indexOf("chromium")!=-1&&(e="chromium"),r.indexOf("opera")!=-1&&(e="opera"),r.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var a=$(this),o=$(a.attr("href")).eq(0),e=parseInt(a.attr("data-scrollto-diff"))||0,s=parseInt(a.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:o.offset().top+e},s),$(".navbar__nav .navbar__nav-item").removeClass("is--active"),a.parent().addClass("is--active")});
$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),$(".form__block").validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1});
$("img").addClass("img-responsive");
$(".czr__select .czr__selected").on("click",function(){var e=$(this).parents(".czr__select").find(".czr__options");$(".czr__options:visible").not(e).slideUp(),$(this).toggleClass("is--open"),$(this).next().slideToggle()}),$(".czr__select .czr__option").on("click",function(){var e=$(this).text(),s=$(this).parents(".czr__select");s.find(".czr__selected").text(e).toggleClass("is--open"),$(this).parent().slideUp(),s.find(".is--selected").removeClass("is--selected"),$(this).addClass("is--selected")}),$(".czr__select .czr__option").on("click",function(){var e=$(this).data("phone"),s=$(this).data("address");$(".czr__tel").text(e),$(".czr__address").text(s)});
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(n){$(".azbn-dropdown").toggleClass("open")}),$(function(){$(document.body).on("click",".navbar__collapse.is--open .navbar__nav-link.scrollto",{},function(n){(screenJS.isXS()||screenJS.isSM())&&(n.preventDefault(),$(".navbar-site .navbar__hamburger-btn").trigger("click"))})});
$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>');
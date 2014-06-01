$(document).ready(function(){
	$.ajaxSetup({
	  dataType:"json"	
	})
})
function MESEIO(){}
(function(){
		MESEIO.prototype.loadfeeds = function(type){
			if(!type) {utype="";}
			else (utype="?type="+type)
			var api_url = '/api/passages/'+utype;
			$.ajax({
				url:api_url,
				type:"GET",
				success:function(data){
					$.each(data.results,function(){
						var pt=this.title;
						if((this.type=="GOV")||(this.type=="CON")){
							var pk = "<i class='fa fa-bank' />";
						}
						else if (this.type=="MED"){
							var pk = "<i class='fa fa-rss' />";
						}
						var pi = "<em class='pull-right feeds-info'>"+this.author.profile.display_name  
						+"@"+this.year + "</em>";
						$("#feeds-container").append("<div class='feeds'><div class='feeds-title'>"+pk 
						+ "<a href='?id=" + this.id + "'>" + pt + "</a>" + pi);
					})
				},
			})
		}
		MESEIO.prototype.loadfdetails = function(id){
			var api_url = "/api/passages/"+id;
			$.ajax({
				url:api_url,
				type:"GET",
				success:function(data){
					$("#feeds-container").append("")
				},
			})
		}
})();
(function($){
$.getUrlParam = function(name){
var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
var r = window.location.search.substr(1).match(reg);
if (r!=null) return unescape(r[2]);return null;
}
})(jQuery);
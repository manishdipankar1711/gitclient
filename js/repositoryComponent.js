var RepositoryComponent = (function (RepositoryComponent) {

	RepositoryComponent.getRepository = function(repName){
		
		var url = "https://api.github.com/search/repositories?q="+repName

		$.ajax({
		  url: url,
		  dataType: "json",
		  data : data,
		  type : "GET",
		  success: function (resp, XMLHttpRequest ){
		      if( resp ) {
		          callback(resp);
		      }else {
		        handleError();
		      }
		  },
		  error : function(XMLHttpRequest, textStatus, errorThrown){
		    handleError();
		  }
		});
	}

	paintRepositry = funnction(repName){
		
	}

	return RepositoryComponent;
}(RepositoryComponent || {}));
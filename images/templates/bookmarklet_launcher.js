(function(){
  if (window.myBookmarklet !== undefined){
    myBookmarklet();
  }
  else {
    alert('This is working');
    document.body.appendChild(document.createElement('script')).src=' https://56e2b3946a6a.ngrok.io/kijiweni/images/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
  }
})();

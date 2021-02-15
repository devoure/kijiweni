(function(){
  if (window.myBookmarklet !== undefined){
    myBookmarklet();
  }
  else {
    alert('This is working');
    document.body.appendChild(document.createElement('script')).src='https://bf78241bc28e.ngrok.io/kijiweni/images/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
  }
})();

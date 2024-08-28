function loadNav(){
  var prodUrl = "https://ne0dym.com/"
  var devUrl = "file:///D:/Documents/Github/ne0dym7.github.io/"
  var currentUrl = true ? prodUrl : devUrl;


  document.getElementById("nav").innerHTML =  '<div class="lsideimage-container"></div>'+
  '<nav>'+
  '<br>'+
  '<ul>'+
  '<li><a href="'+currentUrl+'index.html">Home</a></li>'+
  '<hr></hr>'+
  '<li><a href="'+currentUrl+'about/index.html">Neo, the human</a></li>'+
  '<li><a href="'+currentUrl+'about/theoc.html">Neo, the OC</a></li>'+
  '<li><a href="'+currentUrl+'about/harrow.html">Harrow</a></li>'+
  '<li><a href="'+currentUrl+'about/fyodor.html">Fyodor</a></li>'+
  '<hr></hr>'+
  '<li><a href="'+currentUrl+'blog/index.html">Blog</a></li>'+
  '<li><a href="'+currentUrl+'about/gamer.html">Gaming</a></li>'+
  '<li><a href="'+currentUrl+'featured/music.html">Music</a></li>'+
  '<li><a href="'+currentUrl+'featured/movies.html">Movies</a></li>'+
  '<hr></hr>'+
  '<li><a href="'+currentUrl+'about_site/index.html">About the website</a></li>'+
  '<li><a href="'+currentUrl+'about_site/changelog.html">Changelog</a></li>'+
  '<li><a href="'+currentUrl+'about_site/credits.html">Credits</a></li>'+
  '</ul>'+
  '</nav>';

  document.getElementById("buttons").innerHTML = '<div class="mediacontainer">'+
  '<details>'+
  '<summary style="color:#f1f1f1; margin:5px;">My button! </summary> '+
  '<div style="overflow:auto; white=space:no=wrap; color:#f1f1f1; border:1px solid #800000; margin:5px;"><code><xmp><a href="https://ne0dym.com"><img src="https://ne0dym.com/neobutton.png" alt="ne0dym button"></a></xmp></code></div>'+
  '</details>'+
  '<a href="'+currentUrl+'index.html"><img src="'+currentUrl+'neobutton.png" alt="ne0dym button"></a>'+
  '<hr>'+
  '<p style="color:#f1f1f1; margin:5px;">Friendos!</p>'+
  '<a href="https://tackyvillain.neocities.org/"><img src="https://tackyvillain.neocities.org/images/buttons/my_buttons/tackyvillain_web_button.png" alt="tackyvillain" title="tackyvillain"></a>'+
  '<hr>'+
  '<img src="'+currentUrl+'buttons/tanks.png" alt="tanks">'+
  '<img src="'+currentUrl+'buttons/asexual.png" alt="asexual">'+
  '<img src="'+currentUrl+'buttons/pothead.gif" alt="pot">'+
  '<img src="'+currentUrl+'buttons/quebec.gif" alt="quebec">'+
  '<img src="'+currentUrl+'buttons/rammtl.png" alt="rammstein">'+
  '<img src="'+currentUrl+'buttons/firefox2.gif" alt="firefox">'+
  '<img src="'+currentUrl+'buttons/catscape.gif" alt="catscape">'+
  '</div>';
  }

// Loading up Nav bar on load of window
window.onload = function (){loadNav();}




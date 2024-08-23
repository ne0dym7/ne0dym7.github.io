function loadNav(){
  document.getElementById("nav").innerHTML =  '<div class="lsideimage-container"></div>'+
  '<nav>'+
  '<br>'+
  '<ul>'+
  '<li><a href="file:///D:/Documents/Website/index.html">Home</a></li>'+
  '<hr></hr>'+
  '<li><a href="file:///D:/Documents/Website/about/index.html">Neo, the human</a></li>'+
  '<li><a href="file:///D:/Documents/Website/about/theoc.html">Neo, the OC</a></li>'+
  '<li><a href="file:///D:/Documents/Website/about/harrow.html">Harrow</a></li>'+
  '<li><a href="file:///D:/Documents/Website/about/fyodor.html">Fyodor</a></li>'+
  '<hr></hr>'+
  '<li><a href="file:///D:/Documents/Website/blog/index.html">Blog</a></li>'+
  '<li><a href="file:///D:/Documents/Website/about/gamer.html">Gaming</a></li>'+
  '<li><a href="file:///D:/Documents/Website/featured/music.html">Music</a></li>'+
  '<li><a href="file:///D:/Documents/Website/featured/movies.html">Movies</a></li>'+
  '<hr></hr>'+
  '<li><a href="file:///D:/Documents/Website/about_site/index.html">About the website</a></li>'+
  '<li><a href="file:///D:/Documents/Website/about_site/changelog.html">Changelog</a></li>'+
  '<li><a href="file:///D:/Documents/Website/about_site/credits.html">Credits</a></li>'+
  '</ul>'+
  '</nav>';

  document.getElementById("buttons").innerHTML = '<div class="mediacontainer">'+
  '<details>'+
  '<summary style="color:#f1f1f1; margin:5px;">My button! </summary> '+
  '<div style="overflow:auto; white=space:no=wrap; color:#f1f1f1; border:1px solid #800000; margin:5px;"><code><xmp><a href="file:///D:/Documents/Website/layout%20playground.html"><img src="file:///D:/Documents/Website/neobutton.png" alt="ne0dym button"></a></xmp></code></div>'+
  '</details>'+
  '<a href="file:///D:/Documents/Website/layout%20playground.html"><img src="file:///D:/Documents/Website/neobutton.png" alt="ne0dym button"></a>'+
  '<hr>'+
  '<p style="color:#f1f1f1; margin:5px;">Friendos!</p>'+
  '<a href="https://tackyvillain.neocities.org/"><img src="https://tackyvillain.neocities.org/images/buttons/my_buttons/tackyvillain_web_button.png" alt="tackyvillain" title="tackyvillain"></a>'+
  '<hr>'+
  '<img src="file:///D:/Documents/Website/buttons/tanks.png" alt="tanks">'+
  '<img src="file:///D:/Documents/Website/buttons/asexual.png" alt="asexual">'+
  '<img src="file:///D:/Documents/Website/buttons/pothead.gif" alt="pot">'+
  '<img src="file:///D:/Documents/Website/buttons/quebec.gif" alt="quebec">'+
  '<img src="file:///D:/Documents/Website/buttons/firefox2.gif" alt="firefox">'+
  '<img src="file:///D:/Documents/Website/buttons/catscape.gif" alt="catscape">'+
  '</div>';
  }

// Loading up Nav bar on load of window
window.onload = function (){loadNav();}




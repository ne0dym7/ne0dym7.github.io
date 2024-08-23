function loadNav(){
  document.getElementById("nav").innerHTML =  '<div class="lsideimage-container"></div>'+
  '<nav>'+
  '<br>'+
  '<ul>'+
  '<li><a href="./index.html">Home</a></li>'+
  '<hr></hr>'+
  '<li><a href="../about/index.html">Neo, the human</a></li>'+
  '<li><a href="../about/theoc.html">Neo, the OC</a></li>'+
  '<li><a href="../about/harrow.html">Harrow</a></li>'+
  '<li><a href="../about/fyodor.html">Fyodor</a></li>'+
  '<hr></hr>'+
  '<li><a href="../blog/index.html">Blog</a></li>'+
  '<li><a href="../about/gamer.html">Gaming</a></li>'+
  '<li><a href="../featured/music.html">Music</a></li>'+
  '<li><a href="../featured/movies.html">Movies</a></li>'+
  '<hr></hr>'+
  '<li><a href="../about_site/index.html">About the website</a></li>'+
  '<li><a href="../about_site/changelog.html">Changelog</a></li>'+
  '<li><a href="../about_site/credits.html">Credits</a></li>'+
  '</ul>'+
  '</nav>';

  document.getElementById("buttons").innerHTML = '<div class="mediacontainer">'+
  '<details>'+
  '<summary style="color:#f1f1f1; margin:5px;">My button! </summary> '+
  '<div style="overflow:auto; white=space:no=wrap; color:#f1f1f1; border:1px solid #800000; margin:5px;"><code><xmp><a href="./index.html"><img src="./neobutton.png" alt="ne0dym button"></a></xmp></code></div>'+
  '</details>'+
  '<a href="./index.html"><img src="./neobutton.png" alt="ne0dym button"></a>'+
  '<hr>'+
  '<p style="color:#f1f1f1; margin:5px;">Friendos!</p>'+
  '<a href="https://tackyvillain.neocities.org/"><img src="https://tackyvillain.neocities.org/images/buttons/my_buttons/tackyvillain_web_button.png" alt="tackyvillain" title="tackyvillain"></a>'+
  '<hr>'+
  '<img src="../buttons/tanks.png" alt="tanks">'+
  '<img src="../buttons/asexual.png" alt="asexual">'+
  '<img src="../buttons/pothead.gif" alt="pot">'+
  '<img src="../buttons/quebec.gif" alt="quebec">'+
  '<img src="../buttons/firefox2.gif" alt="firefox">'+
  '<img src="./buttons/catscape.gif" alt="catscape">'+
  '</div>';
  }

// Loading up Nav bar on load of window
window.onload = function (){loadNav();}




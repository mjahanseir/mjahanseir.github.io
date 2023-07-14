
      var coll = document.getElementsByClassName("collapsible"); var i;
      for (i = 0; i < coll.length; i++) { coll[i].addEventListener("click", function () {
         this.classList.toggle("active");
         var content = this.nextElementSibling;
         if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        }
      );
     }
      var mybutton = document.getElementById("myBtn");
      window.onscroll = function () { scrollFunction(); };
      function scrollFunction() { if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { mybutton.style.display = "block"; } else { mybutton.style.display = "none"; } }
      function topFunction() { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }



      <!-- img -->
      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById("myImg");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
      }

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
            modal.style.display = "none";
      }

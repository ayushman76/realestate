(function() {
    var body, footer;
    body = document.getElementById('my_body');
    footer = document.createElement('footer');

    body.appendChild(footer);
    footer.innerHTML += '<div class="container"><div class="row"></div></div>';

    var jason05 = [{
        head: 'Our Menu',
        link01: '<a href="index.html">Home</a>',

        link02: '<a href="about.html">About</a>',

        link03: '<a href="rooms.html">Projects</a>',

        link04: '<a href="resturant.html">Current Project</a>',
       
	    link06: '<a href="our_galllery.html">Our Gallery</a>',
        
		link05: '<a href="contact.html">Contact Us</a>',

    }, {
        head01: 'Our Service',
        link001: '<a hrefe="#">Home For Rent</a>',

        link002: '<a href="#">Sell Home</a>',

        link003: '<a href="#">Buy Home</a>',

    }, {
        head02: 'Our Address',
        phone01: '<a href="tel:8349680000"><i class="fa fa-whatsapp"></i> &nbsp; 8349680000</a>',

        phone02: '<a href="tel:9407973731"><i class="fa fa-whatsapp"></i> &nbsp; 9407973731</a>',
		 phone03: '<a href="tel:07752357487"><i class="fa fa-phone" ></i>&nbsp; 07752357487</a>',

        email: '<a href="miailto:realestate@gmail.com"><i class="fa fa-envelope" ></i> &nbsp; realestate@gmail.com</a>',

        address: '<a href="#"><i class="fa fa-map-marker" ></i>&nbsp; Mangla Road, Beside Holy Cross School, Bilaspur ( 495001 ).</a>',


    }]


    document.querySelector('footer>.container>.row').innerHTML += `
           <div class="col-md-4">
              <div class="my_footer_widget">
                 <h3 class="color_white">${jason05[0].head}</h3>
                    <ul class="nav">
                        <li>${jason05[0].link01}</li>
                        <li>${jason05[0].link02}</li>
                        <li>${jason05[0].link03}</li>
                        <li>${jason05[0].link04}</li>
						<li>${jason05[0].link06}</li
                        <li>${jason05[0].link05}</li>
                    </ul>
              </div>
           </div>
           <div class="col-md-4">
           <div class="my_footer_widget">
            <h3 class="color_white">${jason05[1].head01}</h3>
               <ul class="nav">
                  <li>${jason05[1].link001}</li>
                  <li>${jason05[1].link002}</li>
                  <li>${jason05[1].link003}</li>
                 
               </ul>
           </div>
      </div>
      <div class="col-md-4">
           <div class="my_footer_widget">
            <h3 class="color_white">${jason05[2].head02}</h3>
               <ul class="nav">
                  <li>${jason05[2].phone01}</li>
                  <li>${jason05[2].phone02}</li>
                  <li>${jason05[2].email}</li>
                  <li>${jason05[2].address}</li>
                 
               </ul>
           </div>
      </div>
        `;



})();
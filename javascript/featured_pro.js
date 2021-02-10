//Home Content start   featured _projects
(function() {
    //get body
    var body, article02;
    body = document.getElementById('my_body');
    //craete article tag
    article02 = document.createElement('article');
    //Append section in body 
    body.appendChild(article02);
    //create some basic Elements
	article02.setAttribute('class','article02')
	
    article02.innerHTML += '<div class="container"><div class="row"><h2>Our Featured Properties</h2></div></div>';

    //     craete Json for projects
    var content_jason = [{
        image: 'images/projects/project01.jpg',
        head: 'House Information',
        size: 'Size - 2 BHK',
        location: 'Location - Subham vihar',
        area: 'Area - 20 x 50 = 1000 sqr feet',
        price: 'Price - 33.99 Lac',
        phone: 'Call Us',
        msg: 'Message'
    }, {
        image: 'images/projects/project02.jpg',
        head: 'House Information',
        size: 'Size - 3 BHK',
        location: 'Location - Minocha Colony',
        area: 'Area - 20 x 50 = 1000 sqr feet',
        price: 'Price - 33.99 Lac',
        phone: 'Call Us',
        msg: 'Message'
    }, {
        image: 'images/projects/project03.png',
        head: 'House Information',
        size: 'Size - 3 BHK',
        location: 'Location - Subham vihar',
        area: 'Area - 20 x 50 = 1000 sqr feet',
        price: 'Price - 33.99 Lac',
        phone: 'Call Us',
        msg: 'Message'
    }]

    //loop start 
    for (var i = 0; i < content_jason.length; i++) {
        document.querySelector('.article02>.container>.row').innerHTML += `
                <div class="col-md-4">
                    <div class="my_projects">
                        <img src="${content_jason[i].image}" class="img-responsive">
                        <br>
                        <span class="pad-10 color_sky"><b>${content_jason[i].head}</b></span>
                        <ul class="pad-10 nav">
                            <li><a href="#">${content_jason[i].size}</a></li>
                            <li><a href="#">${content_jason[i].location}</a></li>
                            <li><a href="#">${content_jason[i].area}</a></li>
                            <li><a href="#">${content_jason[i].price}</a></li>
                            <div class="my_btns text-center">
                                <span><a href="msg:"><i class="fa fa-envelope-o"></i> ${content_jason[i].msg}</a></span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span><a href="tel:"><i class="fa fa-phone"></i> ${content_jason[i].phone}</a></span>
                            </div>
                        </ul>
                    </div>
                </div>
                `;
    }

})();
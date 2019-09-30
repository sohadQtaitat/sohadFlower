'use strict'

var userName = function(){
 
  var un = prompt('What is your name?');
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  // processing:
  if (hourNow > 18) {
    greeting = 'Good evening,';
  } else if (hourNow >= 12) {
    greeting = 'Good afternoon, ';
  } else if (hourNow >= 0) {
    greeting = 'Good morning ';
  } else {
    greeting = 'Welcome ';
  }
  greeting = greeting.concat(un.toString()).concat(' !');

  //output:
  return greeting;
};




var type = function (){
        // input
        var favflo = prompt(" Hello :) What occasion you have Wedding or gift flower?  ");
        var floscn='';
      
        // processing:
        if (favflo ==='wedding' ) {
            floscn = floscn.concat('<img src="https://images.immediate.co.uk/production/volatile/sites/13/2019/01/choose-wedding-flowers-bouquet-thumbnail-75c4c70.jpg?quality=90&resize=620,413">');
            floscn = floscn.concat('<img src="https://media-api.xogrp.com/images/99337252-d2be-44d7-8cf0-9af4d2b95140~rs_768.h">');
            floscn = floscn.concat('<img src="https://www.bloominggreenflowers.co.uk/wp-content/uploads/2016/11/wedding_boquet_James-Rouse.jpg">');
            floscn = floscn.concat('<img src="https://www.hellomagazine.com/imagenes/brides/2019031270768/how-to-choose-wedding-flowers-each-season/0-345-907/wedding-bouquet-t.jpg">');
        
          } else if (favflo === 'gift' ) {
           
           
            floscn =floscn.concat('<img src="https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1557647751/vendor/6725/catalog/product/2/0/20190128073226_file_5c4f58caa2b73.jpg">');
            floscn = floscn.concat( '<img src="https://www.lesfleursflorist.co.uk/pub/media/catalog/product/cache/2a8d341df1aabef95fa418beb77089e8/s/m/smooth_blues_vase_arrangement.jpg">');
            floscn = floscn.concat('<img src="http://s7d2.scene7.com/is/image/Teleflora/T43-1C_ENV?&wid=400&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=bilin&op_usm=3.0,0.5,1.0,0&iccEmbed=0&layer=1&opac=0&layer=2&opac=55&layer=5&opac=0&layer=3&opac=0">');
            floscn = floscn.concat('<img src="http://www.flowersuganda.com/558-large_default/lovers-flower-gift-special.jpg">');
        } else {
            floscn = 'Unknown! ';
        }
        //output:
        return floscn;
    };

 




//////////////////////// Loop function //////////////////////////

  var showOrder = function() {
    // input
    var order = prompt('What occasion you would like to buy? "wedding" or "gift"?');
    var picture = ''; 
    var total ;
  
    // processing
    while (order !== 'wedding' && order !== 'gift') {
      order = prompt('Please enter "wedding" or "gift"...');
    }
    
  do{
	    total = prompt('How many Flower would you like?');
  } while(isNaN(total)) 
    
    
    
    for(var models = 0; models < total; models = models + 1) {
      if (order === 'wedding') {
        picture = picture + '<p><img src="https://images-na.ssl-images-amazon.com/images/I/715l6fIF2-L._SX355_.jpg"></p>'
      } else if (order === 'gift') {
        picture = picture + '<p><img src="https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1557647834/vendor/6725/catalog/product/2/0/20180827040641_file_5b84219196b7e.jpg"></p>'
      }
    }
  
    // output
    return picture;
  }
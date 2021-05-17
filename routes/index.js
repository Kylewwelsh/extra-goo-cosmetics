const express = require('express');
const router = express.Router();

router.use(function(req, res, next){
  res.locals = {
    siteTitle: 'Extra Goo Cosmetics',
    tagline: 'Used & Affordable Makeup',
    copyright: 'Extra Goo Cosmetics. All Rights Reserved'
  }
  next();
})

router.get('/',function(req,res){
  res.render('pages/index',{pageTitle: 'Home'});
})

router.get('/about-us',function(req,res){
  res.render('pages/about-us',{pageTitle: 'About Us'});
})

router.get('/contact-us',function(req,res){
  res.render('pages/contact-us',{pageTitle: 'Contact Us'});
})

module.exports = router;
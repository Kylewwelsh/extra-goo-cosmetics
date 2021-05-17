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

router.get('/library',function(req,res){
  res.render('pages/about-us',{pageTitle: 'About Us'});
})

router.get('/exercises',function(req,res){
  res.render('pages/contact-us',{pageTitle: 'Contact Us'});
})

module.exports = router;
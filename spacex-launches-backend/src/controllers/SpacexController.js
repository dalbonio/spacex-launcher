const axios = require("axios");

exports.next = (req, res, next) => {
    res.status(200).send('next');
 };
  
 exports.latest = (req, res, next) => { 
    res.status(200).send(`latest`);
 };
  
 exports.upcoming = (req, res, next) => {
    res.status(200).send(`upcoming`);
 };
  
 exports.allLast = (req, res, next) => {
    res.status(200).send('all_last');
 };
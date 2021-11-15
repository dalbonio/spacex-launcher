const axios = require("axios");

exports.next = (req, res, next) => {
   axios.get("https://api.spacexdata.com/v4/launches/next").then( (response) => res.status(200).send(response.data))
 };
  
 exports.latest = (req, res, next) => { 
   axios.get("https://api.spacexdata.com/v4/launches/latest").then( (response) => res.status(200).send(response.data))
 };
  
 exports.upcoming = (req, res, next) => {
   axios.get("https://api.spacexdata.com/v4/launches/upcoming").then( (response) => res.status(200).send(response.data))
 };
  
 exports.past = (req, res, next) => {
   axios.get("https://api.spacexdata.com/v4/launches/past").then( (response) => res.status(200).send(response.data))
 };
import mongoose from 'mongoose';

const user = "heru";
const pass = "qazWSXedc";
const url = "ds115045.mlab.com";
const port = 15045;
const db = "pelatihandb"
mongoose.connect("mongodb://"+user+":"+pass+"@"+url+":"+port+"/"+db);
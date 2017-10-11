import mongoose from 'mongoose';

let pesertaSchema = mongoose.Schema({
    KdPeserta:{
        type: String,
        unique: true,
        require: true
    },
    NamaPeserta: String,
    AlamatPeserta: String,
    KdProvinsi: String,
    KdKota: String,
    KdKec: String,
    TglLahir: String,
    KdStatusPeserta: String,
    Email:String,
    Blog: String
});

let Peserta = module.exports = mongoose.model('Peserta',pesertaSchema,'Peserta');

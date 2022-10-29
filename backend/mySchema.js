import mongoose from 'mongoose';

const adoptionSchema = mongoose.Schema({
    name: String,
    fathername: String,
    age: Number,
    income: String,
    phonenumber: Number,
    address: String,

    institutiontenth: String,
    statetenth: String,
    scoretenth: Number,
    yeartenth: String,

    institutiontwelve: String,
    statetwelve: String,
    scoretwelve: Number,
    yeartwelve: String,

    institutionbachelor: String,
    statebachelor: String,
    scorebachelor: Number,
    yearbachelor: String,

    institutionpostgraduate: String,
    statepostgraduate: String,
    scorepostgraduate: Number,
    yearpostgraduate: String,

    email: String,
    altphonenumber: Number
});

export default mongoose.model('dataSchema', adoptionSchema);
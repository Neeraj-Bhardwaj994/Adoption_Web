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
    yeartenth: Number,

    institutiontwelve: String,
    statetwelve: String,
    scoretwelve: Number,
    yeartwelve: Number,

    institutionbachelor: String,
    statebachelor: String,
    scorebachelor: Number,
    yearbachelor: Number,

    institutionpostgraduate: String,
    statepostgraduate: String,
    scorepostgraduate: Number,
    yearpostgraduate: Number,

    email: String,
    altphonenumber: Number
});

export default mongoose.model('dataSchema', adoptionSchema);
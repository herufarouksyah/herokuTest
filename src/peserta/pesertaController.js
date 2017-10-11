import Peserta from  './pesertaModel.js';



let getPeserta = function (callback,limit) {
    Peserta.find(callback).limit(limit);
}


export default getPeserta
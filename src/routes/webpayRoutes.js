const webpayModel = require('../models/webpay.js');
//const checkToken = require('../shared/middlewares/mw_checkToken.js');
//const uploadFiles = require('../shared/middlewares/mw_uploadFiles');


module.exports = function (app, passport){
    app.post('/webpay_plus/transaccion', (req, res) => {
        webpayModel.initTransaction(req.body, (err, data) => {
            res.json(err ? err : data)
        })
    })

    //La página de WebPay retorna a éste endPoint
    app.post('/webpay_plus/success', (req, res) => {
        webpayModel.success(req.body, (err, data) => {
            res.writeHead(302, {
                Location: 'https://market-react-node.netlify.app/ResultadoVentaWebpay'
            });
            res.end();
        })
    })

    app.post('/webpay_plus/confirm', (req, res) => {
        webpayModel.comfirm(req.body, (err, data) => {
            return res.json(err ? err : data)
        })
    })

    app.post('/webpay_plus/status', (req, res) => {
        webpayModel.status(req.body, (err, data) => {
            return res.json(err ? err : data)
        })
    })
}
const AdminModel = require('../models/AdminModel')

module.exports = {
    get : (req,res,next) => {
        AdminModel.find({},(err,response) => {
            if(err)
                next(err)
            else
                res.json(response)
        })
    },

    getById : (req,res,next) => {
        AdminModel.findById(req.params.id,(err,response) => {
            if(err)
                next(err)
            else
                res.json(response)
        })
    },

    getByLimit : (req,res,next) => {
        let limitedQuery = AdminModel.find({},{'nama':1})
        .limit(Math.abs(Math.ceil(req.params.limit)))

        limitedQuery.exec((err,response) => {
            if(err)
                next(err)
            else
                res.json(response)
        })
    },

    getByPagination : (req,res,next) => {
        let paginationConfig = {
            dataPerpage: 10,
            currentPage: (req.query.page != null && req.query.page > 0) ? Math.abs(Math.ceil(req.query.page)) : 1
        }

        let pagination = AdminModel.find({})
        .limit(paginationConfig.dataPerpage)
        .skip(paginationConfig.dataPerpage * (paginationConfig.currentPage - 1))

        pagination.exec((err,response) => {
            if(err)
                next(err)
            else
                res.json(response)
        })
    },

    store : (req,res,next) => {
        AdminModel.create({nama: req.body.nama, email: req.body.email, password: req.body.password}, (err) => {
            if (err) 
                next(err)
            else
                res.json({status: 'Data inserted',code:200})
        })
    },

    update : (req,res,next) => {
        AdminModel.findByIdAndUpdate(req.params.id,{nama: req.body.nama, email: req.body.email, password: req.body.password},(err) => {
            if(err)
                next(err)
            else
                res.json({status: 'Data updated',code:200})
        })
    },

    destroy : (req,res,next) => {
        AdminModel.findByIdAndDelete(req.params.id,(err) => {
            if(err)
                next(err)
            else
                res.json({status: 'Data deleted',code: 200})
        })
    }  
}
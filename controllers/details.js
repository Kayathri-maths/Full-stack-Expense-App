const Item = require('../models/items');

exports.addItem = async (req, res, next) => {
    try {

     const candyName = req.body.candy;
     const description = req.body.description;
     const price = req.body.price;
     const quantity = req.body.quantity;

   const data = await Item.create( {candyName: candyName, description: description, price: price, quantity: quantity});
   res.status(201).json({newItemDetails: data});
    }
    catch(error) {
        res.status(500).json({
            error: error
        });
    }
    
};

exports.getItem = async (req, res, next) => {
    try {
      const items = await Item.findAll();
      res.status(200).json({allItems: items});
    }
    catch(error) {
        res.status(500).json({
            error: error
        });
    }
};
exports.putItem = async (req, res, next) => {
    try{
        if(req.params.id == 'undefined'){
            console.log('ID is missing');
            return res.status(400).json({err: 'ID is missing'});
        }
        
     const candyName = req.body.candy;
     const description = req.body.description;
     const price = req.body.price;
     const quantity = req.body.quantity;
        const itemId = req.params.id;
        await Item.update({candyName: candyName, description: description, price: price, quantity: quantity},{where: {id: itemId}});
        
     }  catch(error){
        console.log(error);
        res.status(500).json(error);
     }
};

exports.deleteItem= async (req, res, next) => {
    try{
       if(req.params.id == 'undefined'){
           console.log('ID is missing');
           return res.status(400).json({err: 'ID is missing'});
       }
       const itemId = req.params.id;
       await Item.destroy({where: {id: itemId}});
       res.sendStatus(200);
    }  catch(error){
       console.log(error);
       res.status(500).json(error);
    }
};











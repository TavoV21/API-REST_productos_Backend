const cnx=require('../config/conexion');
const controller ={};
 

controller.añadirProducto= (req,res)=>{
    console.log(req.file.originalname);

    try {
        var data={
             nombre:req.body.nombre,
             imagen:req.file.originalname,
             categoria:req.body.categoria,
             precio:req.body.precio,
             fecha_vencimiento:req.body.fecha_vencimiento,          
        }
        cnx.query('INSERT INTO productos set ?',[data],(error, producto)=>{
              console.log(producto);
              res.send(producto);
                    
          }); 
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }

   
        
}

controller.verProductos=  (req,res)=>{

    try {     
        cnx.query('SELECT * FROM productos',(error, productos)=>{
         if (error) {
            res.json(error);
         }
         //console.log(productos);
         res.send(productos);
        });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

controller.verProductoPorId=  (req,res)=>{
    
    try {   
        const id = req.params.id;

        cnx.query('SELECT * FROM productos WHERE id=?',[id],(error, producto)=>{
         if (error) {
            res.json(error);
         }
         console.log(producto);
         res.send(producto[0]);

        });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

controller.actualizarProducto=  (req,res)=>{
    
    try {  
        const id = req.params.id;
        console.log(id);
        var date={
            nombre:req.body.nombre,
            imagen:req.file.originalname,
            categoria:req.body.categoria,
            precio:req.body.precio,
            fecha_vencimiento:req.body.fecha_vencimiento,          
       }
       console.log(date);
        cnx.query('UPDATE productos SET ? WHERE id = ?',[date,id],(error, rows)=>{
         if (error) {
            res.json(error);
         }
         console.log(rows);
         res.send(rows);

        });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

controller.eliminarProducto=  (req,res)=>{
    
    try {   
        const id = req.params.id;

        cnx.query('DELETE FROM productos WHERE id=?',[id],(error, rows)=>{
         if (error) {
            res.json(error);
         }
         console.log(rows);
         res.send(rows);

        });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

module.exports=controller;

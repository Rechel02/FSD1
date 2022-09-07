const exp=require('express')

const router=exp.Router()
const schema=require('../model/model')


router.get('/',async(req,res)=>{
    try{
        const a=await schema.find()
        res.json(a)
    }catch(err){
        res.send("error"+err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const a1= await schema.findById(req.params.id)
        res.json(a1)
    }catch(err)
    {
res.send("error"+err)
    }

})

router.post('/', async(req, res) => {
    const d = new schema({
        name: req.body.name,
        tech: req.body.tech,
        section: req.body.section
    })
    try {
        const x1 = await d.save()
        res.json(x1)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const a= await schema.findById(req.params.id)
        a.tech=req.body.tech
        const a1=a.save()
        res.json(a1)
    }catch(err)
    {
res.send("error"+err)
    }

})

module.exports=router
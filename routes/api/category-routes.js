const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try
  {
    //get categories
    const categoriesResults = await Category.findAll({
      include: [
        {
          model: Product
        }
    ]
    });
    //return categories status/error
    res.status(200).json(categoriesResults);
  } catch (error) {
    console.log(error);
    res.status(500).json({"error":error});
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try
  {
    //get single category
    const categoryResults = await Category.findOne({
      where:{id:req.params.id},
      include: [
        {
          model: Product
        }
    ]
    });
    //return category status/error
    res.status(200).json(categoryResults);
  } catch (error) {
    console.log(error);
    res.status(500).json({"error":error});
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try
  {
    //create category
    const categoryResults = await Category.create(req.body);
    //return category status/error
    res.status(200).json(categoryResults);
  } catch (error) {
    console.log(error);
    res.status(500).json({"error":error});
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    try
    {
      //delete single Category
      const categoryResults = await Category.destroy({where:{id:req.params.id}});
      //return Categorys status/error
      res.status(200).json(categoryResults);
    } catch (error) {
      console.log(error);
      res.status(500).json({"error":error});
    }
});

module.exports = router;

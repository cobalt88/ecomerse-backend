const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include: 
    [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(getAllCategories => {
    res.json(getAllCategories)
    .status(200);
  })
  .catch(err => {
    console.error(`Unexpected error encountered in get all categories route ${err}`)
    res.status(500);
  });
  
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
     // be sure to include its associated Products
      include: 
      [
        {
          model:  Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        }
      ]
  })
    .then(getCategoryById => {
      res.json(getCategoryById)
      .status(200);
    })
    .catch(err => {
      console.error(`Unexpected error encountered in get category by id route ${err}`);
      res.status(500)
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(postNewCategory => {
      res.json(postNewCategory)
      .status(200);
    })
    .catch(err => {
      console.err(`Unexpected error encountered in post new category route ${err}`)
      .status(500);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(editCategory => {
      //add more detailed response information here later -V.T. 5-19-22
      res.json(editCategory)
      .status(200);
    })
    .catch(err => {
      console.error(`Unexpected error encountered new edit category route ${err}`);
      res.status(500).json(err);
    });
});



router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(deleteCategory => {
      res.json(deleteCategory)
    .status(200);
  })
    .catch(err => {
      console.error(`Unexpected error encountered in delete category route ${err}`);
      res.status(500);
  })
});

module.exports = router;

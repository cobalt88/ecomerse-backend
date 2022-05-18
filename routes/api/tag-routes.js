const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    // be sure to include its associated Product data
    include: 
    [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(getAllTags => {
    res.json(getAllTags)
    .status(200);
  })
  .catch(err => {
    console.error(`Unexpected error encountered in get all tags route: ${err}`)
    res.status(500);
  })
  
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
     // be sure to include its associated Product data
     include:
     [
       {
         model: Product,
         attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
       }
     ]
  })
  .then(getTagById => {
    res.json(getTagById)
    .status(200);
  })
  .catch(err => {
    console.error(`Unexpected error encountered in get tags by id route: ${err}`);
    res.status(500);
  })
 
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(postNewTag => {
      res.json(postNewTag)
      .status(200);
    })
    .catch(err => {
      console.err(`Unexpected error encountered in post new tag route: ${err}`)
      .status(500);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(postNewCategory => {
      res.json(postNewCategory)
      .status(200);
    })
    .catch(err => {
      console.error(`Unexpected error encountered in  edit/put tag route: ${err}`);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(deletetag => {
      res.json(deletetag)
    .status(200);
  })
    .catch(err => {
      console.error(`Unexpected error encountered in delete tag route ${err}`);
      res.status(500);
  })
});

module.exports = router;

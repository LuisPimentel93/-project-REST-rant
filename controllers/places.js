const router = require('express').Router()
const places = require('../models/places')

// GET /places
router.get('/', (req, res) => {
   res.render('places/index', { places })
})
  
//  POST for new places
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

// GET to create a new place  
router.get('/new', (req, res) => {
    res.render('places/new')
})

// show page
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show', { places: places[id], id})
    }
  })
  
router.put('/:id', (req, res) => {
    res.send('Update a particular place')
})

router.get('/:id/edit', (req, res) => {
    res.render('editpage')
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


router.post('/:id/rant', (req, res) => {
    res.send('Create a rant (comment) about a particular place')
})
router.delete('/:id/rant/:rantid', (req, res) => {
    res.send('Delete a rant (comment) about a particular place')
})


module.exports = router
const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coding_cat_cafe.jpg'
      }]
      
    res.render('places/index', { places })

  })
  
//  POST for new places
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('/places')
})
router.get('/new', (req, res) => {
    res.render('places/new')
})
router.get('/:id', (req, res) => {
    res.render('showpage')
})
router.put('/:id', (req, res) => {
    res.send('Update a particular place')
})

router.get('/:id/edit', (req, res) => {
    res.render('editpage')
})

router.delete('/places/:id', (req, res) => {
    res.send('Delete a particular place')
})

router.post('/:id/rant', (req, res) => {
    res.send('Create a rant (comment) about a particular place')
})
router.delete('/:id/rant/:rantid', (req, res) => {
    res.send('Delete a rant (comment) about a particular place')
})


module.exports = router
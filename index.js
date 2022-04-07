// Add New Item Function
function newImage(img, left, bottom)  {    
    let object = document.createElement('img')
    object.src = img
    object.style.position = 'fixed'
    object.style.left = left
    object.style.bottom = bottom
    document.body.append(object)

}
// Add New Item Function
function newItem(img, left, bottom) {
    let object = document.createElement('img')
    object.src = img
    object.style.position = 'fixed'
    object.style.left = left
    object.style.bottom = bottom
    document.body.append(object)

    object.addEventListener('dblclick', function(){
        object.remove()
})
}
// Add New Images
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

// Add New Images
newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')

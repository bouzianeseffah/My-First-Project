let canvas = document.querySelector('canvas')
 cntx = canvas.getContext('2d')

 canvas.width =window.innerWidth 
 canvas.height =window.innerHeight
 const x = canvas.width / 2
    const y = canvas.height / 2
    
  
 
//create player 
class player {
  constructor (x, y, radius, color){
this.x = x
this.y = y
this.radius = radius
this.color = color
  }
  draw(){
    cntx.beginPath()
    cntx.arc(x, y, 30  , 0, Math.PI * 2,  false)
    cntx.fillStyle = 'white'
    cntx.fill()
  }
}



// creat player attack
class palyerAttack {
  constructor (x, y, radius, color, movement){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.movement = movement
      }
      draw(){

        cntx.beginPath()
        cntx.arc(this.x, this.y, this.radius , 0, Math.PI * 2,  false)
        cntx.fillStyle = this.color
        cntx.fill()
       
       
      }
      changing() {
        this.draw()
        this.x = this.x + (this.movement.x)
        this.y = this.y + (this.movement.y)

      }
      
    }
    const cyrcle = new player(x, y,this.radius , this.color)
    cyrcle.draw()

    //empty array for our cyrcles and then louping true this array  
    const cyrcles = []
 function playerAttackMouvement(){
  requestAnimationFrame (playerAttackMouvement)
  cyrcles.forEach(palyerAttack => {
    palyerAttack.changing()
  });
  
 }
 playerAttackMouvement()
    
    









// addEventListener to player attack
  
 addEventListener ('click' ,(event) => {
  // set the angle for mouseclick on canvas
  let angle = Math.atan2(event.clientY - canvas.height / 2 ,event.clientX - canvas.width / 2   )
 // console.log(angle)
 
  let movement = {
    x: Math.cos(angle),
    y : Math.sin(angle)
  }
 cyrcles.push( new palyerAttack(canvas.width / 2,  canvas.height / 2 , 5, 'red', 
 movement))
  //console.log(event)
  
})

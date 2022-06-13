let canvas = document.querySelector('canvas')
 cntx = canvas.getContext('2d')

 canvas.width = window.innerWidth  * 0.75
 canvas.height = window.innerHeight * 0.75
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

const cyrcle = new player(x, y,this.radius , this.color)


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
    //creat enemies
    class Enemy {
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

    //empty array for our cyrcles and then louping true this array  
    const cyrcles = []
    // empty array for our enemies
    const Enemies = []
    
    function detectEnemies (){ 
    setInterval(() => {
      const radius = Math.random() * (30 - 5) + 5
      let x
      let y
      // if statement to detect enemies from the edges of the canvas
      if (Math.random() < 0.5)  {
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
        y = Math.random () * canvas.height 
      } else {
        x = Math.random () * canvas.width
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
      }
      
     
      const color = 'blue'
      let angle = Math.atan2(canvas.height / 2  - y, canvas.width / 2 - x  )
      let movement = {
        x: Math.cos(angle),
        y : Math.sin(angle)
      }
      Enemies.push( new Enemy(  x, y, radius, color, movement ))
       
    }, 1000);
  }
    //function to creat small cyrcles
 function canvasAnimation(){
  requestAnimationFrame (canvasAnimation)
  cntx.clearRect(0, 0, canvas.width, canvas.height);
  cyrcle.draw()

 
  cyrcles.forEach(palyerAttack => {
    palyerAttack.changing()
  });

  Enemies.forEach((Enemy , index) => {
    Enemy.changing()
      cyrcles.forEach((palyerAttack, palyerAttackIndex) => {
      //the distance between playerAttack and 
       let distance =  Math.hypot(palyerAttack.x - Enemy.x, palyerAttack.y - Enemy.y )
      //console.log (distance)
      if(distance - palyerAttack.radius - Enemy.radius < 1) {
        //console.log('remove')
        Enemies.splice(index, 1)
        cyrcles.splice(palyerAttackIndex, 1)
      }
    });
  });
 }
 

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
canvasAnimation()
detectEnemies()

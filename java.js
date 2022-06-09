let canvas = document.querySelector('canvas')
 cntx = canvas.getContext('2d')

 canvas.width = innerWidth
 canvas.height = innerHeight
 
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
    cntx.arc(x, y, 15  , 0, Math.PI * 2,  false)
    cntx.fillStyle = 'black'
    cntx.fill()
  }
}
// creat player attack
class palyerAttack {
  constructor (x, y, radius, color){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
      }
      draw(){
        cntx.beginPath()
        cntx.arc(this.x, this.y, this.radius , 0, Math.PI * 2,  false)
        cntx.fillStyle = this.color
        cntx.fill()
      }
    }
    
let x = canvas.width / 2
let y = canvas.height / 2
let cyrcle = new player(x, y,this.radius , this.color)
cyrcle.draw()


 


  
canvas. addEventListener ('click',(event) => {
  const cyrcletwo = new palyerAttack(event.clientX, event.clientY, 5, 'red')
  cyrcletwo.draw()

})

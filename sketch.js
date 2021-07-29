
 var box;
 var edges; 
 
 function setup(){
  createCanvas(400,400)
  
  edges = createEdgeSprites()
  
  box1 = createSprite(50,50,40,40)
  box1.shapeColor = "red"

  box2 = createSprite(50,330,40,40)
  box2.shapeColor = "yellow"

  box3 = createSprite(330,50,40,40)
  box3.shapeColor = "green"

  box4 = createSprite(330,330,40,40)
  box4.shapeColor = "blue"

 
  
  
  }

  function draw(){
    background("black")

    box3.bounceOff(box4)
    box1.bounceOff(box4)
    box1.bounceOff(box2)
    box2.bounceOff(box4)
    box2.bounceOff(box3)
    box1.bounceOff(edges)
    box2.bounceOff(edges)
    box3.bounceOff(edges)
    box4.bounceOff(edges)

    
   if(keyIsDown(DOWN_ARROW)){

    box1.velocityX = 3
    box1.velocityY = 2

    box2.velocityY = -2
    box2.velocityX = 3

    box3.velocityY = 2
    box3.velocityX = -3
    
    box4.velocityY = -3
    box4.velocityX = -3

    
     








    
   }

   

       

 
  drawSprites()
}



  






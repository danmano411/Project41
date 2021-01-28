const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World= Matter.World;


var maxRain = 100;
var drops = [];
var thunder, thundertime = 0;


function preload(){

    manWalking = loadAnimation("images/Walking Frame/walking_8.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_1.png" )
    thunderBooming1 = loadImage("images/thunderbolt/1.png")
    thunderBooming2 = loadImage("images/thunderbolt/2.png")
    thunderBooming3 = loadImage("images/thunderbolt/3.png")
    thunderBooming4 = loadImage("images/thunderbolt/4.png")

}

function setup(){
    createCanvas(400, 600)

    engine = Engine.create();
    world = engine.world;

    man = createSprite(200, 430, 20, 20)
    man.addAnimation("walking", manWalking)
    man.scale = 0.5

    umbrella = new Umbrella(200, 320, 65)
    
    makeRain();

}

function draw(){
    background("black")
    Engine.update(engine);
    showRain();
    updateRain();
    thunderShow();
    drawSprites();
}   

function makeRain(){
    for (var i = 0; i < maxRain; i++){
        drops.push(new Rain(random(0, 400), random(0, 400)))
    }

}

function showRain(){
    for (var i = 0; i < maxRain; i++){
        drops[i].display();
    }
}

function updateRain(){
    for (var i = 0; i < maxRain; i++){
        drops[i].update();       
    }
}

function thunderShow(){
    if (frameCount%80 === 0){
        var rand = Math.round(random(1, 4))
        thunder = createSprite(random(50, 350), 50, 20, 20)
        thunder.scale = 0.3
        thundertime = frameCount;
        switch(rand){
            case 1: 
            thunder.addImage(thunderBooming1)
            break;

            case 2: 
            thunder.addImage(thunderBooming2)
            break;

            case 3: 
            thunder.addImage(thunderBooming3)
            break;

            case 4:
            thunder.addImage(thunderBooming4)
            break;
        }
    }
    if(thundertime + 12 === frameCount && thunder){
        thunder.destroy();
    }
}
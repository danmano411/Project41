const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World= Matter.World;


var maxRain = 100;
var drops = [];


function preload(){

    manWalking = loadAnimation("images/Walking Frame/walking_8.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_1.png" )
}

function setup(){
    createCanvas(400, 600)

    engine = Engine.create();
    world = engine.world;

    man = createSprite(200, 430, 20, 20)
    man.addAnimation("walking", manWalking)
    man.scale = 0.5
    
    makeRain();
}

function draw(){
    background("black")
    Engine.update(engine);
    showRain();
    updateRain();
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
        if(drops[i].y > 600){
            drops[i].update();
        }
    }
}
function animateElementHz(element,start,end,duration){
    return new Promise ((resolve,reject)=>{
        const delta =(end-start)*30/duration;
        element.style.left=start;
        let counter=0;
        const loop =setInterval(()=>{
            const currentPosition=start+delta * counter++;
            element.style.left=currentPosition;
            if( start<end && currentPosition >= end){
                clearInterval(loop);
                resolve();
            }else if (start>end && currentPosition <= end){
                clearInterval(loop);
                resolve();
            }
        },30);

    });
}

function animateElementVr(element,start,end,duration){
    return new Promise ((resolve,reject)=>{
        const delta =(end-start)*30/duration;
        element.style.top=start;
        let counter=0;
        const loop =setInterval(()=>{
            const currentPosition=start +delta * counter++;
            element.style.top=currentPosition;
            if( start<end && currentPosition >= end){
                clearInterval(loop);
                resolve();
            }else if (start>end && currentPosition <= end){
                clearInterval(loop);
                resolve();
            }
        },30);

    });
}




const allImg=document.getElementsByTagName('img');
// console.log('Comienza la promesa')
// animateElement(allImg[0],-200,500,2000)
// .then(()=>{
//     console.log('Terminó la animacion de gato ')
//     return animateElement(allImg[1],-200,500,3000)
// })
// .then(()=>{
//     console.log ('Terminó la animacion perro ')
//     return animateElement (allImg[0],-200,500,2000)
// })
// .then (()=>{
//     console.log ('Terminó la animacion gato')
// })
// .catch(()=>{});
// console.log ('hola soy el codigo despues de la promesa')

Promise.all([
    animateElementHz(allImg[0],0,600,3000),
    animateElementHz(allImg[1],0,600,3000)
])
.then(()=>{
    console.log ('gato y perro se mueven  Hz');
    return Promise.all([
        animateElementVr(allImg[0],0,460,3000),
        animateElementVr(allImg[1],140,600,3000)  
    ]);
   
})
.then(()=>{
    console.log('gato y perro se mueven -Vr'  )
     return Promise.all([
        animateElementHz(allImg[0],600,0,3000),
        animateElementHz(allImg[1],600,0,3000)  
    ]);
   

})
.then(()=>{
    console.log('gato y perro se mueven -Hr'  )
    return Promise.all([
        animateElementVr(allImg[0],460,0,3000),
        animateElementVr(allImg[1],600,140,3000)  
    ]);

})
.then(()=>{
    console.log('gato y perro se mueven Vr'  )
    console.log('Termino el ciclo de animación')
})
.catch(()=>{})
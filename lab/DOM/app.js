document.addEventListener('DOMContentLoaded',function(){
    let nice = document.createElement('button')
    let niceText = document.createTextNode('Nice!')
    let cont = document.createElement('container')
    nice.appendChild(niceText)
    cont.appendChild(nice)
    document.body.appendChild(cont)
    nice.addEventListener('click',function(){
        alert('I love you')
    })
    let alrt = document.getElementById('sub')
    let alrtTxt = document.getElementById('subTxt')
    let alrtTxtSub= alrtTxt.textContent
    cont.appendChild(alrtTxt)
    cont.appendChild(alrt)
    alrt.addEventListener('click', function(){
        alert(alrtTxtSub)
    })
    let hover = document.getElementById('hover')
    cont.appendChild(hover)
    hover.addEventListener('mouseover',function(){
        hover.style.backgroundColor = 'red'
    })
    hover.addEventListener('mouseout', function(){
        hover.style.backhroundColor = ''
    })
    let para = document.getElementById('para')
    cont.appendChild(para)
       para.addEventListener('click',function(){
    var symbols = '01232456789ABCDEF' //this is the key fro the computer to find the new color combo 
    var color = '#'
    for(var i=0; i<6; i++){ //the 6 is for a 6 symbol combination (starting from 0)
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    para.style.color = color
}) 
let nameBtn = document.getElementById('name')
let nameEntry = document.getElementById('nameEntry')
cont.appendChild(nameBtn)
cont.appendChild(nameEntry)
nameBtn.addEventListener('click',function(){
    let span = document.createElement('span')
    let spanTxt = document.createTextNode('Joel')
    span.appendChild(spanTxt)
    document.body.appendChild(span)
})
let friends = Array('Ay', 'Be','Ce','De','Ee','Feh','Ge','Hank','Indi','Jay',)
let friendBtn = document.getElementById('friend')
cont.appendChild(friendBtn)
friendBtn.addEventListener('click', function(){
    for( i = 0; i < friends.length; i++){
    let item = document.createElement('li')
    let itemTxt = document.createTextNode(friends[i])
    item.appendChild(itemTxt)
    document.body.appendChild(item)
    
}
})





})
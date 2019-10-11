// player object

const player = {
	character : $("#player"),
	playerPos : 0
}

console.log(player)

// ai object

const ai = {
	character : $('#ai'),
	aiPos : 0

}

console.log(ai)

let playerPosition = 0
let aiPosition = 0

// move the player

player.character.click(function(){
	console.log($(this))

	$(this).animate({
		'left' : (playerPosition += 100) +'px'
	})

	console.log('this is the current value of player postion ' + playerPosition)

	player.playerPos = playerPosition
	console.log(player)


	result()
})

const easy = () =>{
	if(ai.aiPos < 1100){
		ai.character.animate({
		'left' : (aiPosition += 100) + 'px'
		
		})
	}else{
		return true
	}

		console.log(ai.aiPos)
		ai.aiPos = aiPosition
		setTimeout(easy, 1000)
		result()
}



// move the ia
$("#easy").click(function(){
	// ai.character.animate({
	// 	'left' : (aiPosition += 100) + 'px'
		
	// })
	// ai.aiPos = aiPosition
	// result()
	easy()

})

const medium = () =>{
	if(ai.aiPos < 1100){
		ai.character.animate({
		'left' : (aiPosition += 100) + 'px'
		
		})
	}else{
		return true
	}

		console.log(ai.aiPos)
		ai.aiPos = aiPosition
		setTimeout(medium, 800)
		result()
}



// move the ia
$("#medium").click(function(){
	// ai.character.animate({
	// 	'left' : (aiPosition += 100) + 'px'
		
	// })
	// ai.aiPos = aiPosition
	// result()
	medium()

})

const hard= () => {
	if(ai.aiPos < 1100){
		ai.character.animate({
		'left' : (aiPosition += 100) + 'px'
		
		})
	}else{
		return true
	}

		console.log(ai.aiPos)
		ai.aiPos = aiPosition
		setTimeout(hard, 500)
		result()
}



// move the ia
$("#hard").click(function(){
	// ai.character.animate({
	// 	'left' : (aiPosition += 100) + 'px'
		
	// })
	// ai.aiPos = aiPosition
	// result()
	hard()

})


const result = () => {
	if(player.playerPos === 1100){
		alert('Player Won!')
		return true
	}

	if(ai.aiPos === 1100){
		alert('Ai Won!')
		console.log(ai.aiPos)
		return true
	}
}



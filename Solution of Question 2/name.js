
let find_info_ques2_prob1 = (pokeName) =>{
	var found=0;
	var jsonDataLength = poke_json.pokemon.length
	pokeName = pokeName.toLowerCase()
	for(i=0;i<jsonDataLength;i++)
	{
		if(pokeName==poke_json.pokemon[i].name.toLowerCase())
		{
			found=1;
			alert("Pokemon Detected\n PokeID: "+poke_json.pokemon[i].id + "\n Type: "+poke_json.pokemon[i].type + "\n Height: "+poke_json.pokemon[i].height + "\n Weight: "+poke_json.pokemon[i].weight + "\n Weeknesses: "+poke_json.pokemon[i].weaknesses)
			break;
		}
	}
	if(found==0)
	{
		alert("Sorry! No such pokemon found")
	}
}

let find_nextEvolution_ques2_prob2 =(namePoke) =>{
	namePokeLower = namePoke.toLowerCase()
	var length = poke_json.pokemon.length
	var list = ""
	for(i in poke_json.pokemon)
	{
		for(j in poke_json.pokemon[i].next_evolution)
		{
			var next_name = poke_json.pokemon[i].next_evolution[j].name.toLowerCase()
			if(namePokeLower == next_name)
			{
				list = list + poke_json.pokemon[i].name + ","
				break
			}
		}
	}
	if(list=="")
	{
		alert("Either you have entered the wrong pokemon name or this pokemon is not evolved from any other pokemon")
	}
	else
	{
		list = list.slice(0,-1)
		alert(namePoke + " is Evolution of "+ list)
	}
}

let pokemonWeakness_ques2_prob3 =(weakness) =>{
	weaknessFormatedAccdToJson = weakness.charAt(0).toUpperCase() + weakness.substr(1).toLowerCase()
	var length = poke_json.pokemon.length
	var list = ""
	for(i of poke_json.pokemon)
	{
		var index = i.weaknesses.indexOf(weaknessFormatedAccdToJson)
		if(index>=0)
		{
			list = list + i.name + ", "
		}
	}
	// for(i in poke_json.pokemon)
	// {
	// 	var index = poke_json.pokemon[i].weaknesses.indexOf(weaknessFormatedAccdToJson)
	// 	if(index>=0)
	// 	{
	// 		list = list + poke_json.pokemon[i].name + ", "
	// 	}
	// }
	if(list=="")
	{
		alert("No Pokemon has this Weakness")
	}
	else
	{
		list = list.slice(0,-2)
		alert("Pokemons : (" + list + ") has the weakness of " + weakness)
	}
}
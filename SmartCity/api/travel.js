const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
		'X-RapidAPI-Key': 'b9bb809a16msh701b1162b76d9c0p1a07adjsnba92b149418c'
	}
};

fetch('https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=jalandhar&lang=en_US&units=km', options)
	.then(response => response.json())
	.then(response =>{ console.log(response.data.Typeahead_autocomplete.results)
    let list=response.data.Typeahead_autocomplete.results
    let urls=[]
    for(let i=0;i<list.length;i++)
    { 
        const url=list[i].image
        if(url!=undefined)
        {
            


    urls.push(url.photo.photoSizes[4].url)

        }
        
    }
    console.log(urls)
   
    })
	.catch(err => console.error(err));


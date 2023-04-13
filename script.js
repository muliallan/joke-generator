const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0ea9eee397mshcb8ef25998ca2a3p13b36ejsnc776e43b027c',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
};

const getJoke = async () => {
    const response = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
    const data = await response.json()
    // console.log(data.body[0]);
    console.log(data.body[0].setup, data.body[0].punchline);
    // console.log(data.body[0].punchline);
    return data
}

getJoke()
// fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
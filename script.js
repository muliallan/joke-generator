const jokeContainer = document.getElementById('joke-container')
const jokeText = document.getElementById('joke')
const twitterBtn = document.getElementById('twitter')
const newJokeBtn = document.getElementById('new-joke')
const loader = document.getElementById('loader')

// Show loader
const jokesLoading = () => {
    loader.hidden = false;
    jokeContainer.hidden = true;
}

// Hide loader
const jokesLoadingComplete = () => {
    jokeContainer.hidden = false;
    loader.hidden = true;
}



// Get joke from API
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0ea9eee397mshcb8ef25998ca2a3p13b36ejsnc776e43b027c',
        'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
    }
};

const getJoke = async () => {
    jokesLoading()
    const jokesUrl = 'https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&idRange=0-300&blacklistFlags=nsfw%2Cracist'
    try {
        const response = await fetch(jokesUrl, options)
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Jokes on you. We can't find any joke.")
    }

}

const displayJoke = async () => {
    jokesLoading()
    const joke = await getJoke()

    // Check length of joke to determine font
    jokeLength1 = `${joke.setup} ${joke.delivery}`.length //joke length for jokes with setup & delivery in API
    jokeLength2 = `${joke.joke}`.length //joke length for jokes with joke in API

    if (jokeLength1 > 100 || jokeLength2 > 100) {
        jokeText.classList.add('long-quote')
    } else {
        jokeText.classList.remove('long-quote')
    }

    // display joke - 
    if (joke.joke) {
        jokeText.textContent = `${joke.joke}`
    } else if (joke.setup && joke.delivery) {
        jokeText.textContent = `${joke.setup} ${joke.delivery}`
    } else {
        jokeText.textContent = `What's the best thing about teamwork? Someone else to blame.`
    }

    // hide loader
    jokesLoadingComplete()
}

displayJoke()

// Tweet joke
const tweetJoke = () => {
    const twitterUrl = `https://www.twitter.com/intent/tweet?text=${jokeText.textContent}`
    window.open(twitterUrl, '_blank');
}

// Event Listeners
twitterBtn.addEventListener('click', tweetJoke);
newJokeBtn.addEventListener('click', displayJoke);
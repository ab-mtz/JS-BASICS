const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets')

tweetForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // const usernameInput = document.querySelector("username");   
    // const tweetInput = document.querySelector("tweet");   
    const usernameInput  =tweetForm.elements.username;  //We can go inside the form's elements
    const tweetInput =tweetForm.elements.tweet;
    
    // const newTweet = document.createElement('li');
    // const bTag = document.createElement('b');
    // bTag.append(username);
    // newTweet.append(bTag);
    // newTweet.append(`- ${tweet}`);
    // tweetsContainer.append(newTweet);

    addTweet(username.value, tweet.value)
    usernameInput.value = '';
    tweetInput.value = '';
}) 

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}
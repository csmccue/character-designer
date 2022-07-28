// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const headImgTag = document.getElementById('head-img');
const middleImgTag = document.getElementById('middle-img');
const bottomImgTag = document.getElementById('bottom-img');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
const timesChanged = document.getElementById('stats');
let changeHead = 0;
let changeMiddle = 0;
let changeBottom = 0;

// set state for all of the character's catchphrases
let catchphrases = [];
const catchphraseEl = document.getElementById('catchphrases');

headDropdown.addEventListener('change', () => {
    console.log(headDropdown.value);
    // get the value of the head dropdown
    // increment the head change count state
    changeHead++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headImgTag.src = `./assets/${headDropdown.value}-head.png`;
    
    //headImgTag.style.backgroundImage = `./assets/duck-head.png`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    console.log(middleDropdown.value);
    // increment the middle change count state
    changeMiddle++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleImgTag.src = `assets/${middleDropdown.value}-middle.png`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    console.log(bottomDropdown.value);
    // increment the bottom change count state
    changeBottom++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomImgTag.src = `assets/${bottomDropdown.value}-pants.png`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input

    const newCatch = catchphraseInput.value;
    console.log(newCatch);
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(newCatch);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    displayCatchphrases();
    console.log(catchphrases);
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});
 
function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    console.log(changeHead);
    timesChanged.textContent = `you changed the head ${changeHead} times, the middle ${changeMiddle} times, the bottom ${changeBottom} times.`;
}


function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases    
    catchphraseEl.textContent = '';

    // loop through each catchphrase in state
    for (let catchphrase of catchphrases) {

    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
        const catchphrasesEl = document.createElement('p');    
        catchphrasesEl.textContent = catchphrase;
        catchphrasesEl.classList.add('catchphrase');
        // and append that HTML element to the cleared-out DOM
        catchphraseEl.append(catchphrase);

    }
}

displayCatchphrases();
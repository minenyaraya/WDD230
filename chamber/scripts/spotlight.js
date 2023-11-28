
const dataURL = 'https://minenyaraya.github.io/wdd230/chamber/data/members.json';

const cardDiv = document.querySelector('.grid-view');

fetch(dataURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonObject) => {
        console.table(jsonObject);

        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusinessesInGrid);
       
    });

    function displayBusinessesInGrid(business) {

        let media_card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let hr = document.createElement('hr');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p')

        h2.textContent = `${business.name}`
        phone.textContent = `${business.phone}`
        address.textContent = `${business.address}`
        website.textContent = `${business.website}`
        membership.textContent = `${business.membership}`
        
        website.setAttribute("href", business.website);
        image.setAttribute("src", business.images);
        image.setAttribute("alt", `Image of ${business.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width","200");
        image.setAttribute("height","140");
       
        media_card.appendChild(h2);
        media_card.appendChild(image);
        media_card.appendChild(hr);
        media_card.appendChild(phone);
        media_card.appendChild(address);
        media_card.appendChild(website);
        media_card.appendChild(membership)
            
        cardDiv.appendChild(media_card);
    }
    function chooseHighlights(businesses) {

        const filteredMembership = businesses.filter(function(business) {
            return business.membership == "gold" ||
                business.membership == "silver";
        });
    
        const shuffledMembership = filteredMembership.sort(() => 0.5 - Math.random());
    
        displayHighlight(shuffledMembership[0], "#spotlight1");
        displayHighlight(shuffledMembership[1], "#spotlight2");
        displayHighlight(shuffledMembership[2], "#spotlight3");
    
    }
    function displayHighlight(business, elementID) {

    let pName = document.createElement('p');
    let logoImg = document.createElement('img');
    let pSlogan = document.createElement('p');
    let hr = document.createElement('hr');
    let pSpotinfo = document.createElement('p');
    let a = document.createElement('a');

    pName.innerHTML = `${business.name}`;
    pName.setAttribute('class', 'large');

    logoImg.setAttribute('src', business.imageurl);
    logoImg.setAttribute('class', 'spotlightImg');
    logoImg.setAttribute('alt', `Logo image for ${business.name}`);
    logoImg.setAttribute('loading', 'lazy');



    pSlogan.textContent = `"${business.slogan}"`;
    pSlogan.setAttribute('class', 'small bold italic');


    hr.style.margin = "2px";

    pSpotinfo.innerHTML += business.phone + " | " + business.membership + " | ";
    pSpotinfo.classList.add('spotinfo');

    a.textContent = "website";
    a.setAttribute('href', "#");

    pSpotinfo.appendChild(a);

    const spotlightContainer = document.querySelector(elementID)

    spotlightContainer.removeChild(spotlightContainer.firstElementChild);

    spotlightContainer.appendChild(logoImg);
    spotlightContainer.appendChild(pName);
    spotlightContainer.appendChild(pSlogan);
    spotlightContainer.appendChild(hr);
    spotlightContainer.appendChild(pSpotinfo);



}
    





    
 


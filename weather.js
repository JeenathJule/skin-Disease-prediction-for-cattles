document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value.trim();
    const apiKey = '3d1ac1260f139c8e397d970620623aee'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    
    document.getElementById('temperature').innerHTML = ''; 
    document.getElementById('diseaseInfo').innerHTML = ''; 

    
    document.querySelector('.temperature-box').style.display = 'none';
    document.getElementById('diseaseInfo').style.display = 'none';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found. Please try again.');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            displayWeather(temperature);
        })
        .catch(error => {
            alert(error.message);
        });
});

function displayWeather(temp) {
    const temperatureElement = document.getElementById('temperature');
    temperatureElement.innerHTML = `Temperature: ${temp}°C`;
    
    
    document.querySelector('.temperature-box').style.display = 'block'; 

    const diseases = getDiseasesForTemperature(temp);
    const diseaseInfo = document.getElementById('diseaseInfo');
    
    if (diseases.length > 0) {
        const diseaseNames = diseases.map(disease => disease.name).join(', ');
        const cures = diseases.map(disease => disease.cure).join(', ');
        const commonality = diseases.map(disease => disease.commonality).join(', ');

        diseaseInfo.innerHTML = `
            <h4>Potential Diseases:</h4>
            <p><strong>Diseases:</strong> ${diseaseNames}</p>
            <p><strong>Cures:</strong> ${cures}</p>
            <p><strong>Commonality:</strong> ${commonality}</p>
        `;
    } else {
        diseaseInfo.innerHTML = `<h4>No common diseases for this temperature.</h4>`;
    }
    
    
    diseaseInfo.style.display = 'block'; 
}

function getDiseasesForTemperature(temp) {
    
    const diseaseMap = {
        '0-10': [
            { name: 'Hypothermia', cure: 'Warmth and medical attention', commonality: 'Common in extreme cold' },
            { name: 'Frostbite', cure: 'Rewarming and medical treatment', commonality: 'Common in freezing temperatures' }
        ],
        '11-20': [
            { name: 'Cold Stress', cure: 'Warm clothing and shelter', commonality: 'Common in cold weather' },
            { name: 'Pneumonia', cure: 'Antibiotics and medical treatment', commonality: 'Common in damp and cold conditions' }
        ],
        '21-30': [
            { name: 'Heat Stress', cure: 'Hydration and cooling', commonality: 'Common in hot weather' },
            { name: 'Dehydration', cure: 'Rehydration with fluids', commonality: 'Common in extreme heat' }
        ],
        '31-40': [
            { name: 'Heatstroke', cure: 'Immediate cooling and medical attention', commonality: 'Less common, severe heat' },
            { name: 'Respiratory Issues', cure: 'Medical treatment', commonality: 'Can occur in high temperatures' }
        ],
    };

    for (const range in diseaseMap) {
        const [min, max] = range.split('-').map(Number);
        if (temp >= min && temp <= max) {
            return diseaseMap[range];
        }
    }

    return [];
}

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const imagePreview = document.getElementById('imagePreview');
    const diseaseInfo = document.getElementById('diseaseInfo');
    const progressBar = document.getElementById('progressBar');
    const progressContainer = document.getElementById('progressContainer');
    const uploadButton = document.querySelector('.upload-button');

    
    imagePreview.innerHTML = '';
    diseaseInfo.innerHTML = '';

    
    if (!file || !file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        event.target.value = ''; 
        return; 
    }

    progressContainer.style.display = 'block'; 

    const reader = new FileReader();
    reader.onload = function(e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.alt = "Uploaded Image";
        imgElement.style.maxWidth = '100%';
        imgElement.style.height = '100%';
        imgElement.style.borderRadius = '10px';

        uploadButton.innerHTML = ''; 
        uploadButton.appendChild(imgElement);
        
        
        imagePreview.style.display = 'block'; 
        
        
        imgElement.addEventListener('click', function() {
            document.getElementById('imageUpload').click();
        });

        
        let progress = 0;
        const progressInterval = setInterval(function() {
            progress += 10;
            progressBar.style.width = progress + '%';
            progressBar.innerText = progress + '%';

            if (progress >= 100) {
                clearInterval(progressInterval);
                progressBar.innerText = 'Complete';

                setTimeout(function() {
                    const imageName = file.name.toLowerCase();
                    let diseaseName = '';
                    let diseaseInfoText = '';
                    let diseaseSeverity = '';
                    let diseaseCure = '';
                    let diseasePrevention = '';
                    let suggestedMedicines = '';

                    if (imageName.includes('cow(1).jpg')) {
                        diseaseName = 'Lumpy Skin Disease';
                        diseaseInfoText = 'Lumpy skin disease (LSD) is a viral infection that affects cattle, caused by the Capripoxvirus and primarily transmitted through biting insects, such as flies, mosquitoes, and ticks. It is a significant animal health concern, particularly in regions where cattle farming is widespread. The disease does not affect humans.';
                        diseaseSeverity = 'Serious';
                        diseaseCure = 'Vaccination, insect control,symptomatic treatment.';
                        diseasePrevention = 'Vaccination and regular health checks.';
                        suggestedMedicines = 'Anti-inflammatory drugs (NSAIDs) like flunixin or meloxicam to reduce inflammation and pain';
                        
                    } else if (imageName.includes('cow(2).jpg')) {
                        diseaseName = 'Mange';
                        diseaseInfoText = 'Mange is a skin disease caused by parasitic mites, affecting both animals and humans, though it is more commonly seen in animals like dogs, cats, livestock, and wild animals. The mites burrow into the skin, causing irritation, hair loss, inflammation, and severe itching. Mange can be classified into different types based on the type of mite involved, such as sarcoptic mange and demodectic mange.';
                        diseaseSeverity = 'Moderate';
                        diseaseCure = 'Topical or injectable treatments to kill the mites.';
                        diseasePrevention = 'Maintain good hygiene and regular veterinary checks.';
                        suggestedMedicines = 'Permethrin or Amitraz are commonly used insecticides to kill mites.';
                    } else if (imageName.includes('cow(3).jpg')) {
                        diseaseName = 'Ringworm';
                        diseaseInfoText = 'Ringworm in cows is a fungal skin infection caused by Trichophyton verrucosum, leading to circular, crusty lesions, primarily on the head, neck, and shoulders. It spreads through direct contact with infected animals or contaminated surfaces and can also infect humans. Symptoms include hair loss and rough, scaly patches.';
                        diseaseSeverity = 'Mild';
                        diseaseCure = 'Antifungal treatments and improving hygiene practices.';
                        diseasePrevention = 'Keep bedding dry and clean.';
                        suggestedMedicines ='Iodine-based solutions: Effective for killing fungal spores; apply directly to lesions';
                    } else if (imageName.includes('cow(4).jpg')) {
                        diseaseName = 'Foot and Mouth Disease';
                        diseaseInfoText = 'Foot-and-Mouth Disease (FMD) is a highly contagious viral infection caused by the Foot-and-Mouth Disease Virus (FMDV), affecting cloven-hoofed animals such as cows, sheep, goats, and pigs. Characterized by sudden fever and painful vesicles in the mouth and on the feet, FMD can significantly impact animal health and productivity.';
                        diseaseSeverity = 'Serious';
                        diseaseCure = 'Vaccination and strict quarantine measures.';
                        diseasePrevention = 'Avoid contact with infected animals.';
                        suggestedMedicines = 'Non-steroidal anti-inflammatory drugs (NSAIDs) such as flunixin meglumine or aspirin can help alleviate pain and reduce fever.';
                    } else if (imageName.includes('cow(5).jpg')) {
                        diseaseName = 'Photosensitization';
                        diseaseInfoText = 'Photosensitization in cows is a condition that occurs when animals become overly sensitive to sunlight, leading to skin damage. This sensitivity is primarily due to the presence of certain compounds in the body, which can react with sunlight, causing inflammation and lesions on the skin.';
                        diseaseSeverity = 'Serious';
                        diseaseCure = 'Removing the source of toxins and providing shade for affected animals.';
                        diseasePrevention = 'Limit sun exposure and control access to toxic plants.';
                        suggestedMedicines = 'Soothing Ointments or Creams: Topical products containing antiseptics (like chlorhexidine) or emollients can help soothe inflamed skin and prevent secondary infections.';

                    
                    } else if (imageName.includes('buffalo(2).jpg')) {
                        diseaseName = 'Lumpy Skin Disease';
                        diseaseInfoText = 'Lumpy skin disease (LSD) is a viral disease primarily affecting cattle and buffalo, caused by the Lumpy skin disease virus (LSDV), a member of the Capripoxvirus genus. It is characterized by the development of nodular skin lesions and can lead to significant economic losses in the livestock industry.';
                        diseaseSeverity = 'Serious';
                        diseaseCure = 'Vaccination and control of insect vectors.';
                        diseasePrevention = 'Regular vaccinations and insect control measures.';
                        suggestedMedicines = 'Procaine Penicillin or Oxytetracycline';
                    } else if (imageName.includes('buffalo(1).jpg')) {
                        diseaseName = 'Mange';
                        diseaseInfoText = 'Mange is a skin disease caused by parasitic mites infesting the skin of buffalo, with two primary types: sarcoptic mange, caused by Sarcoptes scabiei, and demodectic mange, caused by Demodex mites. Sarcoptic mange leads to severe itching, hair loss, crusty lesions, and potential weight loss, while demodectic mange typically causes less itching but results in patchy skin lesions and inflammation. .';
                        diseaseSeverity = 'Moderate';
                        diseaseCure = 'Topical treatments or injections to eradicate the mites.';
                        diseasePrevention = 'Maintain hygiene and regular veterinary care.';
                        suggestedMedicines = 'Procaine Penicillin or Oxytetracycline,Flunixin Meglumine or Ketoprofen';
                    } else if (imageName.includes('buffalo(3).jpg')) {
                        diseaseName = 'Dermatophilosis';
                        diseaseInfoText = 'Dermatophilosis, commonly known as "rain scald" or "rain rot," is a bacterial skin disease that affects buffalo and other livestock. It is caused by the bacterium Dermatophilus congolensis and is often exacerbated by wet and humid conditions.';
                        diseaseSeverity = 'Moderate';
                        diseaseCure = 'Antibiotic treatment and improving hygiene practices.';
                        diseasePrevention = 'Keep the environment clean and dry.';
                        suggestedMedicines = 'Procaine Penicillin,Oxytetracycline,Florfenicol';
                    } else if (imageName.includes('buffalo(4).jpg')) {
                        diseaseName = 'Ringworm';
                        diseaseInfoText = 'Ringworm in buffalo is a fungal skin infection caused primarily by species such as Trichophyton and Microsporum. It is a contagious disease that can affect various livestock, including goats and sheep.';
                        diseaseSeverity = 'Mild';
                        diseaseCure = 'Antifungal treatments and maintaining hygiene.';
                        diseasePrevention = 'Regularly clean and disinfect housing.';
                        suggestedMedicines = 'Clotrimazole,Miconazole,Ketoconazole';
                    } else if (imageName.includes('buffalo(5).jpg')) {
                        diseaseName = 'Buffalo Pox';
                        diseaseInfoText = 'Buffalo pox is a viral skin disease affecting buffaloes, caused by a virus closely related to the vaccinia virus (Orthopoxvirus genus). It primarily affects buffaloes and is not common in other livestock. The disease manifests as pox-like lesions on the skin, particularly around the udder, teats, thighs, eyes, and muzzle, which progress from raised bumps to pustules and scabs..';
                        diseaseSeverity = 'Mild';
                        diseaseCure = 'Topical ointments and supportive care.';
                        diseasePrevention = 'Vaccination and biosecurity measures.';
                        suggestedMedicines = 'Neomycin or Gentamicin Ointments,Silver Sulfadiazine Cream';

                    
                    } else if (imageName.includes('goat(1).jpg')) {
                        diseaseName = 'Sarcoptic Mange';
                        diseaseInfoText = 'Sarcoptic mange in goats is a highly contagious skin disease caused by the mite Sarcoptes scabiei. This parasitic infection leads to intense itching, skin irritation, and hair loss. It is characterized by the mites burrowing into the skin, causing inflammation and lesions.';
                        diseaseSeverity = 'Serious';
                        diseaseCure = 'Topical or systemic treatment to kill mites.';
                        diseasePrevention = 'Isolate affected animals and improve hygiene.';
                        suggestedMedicines = 'Acaricidal Dips or Sprays,Injectable Medications,Sulfur-based Ointments';
                    } else if (imageName.includes('goat(2).jpg')) {
                        diseaseName = 'Ringworm';
                        diseaseInfoText = 'Ringworm in goats is a fungal infection primarily caused by Trichophyton and Microsporum species. It appears as circular, hairless patches on the skin, especially on the head, neck, and legs, often accompanied by itching and irritation.';
                        diseaseSeverity = 'Mild';
                        diseaseCure = 'Antifungal treatments and improving hygiene practices.';
                        diseasePrevention = 'Regularly clean the living area.';
                        suggestedMedicines = 'Miconazole,Griseofulvin,Antiseptic Washes';
                    } else if (imageName.includes('goat(3).jpg')) {
                        diseaseName = 'Contagious Ecthyma';
                        diseaseInfoText = 'Contagious ecthyma, also known as orf or sore mouth, is a viral skin disease affecting goats and sheep, caused by the Orf virus from the Parapoxvirus family. It typically presents as painful, scabby lesions around the mouth, lips, and muzzle, with possible lesions on the feet, udder, and teats, often leading to swelling, redness, and difficulty in eating or drinking. The virus is highly contagious, spreading through direct contact with infected animals or contaminated surfaces, and can survive in the environment for extended periods. .';
                        diseaseSeverity = 'Moderate';
                        diseaseCure = 'Supportive care and vaccination in severe cases.';
                        diseasePrevention = 'Avoid contact with infected animals.';
                        suggestedMedicines = 'Antiseptic Ointments,Emollient Creams,';
                    } else if (imageName.includes('goat(4).jpg')) {
                        diseaseName = 'Lice Infestation';
                        diseaseInfoText = 'Lice infestation in goats is a common ectoparasitic condition caused by small, wingless insects that live on the skin and feed on the host’s blood or skin debris. The most common types of lice that affect goats include Bovicola species (chewing lice) and Linognathus species (sucking lice).';
                        diseaseSeverity = 'Mild';
                        diseaseCure = 'Insecticide treatments and improving hygiene.';
                        diseasePrevention = 'Regularly inspect and treat animals for lice.';
                        suggestedMedicines = 'Cypermethrin,Doramectin,Insecticide Sprays';
                    } else if (imageName.includes('goat(5).jpg')) {
                        diseaseName = 'Dermatophilosis';
                        diseaseInfoText = 'Dermatophilosis, or "rain scald," is a bacterial skin disease in goats caused by Dermatophilus congolensis. It leads to crusty, scab-like lesions on the back, legs, and areas with limited hair, such as the face and ears. Affected goats may experience hair loss, inflammation, and oozing lesions, along with itching and restlessness; severe cases can result in fever and lethargy.';
                        diseaseSeverity = 'Moderate';
                        diseaseCure = 'Antibiotics and proper hygiene management.';
                        diseasePrevention = 'Maintain cleanliness and avoid wet conditions.';
                        suggestedMedicines = 'Procaine Penicillin,Oxytetracycline,Tylosine,Antibiotic Ointments';

                    } else {
                        diseaseName = 'Unknown Disease';
                        diseaseInfoText = 'The disease could not be identified. Please consult a veterinarian for a proper diagnosis.';
                        diseaseSeverity = 'Unknown';
                        diseaseCure = 'Consult a veterinarian for diagnosis and treatment.';
                        diseasePrevention = 'Consult a veterinarian for advice.';
                        suggestedMedicines = '-';
                    }

                    diseaseInfo.innerHTML = `
                        <h2>Disease Name: ${diseaseName}</h2>
                        <p><strong>Description</strong>: ${diseaseInfoText}</p>
                        <p><strong>Severity:</strong> ${diseaseSeverity}</p>
                        <p><strong>Cure:</strong> ${diseaseCure}</p>
                        <p><strong>Prevention:</strong> ${diseasePrevention}</p>
                        <p><strong>Medicines:</strong> ${suggestedMedicines}</p>
                    `;

                    
                    diseaseInfo.style.display = 'block';

                    
                    progressContainer.style.display = 'none';

                    
                    document.getElementById('detailedInfoBtn').addEventListener('click', function() {
                        alert(`More information about ${diseaseName}:\n\nCure: ${diseaseCure}\nPrevention: ${diseasePrevention}\nMedicines:${sugggestedMedicines}`);
                    });
                }, 1000); 
            }
        }, 100); 
    };

    
    reader.readAsDataURL(file);
});

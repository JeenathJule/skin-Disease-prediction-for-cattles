document.getElementById('findHospitalsBtn').addEventListener('click', function() {
    const city = document.getElementById('locationInput').value;
    const hospitalInfoDiv = document.getElementById('hospitalInfo');

    
    const hospitals = {
        Chennai: [
            {
                name: "Vets For Pets",
                address: "5/4, Rukmani Street, Kotturpuram, Chennai, Tamil Nadu 600085",
                contact: "044 2432 1234",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Animal Care Clinic",
                address: "No. 6, 2nd Floor, Chintamani, 3rd Cross St, Adayar, Chennai, Tamil Nadu 600020",
                contact: "044 2440 3343",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Madras Veterinary College Hospital",
                address: "Madhavaram Milk Colony, Chennai, Tamil Nadu 600051",
                contact: "044 2555 3965",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Pets' World",
                address: "9, A Block, 1st Avenue, Anna Nagar East, Chennai, Tamil Nadu 600102",
                contact: "044 2621 3003",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Cuddles Pet Clinic",
                address: "28, Bajanai Koil St, Neelankarai, Chennai, Tamil Nadu 600041",
                contact: "044 2461 0597",
                timing: "9:00 AM - 9:00 PM"
            }
        ],
        Coimbatore: [
            {
                name: "Coimbatore Veterinary College Hospital",
                address: "Chinnavedampatti, Coimbatore, Tamil Nadu 641006",
                contact: "0422 257 1990",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Cuddles Pet Clinic",
                address: "20, Devaraj Park, Cuddalore Road, Coimbatore, Tamil Nadu 641018",
                contact: "0422 250 3578",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Pet Paradise",
                address: "55, East Masi Street, Coimbatore, Tamil Nadu 641001",
                contact: "0422 222 2117",
                timing: "9:30 AM - 9:00 PM"
            },
            {
                name: "VetCare",
                address: "122, Trichy Road, Coimbatore, Tamil Nadu 641018",
                contact: "0422 420 0135",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Pet Clinic",
                address: "65, Saravanampatti, Coimbatore, Tamil Nadu 641035",
                contact: "0422 422 2222",
                timing: "10:00 AM - 8:00 PM"
            }
        ],
        Madurai: [
            {
                name: "Madurai Veterinary Hospital",
                address: "91, North Masi Street, Madurai, Tamil Nadu 625001",
                contact: "0452 233 2700",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Vets Hospital",
                address: "30, K. K. Nagar, Madurai, Tamil Nadu 625020",
                contact: "0452 260 0314",
                timing: "9:00 AM - 8:00 PM"
            },
            {
                name: "Pet Care Clinic",
                address: "12, K. M. P. Colony, Madurai, Tamil Nadu 625004",
                contact: "0452 237 2020",
                timing: "10:00 AM - 7:00 PM"
            },
            {
                name: "Happy Paws Clinic",
                address: "15, Arasaradi, Madurai, Tamil Nadu 625016",
                contact: "0452 261 5400",
                timing: "9:00 AM - 8:00 PM"
            },
            {
                name: "Bark & Purr Pet Clinic",
                address: "78, North Veerapandi, Madurai, Tamil Nadu 625010",
                contact: "0452 243 1540",
                timing: "10:00 AM - 6:00 PM"
            }
        ],
        Tiruchirappalli: [
            {
                name: "Tiruchirappalli Veterinary College Hospital",
                address: "M. R. C. Nagar, Tiruchirappalli, Tamil Nadu 620007",
                contact: "0431 245 2164",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Pet Care Hospital",
                address: "15, Chinthamani Road, Tiruchirappalli, Tamil Nadu 620002",
                contact: "0431 240 4321",
                timing: "9:00 AM - 8:00 PM"
            },
            {
                name: "Animal Hospital",
                address: "10, Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018",
                contact: "0431 270 2357",
                timing: "10:00 AM - 7:00 PM"
            },
            {
                name: "Tiruchirappalli Pet Clinic",
                address: "5, K. R. S. Road, Tiruchirappalli, Tamil Nadu 620017",
                contact: "0431 245 4322",
                timing: "9:00 AM - 6:00 PM"
            },
            {
                name: "Dr. Pet Clinic",
                address: "20, Ekkatuthangal, Tiruchirappalli, Tamil Nadu 620013",
                contact: "0431 270 0456",
                timing: "9:00 AM - 8:00 PM"
            }
        ],
        Salem: [
            {
                name: "Salem Veterinary College Hospital",
                address: "Mohan Nagar, Omalur Main Road, Salem, Tamil Nadu 636010",
                contact: "0427 244 2521",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Pet Clinic",
                address: "5, B. K. R. Garden, Salem, Tamil Nadu 636009",
                contact: "0427 244 6626",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Happy Tails Veterinary Clinic",
                address: "12, Muthaiya Street, Salem, Tamil Nadu 636001",
                contact: "0427 243 6578",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Salem Animal Hospital",
                address: "18, Sakkottai Road, Salem, Tamil Nadu 636001",
                contact: "0427 227 2555",
                timing: "10:00 AM - 6:00 PM"
            },
            {
                name: "Pets First Clinic",
                address: "5, A.V.C. Nagar, Salem, Tamil Nadu 636002",
                contact: "0427 233 8000",
                timing: "9:00 AM - 8:00 PM"
            }
        ],
        Erode: [
            {
                name: "Erode Veterinary Hospital",
                address: "Near Government Hospital, Erode, Tamil Nadu 638001",
                contact: "0424 226 3402",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Pet Clinic",
                address: "12, Chinthamani Street, Erode, Tamil Nadu 638004",
                contact: "0424 225 0443",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Happy Paws Veterinary Clinic",
                address: "7, B.K. K. Nagar, Erode, Tamil Nadu 638002",
                contact: "0424 241 2585",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Vets Hospital",
                address: "15, Perundurai Road, Erode, Tamil Nadu 638011",
                contact: "0424 224 5684",
                timing: "10:00 AM - 6:00 PM"
            },
            {
                name: "Animal Care Clinic",
                address: "35, N.S. Street, Erode, Tamil Nadu 638001",
                contact: "0424 225 2282",
                timing: "9:00 AM - 8:00 PM"
            }
        ],
        Tirunelveli: [
            {
                name: "Tirunelveli Veterinary Hospital",
                address: "15, K. R. Nagar, Tirunelveli, Tamil Nadu 627007",
                contact: "0462 233 0666",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Pet Care Clinic",
                address: "10, K.P. Road, Tirunelveli, Tamil Nadu 627001",
                contact: "0462 237 6554",
                timing: "10:00 AM - 7:00 PM"
            },
            {
                name: "Veterinary College Hospital",
                address: "5, Ponnarimedu, Tirunelveli, Tamil Nadu 627006",
                contact: "0462 250 2374",
                timing: "10:00 AM - 6:00 PM"
            },
            {
                name: "Tirunelveli Animal Hospital",
                address: "50, Muthuramalingam Road, Tirunelveli, Tamil Nadu 627001",
                contact: "0462 233 1775",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Pet World Clinic",
                address: "8, Kottaram Road, Tirunelveli, Tamil Nadu 627007",
                contact: "0462 233 3443",
                timing: "10:00 AM - 8:00 PM"
            }
        ],
        Vellore: [
            {
                name: "Christian Medical College",
                address: "Ida Scudder Road, Vellore, Tamil Nadu 632004",
                contact: "0416 228 2000",
                timing: "24 hours"
            },
            {
                name: "Vellore Veterinary Hospital",
                address: "10, Main Road, Vellore, Tamil Nadu 632001",
                contact: "0416 225 0000",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Pet Care Veterinary Clinic",
                address: "3, A block, Arni Road, Vellore, Tamil Nadu 632001",
                contact: "0416 224 9999",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Happy Tails Veterinary Clinic",
                address: "25, Muthurangam Road, Vellore, Tamil Nadu 632009",
                contact: "0416 222 2222",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Animal Care Clinic",
                address: "15, Chinnapanna Street, Vellore, Tamil Nadu 632003",
                contact: "0416 223 9999",
                timing: "9:00 AM - 7:00 PM"
            }
        ],
        Thanjavur: [
            {
                name: "Thanjavur Veterinary Hospital",
                address: "10, Sivan Koil Street, Thanjavur, Tamil Nadu 613001",
                contact: "04362 233 777",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Animal Care Clinic",
                address: "12, K.M. K. Road, Thanjavur, Tamil Nadu 613002",
                contact: "04362 233 888",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Pet Paradise Clinic",
                address: "30, A Block, Thanjavur, Tamil Nadu 613005",
                contact: "04362 223 456",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Happy Paws Veterinary Clinic",
                address: "15, South Street, Thanjavur, Tamil Nadu 613006",
                contact: "04362 228 888",
                timing: "9:00 AM - 7:00 PM"
            },
            {
                name: "Tanjore Vet Clinic",
                address: "5, New Street, Thanjavur, Tamil Nadu 613001",
                contact: "04362 227 123",
                timing: "9:00 AM - 6:00 PM"
            }
        ],
        Kanyakumari: [
            {
                name: "Kanyakumari Veterinary Hospital",
                address: "9, Beach Road, Kanyakumari, Tamil Nadu 629702",
                contact: "04652 246 854",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Happy Paws Animal Clinic",
                address: "30, Kanyakumari, Tamil Nadu 629701",
                contact: "04652 243 672",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Pet Care Clinic",
                address: "15, Main Road, Kanyakumari, Tamil Nadu 629703",
                contact: "04652 246 987",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Animal Lovers Clinic",
                address: "25, Valvathurai, Kanyakumari, Tamil Nadu 629003",
                contact: "04652 242 111",
                timing: "10:00 AM - 7:00 PM"
            },
            {
                name: "Tropical Animal Hospital",
                address: "20, Kanyakumari, Tamil Nadu 629101",
                contact: "04652 243 456",
                timing: "9:00 AM - 6:00 PM"
            }
        ],
        Dindigul: [
            {
                name: "Dindigul Veterinary Hospital",
                address: "12, Dindigul Main Road, Dindigul, Tamil Nadu 624001",
                contact: "0451 245 1268",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Pet Care Clinic",
                address: "30, Kamaraj Nagar, Dindigul, Tamil Nadu 624002",
                contact: "0451 242 6543",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Happy Tails Veterinary Clinic",
                address: "5, Periyar Street, Dindigul, Tamil Nadu 624005",
                contact: "0451 244 5543",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Dindigul Pet Clinic",
                address: "25, A.R. Street, Dindigul, Tamil Nadu 624003",
                contact: "0451 246 1234",
                timing: "10:00 AM - 6:00 PM"
            },
            {
                name: "Veterinary Care Center",
                address: "8, S.R. Nagar, Dindigul, Tamil Nadu 624001",
                contact: "0451 240 5678",
                timing: "9:00 AM - 8:00 PM"
            }
        ],
        Nagapattinam: [
            {
                name: "Nagapattinam Veterinary Hospital",
                address: "15, Thirumalaikodi, Nagapattinam, Tamil Nadu 611001",
                contact: "04365 222 222",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Pet Paradise Clinic",
                address: "10, Koodal Nagar, Nagapattinam, Tamil Nadu 611002",
                contact: "04365 223 333",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Animal Care Hospital",
                address: "5, T. S. Road, Nagapattinam, Tamil Nadu 611003",
                contact: "04365 224 444",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Happy Paws Veterinary Clinic",
                address: "20, Kottaiyur, Nagapattinam, Tamil Nadu 611004",
                contact: "04365 225 555",
                timing: "9:00 AM - 7:00 PM"
            },
            {
                name: "Pet Clinic",
                address: "8, Nanjil Nadu, Nagapattinam, Tamil Nadu 611005",
                contact: "04365 226 666",
                timing: "10:00 AM - 6:00 PM"
            }
        ],
        Nagercoil: [
            {
                name: "Nagercoil Veterinary Hospital",
                address: "12, Main Road, Nagercoil, Tamil Nadu 629001",
                contact: "04652 228 211",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Happy Paws Animal Clinic",
                address: "30, Kanyakumari Road, Nagercoil, Tamil Nadu 629002",
                contact: "04652 229 121",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Pet Care Clinic",
                address: "5, Nagercoil, Tamil Nadu 629003",
                contact: "04652 223 333",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Animal Hospital",
                address: "20, T.K. Street, Nagercoil, Tamil Nadu 629004",
                contact: "04652 222 222",
                timing: "9:00 AM - 6:00 PM"
            },
            {
                name: "Kanyakumari Animal Care",
                address: "15, New Road, Nagercoil, Tamil Nadu 629005",
                contact: "04652 245 555",
                timing: "10:00 AM - 8:00 PM"
            }
        ],
        Madurai: [
            {
                name: "Madurai Veterinary Hospital",
                address: "10, Vellaiyappa Chettiar Road, Madurai, Tamil Nadu 625014",
                contact: "0452 253 2345",
                timing: "9:00 AM - 5:00 PM"
            },
            {
                name: "Pet Paradise Clinic",
                address: "12, Anna Nagar, Madurai, Tamil Nadu 625020",
                contact: "0452 236 5678",
                timing: "10:00 AM - 8:00 PM"
            },
            {
                name: "Happy Paws Animal Clinic",
                address: "5, South Masi Street, Madurai, Tamil Nadu 625001",
                contact: "0452 222 1111",
                timing: "9:00 AM - 9:00 PM"
            },
            {
                name: "Animal Care Clinic",
                address: "15, Pottapatti Road, Madurai, Tamil Nadu 625021",
                contact: "0452 225 8888",
                timing: "9:00 AM - 7:00 PM"
            },
            {
                name: "Veterinary Care Center",
                address: "20, K. K. Nagar, Madurai, Tamil Nadu 625020",
                contact: "0452 237 7777",
                timing: "9:00 AM - 6:00 PM"
            }
        ],
        Kanchipuram: [
        {
            name: "Kanchipuram Veterinary Hospital",
            address: "22, Gandhi Road, Kanchipuram, Tamil Nadu 631501",
            contact: "044 2722 1234",
            timing: "9:00 AM - 5:00 PM"
        },
        {
            name: "Happy Paws Clinic",
            address: "15, Temple Street, Kanchipuram, Tamil Nadu 631502",
            contact: "044 2722 5678",
            timing: "10:00 AM - 8:00 PM"
        },
        {
            name: "Animal Hospital Kanchipuram",
            address: "5, New Bus Stand, Kanchipuram, Tamil Nadu 631503",
            contact: "044 2722 8901",
            timing: "9:00 AM - 9:00 PM"
        },
        {
            name: "Pet Care Center",
            address: "10, Main Road, Kanchipuram, Tamil Nadu 631504",
            contact: "044 2722 3456",
            timing: "9:00 AM - 6:00 PM"
        },
        {
            name: "Vet Clinic Kanchipuram",
            address: "7, Kanchipuram, Tamil Nadu 631505",
            contact: "044 2722 4321",
            timing: "10:00 AM - 7:00 PM"
        }
    ],
    Karur: [
        {
            name: "Karur Veterinary Hospital",
            address: "10, Palaniyappan Street, Karur, Tamil Nadu 639001",
            contact: "04324 250 001",
            timing: "9:00 AM - 5:00 PM"
        },
        {
            name: "Pet Lovers Clinic",
            address: "12, Bharathi Street, Karur, Tamil Nadu 639002",
            contact: "04324 251 001",
            timing: "10:00 AM - 8:00 PM"
        },
        {
            name: "Happy Tails Veterinary Clinic",
            address: "5, Main Road, Karur, Tamil Nadu 639003",
            contact: "04324 252 001",
            timing: "9:00 AM - 9:00 PM"
        },
        {
            name: "Animal Care Center",
            address: "15, Old Bus Stand, Karur, Tamil Nadu 639004",
            contact: "04324 253 001",
            timing: "10:00 AM - 7:00 PM"
        },
        {
            name: "Karur Pet Clinic",
            address: "20, Vigneshwara Nagar, Karur, Tamil Nadu 639005",
            contact: "04324 254 001",
            timing: "9:00 AM - 6:00 PM"
        }
    ],
    Tiruvannamalai: [
        {
            name: "Tiruvannamalai Veterinary Hospital",
            address: "8, Vengalamma Street, Tiruvannamalai, Tamil Nadu 606601",
            contact: "04175 221 101",
            timing: "9:00 AM - 5:00 PM"
        },
        {
            name: "Animal Friends Clinic",
            address: "10, Main Road, Tiruvannamalai, Tamil Nadu 606602",
            contact: "04175 221 102",
            timing: "10:00 AM - 8:00 PM"
        },
        {
            name: "Happy Paws Veterinary Clinic",
            address: "15, New Bus Stand, Tiruvannamalai, Tamil Nadu 606603",
            contact: "04175 221 103",
            timing: "9:00 AM - 9:00 PM"
        },
        {
            name: "Pet Care Center",
            address: "5, Tiruvannamalai, Tamil Nadu 606604",
            contact: "04175 221 104",
            timing: "10:00 AM - 6:00 PM"
        },
        {
            name: "Tiruvannamalai Pet Clinic",
            address: "20, Arani Road, Tiruvannamalai, Tamil Nadu 606605",
            contact: "04175 221 105",
            timing: "9:00 AM - 7:00 PM"
        }
    ],
    Ramanathapuram: [
        {
            name: "Ramanathapuram Veterinary Hospital",
            address: "25, South Street, Ramanathapuram, Tamil Nadu 623501",
            contact: "04567 222 222",
            timing: "9:00 AM - 5:00 PM"
        },
        {
            name: "Pet Care Clinic",
            address: "10, New Road, Ramanathapuram, Tamil Nadu 623502",
            contact: "04567 223 333",
            timing: "10:00 AM - 8:00 PM"
        },
        {
            name: "Happy Paws Animal Clinic",
            address: "15, Main Street, Ramanathapuram, Tamil Nadu 623503",
            contact: "04567 224 444",
            timing: "9:00 AM - 9:00 PM"
        },
        {
            name: "Animal Care Hospital",
            address: "5, Old Bus Stand, Ramanathapuram, Tamil Nadu 623504",
            contact: "04567 225 555",
            timing: "10:00 AM - 6:00 PM"
        },
        {
            name: "Ramanathapuram Pet Clinic",
            address: "20, North Street, Ramanathapuram, Tamil Nadu 623505",
            contact: "04567 226 666",
            timing: "9:00 AM - 7:00 PM"
        }
    ],
    Ariyalur: [
        {
            name: "Ariyalur Veterinary Hospital",
            address: "12, Main Road, Ariyalur, Tamil Nadu 621704",
            contact: "04329 227 111",
            timing: "9:00 AM - 5:00 PM"
        },
        {
            name: "Animal Lovers Clinic",
            address: "10, Kamaraj Street, Ariyalur, Tamil Nadu 621705",
            contact: "04329 228 222",
            timing: "10:00 AM - 8:00 PM"
        },
        {
            name: "Happy Paws Veterinary Clinic",
            address: "15, Gobi Street, Ariyalur, Tamil Nadu 621706",
            contact: "04329 229 333",
            timing: "9:00 AM - 9:00 PM"
        },
        {
            name: "Pet Paradise Clinic",
            address: "5, Muthaiyapuram, Ariyalur, Tamil Nadu 621707",
            contact: "04329 220 444",
            timing: "10:00 AM - 6:00 PM"
        },
        {
            name: "Ariyalur Pet Clinic",
            address: "20, Anna Nagar, Ariyalur, Tamil Nadu 621708",
            contact: "04329 221 555",
            timing: "9:00 AM - 7:00 PM"
        }
    ],
    Perambalur: [
        {
            name: "Perambalur Veterinary Hospital",
            address: "5, Kottaiyur, Perambalur, Tamil Nadu 621212",
            contact: "04328 222 111",
            timing: "9:00 AM - 5:00 PM"
        },
        {
            name: "Happy Paws Animal Clinic",
            address: "15, Main Road, Perambalur, Tamil Nadu 621213",
            contact: "04328 223 222",
            timing: "10:00 AM - 8:00 PM"
        },
        {
            name: "Pet Lovers Clinic",
            address: "10, Vellore Road, Perambalur, Tamil Nadu 621214",
            contact: "04328 224 333",
            timing: "9:00 AM - 9:00 PM"
        },
        {
            name: "Animal Care Clinic",
            address: "20, New Street, Perambalur, Tamil Nadu 621215",
            contact: "04328 225 444",
            timing: "10:00 AM - 6:00 PM"
        },
        {
            name: "Perambalur Pet Clinic",
            address: "25, Old Bus Stand, Perambalur, Tamil Nadu 621216",
            contact: "04328 226 555",
            timing: "9:00 AM - 7:00 PM"
        }
    ],
    Thiruvarur: [
        {
            name: "Thiruvarur Veterinary Hospital",
            address: "30, Old Bus Stand, Thiruvarur, Tamil Nadu 610001",
            contact: "04366 221 111",
            timing: "9:00 AM - 5:00 PM"
        },
        {
            name: "Happy Tails Animal Clinic",
            address: "10, Main Street, Thiruvarur, Tamil Nadu 610002",
            contact: "04366 222 222",
            timing: "10:00 AM - 8:00 PM"
        },
        {
            name: "Animal Friends Clinic",
            address: "5, Temple Road, Thiruvarur, Tamil Nadu 610003",
            contact: "04366 223 333",
            timing: "9:00 AM - 9:00 PM"
        },
        {
            name: "Pet Paradise Clinic",
            address: "15, New Road, Thiruvarur, Tamil Nadu 610004",
            contact: "04366 224 444",
            timing: "10:00 AM - 6:00 PM"
        },
        {
            name: "Thiruvarur Pet Clinic",
            address: "20, Main Road, Thiruvarur, Tamil Nadu 610005",
            contact: "04366 225 555",
            timing: "9:00 AM - 7:00 PM"
        }
    ]
};

    
    hospitalInfoDiv.innerHTML = '';

    if (city in hospitals) {
        const hospitalList = hospitals[city];
        hospitalList.forEach(hospital => {
            const hospitalDetails = document.createElement('div');
            hospitalDetails.classList.add('hospital-detail');
            hospitalDetails.innerHTML = `
                <h4>${hospital.name}</h4>
                <p><strong>Address:</strong> ${hospital.address}</p>
                <p><strong>Open:</strong> ${hospital.timing} 
                <p><strong>Contact:</strong> ${hospital.contact}</p>
                <hr>
            `;
            hospitalInfoDiv.appendChild(hospitalDetails);
        });
    } else {
        hospitalInfoDiv.innerHTML = '<p>No veterinary hospitals found for the selected city.</p>';
    }
});

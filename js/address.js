// declare variables
const firstAddress = document.getElementById("first-address");
const city = document.getElementById("city");
const district = document.getElementById("district");
const btnRegister = document.getElementById("btn-register");

// error messages
const errorFirstAddress = document.getElementById("error-first-address");
const errorCity = document.getElementById("error-city");
const errorDistrict = document.getElementById("error-district");

btnRegister.addEventListener('click', _ => {
    // check first address
    if (firstAddress.value === "") {
        errorFirstAddress.style.display = "block";
        firstAddress.style.borderColor = "#D80027";
    } else {
        errorFirstAddress.style.display = "none";
        firstAddress.style.borderColor = "#D6D6D6";
    }

    // check city
    if (city.value === "") {
        errorCity.style.display = "block";
        city.style.borderColor = "#D80027";
    } else {
        errorCity.style.display = "none";
        city.style.borderColor = "#D6D6D6";
    }

    // check district
    if (district.value === "") {
        errorDistrict.style.display = "block";
        district.style.borderColor = "#D80027";
    } else {
        errorDistrict.style.display = "none";
        district.style.borderColor = "#D6D6D6";
    }

    if (firstAddress.value !== "" && city.value !== "" && district.value !== "") {
        alert("Welcome, i hope that you are going well");
    }
});

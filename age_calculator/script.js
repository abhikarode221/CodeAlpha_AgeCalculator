function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (!dob) {
        document.getElementById("result").innerHTML = 
            "⚠ Please select your date of birth!";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    if (birthDate > today) {
        document.getElementById("result").innerHTML =
            "⚠ Date of birth cannot be in the future!";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML =
        `🎉 You are <strong>${years}</strong> years, 
        <strong>${months}</strong> months and 
        <strong>${days}</strong> days old.`;
}

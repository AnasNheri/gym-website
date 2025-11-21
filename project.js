function calculateCalories() {
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activityMultiplier = parseFloat(document.getElementById("activity").value);

    // check lel gendre ( lezmou ykoun selecté)
    const genderInput = document.querySelector('input[name="gender"]:checked');
    if (!genderInput) {
        document.getElementById("result").innerText = "Please select your gender.";
        return false;
    }
    const gender = genderInput.value;

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return false;
    }

    if (isNaN(activityMultiplier)) {
        document.getElementById("result").innerText = "Please select an activity level.";
        return false;
    }

    let bmr;
    if (gender === "m") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * activityMultiplier;
    const formattedTDEE = new Intl.NumberFormat().format(tdee.toFixed(2));
    document.getElementById("result").innerText = `Your estimated calorie needs are: ${formattedTDEE} calories/day.`;
    return false;
}

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("result").innerText = "";
});


document.querySelectorAll('.hover-area').forEach((area) => {
    area.addEventListener('mouseover', function () {
        this.classList.add('hovered');

        const exercises = this.getAttribute('data-exercises');
        document.getElementById('exercise-list').innerText = exercises;
    });

    area.addEventListener('mouseout', function () {
        this.classList.remove('hovered');

        //ki yeb3ed el curseur 3al partie hover
        document.getElementById('exercise-list').innerText = "Put your cursor over a body part to see exercises";
    });
});




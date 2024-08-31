//E/18/118
//script.js
document.addEventListener("DOMContentLoaded", function () {
    const angleInput = document.getElementById("angleInput");
    const angleSlider = document.getElementById("angleSlider");
    const radioButtons = document.querySelectorAll('input[name="angle"]');

    function angleSliderAndTextBox(value) {
        value = Math.min(Math.max(value, 0), 360); // Ensure value stays between 0 and 360
        angleInput.value = value;
        if(value == 0){
            angleSlider.value = 180;
        }
        else{
            angleSlider.value = value;
        }

        radioButtons.forEach(rb => {
            rb.checked = parseInt(rb.value) === value;
        });
    }

    angleInput.addEventListener("input", function () {
        angleSliderAndTextBox(parseInt(this.value));
    });

    angleSlider.addEventListener("input", function () {
        angleSliderAndTextBox(parseInt(this.value));
    });

    radioButtons.forEach(rb => {
        rb.addEventListener("change", function () {
            if (this.checked) {
                angleSliderAndTextBox(parseInt(this.value));
            }
        });
    });

    angleSliderAndTextBox(0);
});

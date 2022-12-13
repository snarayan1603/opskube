import React from 'react'

export default function HeaderTopSlider() {

    let i = 0;
    let text = ["NEW: CUSTOMIZE YOUR OWN BEDDING NOW!", "WE ARE DELIVERING ACROSS INDIA AND INTERNATIONALLY."],
        animation = { style: "FadeIn", text: text[i] }


    var count = 0;

    setInterval(function () {

        if (animation.style === "FadeIn") {
            if (document.getElementById("HeadertopSlider")) document.getElementById("HeadertopSlider").className = "FadeOut";
            if (count === text.length - 1) {
                count = 0;
            } else count++;            
            animation.text = text[count];

            setTimeout(function () {
                document.getElementById("HeadertopSlider").innerText = text[count];
                document.getElementById("HeadertopSlider").className = "FadeIn";
            }, 2000)
        }

    }, 6500)


    return (
        <div className='top-slider'>
            <p id="HeadertopSlider" className='FadeIn'>{animation.text}</p>
        </div>
    )
}

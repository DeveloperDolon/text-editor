
const page = document.querySelector("#text-page");

const btnsArea = document.querySelector("#button-area");

// function for button click actions.....
function actionForBtn(actionName, actionFromElement) {
    if(actionName === "bold") {
        if(page.classList.contains("font-bold")) {
            page.classList.remove("font-bold");
            actionFromElement.target.parentElement.classList.remove("bg-gray-500");
        } else {
            page.classList.add("font-bold");
            actionFromElement.target.parentElement.classList.add("bg-gray-500");
        }
    } else if(actionName === "italic") {
        if(page.classList.contains("italic")) {
            page.classList.remove("italic");
            actionFromElement.target.parentElement.classList.remove("bg-gray-500");
        } else {
            page.classList.add("italic");
            actionFromElement.target.parentElement.classList.add("bg-gray-500");
        }
    }else if(actionName === "underline") {
        if(page.classList.contains("underline")) {
            page.classList.remove("underline");
            actionFromElement.target.parentElement.classList.remove("bg-gray-500");
        } else {
            page.classList.add("underline");
            actionFromElement.target.parentElement.classList.add("bg-gray-500");
        }
    }else if(actionName === "left_align") {
        if(page.classList.contains("text-left")) {
            page.classList.remove("text-left");
            actionFromElement.target.parentElement.classList.remove("bg-gray-500");
        } else {
            page.classList.add("text-left");
            actionFromElement.target.parentElement.classList.add("bg-gray-500");
        }
    }else if(actionName === "right_align") {
        if(page.classList.contains("text-right")) {
            page.classList.remove("text-right");
            actionFromElement.target.parentElement.classList.remove("bg-gray-500");
        } else {
            page.classList.add("text-right");
            actionFromElement.target.parentElement.classList.add("bg-gray-500");
        }
    }else if(actionName === "center_align") {
        if(page.classList.contains("text-center")) {
            page.classList.remove("text-center");
            actionFromElement.target.parentElement.classList.remove("bg-gray-500");
        } else {
            page.classList.add("text-center");
            actionFromElement.target.parentElement.classList.add("bg-gray-500");
        }
    }
}


btnsArea.addEventListener("click", function(e) {
    //console.log(document.querySelector("#color-choosed").value);
    if(e.target.id === "bold-btn") {
        actionForBtn("bold", e);
    }

    // this program is for italic button...
    if(e.target.id === "italic-btn") {
        actionForBtn("italic", e);
    }

    if(e.target.id === "underline-btn") {
        actionForBtn("underline", e);
    }

    if(e.target.id === "left-align") {
        actionForBtn("left_align", e);
    }

    if(e.target.id === "right-align") {
        actionForBtn("right_align", e);
    }

    if(e.target.id === "center-align") {
        actionForBtn("center_align", e);
    }

});

document.querySelector("#input-area").addEventListener("input", function(e) {
    if(e.target.id === "font-size") {
        const inputFontSize = e.target.value;

        page.style.fontSize = inputFontSize + "px";
    }

    if(e.target.id === "color-choosed") {
        page.style.color = e.target.value;
    }
});
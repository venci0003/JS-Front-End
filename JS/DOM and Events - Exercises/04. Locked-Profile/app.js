function lockedProfile() {
    const buttonElements = Array.from(
      document.querySelectorAll(".profile button")
    );
  
    buttonElements.forEach((button) => {
      button.addEventListener("click", (e) => {
        const profile = e.target.parentElement;
  
        let isChecked = profile.querySelector("input[value = unlock]").checked;
  
        const informationInDiv = profile.querySelector("div");
  
        if (isChecked && e.target.textContent === "Show more") {
          informationInDiv.style.display = "block";
          e.target.textContent = "Hide it";
        } else {
          if (isChecked) {
            informationInDiv.style.display = "none";
            e.target.textContent = "Show more";
          }
        }
      });
    });
  }
  
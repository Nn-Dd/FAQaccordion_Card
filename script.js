document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "questions"
  var coll = document.querySelectorAll(".questions");

  // Add click event listeners to each "questions" element
  coll.forEach(function (question) {
    var title = question.querySelector(".title");
    var paragraph = question.querySelector(".paragraph");
    var icon = title.querySelector(".icon");
    var heading = title.querySelector(".question-heading");

    title.addEventListener("click", function () {
      // Check if the clicked question is active
      var isActive = question.classList.contains("active");

      // Close all open questions
      coll.forEach(function (otherQuestion) {
        otherQuestion.classList.remove("active");
        otherQuestion.querySelector(".paragraph").style.display = "none";
        otherQuestion.querySelector(".icon").style.transform = `rotate(0deg)`;
        otherQuestion.querySelector(
          ".question-heading"
        ).style.color = `hsl(240, 6%, 50%)`;
        otherQuestion.querySelector(
          ".question-heading"
        ).style.fontWeight = `400`;
        otherQuestion.style.marginBottom =`0`;
      });

      // If the clicked question wasn't active, open it
      if (!isActive) {
        question.style.transition = "all 0.3s";
        question.classList.add("active");
        paragraph.style.display = "block";
        icon.style.transform = `rotate(180deg)`;
        heading.style.color = `#201e36`;
        heading.style.fontWeight = `700`;
        question.style.marginBottom =`20px`;
      }
    });
  });
});

const visitCounter = localStorage.getItem("visitCounter") || 0;
// FIX COUNT VIEW TO 0

const visitCountElement = document.getElementById("visit-count");
// TAKE THE ID OF visit-count

visitCountElement.textContent = visitCounter;
// constance visitCounter BECAME THE EQUAL OF visit-count

function incrementVisitCounter() {
  const newVisitCounter = parseInt(visitCounter) + 1;
  localStorage.setItem("visitCounter", newVisitCounter);
  visitCountElement.textContent = newVisitCounter;
}
// A CONSTANCE IS CREATE TO PUT +1 TO THE ID visitCounter
// ON LOCAL STORAGE TO THE COMPUTER, visitCounter BECAME THE CONSTANCE
// THE CONSTANCE visitCountElement IS THE EQUAL OF newVisitCounter

window.onload = incrementVisitCounter;
// WHEN THE PAGE IS LOADED, THE FUNCTION IS CALLED
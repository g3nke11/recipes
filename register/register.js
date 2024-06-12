function participantTemplate(count) {

return `<section class="participant1">
            <p>Participant ${count}"</p>
            <div class="item">
              <label for="fname${count}""> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity${count}"">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee${count}"">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date${count}"">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`};

const addButton = document.querySelector('#add');
const participantsContainer = document.querySelector('#participants-container')
let count = 1;

function addParticipant() {
    count += 1;
    let participantHtml = participantTemplate(count);
    participantsContainer.insertAdjacentHTML("beforeend", participantHtml)
};

addButton.addEventListener("click", addParticipant);

const submitButton = document.querySelector('#submitButton')

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let totalFees = feeElements.reduce((total, element) => {
        let fee = parseFloat(element.value);
        return total + (isNaN(fee) ? 0 : fee);
    }, 0);
    
    // once you have your total make sure to return it!
    return totalFees;
    
};

function successTemplate(info) {
    return `<div>
    <h1>Camp Registration</h1>
    <p>Successful Submission!</p>
    <p>Adult: ${info[1]}</p>
    <p>Number of Participants: ${info[2]}</p>
    <p>Total fees: ${info[0]}</p>
    </div>`;

};

function submitForm(event) {
    event.preventDefault();
    let total = totalFees();
    let adultName = document.querySelector('#adult_name').value;
    let totalParticipants = count;
    let info = [total, adultName, totalParticipants];
    let formElement = document.querySelector('form');
    formElement.style.display = "none";
    let successHtml = successTemplate(info);
    formElement.insertAdjacentHTML("afterend", successHtml);
  };

document.querySelector("form").addEventListener("click", submitForm());
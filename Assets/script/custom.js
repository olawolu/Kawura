/* ther function below preveny default submission of form data and run our custom script
* @param {Event}, @param{HTMLFormControlsCollection}
* @return {void}, @return{object}
*/

const formToJson = elements => [].reduce.call(elements, (data, element) => {
   //element must be required.
   
      data[element.name] = element.value;
      return data;

   }, {});


const handleFormSubmit = event =>{
   event.preventDefault();
   const data = formToJson(form.elements);
   const dataContainer= document.getElementsByClassName('result-display')[0];
   dataContainer.textContent = JSON.stringify(data, null, "  ");

}

const form = document.getElementsByClassName('form')[0];
form.addEventListener('submit',handleFormSubmit);
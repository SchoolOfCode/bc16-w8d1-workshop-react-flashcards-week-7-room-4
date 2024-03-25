

export default function Form() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }
    return(
        <form onSubmit={handleSubmit}>
            <label>Question:<input name="question" type="text"></input></label>
            <label>Answer:<input name="answer" type="text"></input></label>            
            <button type="submit" className="add-button">Add</button>
        </form>
    )
}
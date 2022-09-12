import { useState } from "react"
const AddGame = () => {
const[text, setText] = useState('')
const[day, setDay] = useState('')
const[reminder, setReminder] = useState(false)
function handleText(event) {
  setText(event.target.value);
}
function handleDay(event) {
  setDay(event.target.value);
}
function handleReminder(event) {
  setReminder(event.currentTarget.checked)
}
const onSubmit = (e) => {
    e.preventDefault()
    const postData = {
      day: day,
      text: text,
      reminder: reminder,
    };

    fetch("http://localhost:3000/data",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  
    if (!text){
      alert('please add game')
      return
    }
  
    setText('')
    setDay('')
    setReminder(false)
   
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Game</label>
            <input type='text' placeholder="Add Game" 
            value={text} onChange={handleText}/>
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type='text' placeholder="Add Day & Time"
            value={day} onChange={handleDay}/>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type='checkbox' checked= {reminder}
            value={reminder} onChange={handleReminder}/>
        </div>
        <input type='submit' value='Save Game' className="btn btn-block"/>
    </form>
  )
}
export default AddGame
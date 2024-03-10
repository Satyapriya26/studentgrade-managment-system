import "./Feedback.css"

export default function Feedback() {
  return (
      <>
      <body className="feedback-bg">
       
      <div className=" mt-40 mx-96 ">
            <form className="container">
            <fieldset disabled="">
                <legend>Student FeedBack</legend>
                <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Additional features you want to suggest</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter your message" fdprocessedid="vsy8o8"></input>
                </div>
                <div class="mb-3">
                <label for="disabledSelect" class="form-label">Rating this Service</label>
                <select id="disabledSelect" class="form-select" fdprocessedid="tc0n80e">
                    <option>Excellent</option>
                    <option>Very Good</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>Bad</option>
                </select>
                </div>
                <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled=""></input>
                    <label class="form-check-label" for="disabledFieldsetCheck">
                    Can't check this
                    </label>
                </div>
                </div>
                <button type="submit" class="btn btn-primary" fdprocessedid="9o8ny">Submit</button>
            </fieldset>
            </form>
        </div>
        </body>
      </>
  )
}
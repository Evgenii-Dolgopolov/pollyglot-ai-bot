import React from "react"

export default function Translator() {
  return (
    <div className="container">
      <div className="container-frame">
        <div className="input-section">
          <label className="input-section-title" htmlFor="inputText">
            Text to Translate:
          </label>
          <textarea
            id="inputText"
            className="input-textarea"
            placeholder="How are you?"
            rows="6"
            cols="50"
            // value={inputText}
            // onChange={handleInputChange}
          />
        </div>

        <div className="output-section">
          <label htmlFor="sourceLanguage">Select language:</label>

        </div>
      </div>
    </div>
  )
}

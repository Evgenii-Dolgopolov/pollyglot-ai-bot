import React from "react"

export default function Translator() {
  const [inputText, setInputText] = React.useState("")
  const [selectedLanguage, setSelectedLanguage] = React.useState("fr")

  const handleInputChange = event => {
    setInputText(event.target.value)
  }

  const handleLanguageChange = event => {
    setSelectedLanguage(event.target.value)
  }

  const handleTranslate = () => {
    // Your translation logic here
    console.log("Translating:", inputText, "to", selectedLanguage);
  }
// {/* OUTPUT SECTION BRANCH */}
  return (
    <div className="container">
      <div className="container-frame">
        <div className="input-section">
          <label className="input-section-title-label" htmlFor="inputText">
            Text to Translate:
          </label>
          <textarea
            id="inputText"
            className="input-textarea"
            placeholder="How are you?"
            rows="6"
            cols="50"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>

        <div className="output-section">
          <div className="output-title-section-container">
            <label
              className="output-title-section-label"
              htmlFor="sourceLanguage">
              Select language:
            </label>
          </div>

          <div className="radio-btn-section">
            <div className="radio-btns">
              <input
                type="radio"
                id="french"
                name="language"
                value="fr"
                checked={selectedLanguage === "fr"}
                onChange={handleLanguageChange}
              />
              <label className="radio-btn-input-label" htmlFor="french">
                French
              </label>
              <img src="/assets/fr-flag.png" alt="french flag" />
            </div>
            <div className="radio-btns">
              <input
                type="radio"
                id="spanish"
                name="language"
                value="es"
                checked={selectedLanguage === "es"}
                onChange={handleLanguageChange}
              />
              <label className="radio-btn-input-label" htmlFor="spanish">
                Spanish
              </label>
              <img
                src="/assets/sp-flag.png"
                alt="spanish flag"
              />
            </div>
            <div className="radio-btns">
              <input
                type="radio"
                id="japanese"
                name="language"
                value="ja"
                checked={selectedLanguage === "ja"}
                onChange={handleLanguageChange}
              />
              <label className="radio-btn-input-label" htmlFor="japanese">
                Japanese
              </label>
              <img
                className="img-jpn-flag"
                src="/assets/jpn-flag.png"
                alt="japanese flag"
              />
            </div>
          </div>
        </div>

        <div className="translate-btn-container">
          <button onClick={handleTranslate} className="translate-btn">Translate</button>
        </div>
      </div>
    </div>
  )
}

import React from "react"

export default function Translator() {
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
            // value={inputText}
            // onChange={handleInputChange}
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
                // checked={selectedLanguage === "fr"}
                // onChange={handleLanguageChange}
              />
              <label className="radio-btn-input-label" htmlFor="french">
                French
              </label>
              <img src="../../../public/assets/fr-flag.png" alt="french flag" />
            </div>
            <div className="radio-btns">
              <input
                type="radio"
                id="spanish"
                name="language"
                value="es"
                // checked={selectedLanguage === "es"}
                // onChange={handleLanguageChange}
              />
              <label className="radio-btn-input-label" htmlFor="spanish">
                Spanish
              </label>
              <img
                src="../../../public/assets/sp-flag.png"
                alt="spanish flag"
              />
            </div>
            <div className="radio-btns">
              <input
                type="radio"
                id="japanese"
                name="language"
                value="ja"
                // checked={selectedLanguage === "ja"}
                // onChange={handleLanguageChange}
              />
              <label className="radio-btn-input-label" htmlFor="japanese">
                Japanese
              </label>
              <img
                className="img-jpn-flag"
                src="../../../public/assets/jpn-flag.png"
                alt="japanese flag"
              />
            </div>
          </div>
        </div>

        <div className="translate-btn-container">
          <button className="translate-btn">Translate</button>
        </div>
      </div>
    </div>
  )
}

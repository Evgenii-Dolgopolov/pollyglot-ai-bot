import React from "react"
import { fetchTranslation } from "../../../api"


export default function Translator() {
  const [inputText, setInputText] = React.useState("")
  const [selectedLanguage, setSelectedLanguage] = React.useState("fr")
  const [translatedText, setTranslatedText] = React.useState("")
  const [isTranslating, setIsTranslating] = React.useState(false)
  const textareaRef = React.useRef(null)

  const handleInputChange = event => {
    setInputText(event.target.value)
  }

  const handleLanguageChange = event => {
    setSelectedLanguage(event.target.value)
  }

  const handleTranslate = async () => {
    setIsTranslating(true)
    try {
      const translation = await fetchTranslation(inputText, selectedLanguage)
      setTranslatedText(translation)
    } catch (error) {
      console.error("Error translating text:", error)
      setTranslatedText("Translation failed. Please try again.")
    }
  }

  const handleReset = () => {
    setInputText("")
    setTranslatedText("")
    setIsTranslating(false)
    textareaRef.current.select()
  }
  
  return (
    <div className="container">
      <div className="container-frame">
        <div className="input-section">
          <label className="input-section-title-label" htmlFor="inputText">
            {!isTranslating ? "Text to Translate:" : "Original Text:"}
          </label>
          <textarea
            id="inputText"
            ref={textareaRef}
            type="text"
            className="input-textarea"
            placeholder="What would you like to translate?"
            rows="6"
            cols="50"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>

        {!isTranslating ? (
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
                <img src="/assets/sp-flag.png" alt="spanish flag" />
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
        ) : (
          <div className="output-section-wrapper">
            <div className="output-title-section-container">
              <label
                className="output-title-section-label"
                htmlFor="sourceLanguage">
                Your Translation:
              </label>
            </div>
            <textarea
              id="inputText"
              className="input-textarea"
              placeholder="Translation will appear here..."
              rows="6"
              cols="50"
              value={translatedText}
              // readOnly
              style={{ userSelect: "text" }}
            />
          </div>
        )}

        <div className="translate-btn-container">
          {!isTranslating ? (
            <button onClick={handleTranslate} className="translate-btn">
              Translate
            </button>
          ) : (
            <button onClick={handleReset} className="translate-btn">
              Start Over
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

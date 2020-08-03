import React from "react";
import "./ExploreContainer.css";
// import "@capacitor-community/speech-recognition";
import { Plugins, registerWebPlugin } from "@capacitor/core";
const { SpeechRecognition } = Plugins;

const ExploreContainer = ({ name }) => {
  SpeechRecognition.available();
  console.log(SpeechRecognition.available());
  /**
   * This method will start to listen for utterance.
   * @param language - language key returned from getSupportedLanguages()
   *        maxResults - maximum number of results to return (5 is max)
   *        prompt - prompt message to display on popup (Android only)
   *        partialResults - return partial results if found
   *        popup - display popup window when listening for utterance (Android only)
   * @returns void
   */
  SpeechRecognition.start({
    language: "en-US",
    maxResults: 2,
    prompt: "Say something",
    partialResults: true,
    popup: true,
  });

  /**
   * This method will stop listening for utterance
   * @param none
   * @returns void
   */
  SpeechRecognition.stop();

  /**
   * This method will return list of languages supported by the speech recognizer.
   * @param none
   * @returns languages - array string of languages
   */
  SpeechRecognition.getSupportedLanguages();

  /**
   * This method will check for audio permissions.
   * @param none
   * @returns permission - boolean true/false if permissions are granted
   */
  SpeechRecognition.hasPermission();

  /**
   * This method will prompt the user for audio permission.
   * @param none
   * @returns void
   */
  SpeechRecognition.requestPermission();
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;

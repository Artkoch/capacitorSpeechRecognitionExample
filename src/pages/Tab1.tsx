import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import "@capacitor/core";
import { Plugins, registerWebPlugin } from "@capacitor/core";
const { SpeechRecognition } = Plugins;

const Tab1: React.FC = () => {
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton>Start</IonButton>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

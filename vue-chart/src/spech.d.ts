declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }

  interface SpeechRecognition extends EventTarget {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    start(): void;
    stop(): void;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
  }

  interface SpeechRecognitionEvent {
    results: {
      0: {
        transcript: string;
      };
      isFinal: boolean;
      length: number;
      [index: number]: { transcript: string };
    }[];
  }
}

export {};

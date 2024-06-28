// src/custom-elements.d.ts
interface HTMLHautAiLiqaElement extends HTMLElement {
    addEventListener(type: 'capture', listener: (event: CustomEvent) => void, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: 'capture', listener: (event: CustomEvent) => void, options?: boolean | EventListenerOptions): void;
}

declare namespace JSX {
    interface IntrinsicElements {
        'hautai-liqa': any;
    }
}

window.onload = () => {
    customElements.define('tk-field', TokenField);
    customElements.define('tk-options', TokenOptions, {extends: 'li'});
}

class TokenField extends HTMLElement {
    constructor() {
        super();

        let templateContent = document.getElementById('token-template').content;
        this.attachShadow({ mode: "open", delegatesFocus: true }).appendChild(templateContent.cloneNode(true));

        let tokenSuggestions = this.shadowRoot.querySelector('.token-suggestions');
        this.shadowRoot.querySelector('.token-input').setAttribute('tabIndex', 1);

        this.addEventListener('focus', () => {
            tokenSuggestions.classList.add('list-open');
        });
 
        this.addEventListener('focusout', () => {
            tokenSuggestions.classList.remove('list-open');
        });
    }
}

class TokenOptions extends HTMLLIElement {
    constructor() {
        super();

        this.addEventListener('click',(e) => {
            // Selected token to be published
        });
    }

    connectedCallback() {
        this.value = this.value || this.innerText;
    }

    get value(){
        return this.getAttribute('value');
    }

    set value(tokenValue) {
        this.setAttribute('value',tokenValue);
    }
}
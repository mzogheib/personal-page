<script>
import Colors from '../services/Colors.js'
import Api from '../services/Api.js'

const setStyle = ({ inputBackground }) => {
  // Convert from HTMLCollection to Array
  let elements = [...document.getElementsByClassName('contact-me__input')];
  elements.forEach(element => element.style.backgroundColor = inputBackground)
}

const isDisabled = form => {
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = form.email && EMAIL_REGEX.test(String(form.email).toLowerCase());
  return !(form.name && validEmail && form.subject && form.message)
};

const makeForm = () => ({
    name: null,
    email: null,
    subject: null,
    message: null
})

export default {
  name: 'contact-me',
  data() {
    return {
      buttonBackground: Colors.contact,
      form: makeForm(),
      status: null,
      isLoading: false
    }
  },
  methods: {
    submit: function (e) {
      // Stop form submit from reloading page
      e.preventDefault();

      this.isLoading = true;
      Api.sendMessage(this.form).then(() => {
        this.form = makeForm();
        this.status = 'Message sent!';
        this.isLoading = false;
        setTimeout(() => this.status = null, 3000);
      });
    }
  },
  computed: {
    isDisabled: function () {
      return isDisabled(this.form) || this.isLoading;
    }
  },
  mounted: function () {
    // Add opacity to end of hex code
    setStyle({ inputBackground: `${Colors.contact}20` });
  }
}
</script>

<template lang="pug">
  .contact-me
    form.contact-me__form(action="#" v-on:submit="submit")
      input.contact-me__input(type="text" name="name" placeholder="Name*" v-model="form.name" :disabled="isLoading" autofocus="true")
      input.contact-me__input(type="email" name="replyto" placeholder="Email*" v-model="form.email" :disabled="isLoading")
      input.contact-me__input(type="text" name="subject" placeholder="Subject*" v-model="form.subject" :disabled="isLoading" autocomplete="off")
      textarea.contact-me__input(name="message" placeholder="Message*" v-model="form.message" :disabled="isLoading" autocomplete="off")
      .contact-me__footer
        .contact-me__footer-status
          span {{ status }}
        button.contact-me__button(type="submit" :style="{ backgroundColor: buttonBackground }" :disabled="isDisabled" v-bind:class="{ disabled: isDisabled }") Send
</template>

<style lang="scss">
.contact-me {
  padding: 0 10px;

  &__form {
    display: flex;
    flex-direction: column;

    textarea, input {
      border: none;
      outline: none;
    }

    textarea {
      min-height: 150px;
      resize: none;
    }

  }

  &__input {
    font-size: 14px;
    margin: 15px 0 0;
    padding: 5px 10px;
    font-family: inherit;
  }

  &__footer {
    margin: 15px 0 0;
    display: flex;

    &-status {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
      padding: 0 20px;
      align-items: center;
    }
  }

  &__button {
    font-size: 14px;
    min-width: 80px;
    min-height: 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
      outline: none;

    &:disabled {
      cursor: default;
    }

    &:active {
      box-shadow: 0 0 4px rgba(0, 0, 0, .25);
      position: relative;
      top: 2px;
    }
  }
}
</style>

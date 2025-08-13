'use strict'

const maskFormat = '+1 (000) 000 00 00'
const modal = $('#modalApplication');
const form = $('<form></form>');
const title = $('<h1>Application</h1>');
const inputName = $(
  `
  <div class="textField">
    <div class="textField__label">Name:</div>
    <input id="name" placeholder="Name" required>
  </div>`
);
const inputEmail = $(
  `
  <div class="textField">
    <div class="textField__label">E-mail:</div>
    <input name='email' id="email" placeholder="E-mail" required>
  </div>`
);
const inputPhone = $(
  `
  <div class="textField">
    <div class="textField__label">Phone:</div>
    <input name='phone' id="phone" placeholder="+1 (999) 999 99 99" required>
  </div>`
);
const formButton = $("<button type='submit'>Submit</button>");

form.append(
  title,
  inputName,
  inputEmail,
  inputPhone,
  formButton,
);

$(document).ready(() => {
  modal.append(form);
  form.validate({
    rules: {
      name: {
          required: true,
          minlength: 2
      },
      email: {
          required: true,
          email: true
      },
      phone: {
          required: true,
          minlength: maskFormat.length
      }
    },
    submitHandler: (_form, e) => {
      e.preventDefault();
      $.modal.close();
      toastr.success('Application was successfully sent!');
    }
  })
  modal.on($.modal.CLOSE, () => {
    form[0].reset();
    form.validate().resetForm();
    form.find('.error').removeClass('error');
  });

  $('input[name="phone"]').mask(maskFormat);
});
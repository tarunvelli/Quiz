function cloneQuestion() {

  var question_template = document.getElementsByClassName('question_template')
  question_template = question_template[question_template.length-1].cloneNode(true)

  var count = question_template.getElementsByClassName('radio')[0].getAttribute('name').match(/\d+/)[0]
  count = parseInt(count) + 1

  var radioArr = Array.from(question_template.getElementsByClassName('radio'))
  radioArr.forEach( elem => elem.setAttribute('name',`correct[${count}]`) )

  var form = document.getElementById('form')
  var tray = document.getElementsByClassName('buttons_tray')[0]
  form.insertBefore(question_template, tray)

}

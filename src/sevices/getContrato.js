export default function getContrato({clicrm}){
  
  const apiURL = `http://52.173.141.79:3000/user/${clicrm}`
  return fetch(apiURL)
    .then(res => res.text())
    .then(html => html)
    .catch(error => console.log(error))
  }

  // 3B96DD06-6CE3-4621-BE61-058D49D01B48
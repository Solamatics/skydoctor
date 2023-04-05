

export const addScript = (url)=> {
  let script = document.createElement('script');
  script.type = 'application/javascript';
  script.defer='defer'
  script.src = url;
  document.body.appendChild(script);

}

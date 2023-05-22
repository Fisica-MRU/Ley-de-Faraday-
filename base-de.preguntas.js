function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  let baseDePreguntas = [
    {
      pregunta: "Una bobina de alambre de 8 cm de diámetro tiene 50 espiras y está colocada dentro de campo B de 1.8T. Si el campo B se reduce a 0.6 T en 0.002 s, ¿cuál es la fem inducida?",
     
      respuesta: "𝜺 =𝟏𝟓𝟎.𝟕𝟗 𝑽",
      distractores: ["𝜺 =𝟏𝟓.𝟎𝟕𝟗 𝑽", "𝜺 =𝟏𝟓𝟎𝟕𝟗 𝑽", "𝜺 =𝟏𝟓𝟎𝟕.𝟗 𝑽"],
    },
    {
      pregunta: "Una bobina cuadrada que tiene 100 espiras con un área de 0.044 m2 se coloca de modo que su  plano  sea  perpendicular  a  un  campo  B  constante  de  4  mT.  La  bobina  gira  hasta  una posición paralela al campo en un lapso de 0.3 s. ¿Cuál es la fem inducida?",
     
      respuesta: "𝜺 = 𝟎. 𝟎𝟓𝟖 𝑽",
      distractores: ["𝜺 = 𝟎. 𝟎𝟎𝟓𝟖 𝑽", "𝜺 = -𝟎. 𝟎𝟓𝟖 𝑽 ", "𝜺 =  𝟎. 𝟎𝟎𝟓𝟖 𝑽"],
    },
    {
      pregunta: "Una bobina de 300 espiras que se mueve en dirección perpendicular al flujo en un campo magnético uniforme, experimenta un enlace de flujo de 0.23 mWb en 0.002 s. ¿Cuál es la fem inducida?",
    
      respuesta: "𝜺 = −𝟑𝟒. 𝟓 𝑽 ",
      distractores: ["𝜺 = −𝟑.𝟒𝟓 𝑽 ", "𝜺 = −𝟑𝟒𝟓 𝑽 ", "𝜺 = −.𝟑𝟒𝟓 𝑽 "],
    },
  ];
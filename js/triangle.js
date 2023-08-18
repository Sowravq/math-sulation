  function triangleBtm(){
    const base = getInputTextById('base-field');
    const height = getInputTextById('height-field');
    const result = 0.5 * base * height;
    setElementById('answer-field',result);
    
    return result;

  }

  function rectangleBtm(){
    const witdh = getInputTextById('witdh-field');
    const langth = getInputTextById('lenght-field');
    const calculate = witdh * langth;
    setElementById('recangle-ans-field',calculate);
    return calculate;
  }

  function ParallelogramBtm(){
    const base = getInputTextById('Parallelogram-base-field');
    const height = getInputTextById('Parallelogram-height-field');
    const calculate  = base * height;
    setElementById('Parallelogram-answer-field',calculate);
    return calculate;
  }

  function RhombusBtm(){
    const fristBase = getInputTextById('Rhombus-base-field');
    const scoundBase = getInputTextById('Rhombus-height-field');
    const calculate = 0.5 * fristBase * scoundBase;
    setElementById('Rhombus-answer-field',calculate);
    return calculate;
  }
  function RhombusBtm(){
    const fristBase = getInputTextById('Rhombus-base-field');
    const scoundBase = getInputTextById('Rhombus-height-field');
    const calculate = 0.5 * fristBase * scoundBase;
    setElementById('Rhombus-answer-field',calculate);
    return calculate;
  }
  function PentagonBtm(){
    const fristBase = getInputTextById('Pentagon-base-field');
    const scoundBase = getInputTextById('Pentagon-height-field');
    const calculate = 0.5 * fristBase * scoundBase;
    setElementById('Pentagon-answer-field',calculate);
    return calculate;
  }
  function EllipseBtm(){
    const fristBase = getInputTextById('Ellipse-base-field');
    const scoundBase = getInputTextById('Ellipse-height-field');
    const calculate = 3.1416 * fristBase * scoundBase;
    setElementById('Ellipse-answer-field',calculate);
    return calculate;
  }
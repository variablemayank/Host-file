let alphabhatedToggle = false;

function toggleAlph() {
    if(alphabhatedToggle == false ){
        document.getElementById('button-rows').innerHTML = `
        <div id ="button-rows" className={[style.keyboard_row]}>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("p");`}
        >
          {extractFact('latex(p)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("q");`}
        >
          {extractFact('latex(p)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("9");`}
        >
          {extractFact('latex(p)')}
        </button>
      </div>
      <div className={[style.keyboard_row]}>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("4");`}
        >
          {extractFact('latex(p)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("5");`}
        >
          {extractFact('latex(p)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("6");`}
        >
          {extractFact('latex(p)')}
        </button>
      </div>
      <div className={[style.keyboard_row]}>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("p");`}
        >
          {extractFact('latex(1)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("2");`}
        >
          {extractFact('latex(2)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("3");`}
        >
          {extractFact('latex(3)')}
        </button>
      </div>
      <div className={[style.keyboard_row]}>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick= {`toggleAlph()`}
        >
          {extractFact('latex(abc)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("0");`}
        >
          {extractFact('latex(0)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd(".");`}
        >
          {extractFact('latex(.)')}
        </button>
      </div>
        `;
        alphabhatedToggle = true;
    }
    else {
        document.getElementById('button-rows').innerHTML =  ` <div id ="button-rows" className={[style.keyboard_row]}>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("7");`}
        >
          {extractFact('latex(7)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("8");`}
        >
          {extractFact('latex(8)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("9");`}
        >
          {extractFact('latex(9)')}
        </button>
      </div>
      <div className={[style.keyboard_row]}>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("4");`}
        >
          {extractFact('latex(4)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("5");`}
        >
          {extractFact('latex(5)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("6");`}
        >
          {extractFact('latex(6)')}
        </button>
      </div>
      <div className={[style.keyboard_row]}>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("1");`}
        >
          {extractFact('latex(1)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("2");`}
        >
          {extractFact('latex(2)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("3");`}
        >
          {extractFact('latex(3)')}
        </button>
      </div>
      <div className={[style.keyboard_row]}>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick= {`toggleAlph()`}
        >
          {extractFact('latex(abc)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd("0");`}
        >
          {extractFact('latex(0)')}
        </button>
        <button
          type='button'
          className={[style.keyboard_btn]}
          onClick={`mathField_${inputIdName}.cmd(".");`}
        >
          {extractFact('latex(.)')}
        </button>
      </div>`;
      alphabhatedToggle = false;

    }
    console.log("alphabetToggle",alphabhatedToggle);
}
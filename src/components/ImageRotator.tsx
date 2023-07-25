import React, { useState } from 'react';

const ImageRotator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<number[][]>([]);

  const rotateImage = () => {
    let array;
    try {
      array = JSON.parse(input);
    } catch(e) {
      alert('Por favor, introduce una matriz válida.');
      return;
    }

    if (!Array.isArray(array) || !array.length || !Array.isArray(array[0])) {
      alert('Por favor, introduce una matriz válida.');
      return;
    }

    const n = array.length;
    const output = Array(n).fill().map(() => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        output[n - j - 1][i] = array[i][j];
      }
    }

    setOutput(output);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <label for="matrix-input">Ingresar Matriz</label>
      <input id="matrix-input" style={{margin: "5px 0"}} value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={rotateImage}>Rotar</button>
      {output.length > 0 && (
        <table style={{borderCollapse: "collapse", marginTop: "5px"}}>
          <tbody>
            {output.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{border: "1px solid black", padding: "10px"}}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ImageRotator;

import { useState, useEffect } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './App.css';

function App() {
    // Initial state matching the image's colors
    const [colors, setColors] = useState(['#fbd2c8', '#df536c']);
    const [angle, setAngle] = useState(50);
    const [cssCode, setCssCode] = useState('');
    const [, copy] = useCopyToClipboard();

    useEffect(() => {
        const gradientColors = colors.join(', ');
        const code = `
background: linear-gradient(${angle}deg, ${gradientColors});
-moz-background: linear-gradient(${angle}deg, ${gradientColors});
-webkit-background: linear-gradient(${angle}deg, ${gradientColors});
    `.trim();
        setCssCode(code);
    }, [colors, angle]);

    const addColor = () => {
        // Adds a new color, limiting the total to 5
        if (colors.length < 5) {
            setColors([...colors, '#FFFFFF']);
        }
    };

    const removeColor = (index) => {
        // Removes a color, ensuring at least 2 remain
        if (colors.length > 2) {
            const newColors = colors.filter((_, i) => i !== index);
            setColors(newColors);
        }
    };

    const updateColor = (index, value) => {
        const newColors = [...colors];
        newColors[index] = value;
        setColors(newColors);
    };

    return (
        <div className="app-container">
            <h1>CSS Gradient Code Generator</h1>
            <main className="main-content">
                <div className="gradient-display">
                    <div
                        className="preview"
                        style={{
                            background: `linear-gradient(${angle}deg, ${colors.join(
                                ', '
                            )})`
                        }}
                    />
                    <div className="code-output" onClick={() => copy(cssCode)}>
                        <SyntaxHighlighter
                            language="css"
                            style={oneDark}
                            customStyle={{ margin: 0 }}>
                            {cssCode}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className="options-panel">
                    <h2>Options</h2>
                    <div className="option-group">
                        {colors.map((color, index) => (
                            <div key={index} className="color-control">
                                <span className="color-label">
                                    Color {index + 1}
                                </span>
                                <input
                                    type="text"
                                    value={color}
                                    onChange={(e) =>
                                        updateColor(index, e.target.value)
                                    }
                                    className="hex-input"
                                />
                                <input
                                    type="color"
                                    value={color}
                                    onChange={(e) =>
                                        updateColor(index, e.target.value)
                                    }
                                    className="color-swatch"
                                />
                                {colors.length > 2 && (
                                    <button
                                        onClick={() => removeColor(index)}
                                        className="remove-color-btn"
                                        title="Remove Color">
                                        &times;
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="option-group angle-control">
                        <span className="angle-label">Angle</span>
                        <input
                            type="number"
                            value={angle}
                            onChange={(e) => setAngle(Number(e.target.value))}
                            className="angle-input"
                        />
                        <button
                            onClick={addColor}
                            disabled={colors.length >= 5}
                            className="add-color-btn"
                            title="Add Color">
                            +
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;

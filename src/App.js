import './App.css';
import {marked} from 'marked'
import { connect } from 'react-redux'
import { updateTextInput } from './redux/actions/textInput';

function App({ textInput, updateTextInput }) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    updateTextInput(newText)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
      </header>

      <div className="editor container">
        <div className="banner"><h2>Editor</h2><span className="resize"><i id="editor-resize" className="fa fa-arrows-alt"></i></span></div>
        <textarea id="editor" value={textInput.textInput} onChange = {handleInputChange} placeholder="Write your code here..."></textarea>
      </div>

      <div className="preview container">
      <div className="banner"><h2>Previewer</h2><span className="resize"><i id="preview-resize" className="fa fa-arrows-alt"></i></span></div>
        <div id="preview">
          <div dangerouslySetInnerHTML = {{ __html: marked(textInput.textInput)}}></div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  textInput: state.textInput
})

const mapDispatchToProps = {
  updateTextInput
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

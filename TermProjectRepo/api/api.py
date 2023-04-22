import time
from HopfieldNetwork import Text_Processor 
from flask import Flask, request

default_words = ['BEANS', 'APPLE', 'VALID', 'STACK']
txt_processor = Text_Processor(default_words)


app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {"time": 22}


@app.route('/set-words', methods=['PUT'])
def set_words_list():
    pass
    
@app.route('/process-word')
def process_word():
    # args = request.args
    # word = args['word']
    # global txt_processor
    word_pair = txt_processor.process_word('BEAMZ')
    input_word = word_pair[0]
    output_word = word_pair[1]
    return {
        "input": input_word,
        "output": output_word
        }
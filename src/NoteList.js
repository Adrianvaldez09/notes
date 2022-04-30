import React,{useState} from 'react'
import parse from 'html-react-parser';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AiFillEdit} from 'react-icons/ai'

function NoteList({addNote, note, deleteNote, editNote, setEditNoteTitle, setEditNoteText, noteEditId,setNoteEditId, setMessage, editNoteText, complete, fixText, toggleComplete, toggleComplete2, toggleComplete3, toggleComplete4,toggleComplete5, toggleComplete6, noColor, filteredNotes}) {


    function set(id){
        setNoteEditId(id)
        // if(id === note.id){
        //     setEditNoteText(note)
        // }
        fixText(id)
    }




  return (
    <div className='container'>
        {filteredNotes.map((note)=>(
            <div className={note.color} key={note.id}>
                {noteEditId === note.id ?
                <div className='note-list-title-input'>
                    <input type="text" onChange={(e) => setEditNoteTitle(e.target.value)} defaultValue={note.title}/>
                        {/* {noteEditId === note.id ? 
                        (<div >
                            <button className='subject-save-btn' onClick={(e) => editNote(note.id)}>Save</button>
                            <button className='subject-cancel-btn' onClick={(e) =>setNoteEditId(null)}>Cancel</button>
                        </div>)
                        :
                            ""
                        } */}

                        {noteEditId === note.id ?
                            <button className='note-save-btn' onClick={(e) => editNote(note.id)}>Save</button> : ""
                        }
                        {noteEditId === note.id ?
                            <button className='note-cancel-btn' onClick={(e) =>setNoteEditId(null)}>Cancel</button> : ""
                        }

                    {/* <textarea type="text" onChange={(e) => setEditNoteText(e.target.value)} defaultValue={note.text} onFocus={(e)=>setEditNoteText(e.target.value)}/> */}
                    <div>
                    <CKEditor
                    editor={ClassicEditor}
                    value={note}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setEditNoteText(data)
                    }}
                    />
                    </div>
                    <h3>{note.title}</h3>
                    <p>{parse(note.text)}</p>
                    <p>{new Date().getMonth() + 1} / {new Date().getDate()} / {new Date().getFullYear()}</p>

                </div>
                :
                <div className='note-title'>
                    <h2>{note.title}</h2>
                    <p>{parse(note.text)}</p>
                    <div className='note-card-buttons'>
                    {noteEditId === note.id ? 
                    ""
                    :
                    <div className='colors'>
                        <button className='edit-button' onClick={(e)=>set(note.id)}><AiFillEdit/></button>
                        <button className='no-color' onClick={() =>   noColor(note.id)} ></button>
                        <button className='red-color' onClick={() =>   toggleComplete(note.id)} ></button>
                        <button className='blue-color' onClick={() => toggleComplete2(note.id)} ></button>
                        <button className='yellow-color' onClick={() =>   toggleComplete3(note.id)} ></button>
                        <button className='green-color' onClick={() => toggleComplete4(note.id)} ></button>
                        <button className='purple-color' onClick={() =>   toggleComplete5(note.id)} ></button>
                        <button className='pink-color' onClick={() => toggleComplete6(note.id)} ></button>
                        <button className='delete-x' onClick={(e) => deleteNote(note.id)} >X</button>
                    </div>
                    }

            </div>
                </div>
            }

            
        </div>
        ))}
    </div>
  )
}

export default NoteList
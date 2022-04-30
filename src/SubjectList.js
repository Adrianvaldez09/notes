import React,{useState} from 'react'
import Notes from './Notes'
import {AiFillEdit} from 'react-icons/ai'


function SubjectList({addNote, note, deleteNote, editNote, setEditNoteTitle, setEditNoteText, noteEditId,setNoteEditId, setMessage, editNoteText, complete, fixText, toggleComplete, toggleComplete2, toggleComplete3, toggleComplete4,toggleComplete5, toggleComplete6, noColor, filteredNotes,filterSubjects,choseSubject,editNoteTitle,selected, setSelected,setNote,subjectArrange,whoa}) {

    function set(id){
        setNoteEditId(id)
        setEditNoteTitle(choseSubject)

        fixText(id)
    }

    function change(e,note){
        setEditNoteTitle(e.target.value)
        setSelected(note.id)
    }

    console.log(selected)
    console.log(editNoteTitle)
    let picked;
    if(whoa === false){
        picked = filterSubjects
    } else {
        picked = filteredNotes
    }

    function saveButton(e){
        setNoteEditId(null)
        setSelected(false)
    }
    
  return (
        <div className='container'>
        {picked.map((note)=>(
            <div className={note.color} key={note.id}>
                {noteEditId === note.id ?
                <div className='subject-list-title-input'>
                    <input className='subject-title-edit'  type="text"  onChange={(e) => change(e,note)} defaultValue={note.title}/>
                    {/* {noteEditId === note.id ? 
                    (<div className='editing-buttons'>
                        {selected === note.id ?
                            <button className='subject-save-btn'  onClick={(e) => editNote(note)}>Save</button>
                            :
                            <div></div>

                        }
                        <button className='subject-cancel-btn' onClick={(e) =>saveButton()}>Cancel</button>
                    </div>)    
                    :
                    ""
                    } */}
                    {noteEditId === note.id &&  selected === note.id? 
                            <button className='subject-save-btn'  onClick={(e) => editNote(note)}>Save</button>
                            :
                            ""
                        }
                    {noteEditId === note.id?
                        <button className='subject-cancel-btn' onClick={(e) =>saveButton()}>Cancel</button>
                        :
                        ""
                    }
                
                </div>
                :
                <div className='subject-list-title'>
                    <h2>{note.title}</h2>
                </div>
            }
            <Notes
                subject={note}
                filterSubjects={filterSubjects}
                subjectArrange={subjectArrange}
            />
            {noteEditId === note.id ? 
            // (<div>
            //     {selected === note.id ?
            //         <button className='subject-cancel-btn'  onClick={(e) => editNote(note)}>Save</button>
            //         :
            //         <div></div>

            //     }
            //     <button className='subject-cancel-btn' onClick={(e) =>saveButton()}>Cancel</button>
            // </div>)
            ""
            :
            <div>
                <div className="subject-options-gone">
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
            </div>
            }
            </div>
        ))}
    </div>

    // <div>
    //     {subjects.map((subject)=>(
    //         <div key={subject.id}>
    //             {editTitleId === subject.id ? 
    //                 <div>
    //                     <input text="text" onChange={(e) => setEditSubjectTitle(e.target.value)} defaultValue={subject.title}/>
    //                 </div>
    //             :

    //             <h3>{subject.title}</h3>
    //             }
    //             <Notes
    //                 subject={subject}
    //             />
    //             {editTitleId === subject.id ?
    //             <div>

    //             <button onClick={(e) => subjectEdit(subject.id)}>Save</button>
    //             <button onClick={(e) =>setEditTitleId(null)}>Cancel</button>
    //             </div>
    //             :

    //             <div>
    //             <button onClick={(e)=>deleteSubject(subject.id)}>Delete</button>
    //             <button onClick={(e)=>set(subject.id)}>Edit</button>
    //             </div>
    //             }
    //         </div>
    //     ))}
    // </div>
    )
}

export default SubjectList
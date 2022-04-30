import NoteList from './NoteList';
import React,{useState, useEffect} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

function Notes({subject,subjectArrange}) {
  const [note, setNote] = useState([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const [noteEditId, setNoteEditId] = useState(null)
  const [editNoteTitle, setEditNoteTitle] = useState("")
  const [editNoteText, setEditNoteText] = useState("")
  const [preSelectedFilter, setPreSelectedFilter] = useState("noColor")
console.log(preSelectedFilter)
  const [tryThis, setTryThis] = useState("")


  function addNote(e){
    e.preventDefault()
    if(title === ""){
      return
    }

    const newNote = {
      id:new Date().getTime(),
      title: title,
      text: text,
      date: new Date().getTime(),
      complete: false,
      color: preSelectedFilter
    }
    setNote([newNote, ...note])
    setText("")
    setTitle("")
    // setPreSelectedFilter(tryThis)
  subjectArrange(subject)
  }

  React.useEffect(()=>{
    const getLocal = localStorage.getItem(subject.id)
    const savedNotes = JSON.parse(getLocal)
    if(savedNotes){
      setNote(savedNotes)
    }
  },[])

  React.useEffect(()=>{
    const setLocal = JSON.stringify(note)
    localStorage.setItem(subject.id, setLocal)
  },[note])

  const deleteNote = (id) =>{
    const deleteNotes = [...note].filter((note)=>(
      id !== note.id
    ))
    setNote(deleteNotes)
  }


      const sortByDate= (a,b)=>{
        return a.date - b.date
    }


  const editNote = (id) =>{
    const editNotes = [...note].map((note)=>{
      if (editNoteTitle === ""){
        note.title = note.title
      } else
      if(note.id === id){
        note.title = editNoteTitle
      }
      // if (editNoteText === ""){
      //   note.text = note.text
      // } else
      if(note.id === id){
        note.text = editNoteText
      }
      
      
      // if(note.id ===id){
        //   note.id = new Date().getTime()
        // }
        return note
      })
      
      setNote(editNotes)
      
      setNote(editNotes)
      setEditNoteTitle(title)
      setEditNoteText(text)
      setNoteEditId(null)
      
      
      const arrange = [...note].sort((a,b)=>{
        return b.date - a.date
      })

      console.log(arrange)
      setNote(arrange)
        }
    
    
        function fixText(id){
          const fixingText = [...note].map((note)=>{
            if(note.id === id){
              setEditNoteText(note.text)
              note.date = new Date().getTime()
            }
          })
        }


    function noColor(id){
      const toggleCompleted = [...note].map((note)=>{
        if(note.id === id){
          note.color = "noColor"
        }
        return note
      })
      setNote(toggleCompleted)
    }
    function toggleComplete(id){
      const toggleCompleted = [...note].map((note)=>{
        if(note.id === id){
          note.color = "red"
        }
        return note
      })
      setNote(toggleCompleted)
    }
    function toggleComplete2(id){
      const toggleCompleted2 = [...note].map((note)=>{
        if(note.id === id){
          note.color = "blue"
        }
        return note
      })
      setNote(toggleCompleted2)
    }
    function toggleComplete3(id){
      const toggleCompleted3 = [...note].map((note)=>{
        if(note.id === id){
          note.color = "yellow"
        }
        return note
      })
      setNote(toggleCompleted3)
    }
    function toggleComplete4(id){
      const toggleCompleted4 = [...note].map((note)=>{
        if(note.id === id){
          note.color = "green"
        }
        return note
      })
      setNote(toggleCompleted4)
    }
    function toggleComplete5(id){
      const toggleCompleted5 = [...note].map((note)=>{
        if(note.id === id){
          note.color = "purple"
        }
        return note
      })
      setNote(toggleCompleted5)
    }
    function toggleComplete6(id){
      const toggleCompleted6 = [...note].map((note)=>{
        if(note.id === id){
          note.color = "pink"
        }
        return note
      })
      setNote(toggleCompleted6)
    }

    // function filterNotes(e){

    const [noteToShow, setNoteToShow] = useState("all") 
    const [sorting, setSorting] = useState("time")

      let filteredNotes = []
      let red=[]
      let blue=[]
      let yellow=[]
      let green=[]
      let purple=[]
      let pink=[]
      let unmarked=[]

      let filteredNotesByColor= []
      let filteredNotesByTime = []
      if(noteToShow === "all"){
        red = note.filter(note => note.color ==="red")
        blue = note.filter(note => note.color === "blue")
        yellow = note.filter(note => note.color === "yellow")
        green = note.filter(note => note.color === "green")
        purple = note.filter(note => note.color === "purple")
        pink = note.filter(note => note.color === "pink")
        unmarked = note.filter(note => note.color === "noColor")
        filteredNotesByColor =  [...unmarked,...red,...blue,...yellow,...green,...purple,...pink]
        filteredNotesByTime =  [note]
        

        
        if(sorting ==="time"){
          filteredNotes = note
        } else if (sorting=== "color"){
          filteredNotes = filteredNotesByColor
        }
      } else if ( noteToShow ==="red"){
        console.log("filtered")
        filteredNotes = note.filter(note => note.color ==="red")
      } 
      else if( noteToShow === "blue"){
        filteredNotes = note.filter(note => note.color === "blue")
      }
      else if( noteToShow === "yellow"){
        filteredNotes = note.filter(note => note.color === "yellow")
      }
      else if( noteToShow === "green"){
        filteredNotes = note.filter(note => note.color === "green")
      }
      else if( noteToShow === "purple"){
        filteredNotes = note.filter(note => note.color === "purple")
      }
      else if( noteToShow === "pink"){
        filteredNotes = note.filter(note => note.color === "pink")
      }
      else if( noteToShow === "unmarked"){
        filteredNotes = note.filter(note => note.color === "noColor")
      }

      // useEffect(()=>{
      //   setPreSelectedFilter()
      // },[note])

      //THIS IS FOR EDITOR
    const [textareaTry, setTextareaTry] = useState("")

    console.log(preSelectedFilter)
    return (
      <div className="App note-section">
      <form className='note-form'  onSubmit={addNote}>

        <div className='input-field'>
        <input placeholder='Add a note' type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <select onChange={(e)=>{
          const thisFilter = e.target.value
          setPreSelectedFilter(thisFilter)
          setTryThis(thisFilter)
        }}>
          <option  value="noColor" onClick={(e)=>setNoteToShow("unmarked")}>Unmarked</option>
          <option  value="red" onClick={(e)=>setNoteToShow("red")}>Red</option>
          <option value="blue" onClick={(e)=>setNoteToShow("blue")}>Blue</option>
          <option value="yellow" onClick={(e)=>setNoteToShow("yellow")}>Yellow</option>
          <option value="green" onClick={(e)=>setNoteToShow("green")}>Green</option>
          <option value="purple" onClick={(e)=>setNoteToShow("purple")}>Purple</option>
          <option value="pink" onClick={(e)=>setNoteToShow("pink")}>Pink</option>
        </select>
        </div>
            
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData()
              setText(data)
            }}
            />
          <button className='add' type='submit'>ADD</button>
      </form>

      <div className='sort'>
        <select onChange={(e)=>{
          const selectedFilter = e.target.value
          setNoteToShow(selectedFilter)
        }}>
        <option value="all" onClick={(e)=>setNoteToShow("all")}>All</option>
        <option value="unmarked" onClick={(e)=>setNoteToShow("unmarked")}>Unmarked</option>
        <option value="red" onClick={(e)=>setNoteToShow("red")}>Show Red</option>
        <option value="blue" onClick={(e)=>setNoteToShow("blue")}>Show Blue</option>
        <option value="yellow" onClick={(e)=>setNoteToShow("yellow")}>Show Yellow</option>
        <option value="green" onClick={(e)=>setNoteToShow("green")}>Show Green</option>
        <option value="purple" onClick={(e)=>setNoteToShow("purple")}>Show Purple</option>
        <option value="pink" onClick={(e)=>setNoteToShow("pink")}>Show Pink</option>
        </select>
        {/* <button onClick={(e)=>setNoteToShow("all")}>All</button>
        <button onClick={(e)=>setNoteToShow("red")}>Show Red</button>
        <button onClick={(e)=>setNoteToShow("blue")}>Show Blue</button>
        <button onClick={(e)=>setNoteToShow("yellow")}>Show Yellow</button>
        <button onClick={(e)=>setNoteToShow("green")}>Show Green</button>
        <button onClick={(e)=>setNoteToShow("purple")}>Show Purple</button>
      <button onClick={(e)=>setNoteToShow("pink")}>Show Pink</button> */}
        {noteToShow ==="all" ? 
        <div>
          <p>Sort by: </p>
          <select
          onChange={(e) =>{
            const sorted = e.target.value
            setSorting(sorted)
          }
          }
            >
            <option value="time" >Time</option>
            <option value="color">Color</option>
          </select>
        </div>
        :
        <div></div>  
      }
        <p>Number of notes: {note.length}</p>
      </div>
      <NoteList 
        note={note}
        addNote={addNote}
        key={note.id}
        deleteNote = {deleteNote}
        editNote={editNote}
        setNoteEditId={setNoteEditId}
        noteEditId={noteEditId}
        setEditNoteText={setEditNoteText}
        setEditNoteTitle={setEditNoteTitle}
        editNoteText={editNoteText}
        fixText={fixText}
        complete={note.complete}
        toggleComplete={toggleComplete}
        toggleComplete2={toggleComplete2}
        toggleComplete3={toggleComplete3}
        toggleComplete4={toggleComplete4}
        toggleComplete5={toggleComplete5}
        toggleComplete6={toggleComplete6}
        noColor={noColor}
        filteredNotes={filteredNotes}
      />
    </div>
  );
}

export default Notes;

import React,{useEffect, useState} from 'react'
import SubjectList from'./SubjectList'
function App() {
  // const [subjects, setSubjects] = useState([])
  // const [subjectText, setSubjectText] = useState("")
  
  // const [editSubjectTitle, setEditSubjectTitle]= useState("")
  // const [editTitleId, setEditTitleId]= useState()
  
  // function addSubject(e){
    //         e.preventDefault()
    //   if(subjectText === ""){
      //     return
      //   }
      //     const newSubject = {
        //     id:new Date().getTime(),
        //     title: subjectText,
        //     date: new Date().getTime(),
        //     complete: false,
        //   }
        //   setSubjects([newSubject,...subjects])
        //   editSubjectTitle("")
        //   }

  //     React.useEffect(()=>{
    //   const getLocal = localStorage.getItem("mySubjects")
    //   const savedNotes = JSON.parse(getLocal)
    //   if(savedNotes){
      //     setSubjects(savedNotes)
      //   }
      // },[])
      
      // React.useEffect(()=>{
        //   const setLocal = JSON.stringify(subjects)
        //   localStorage.setItem("mySubjects", setLocal)
        // },[subjects])
        
        
        //   function deleteSubject(id){
          //     const deleteSubject = [...subjects].filter((subject)=>(
            //       id !== subject.id
            //     ))
            
            //     setSubjects(deleteSubject)
            //   }
            
            //   const subjectEdit = (id) =>{
              //     const editSubject = [...subjects].map((subject)=>{
                //       if(editSubjectTitle === ""){
                  //         subject.title = subject.text
                  //       } else 
                  //       if(subject.id === id){
                    //         subject.title = editSubjectTitle
                    //       }
                    //       return subject
                    //     })
                    
                    //     setSubjects(editSubject)
                    //     setEditSubjectTitle(subjectText)
                    //     setEditTitleId(null)
                    
                    //       const arrange = [...subjects].sort((a,b)=>{
                      //       return b.date - a.date
                      //     })
                      
                      //     setSubjects(arrange)
                      //   }
                      
                      //   console.log(editSubjectTitle)
                      
                      
                      //       function fixText(id){
                        //         const fixingText = [...subjects].map((subject)=>{
                          //           if(subject.id === id){
                            //             subject.title = subject.title
                            //           }
                            //           return subject
                            //         })
                            //       }
                            
                            
                            
                            
                            const [choseSubject, setChosenSubject] = useState("")
  const [note, setNote] = useState([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const [noteEditId, setNoteEditId] = useState(null)
  const [editNoteTitle, setEditNoteTitle] = useState("")
  const [editNoteText, setEditNoteText] = useState("")
  const [preSelectedFilter, setPreSelectedFilter] = useState("")

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
      color: "noColor subject-card"
    }
    setNote([newNote, ...note])
    setText("")
    setTitle("")
    setPreSelectedFilter(tryThis)
  }

  React.useEffect(()=>{
    const getLocal = localStorage.getItem("mySubjects")
    const savedNotes = JSON.parse(getLocal)
    if(savedNotes){
      setNote(savedNotes)
    }
  },[])

  React.useEffect(()=>{
    const setLocal = JSON.stringify(note)
    localStorage.setItem("mySubjects", setLocal)
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
      if(note.id === id.id){
        note.title = editNoteTitle
      }
      // if (editNoteText === ""){
      //   note.text = note.text
      // } else
      if(note.id === id.id){
        note.text = editNoteText
      }
      
      
      // if(note.id ===id){
        //   note.id = new Date().getTime()
        // }
        return note
      })
      
      setNote(editNotes)
      // setEditNoteTitle(choseSubject)
      setChosenSubject(editNoteTitle)
      
      setNoteEditId(null)
      setSelected(null)

      const arrange = [...note].sort((a,b)=>{
        return b.date - a.date
      })

      setNote(arrange)
      }

    
    
        function fixText(id){
          const fixingText = [...note].map((note)=>{
            if(note.id === id){
              note.date = new Date().getTime()
            }
          })
        }

        const [main, setMain] = useState(true)
        const [pass, setPass] = useState(false)
        const [whoa, setWhoa] = useState(false)

        
        
          let filterSubjects = []

          
          function expand(){
            setMain(false)
          setPass(false)
          console.log(main)
          setWhoa(true)
        }

        
        function filter(id){
        setChosenSubject(id.title)
        setMain(false)
        setPass(true)
        setWhoa(false)

        
        const newDate = [...note].map((note)=>{
          id.date = new Date().getTime()
        })
        setNote(newDate)
        const arrange = [...note].sort((a,b)=>{
        return b.date - a.date
        })
        fixText(id.filter)
        setNote(arrange)
        console.log(newDate)
      }

      
      console.log(note)
      
      function setting(){
        setMain(true)
        setEditNoteTitle(note.title)
          setNoteToShow("all")

      }

      function subjectArrange(id){
            const newDate = [...note].map((note)=>{
          id.date = new Date().getTime()
        })
                const arrange = [...note].sort((a,b)=>{
        return b.date - a.date
        })
          fixText(id.filter)
        setNote(arrange)
      }

        if(pass === true){
          filterSubjects = note.filter(notes => notes.title === choseSubject)
        } else{
          filterSubjects = note
        }
      console.log(filterSubjects)


//!
    function noColor(id){
      const toggleCompleted = [...note].map((note)=>{
        if(note.id === id){
          note.color = "noColor subject-card"
        }
        return note
      })
      setNote(toggleCompleted)
      
    }
    function toggleComplete(id){
      const toggleCompleted = [...note].map((note)=>{
        if(note.id === id){
          note.color = "red subject-card"
        }
        return note
      })
      setNote(toggleCompleted)
    }
    function toggleComplete2(id){
      const toggleCompleted2 = [...note].map((note)=>{
        if(note.id === id){
          note.color = "blue subject-card"
        }
        return note
      })
      setNote(toggleCompleted2)
    }
    function toggleComplete3(id){
      const toggleCompleted3 = [...note].map((note)=>{
        if(note.id === id){
          note.color = "yellow subject-card"
        }
        return note
      })
      setNote(toggleCompleted3)
    }
    function toggleComplete4(id){
      const toggleCompleted4 = [...note].map((note)=>{
        if(note.id === id){
          note.color = "green subject-card"
        }
        return note
      })
      setNote(toggleCompleted4)
    }
    function toggleComplete5(id){
      const toggleCompleted5 = [...note].map((note)=>{
        if(note.id === id){
          note.color = "purple subject-card"
        }
        return note
      })
      setNote(toggleCompleted5)
    }
    function toggleComplete6(id){
      const toggleCompleted6 = [...note].map((note)=>{
        if(note.id === id){
          note.color = "pink subject-card"
        }
        return note
      })
      setNote(toggleCompleted6)
    }


    const [selected, setSelected] = useState("123")






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
        red = note.filter(note => note.color ==="red subject-card")
        blue = note.filter(note => note.color === "blue subject-card")
        yellow = note.filter(note => note.color === "yellow subject-card")
        green = note.filter(note => note.color === "green subject-card")
        purple = note.filter(note => note.color === "purple subject-card")
        pink = note.filter(note => note.color === "pink subject-card")
        unmarked = note.filter(note => note.color === "noColor subject-card")
        filteredNotesByColor =  [...unmarked,...red,...blue,...yellow,...green,...purple,...pink]
        filteredNotesByTime =  [note]
        

        
        if(sorting ==="time"){
          filteredNotes = note
        } else if (sorting=== "color"){
          filteredNotes = filteredNotesByColor
        }
      } else if ( noteToShow ==="red"){
        console.log("filtered")
        filteredNotes = note.filter(note => note.color ==="red subject-card")
      } 
      else if( noteToShow === "blue"){
        filteredNotes = note.filter(note => note.color === "blue subject-card")
      }
      else if( noteToShow === "yellow"){
        filteredNotes = note.filter(note => note.color === "yellow subject-card")
      }
      else if( noteToShow === "green"){
        filteredNotes = note.filter(note => note.color === "green subject-card")
      }
      else if( noteToShow === "purple"){
        filteredNotes = note.filter(note => note.color === "purple subject-card")
      }
      else if( noteToShow === "pink"){
        filteredNotes = note.filter(note => note.color === "pink subject-card" )
      }
      else if( noteToShow === "unmarked"){
        filteredNotes = note.filter(note => note.color === "noColor subject-card")
      }

console.log(filteredNotes)


  return (
    <div className='subject'>
      <form className='subject-form' onSubmit={addNote}>
        <input className='subject-input' type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button className='subject-button' type='submit'>+</button>
      </form>

      {
        main ? 
        <div>

              <select className='main-select' onChange={(e)=>{
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
                </div>
        :
        ""
      }
    {main ?
    <div>
      <button onClick={expand} className="expand" >Expand all</button>
      <h3 className='your-notes'>Your Notes:</h3>

      {filteredNotes.map((note)=>(
        <div className='main-view' key={note.id}>
          <div  className={note.color} >
            <button className='subject-title'  onClick={(e)=>filter(note)} >
              {note.title}
            </button>
            <div className="subject-options-gone">
              <button className='no-color' onClick={() =>   noColor(note.id)} ></button>
              <button className='red-color' onClick={() =>   toggleComplete(note.id)} ></button>
              <button className='blue-color' onClick={() => toggleComplete2(note.id)} ></button>
              <button className='yellow-color' onClick={() =>   toggleComplete3(note.id)} ></button>
              <button className='green-color' onClick={() => toggleComplete4(note.id)} ></button>
              <button className='purple-color' onClick={() =>   toggleComplete5(note.id)} ></button>
              <button className='pink-color' onClick={() => toggleComplete6(note.id)} ></button>
            <button className='delete-x' onClick={(e)=> deleteNote(note.id)} >X</button>
            </div>
          </div>
        </div>
        ))}
    </div>
        :
        <div className="App">
      {/* <form className='form' onSubmit={addNote}>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type='submit'>ADD</button>

      </form> */}
            {
        whoa ? 
        <div>

              <select className='main-select' onChange={(e)=>{
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
                </div>
                : 
                ""
      }
      <button type='submit' className='main' onClick={(e)=> setting(note)}>Main</button>
      {/* <form className='form' onSubmit={addSubject}>
        <input type='text' value={subjectText} onChange={(e) => setSubjectText(e.target.value)}/>
        <button type='submit'>ADD</button>
        
      </form> */}
      {/* <SubjectList
        subjects={subjects}
        deleteSubject={deleteSubject}
        subjectEdit={subjectEdit}
        setEditSubjectTitle={setEditSubjectTitle}
        editTitleId={editTitleId}
        setEditTitleId={setEditTitleId}
        fixText={fixText}
      /> */}
      <h3 className='your-notes'>Your Notes:</h3>
      <SubjectList 
        note={note}
        addNote={addNote}
        key={note.id}
        setNote={setNote}
        deleteNote = {deleteNote}
        editNote={editNote}
        setNoteEditId={setNoteEditId}
        noteEditId={noteEditId}
        // setEditNoteText={setEditNoteText}
        setEditNoteTitle={setEditNoteTitle}
        editNoteTitle={editNoteTitle}
        fixText={fixText}
        filterSubjects={filterSubjects}
        choseSubject={choseSubject}
        toggleComplete={toggleComplete}
        toggleComplete2={toggleComplete2}
        toggleComplete3={toggleComplete3}
        toggleComplete4={toggleComplete4}
        toggleComplete5={toggleComplete5}
        toggleComplete6={toggleComplete6}
        noColor={noColor}
        selected={selected}
        setSelected={setSelected}
        subjectArrange={subjectArrange}
        filteredNotes={filteredNotes}
        whoa={whoa}
        />
    </div>
      }
        </div>
  );
}

export default App;

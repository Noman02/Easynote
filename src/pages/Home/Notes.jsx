// import { collection, getDocs } from "firebase/firestore"
// import { useEffect, useState } from "react"
// import { Button, Card } from "react-bootstrap"
// import { db } from "../../Firebase/firebase-config"


// const Notes = () => {
//   const [notes,setNotes]=useState([])
//   console.log(notes)
//   const notRef= collection(db, "notes")

//   useEffect(()=>{
//     const getNotes= async ()=>{
//       const data= await getDocs(notRef)
//       setNotes(data.docs.map(docs=>({...docs.data(), id: docs.id})))
//     }
//     getNotes()
//   },[])

//   const handleChange=(e)=>{
//     const name= e.target.name;
//     const value= e.target.value;
//     setNotes({...notes, [name]: value})
//   }

//   const handleSubmit =(e)=>{
//     e.preventDefault()
    
//   } 

//   return (
   
//   )
// }

// export default Notes
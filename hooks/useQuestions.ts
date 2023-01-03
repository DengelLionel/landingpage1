import { questions } from "../user/data"
import { useContext } from "react"
import { LandingContext } from "../context/Landing"
export const useQuestions=()=>{
    const {idd}=useContext(LandingContext)
    const HandleId=()=>{
           
        questions?.map((question:any)=>{
          console.log("idd",idd.id,idd.state)
          if(question.id===idd.id){
            
            question.state=idd.state
          
          }else{
            question.state=false
          }
            
         
      })
     
      }
      return{HandleId}
}
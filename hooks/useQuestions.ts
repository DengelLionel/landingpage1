import { questions } from "../user/data"
import { useContext } from "react"
import { LandingContext } from "../context/Landing"
export const useQuestions=()=>{
    const {idd}=useContext(LandingContext)
    const HandleId=()=>{
           
        questions?.map((question:any)=>{
        
          if(question.id===idd.id){
            
            question.state=idd.state
          
          }else{
            question.state=false
          }
            
         
      })
     
      }
      return{HandleId}
}
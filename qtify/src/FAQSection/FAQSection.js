import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FAQSection.module.css';
import { v4 as uuidv4 } from 'uuid';
//import { fontFamily, fontSize, height } from '@mui/system';



export default function FAQSection() {

const [faqData, setFaqData] = useState([]);

const performApiCall = async()=>{
    try{
    let response = await axios.get('https://qtify-backend.labs.crio.do/faq');
    setFaqData(response.data.data);
    }catch(err){
        console.log(err.response.data);
    }
}

useEffect(()=>{
    performApiCall();
},[])

  return (
    <div className={styles.FAQdiv}>
        <h1>FAQs</h1>
      <div>
        {faqData.map((eachQ)=>{
            return (<div key={uuidv4()} className={styles.eachQuestion}>
        <Accordion sx={{marginBottom: '16px', backgroundColor: 'transparent', '& .MuiTypography-root': {fontSize: '20px', fontFamily: 'Poppins'}}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: '#34C94B', height: '40px', width: '40px'}} />}
          id={eachQ.question}
          sx={{backgroundColor: '#121212', 
            color: '#ffffff', 
            border: '1px solid white', 
            borderRadius: '10px',
            }}
        >
          <Typography component="span">{eachQ.question}</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{backgroundColor: '#ffffff', 
        color: '#121212', 
        borderRadius: '10px',
        fontFamily: 'Poppins',
        fontSize: '18px'
        }}>
         {eachQ.answer}
        </AccordionDetails>
      </Accordion></div>)
        })}
      
      </div>
    </div>
  );
}
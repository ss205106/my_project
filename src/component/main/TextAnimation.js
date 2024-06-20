import React, { useEffect, useState } from 'react';
import "../../css/TextAnimation.css"
const TextAnimation = ({text}) => {
    const [blogTitle, setBlogTitle] = useState('');
    const [count, setCount] = useState(0);
    const[ completionWord,setcompletionWord] =useState(text);
  
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
          if(blogTitle ===text){
            setcompletionWord("front-end developer")
          }else{
            setcompletionWord(text)
          }
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });
    return (
        <div className="text-animation">

            <h2>{blogTitle}<span></span></h2>
        </div>
    );
};

export default TextAnimation;
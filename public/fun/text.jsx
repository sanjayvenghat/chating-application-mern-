export function display(interval,displayText,setDisplayText)
{
    const text = "weelcome to the chatting website to make new friends and make touch";
    let index = 0;

     interval = setInterval(() => {
        setDisplayText(prev => prev + text[index]);
        index += 1;

        if (index === text.length-1) {
            clearInterval(interval);
        }
    }, 200);  
    return interval
    
} 
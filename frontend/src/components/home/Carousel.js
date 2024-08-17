import React, { useState, useEffect } from 'react';
import './carousel.css';

function Carousel() {
    const [text, setText] = useState('');
    const fullText = '  Medicinal and Aromatic Plant - Portal';
    const typingSpeed = 80; // Speed in milliseconds

    useEffect(() => {
        let index = 0;

        const type = () => {
            if (index < fullText.length) {
                setText(prev => {
                    // Only append characters if there are more left to show
                    return fullText.slice(0, index + 1);
                });
                index++;
                setTimeout(type, typingSpeed);
            }
        };

        type(); // Start typing effect
    }, []); // Empty dependency array ensures effect runs only once on mount

    return (
        <>
            <div className='carousel'>
                <div className='area'>
                    <h2 className='carousel-h2'>{text}</h2>
                    <p>ઔષધી અને સુગંધિત વનસ્પતિઓ પરંપરાગત અને આધુનિક ચિકિત્સામાં મહત્વપૂર્ણ છે, જે પ્રાકૃતિક
                        ઉપચારો અને સુગંધમાંની આપત્તિઓને દૂર કરવામાં આવે છે. આવી વનસ્પતિઓ વિવિધ રોગોને
                        મોકલવામાં આવે છે અને શાંતિને સુધારે છે. આ વનસ્પતિઓ ઔષધીપદાર્થો, કોઝમેટિક્સ, અને
                        રસોઇના ઉપયોગમાં યોગદાન આપે છે, આહેવામાં તેમનો આદરણીય મહત્વ છે.</p>
                </div>
                <div className='dark-overlay'></div>
                <div className='cr-img1'><img src='./2.jpg' alt='bg' /></div>
            </div>
        </>
    );
}

export default Carousel;
